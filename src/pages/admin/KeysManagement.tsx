import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Key, 
  Plus, 
  Trash2,
  XCircle,
  CheckCircle,
  AlertCircle,
  FileText
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

const KeysManagement: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [keys, setKeys] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state for adding new keys
  const [formData, setFormData] = useState({
    productId: '',
    keys: '' // Multiple keys can be added at once, one per line
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
  
  // Fetch keys and products
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products first
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('product_type', 'key')
          .order('name');
        
        if (productsError) throw productsError;
        setProducts(productsData || []);
        
        // Fetch keys with product info
        const { data: keysData, error: keysError } = await supabase
          .from('product_keys')
          .select(`
            *,
            products (
              name
            )
          `)
          .order('created_at', { ascending: false });
        
        if (keysError) throw keysError;
        setKeys(keysData || []);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Failed to load keys data.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProductChange = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      productId
    }));
  };
  
  const handleAddKeys = async () => {
    if (!formData.productId || !formData.keys.trim()) {
      toast({
        title: "Missing information",
        description: "Please select a product and enter at least one key.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Split by newlines to get individual keys
      const keyList = formData.keys
        .split('\n')
        .map(key => key.trim())
        .filter(key => key !== '');
      
      if (keyList.length === 0) {
        toast({
          title: "No valid keys",
          description: "Please enter at least one valid key.",
          variant: "destructive"
        });
        return;
      }
      
      // Prepare data for insertion
      const keysToInsert = keyList.map(keyValue => ({
        product_id: formData.productId,
        key_value: keyValue,
        is_used: false
      }));
      
      const { data, error } = await supabase
        .from('product_keys')
        .insert(keysToInsert)
        .select();
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: `${keysToInsert.length} keys added successfully.`,
      });
      
      // Reset form
      setFormData({
        productId: '',
        keys: ''
      });
      
      // Add new keys to the list
      if (data && data.length > 0) {
        const productName = products.find(p => p.id === formData.productId)?.name || '';
        const newKeysWithProduct = data.map(key => ({
          ...key,
          products: { name: productName }
        }));
        
        setKeys(prev => [...newKeysWithProduct, ...prev]);
      }
    } catch (error: any) {
      console.error("Error adding keys:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add keys.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDeleteKey = async (keyId: string) => {
    try {
      const { error } = await supabase
        .from('product_keys')
        .delete()
        .eq('id', keyId);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Key deleted successfully.",
      });
      
      // Remove key from the list
      setKeys(prev => prev.filter(key => key.id !== keyId));
    } catch (error: any) {
      console.error("Error deleting key:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete key.",
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
          <p>Loading keys...</p>
        </div>
      </AdminPanelLayout>
    );
  }
  
  return (
    <AdminPanelLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Product Keys Management</h1>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add Keys
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Product Keys</DialogTitle>
                <DialogDescription>
                  Add activation keys for your digital products. Enter one key per line.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="productId" className="text-right">
                    Product
                  </Label>
                  <div className="col-span-3">
                    <Select
                      value={formData.productId}
                      onValueChange={handleProductChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map(product => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="keys" className="text-right pt-2">
                    Keys
                  </Label>
                  <Textarea
                    id="keys"
                    name="keys"
                    value={formData.keys}
                    onChange={handleInputChange}
                    className="col-span-3"
                    rows={6}
                    placeholder="Enter one key per line..."
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleAddKeys} 
                  disabled={!formData.productId || !formData.keys || isSubmitting}
                >
                  {isSubmitting ? 'Adding...' : 'Add Keys'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {keys.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-muted/30 rounded-lg">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No keys found</h3>
            <p className="text-muted-foreground">
              Add keys for your products using the Add Keys button.
            </p>
          </div>
        ) : (
          <Table>
            <TableCaption>List of all product keys in the system.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.products.name}</TableCell>
                  <TableCell>
                    <code className="bg-muted px-2 py-1 rounded">{key.key_value}</code>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${
                      key.is_used ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {key.is_used ? (
                        <>
                          <XCircle className="h-3 w-3 mr-1" />
                          Used
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Available
                        </>
                      )}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(key.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
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
                            Are you sure you want to delete this key? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="gap-2 sm:justify-end">
                          <DialogTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogTrigger>
                          <Button 
                            variant="destructive" 
                            onClick={() => handleDeleteKey(key.id)}
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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

export default KeysManagement;
