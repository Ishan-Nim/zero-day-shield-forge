
// PayHere payment gateway utilities
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

// PayHere interface
declare global {
  interface Window {
    payhere: any;
  }
}

// PayHere payment configuration types
export interface PayHerePaymentConfig {
  sandbox: boolean;
  merchant_id: string;
  return_url?: string;
  cancel_url?: string;
  notify_url: string;
  order_id: string;
  items: string;
  amount: string;
  currency: string;
  hash: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  delivery_address?: string;
  delivery_city?: string;
  delivery_country?: string;
  custom_1?: string;
  custom_2?: string;
}

// Initialize PayHere script
export const initializePayHere = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if PayHere is already loaded
    if (window.payhere) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.payhere.lk/lib/payhere.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = (error) => reject(new Error('Failed to load PayHere script'));
    
    document.head.appendChild(script);
  });
};

// Process payment with PayHere
export const processPayHerePayment = async (
  order: any,
  user: any,
  onSuccess: (orderId: string) => void
): Promise<void> => {
  try {
    await initializePayHere();

    if (!window.payhere) {
      throw new Error('PayHere script not loaded');
    }
    
    // Get the hash from server
    const { data: hashData, error: hashError } = await supabase.functions.invoke('generate-payhere-hash', {
      body: {
        order_id: order.id,
        amount: order.total.toFixed(2),
        currency: 'LKR' // Or use a dynamic currency from your order
      }
    });
    
    if (hashError || !hashData?.hash) {
      console.error('Error generating PayHere hash:', hashError);
      throw new Error('Failed to generate payment hash');
    }

    // Set up PayHere event handlers
    window.payhere.onCompleted = function(orderId: string) {
      console.log("Payment completed. OrderID:" + orderId);
      onSuccess(orderId);
    };

    window.payhere.onDismissed = function() {
      console.log("Payment dismissed");
      toast({
        title: "Payment cancelled",
        description: "You have cancelled the payment process.",
        variant: "default"
      });
    };

    window.payhere.onError = function(error: any) {
      console.error("PayHere Error:", error);
      toast({
        title: "Payment error",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    };

    // Configure the payment
    const payment: PayHerePaymentConfig = {
      sandbox: true, // Set to false in production
      merchant_id: "1219248", // Replace with your actual Merchant ID
      return_url: window.location.origin + "/customer-panel/invoices",
      cancel_url: window.location.origin + "/customer-panel/invoices",
      notify_url: "https://pqalojdhgapnjnzulvas.supabase.co/functions/v1/payhere-notification",
      order_id: order.id,
      items: `Order #${order.id.substring(0, 8).toUpperCase()}`,
      amount: order.total.toFixed(2),
      currency: "LKR", // Or use a dynamic currency
      hash: hashData.hash,
      first_name: user.user_metadata?.full_name?.split(' ')[0] || 'Customer',
      last_name: user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
      email: user.email || '',
      phone: user.user_metadata?.phone || '',
      address: user.user_metadata?.address || 'Not provided',
      city: user.user_metadata?.city || 'Not provided',
      country: user.user_metadata?.country || 'Sri Lanka',
      custom_1: String(user.id),
      custom_2: JSON.stringify({
        items_count: order.order_items.length,
        has_subscription: order.order_items.some((item: any) => item.products.is_subscription)
      })
    };

    // Start the payment
    window.payhere.startPayment(payment);
    
  } catch (error) {
    console.error('PayHere payment error:', error);
    toast({
      title: "Payment initialization failed",
      description: "Could not initialize the payment gateway. Please try again later.",
      variant: "destructive"
    });
  }
};
