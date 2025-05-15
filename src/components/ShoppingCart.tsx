
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ShoppingCart,
  X,
  Trash2,
  PaypalIcon,
  CreditCard,
  Banknote
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Define cart item type
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  is_subscription?: boolean;
}

// Create context for cart
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  // Load cart from local storage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart from local storage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);
  
  // Save cart to local storage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (product: any) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if product already in cart
        return prevCart.map(item => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image_url: product.image_url,
          is_subscription: product.is_subscription
        };
        return [...prevCart, newItem];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };
  
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen,
    setIsOpen
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Cart Button Component
export const CartButton: React.FC = () => {
  const { cart, isOpen, setIsOpen } = useCart();
  
  // Calculate total number of items in cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-cyber-primary text-white rounded-full flex items-center justify-center font-medium">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <CartContent />
    </Sheet>
  );
};

// Cart Content Component
const CartContent: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, setIsOpen } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'payment'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card' | 'bank' | ''>('');
  
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );
  
  // Handle checkout process
  const handleCheckout = async () => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to complete your purchase.",
        variant: "destructive",
      });
      return;
    }
    
    if (cart.length === 0) {
      toast({
        title: "Empty cart",
        description: "Your cart is empty. Add some products first.",
        variant: "destructive",
      });
      return;
    }
    
    // Move to payment step
    setCheckoutStep('payment');
  };
  
  // Process payment
  const processPayment = async () => {
    if (!paymentMethod) {
      toast({
        title: "Payment method required",
        description: "Please select a payment method.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsProcessing(true);
      
      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user!.id,
          total: totalPrice,
          status: 'pending'
        })
        .select()
        .single();
      
      if (orderError) throw orderError;
      
      // Create order items
      const orderItems = cart.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price
      }));
      
      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);
      
      if (itemsError) throw itemsError;
      
      // Order successful
      toast({
        title: "Order placed successfully!",
        description: `Your order has been placed. Order #${order.id.substring(0, 8)}`,
        duration: 5000,
      });
      
      // Clear cart and close the drawer
      clearCart();
      setIsOpen(false);
      
    } catch (error: any) {
      console.error("Error processing order:", error);
      toast({
        title: "Error processing order",
        description: error.message || "An unknown error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Reset checkout step when cart changes
  useEffect(() => {
    setCheckoutStep('cart');
    setPaymentMethod('');
  }, [cart.length]);
  
  return (
    <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
      <SheetHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <SheetTitle>Shopping Cart</SheetTitle>
          {cart.length > 0 && checkoutStep === 'cart' && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-muted-foreground"
              onClick={clearCart}
            >
              Clear all
            </Button>
          )}
        </div>
      </SheetHeader>
      
      {checkoutStep === 'cart' ? (
        <>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Browse our products and add something to your cart.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map(item => (
                  <li key={item.id} className="flex items-start gap-3 py-3 border-b last:border-0">
                    {/* Product Image */}
                    <div className="h-16 w-16 rounded-md bg-muted overflow-hidden flex-shrink-0">
                      {item.image_url ? (
                        <img 
                          src={item.image_url} 
                          alt={item.name} 
                          className="h-full w-full object-cover" 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-100">
                          <Package className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-medium line-clamp-1 mb-1">{item.name}</h3>
                      <div className="flex items-center">
                        <p className="text-sm text-muted-foreground mr-2">
                          ${item.price}
                          {item.is_subscription && <span className="text-xs">/mo</span>}
                        </p>
                        
                        {/* Quantity Control */}
                        <div className="flex items-center border rounded-md ml-auto mr-2">
                          <button 
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 text-sm"
                          >
                            -
                          </button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-sm"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart Footer */}
          <div className="border-t pt-4 mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              className="w-full"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Checkout
            </Button>
          </div>
        </>
      ) : (
        /* Payment Step */
        <div className="flex flex-col h-full">
          <button
            onClick={() => setCheckoutStep('cart')}
            className="flex items-center text-sm text-muted-foreground mb-4 hover:text-foreground"
          >
            <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to cart
          </button>
          
          <div className="flex-1">
            <h3 className="font-medium mb-4">Select payment method</h3>
            
            <div className="space-y-3 mb-6">
              {/* PayPal */}
              <div
                className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
                  paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <div className="h-10 w-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11H15M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H9C7.89543 9 7 9.89543 7 11V15C7 16.1046 7.89543 17 9 17H15M15 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">PayPal</span>
                {paymentMethod === 'paypal' && (
                  <svg className="h-5 w-5 ml-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              
              {/* Credit Card */}
              <div
                className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="h-10 w-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3">
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="font-medium">Credit Card</span>
                {paymentMethod === 'card' && (
                  <svg className="h-5 w-5 ml-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              
              {/* Bank Transfer */}
              <div
                className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
                  paymentMethod === 'bank' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setPaymentMethod('bank')}
              >
                <div className="h-10 w-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mr-3">
                  <Banknote className="h-5 w-5" />
                </div>
                <span className="font-medium">Bank Transfer</span>
                {paymentMethod === 'bank' && (
                  <svg className="h-5 w-5 ml-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="rounded-lg bg-muted/50 p-4 mb-6">
              <h4 className="font-medium mb-2">Order Summary</h4>
              <ul className="space-y-2 text-sm mb-3">
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4 mt-auto">
            <Button
              className="w-full"
              onClick={processPayment}
              disabled={!paymentMethod || isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Complete Order'}
            </Button>
          </div>
        </div>
      )}
    </SheetContent>
  );
};

export default CartButton;
