
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Pencil, 
  Trash2,
  AlertCircle
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import AdminPanelLayout from '@/components/AdminPanelLayout';

const ProductsManagement: React.FC = () => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // New product form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    is_subscription: false,
    active: true,
    image_url: ''
  });
  
  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (error) throw error;
        
        setIsAdmin(data ? true : false);
        
        if (!data) {
          toast({
            title: "Access Denied",
            description: "You don't have admin privileges.",
            variant: "destructive"
          });
          navigate('/');
        }
      } catch (error: any) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      }
    };
    
    checkAdminStatus();
  }, [user, navigate]);
  
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        setProducts(data || []);
      } catch (error: any) {
        console.error("Error fetching products:", error);
        toast({
          title: "Error",
          description: "Failed to load products.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isAdmin) {
      fetchProducts();
    }
  }, [isAdmin]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleAddProduct = async () => {
    try {
      setIsSubmitting(true);
      
      // Convert price to number
      const productData = {
        ...formData,
        price: parseFloat(formData.price)
      };
      
      const { data, error } = await supabase
        .from('products')
        .insert([productData])
        .select();
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Product added successfully",
      });
      
      // Reset form and refresh products
      setFormData({
        name: '',
        description: '',
        price: '',
        is_subscription: false,
        active: true,
        image_url: ''
      });
      
      // Add new product to the list
      if (data && data.length > 0) {
        setProducts(prev => [data[0], ...prev]);
      }
    } catch (error: any) {
      console.error("Error adding product:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add product.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleEditStart = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      price: String(product.price),
      is_subscription: product.is_subscription || false,
      active: product.active !== false,
      image_url: product.image_url || ''
    });
  };
  
  const handleUpdateProduct = async () => {
    if (!editingProduct) return;
    
    try {
      setIsSubmitting(true);
      
      // Convert price to number
      const productData = {
        ...formData,
        price: parseFloat(formData.price)
      };
      
      const { data, error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', editingProduct.id)
        .select();
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Product updated successfully",
      });
      
      // Update product in the list
      if (data && data.length > 0) {
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? data[0] : p));
      }
      
      // Reset editing state
      setEditingProduct(null);
    } catch (error: any) {
      console.error("Error updating product:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to update product.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDeleteProduct = async (productId: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      
      // Remove product from the list
      setProducts(prev => prev.filter(p => p.id !== productId));
    } catch (error: any) {
      console.error("Error deleting product:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete product.",
        variant: "destructive"
      });
    }
  };
  
  if (!isAdmin) {
    return null;
  }
  
  if (isLoading) {
    return (
      <AdminPanelLayout>
        <div className="flex justify-center items-center h-64">
          <p>Loading products...</p>
        </div>
      </AdminPanelLayout>
    );
  }
  
  return (
    <AdminPanelLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products Management</h1>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Create a new product for your customers to purchase.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price ($)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="description" className="text-right pt-2">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image_url" className="text-right">
                    Image URL
                  </Label>
                  <Input
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="text-right">Product Type</div>
                  <div className="flex items-center space-x-2 col-span-3">
                    <Switch
                      id="is_subscription"
                      checked={formData.is_subscription}
                      onCheckedChange={(checked) => handleSwitchChange('is_subscription', checked)}
                    />
                    <Label htmlFor="is_subscription">
                      {formData.is_subscription ? 'Subscription' : 'One-time purchase'}
                    </Label>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="text-right">Status</div>
                  <div className="flex items-center space-x-2 col-span-3">
                    <Switch
                      id="active"
                      checked={formData.active}
                      onCheckedChange={(checked) => handleSwitchChange('active', checked)}
                    />
                    <Label htmlFor="active">
                      {formData.active ? 'Active' : 'Inactive'}
                    </Label>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleAddProduct} 
                  disabled={!formData.name || !formData.price || isSubmitting}
                >
                  {isSubmitting ? 'Adding...' : 'Add Product'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-muted/30 rounded-lg">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Create your first product using the Add Product button.
            </p>
          </div>
        ) : (
          <Table>
            <TableCaption>List of all products available in the system.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    {product.is_subscription ? 'Subscription' : 'One-time'}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.active ? 'Active' : 'Inactive'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => handleEditStart(product)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Edit Product</DialogTitle>
                            <DialogDescription>
                              Update the details of this product.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="edit-name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="col-span-3"
                                required
                              />
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-price" className="text-right">
                                Price ($)
                              </Label>
                              <Input
                                id="edit-price"
                                name="price"
                                type="number"
                                step="0.01"
                                min="0"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="col-span-3"
                                required
                              />
                            </div>
                            
                            <div className="grid grid-cols-4 items-start gap-4">
                              <Label htmlFor="edit-description" className="text-right pt-2">
                                Description
                              </Label>
                              <Textarea
                                id="edit-description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="col-span-3"
                                rows={4}
                              />
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-image_url" className="text-right">
                                Image URL
                              </Label>
                              <Input
                                id="edit-image_url"
                                name="image_url"
                                value={formData.image_url}
                                onChange={handleInputChange}
                                className="col-span-3"
                                placeholder="https://example.com/image.jpg"
                              />
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <div className="text-right">Product Type</div>
                              <div className="flex items-center space-x-2 col-span-3">
                                <Switch
                                  id="edit-is_subscription"
                                  checked={formData.is_subscription}
                                  onCheckedChange={(checked) => handleSwitchChange('is_subscription', checked)}
                                />
                                <Label htmlFor="edit-is_subscription">
                                  {formData.is_subscription ? 'Subscription' : 'One-time purchase'}
                                </Label>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                              <div className="text-right">Status</div>
                              <div className="flex items-center space-x-2 col-span-3">
                                <Switch
                                  id="edit-active"
                                  checked={formData.active}
                                  onCheckedChange={(checked) => handleSwitchChange('active', checked)}
                                />
                                <Label htmlFor="edit-active">
                                  {formData.active ? 'Active' : 'Inactive'}
                                </Label>
                              </div>
                            </div>
                          </div>
                          
                          <DialogFooter>
                            <Button 
                              type="submit" 
                              onClick={handleUpdateProduct} 
                              disabled={!formData.name || !formData.price || isSubmitting}
                            >
                              {isSubmitting ? 'Updating...' : 'Update Product'}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="destructive" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Deletion</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this product? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="gap-2 sm:justify-end">
                            <DialogTrigger asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogTrigger>
                            <Button 
                              variant="destructive" 
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
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

export default ProductsManagement;
