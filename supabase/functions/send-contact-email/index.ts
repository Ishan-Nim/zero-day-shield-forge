
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "contact@zeroday.lk", // Use your verified domain here
      to: ["admin@zeroday.lk"],
      subject: `Contact Form: ${subject || 'New Contact Message'}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "contact@zeroday.lk", // Use your verified domain here
      to: [email],
      subject: "Thank you for contacting Zeroday",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>For reference, here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p>Best regards,<br>The Zeroday Team</p>
      `,
    });

    console.log("Emails sent:", { adminEmailResponse, userEmailResponse });
    
    // Check for errors in the responses
    const adminError = adminEmailResponse.error;
    const userError = userEmailResponse.error;
    
    if (adminError || userError) {
      console.error("Email sending errors:", { adminError, userError });
      throw new Error(adminError?.message || userError?.message || "Failed to send emails");
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Your message has been sent successfully!"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error sending contact emails:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send your message. Please try again later." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
