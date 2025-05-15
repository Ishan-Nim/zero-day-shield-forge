
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

serve(async (req) => {
  try {
    // Parse form data from PayHere notification
    const formData = await req.formData();
    
    // Extract payment notification parameters
    const merchant_id = formData.get('merchant_id') as string;
    const order_id = formData.get('order_id') as string;
    const payment_id = formData.get('payment_id') as string;
    const payhere_amount = formData.get('payhere_amount') as string;
    const payhere_currency = formData.get('payhere_currency') as string;
    const status_code = formData.get('status_code') as string;
    const md5sig = formData.get('md5sig') as string;
    const method = formData.get('method') as string;
    const status_message = formData.get('status_message') as string;
    
    // Card details if available
    const card_holder_name = formData.get('card_holder_name') as string;
    const card_no = formData.get('card_no') as string;
    const card_expiry = formData.get('card_expiry') as string;

    console.log("PayHere Notification received:", {
      order_id,
      payment_id,
      status_code,
      method
    });
    
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
    );
    
    // Get merchant secret from environment
    const merchant_secret = Deno.env.get("PAYHERE_MERCHANT_SECRET");
    
    if (!merchant_secret) {
      console.error("PayHere merchant secret not configured");
      return new Response("Configuration error", { status: 500 });
    }
    
    // Verify payment using md5sig
    // Calculate the local signature
    const secretHash = await crypto.subtle.digest(
      "MD5",
      new TextEncoder().encode(merchant_secret)
    );
    const secretHashHex = Array.from(new Uint8Array(secretHash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
    
    const combinedString = `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${secretHashHex}`;
    const hash = await crypto.subtle.digest(
      "MD5",
      new TextEncoder().encode(combinedString)
    );
    
    const localMd5sig = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
    
    // Verify the signature and status code
    if (localMd5sig === md5sig && status_code === "2") {
      // Payment is successful and verified
      // Update order status in database
      const { error: updateError } = await supabaseClient
        .from('orders')
        .update({
          payment_status: 'paid',
          payment_id: payment_id,
          payment_method: method,
          payment_details: {
            card_holder_name,
            card_no,
            card_expiry,
            status_message
          },
          updated_at: new Date().toISOString()
        })
        .eq('id', order_id);

      if (updateError) {
        console.error("Error updating order status:", updateError);
        return new Response("Database update failed", { status: 500 });
      }

      console.log("Payment verified and order updated successfully:", order_id);
      return new Response("OK", { status: 200 });
    } else {
      // Failed verification or unsuccessful payment
      console.error("Payment verification failed:", {
        localMd5sig,
        receivedMd5sig: md5sig,
        status_code
      });
      
      // Update the order with the failed status
      if (order_id) {
        const { error: updateError } = await supabaseClient
          .from('orders')
          .update({
            payment_status: status_code === "2" ? 'paid' : 
                             status_code === "0" ? 'pending' :
                             status_code === "-1" ? 'canceled' :
                             status_code === "-2" ? 'failed' :
                             status_code === "-3" ? 'chargedback' : 'unknown',
            payment_id: payment_id,
            payment_method: method,
            payment_details: {
              status_code,
              status_message,
              verification_failed: localMd5sig !== md5sig
            },
            updated_at: new Date().toISOString()
          })
          .eq('id', order_id);

        if (updateError) {
          console.error("Error updating order with failed status:", updateError);
        }
      }
      
      return new Response("Verification failed", { status: 400 });
    }
  } catch (error) {
    console.error("Error processing PayHere notification:", error);
    return new Response("Internal server error", { status: 500 });
  }
});
