
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, ShieldAlert } from 'lucide-react';
import CustomerDeliveries from '@/components/CustomerDeliveries';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const InvoiceViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [order, setOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
      return;
    }

    const fetchOrder = async () => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select(`
            *,
            profiles:user_id (
              full_name,
              id
            ),
            order_items (
              id,
              quantity,
              price,
              products (
                id,
                name,
                description,
                price,
                is_subscription
              )
            )
          `)
          .eq('id', id)
          .single();

        if (error) throw error;

        // Verify the order belongs to the logged-in user
        if (data.user_id !== user.id) {
          throw new Error("You don't have permission to view this invoice");
        }

        setOrder(data);
      } catch (error: any) {
        console.error("Error fetching order:", error);
        toast({
          title: "Error",
          description: error.message || "Failed to load invoice.",
          variant: "destructive"
        });
        navigate('/customer-panel/invoices');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [id, user, navigate]);

  const generateInvoicePDF = async () => {
    if (!order) return;

    try {
      setIsGenerating(true);

      // Create new PDF document
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;

      // Add company logo/header
      doc.setFontSize(20);
      doc.setTextColor(0, 0, 139); // Dark blue color for header
      doc.text("ZeroDay.Security", 20, 20);
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100); // Gray color for subheader
      doc.text("Professional Cybersecurity Services", 20, 25);
      
      // Add horizontal line
      doc.setDrawColor(220, 220, 220); // Light gray
      doc.line(20, 30, pageWidth - 20, 30);
      
      // Invoice details
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0); // Black
      doc.text("INVOICE", 20, 40);
      
      doc.setFontSize(10);
      doc.text(`Invoice #: ${order.id.substring(0, 8).toUpperCase()}`, 20, 50);
      doc.text(`Date: ${new Date(order.created_at).toLocaleDateString()}`, 20, 55);
      doc.text(`Status: ${order.payment_status || 'Paid'}`, 20, 60);
      
      // Customer info
      doc.text("Bill To:", 20, 70);
      doc.text(`${order.profiles?.full_name || 'Customer'}`, 20, 75);
      
      // Items table
      const tableColumn = ["Product", "Quantity", "Unit Price", "Total"];
      const tableRows: any[][] = [];
      
      order.order_items.forEach((item: any) => {
        const itemData = [
          item.products.name,
          item.quantity,
          `$${item.price.toFixed(2)}`,
          `$${(item.price * item.quantity).toFixed(2)}`
        ];
        tableRows.push(itemData);
      });
      
      // @ts-ignore - jsPDF-AutoTable extension
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 85,
        theme: 'striped',
        headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
        margin: { left: 20, right: 20 },
      });
      
      // Total
      // @ts-ignore - Get the Y position after the table
      const finalY = (doc as any).lastAutoTable.finalY || 120;
      doc.setFontSize(12);
      doc.text(`Total Amount: $${order.total.toFixed(2)}`, pageWidth - 60, finalY + 20);
      
      // Footer
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Thank you for your business!", 20, finalY + 40);
      doc.text("For questions regarding this invoice, please contact support@zeroday.security", 20, finalY + 45);
      
      doc.setDrawColor(220, 220, 220);
      doc.line(20, finalY + 50, pageWidth - 20, finalY + 50);
      
      doc.setFontSize(8);
      doc.text("ZeroDay.Security - Professional Cybersecurity Services", pageWidth / 2, finalY + 55, { align: 'center' });

      // Save PDF
      doc.save(`Invoice-${order.id.substring(0, 8).toUpperCase()}.pdf`);
      
      toast({
        title: "Success",
        description: "Invoice downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate invoice PDF.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center">Loading invoice...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-center">
          <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
          <h1 className="text-2xl font-bold mb-2">Invoice Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested invoice could not be found or you don't have permission to view it.</p>
          <Button variant="outline" onClick={() => navigate('/customer-panel/invoices')}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Invoices
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Button variant="outline" onClick={() => navigate('/customer-panel/invoices')}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Invoices
          </Button>
        </div>
        <Button
          onClick={generateInvoicePDF}
          disabled={isGenerating}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? 'Generating PDF...' : 'Download Invoice'}
        </Button>
      </div>

      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        {/* Invoice Header */}
        <div className="p-6 border-b bg-muted/30">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-bold text-cyber-primary">ZeroDay.Security</h1>
              <p className="text-muted-foreground">Professional Cybersecurity Services</p>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <h2 className="text-xl font-semibold">INVOICE</h2>
              <p className="text-muted-foreground">{order.id.substring(0, 8).toUpperCase()}</p>
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Bill To:</h3>
            <p>{order.profiles?.full_name || 'Customer'}</p>
          </div>
          
          <div className="text-left md:text-right">
            <div className="mb-1">
              <span className="font-medium">Invoice Date: </span>
              <span>{new Date(order.created_at).toLocaleDateString()}</span>
            </div>
            <div className="mb-1">
              <span className="font-medium">Status: </span>
              <span className={
                order.payment_status === 'paid' ? 'text-green-600' : 
                order.payment_status === 'pending' ? 'text-amber-600' : 'text-blue-600'
              }>
                {order.payment_status || 'Paid'}
              </span>
            </div>
            <div>
              <span className="font-medium">Payment Method: </span>
              <span>{order.payment_method || 'Credit Card'}</span>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="px-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">Item</th>
                <th className="py-3 text-center">Quantity</th>
                <th className="py-3 text-right">Price</th>
                <th className="py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.order_items.map((item: any) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3">
                    <div className="font-medium">{item.products.name}</div>
                    {item.products.is_subscription && (
                      <span className="text-xs text-muted-foreground">Subscription</span>
                    )}
                  </td>
                  <td className="py-3 text-center">{item.quantity}</td>
                  <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                  <td className="py-3 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="p-6 bg-muted/10 border-t">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Digital Deliveries Section */}
      {order.is_delivered && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Digital Deliveries</h2>
          <CustomerDeliveries orderId={order.id} />
        </div>
      )}
    </div>
  );
};

export default InvoiceViewer;
