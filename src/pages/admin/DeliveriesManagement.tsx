import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Send,
  Search,
  AlertCircle,
  CheckCircle,
  File,
  Link as LinkIcon,
  Key,
  Filter
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast';
import AdminPanelLayout from '@/components/AdminPanelLayout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { checkAdminStatus } from '@/utils/adminUtils';
import { Badge } from '@/components/ui/badge';

const DeliveriesManagement: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [pendingOrders, setPendingOrders] = useState<any[]>([]);
  const [deliveredOrders, setDeliveredOrders] = useState<any[]>([]);
  const [productKeys, setProductKeys] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<'pending' | 'delivered'>('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Selected order and delivery form
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [deliveryForm, setDeliveryForm] = useState({
    deliveryType: 'key',
    content: '',
    notes: '',
    selectedKeyId: '',
  });

  // Check if user is admin
  useEffect(() => {
    const verifyAdminStatus = async () => {
      if (!user) return;
      
      const isUserAdmin = await checkAdminStatus();
      setIsAdmin(isUserAdmin);
      
      if (!isUserAdmin) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive"
        });
        navigate('/');
      }
    };
    
    verifyAdminStatus();
  }, [user, navigate]);
  
  // Fetch orders with joined data
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Get all orders with customer and product info
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
              products (
                id,
                name,
                product_type
              )
            )
          `)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        // Process orders and split into pending vs delivered
        const allOrders = data || [];
        const pending = allOrders.filter(order => !order.is_delivered);
        const delivered = allOrders.filter(order => order.is_delivered);
        
        setOrders(allOrders);
        setPendingOrders(pending);
        setDeliveredOrders(delivered);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast({
          title: "Error",
          description: "Failed to load orders.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isAdmin) {
      fetchOrders();
    }
  }, [isAdmin]);
  
  // Handle delivery creation
  const handleCreateDelivery = async () => {
    if (!selectedOrder) return;
    
    try {
      setIsSubmitting(true);
      
      let content = deliveryForm.content;
      
      // If using a product key, get the key value
      if (deliveryForm.deliveryType === 'key' && deliveryForm.selectedKeyId) {
        const key = productKeys.find(k => k.id === deliveryForm.selectedKeyId);
        if (key) {
          content = key.key_value;
          
          // Mark the key as used
          await supabase
            .from('product_keys')
            .update({ is_used: true })
            .eq('id', deliveryForm.selectedKeyId);
        }
      }
      
      // Create the delivery record
      const { error: deliveryError } = await supabase
        .from('order_deliveries')
        .insert({
          order_id: selectedOrder.id,
          delivery_type: deliveryForm.deliveryType,
          content: content,
          notes: deliveryForm.notes,
          sent_by: user!.id
        });
      
      if (deliveryError) throw deliveryError;
      
      // Update the order status
      const { error: orderError } = await supabase
        .from('orders')
        .update({ 
          is_delivered: true,
          status: 'completed'
        })
        .eq('id', selectedOrder.id);
      
      if (orderError) throw orderError;
      
      toast({
        title: "Success",
        description: "Order delivered successfully.",
      });
      
      // Update local state
      const updatedOrder = { ...selectedOrder, is_delivered: true, status: 'completed' };
      setOrders(prev => prev.map(o => o.id === selectedOrder.id ? updatedOrder : o));
      setPendingOrders(prev => prev.filter(o => o.id !== selectedOrder.id));
      setDeliveredOrders(prev => [updatedOrder, ...prev]);
      
      // Reset form
      setSelectedOrder(null);
      setDeliveryForm({
        deliveryType: 'key',
        content: '',
        notes: '',
        selectedKeyId: ''
      });
      
    } catch (error: any) {
      console.error("Error creating delivery:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create delivery.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleOrderSelect = async (order: any) => {
    setSelectedOrder(order);
    
    // Reset the form
    setDeliveryForm({
      deliveryType: 'key',
      content: '',
      notes: '',
      selectedKeyId: ''
    });
    
    // For key-type products, load available keys
    const keyTypeProducts = order.order_items
      .filter((item: any) => item.products.product_type === 'key')
      .map((item: any) => item.products.id);
    
    if (keyTypeProducts.length > 0) {
      try {
        const { data, error } = await supabase
          .from('product_keys')
          .select('*')
          .in('product_id', keyTypeProducts)
          .eq('is_used', false);
        
        if (error) throw error;
        setProductKeys(data || []);
      } catch (error) {
        console.error("Error fetching product keys:", error);
        setProductKeys([]);
      }
    } else {
      setProductKeys([]);
    }
  };
  
  const handleDeliveryFormChange = (field: string, value: string) => {
    setDeliveryForm(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Filter displayed orders
  const displayedOrders = filterType === 'pending' ? pendingOrders : deliveredOrders;
  
  // Apply search filter if needed
  const filteredOrders = searchTerm.trim() 
    ? displayedOrders.filter(order => {
        // Search by order ID, customer name, or product name
        const searchLower = searchTerm.toLowerCase();
        const orderIdMatches = order.id.toLowerCase().includes(searchLower);
        const customerMatches = order.profiles?.full_name?.toLowerCase().includes(searchLower);
        const productMatches = order.order_items.some((item: any) => 
          item.products?.name?.toLowerCase().includes(searchLower)
        );
        return orderIdMatches || customerMatches || productMatches;
      })
    : displayedOrders;
  
  if (!isAdmin) {
    return null;
  }
  
  if (isLoading) {
    return (
      <AdminPanelLayout>
        <div className="flex justify-center items-center h-64">
          <p>Loading orders...</p>
        </div>
      </AdminPanelLayout>
    );
  }
  
  return (
    <AdminPanelLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Order Deliveries</h1>
          
          <div className="flex items-center gap-4">
            {/* Search box */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter toggle */}
            <div className="flex items-center gap-2 border rounded-md overflow-hidden">
              <Button
                variant={filterType === 'pending' ? 'default' : 'ghost'}
                className="rounded-none"
                onClick={() => setFilterType('pending')}
              >
                Pending
              </Button>
              <Button
                variant={filterType === 'delivered' ? 'default' : 'ghost'}
                className="rounded-none"
                onClick={() => setFilterType('delivered')}
              >
                Delivered
              </Button>
            </div>
          </div>
        </div>
        
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-muted/30 rounded-lg">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No {filterType} orders found</h3>
            <p className="text-muted-foreground">
              {filterType === 'pending' 
                ? "All orders have been delivered to customers." 
                : "No delivered orders yet."}
            </p>
          </div>
        ) : (
          <Table>
            <TableCaption>
              {filterType === 'pending' ? 'Orders awaiting delivery' : 'Delivered orders'}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">
                    {order.id.substring(0, 8)}...
                  </TableCell>
                  <TableCell>
                    {order.profiles?.full_name || "Unknown Customer"}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {order.order_items.map((item: any) => (
                        <div key={item.id} className="flex items-center gap-1 text-sm">
                          <span>{item.products.name}</span>
                          {item.quantity > 1 && (
                            <Badge variant="outline" className="text-xs">
                              x{item.quantity}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(order.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={order.is_delivered ? "success" : "secondary"}>
                      {order.status || (order.is_delivered ? 'completed' : 'pending')}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {!order.is_delivered ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="default" 
                            size="sm" 
                            onClick={() => handleOrderSelect(order)}
                            className="flex items-center gap-1"
                          >
                            <Send className="h-3.5 w-3.5" />
                            Deliver
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Deliver Order</DialogTitle>
                            <DialogDescription>
                              Provide delivery details for this order.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="delivery-type" className="text-right">
                                Type
                              </Label>
                              <Select
                                value={deliveryForm.deliveryType}
                                onValueChange={(value) => handleDeliveryFormChange('deliveryType', value)}
                              >
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select delivery type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="key">Activation Key</SelectItem>
                                  <SelectItem value="file">File Attachment</SelectItem>
                                  <SelectItem value="link">Download Link</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            {/* Show product key selection for key delivery type */}
                            {deliveryForm.deliveryType === 'key' && productKeys.length > 0 && (
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="product-key" className="text-right">
                                  Product Key
                                </Label>
                                <Select
                                  value={deliveryForm.selectedKeyId}
                                  onValueChange={(value) => handleDeliveryFormChange('selectedKeyId', value)}
                                >
                                  <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select an unused key" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {productKeys.map(key => (
                                      <SelectItem key={key.id} value={key.id}>
                                        {key.key_value}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                            
                            {/* Show content field for non-key delivery or when no keys available */}
                            {(deliveryForm.deliveryType !== 'key' || productKeys.length === 0) && (
                              <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="content" className="text-right pt-2">
                                  Content
                                </Label>
                                <Textarea
                                  id="content"
                                  value={deliveryForm.content}
                                  onChange={(e) => handleDeliveryFormChange('content', e.target.value)}
                                  className="col-span-3"
                                  placeholder={
                                    deliveryForm.deliveryType === 'key' ? "Enter activation key" :
                                    deliveryForm.deliveryType === 'file' ? "Enter file information" :
                                    "Enter download URL"
                                  }
                                  rows={3}
                                />
                              </div>
                            )}
                            
                            <div className="grid grid-cols-4 items-start gap-4">
                              <Label htmlFor="notes" className="text-right pt-2">
                                Notes
                              </Label>
                              <Textarea
                                id="notes"
                                value={deliveryForm.notes}
                                onChange={(e) => handleDeliveryFormChange('notes', e.target.value)}
                                className="col-span-3"
                                placeholder="Additional information for the customer (optional)"
                                rows={2}
                              />
                            </div>
                          </div>
                          
                          <DialogFooter>
                            <Button
                              onClick={handleCreateDelivery}
                              disabled={
                                isSubmitting || 
                                (deliveryForm.deliveryType === 'key' && 
                                 productKeys.length > 0 && 
                                 !deliveryForm.selectedKeyId) ||
                                (deliveryForm.deliveryType !== 'key' && !deliveryForm.content) ||
                                (deliveryForm.deliveryType === 'key' && 
                                 productKeys.length === 0 && 
                                 !deliveryForm.content)
                              }
                            >
                              {isSubmitting ? 'Processing...' : 'Complete Delivery'}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Delivered
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </AdminPanelLayout>
  );
};

export default DeliveriesManagement;
