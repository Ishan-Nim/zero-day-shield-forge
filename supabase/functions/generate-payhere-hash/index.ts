
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface HashRequest {
  order_id: string;
  amount: string;
  currency: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_ANON_KEY") || ""
    );

    // Get request data
    const { order_id, amount, currency }: HashRequest = await req.json();
    
    // Validate input
    if (!order_id || !amount || !currency) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get merchant secret from environment variables
    const merchant_id = Deno.env.get("PAYHERE_MERCHANT_ID");
    const merchant_secret = Deno.env.get("PAYHERE_MERCHANT_SECRET");
    
    if (!merchant_id || !merchant_secret) {
      console.error("PayHere credentials not configured");
      return new Response(
        JSON.stringify({ error: "Payment gateway configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate hash for PayHere
    // hash = strtoupper(md5(merchant_id + order_id + amount + currency + strtoupper(md5(merchant_secret))))
    
    // First hash the merchant secret
    const secretHash = await crypto.subtle.digest(
      "MD5",
      new TextEncoder().encode(merchant_secret)
    );
    const secretHashHex = Array.from(new Uint8Array(secretHash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
    
    // Now hash the combined string
    const combinedString = `${merchant_id}${order_id}${amount}${currency}${secretHashHex}`;
    const hash = await crypto.subtle.digest(
      "MD5",
      new TextEncoder().encode(combinedString)
    );
    
    // Convert to hex string and uppercase
    const hashHex = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

    // Return the hash
    return new Response(
      JSON.stringify({ hash: hashHex, merchant_id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
    
  } catch (error) {
    console.error("Error generating PayHere hash:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate hash" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
