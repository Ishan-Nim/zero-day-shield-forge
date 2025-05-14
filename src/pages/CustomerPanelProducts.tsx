
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Code, 
  Lock, 
  FileText,
  Check
} from 'lucide-react';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const iconMap: Record<string, any> = {
  'Web App Scanner Basic': Shield,
  'Web App Scanner Pro': Shield,
  'Penetration Testing Package': Zap,
  'Security Audit': FileText,
  'Security Plugin Development': Code,
  'Data Protection Service': Lock,
};

const CustomerPanelProducts: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [products, setProducts] = useState<any[]>([]);
  const [userSubscriptions, setUserSubscriptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProducts();
      fetchUserSubscriptions();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('price');
      
      if (error) throw error;
      
      if (data) {
        setProducts(data);
      }
    } catch (error: any) {
      toast({
        title: 'Error fetching products',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserSubscriptions = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*, product:product_id(*)')
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      if (data) {
        setUserSubscriptions(data);
      }
    } catch (error: any) {
      toast({
        title: 'Error fetching subscriptions',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const toggleProductSubscription = async (product: any) => {
    if (!user) return;
    
    const existingSubscription = userSubscriptions.find(
      sub => sub.product_id === product.id && sub.status === 'active'
    );
    
    try {
      if (existingSubscription) {
        // Cancel subscription
        const { error } = await supabase
          .from('subscriptions')
          .update({ status: 'cancelled' })
          .eq('id', existingSubscription.id);
        
        if (error) throw error;
        
        toast({
          title: 'Subscription cancelled',
          description: `Your subscription to ${product.name} has been cancelled.`,
        });
      } else {
        // Create new subscription
        const { error } = await supabase
          .from('subscriptions')
          .insert({
            user_id: user.id,
            product_id: product.id,
            status: 'active',
            start_date: new Date().toISOString(),
          });
        
        if (error) throw error;
        
        toast({
          title: 'Subscription activated',
          description: `Your subscription to ${product.name} has been activated.`,
        });
      }
      
      // Refresh subscriptions
      await fetchUserSubscriptions();
    } catch (error: any) {
      toast({
        title: 'Error managing subscription',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const getIconForProduct = (productName: string) => {
    const IconComponent = iconMap[productName] || Shield;
    return IconComponent;
  };

  const isProductActive = (productId: string) => {
    return userSubscriptions.some(
      sub => sub.product_id === productId && sub.status === 'active'
    );
  };

  const getNextScanDate = (productId: string) => {
    const subscription = userSubscriptions.find(
      sub => sub.product_id === productId && sub.status === 'active'
    );
    
    if (subscription) {
      const startDate = new Date(subscription.start_date);
      const nextScan = new Date(startDate);
      nextScan.setDate(nextScan.getDate() + 7); // Assuming weekly scans
      return nextScan.toISOString().split('T')[0];
    }
    
    return '-';
  };

  if (isLoading) {
    return (
      <CustomerPanelLayout>
        <div className="flex items-center justify-center h-64">
          <p>Loading products...</p>
        </div>
      </CustomerPanelLayout>
    );
  }

  const subscriptionProducts = products.filter(p => p.is_subscription);
  const oneTimeProducts = products.filter(p => !p.is_subscription);

  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">My Products</h1>
          <p className="text-gray-600">Manage your security products and services.</p>
        </section>
        
        {/* Products List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Subscriptions</CardTitle>
            <CardDescription>Activate or manage your security subscriptions</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4 hidden md:table-cell">Description</th>
                    <th className="text-left p-4 hidden lg:table-cell">Price</th>
                    <th className="text-left p-4 hidden lg:table-cell">Next Scan</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-right p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionProducts.map((product) => {
                    const isActive = isProductActive(product.id);
                    const ProductIcon = getIconForProduct(product.name);
                    
                    return (
                      <tr key={product.id} className="border-b hover:bg-muted/50">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="bg-cyber-primary/10 p-2 rounded-full mr-3">
                              <ProductIcon className="h-5 w-5 text-cyber-primary" />
                            </div>
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="p-4 hidden md:table-cell text-sm text-gray-600">
                          {product.description}
                        </td>
                        <td className="p-4 hidden lg:table-cell">${product.price}/month</td>
                        <td className="p-4 hidden lg:table-cell">{isActive ? getNextScanDate(product.id) : '-'}</td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            <span className={isActive ? 'text-green-600 font-medium' : 'text-gray-500'}>
                              {isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`activate-${product.id}`} 
                                checked={isActive}
                                onCheckedChange={() => toggleProductSubscription(product)}
                              />
                              <Label htmlFor={`activate-${product.id}`} className="hidden sm:block">
                                {isActive ? 'Activated' : 'Activate'}
                              </Label>
                            </div>
                            
                            {isActive && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">Configure</Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Configure {product.name}</DialogTitle>
                                    <DialogDescription>
                                      Adjust settings for your {product.name} subscription.
                                    </DialogDescription>
                                  </DialogHeader>
                                  
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="scan-frequency" className="text-right">
                                        Scan Frequency
                                      </Label>
                                      <select 
                                        id="scan-frequency"
                                        className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                                      >
                                        <option value="weekly">Weekly</option>
                                        <option value="biweekly">Bi-weekly</option>
                                        <option value="monthly">Monthly</option>
                                      </select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="email-alerts" className="text-right">
                                        Email Alerts
                                      </Label>
                                      <Input id="email-alerts" defaultValue={user?.email || ""} className="col-span-3" />
                                    </div>
                                  </div>
                                  
                                  <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* One-time Products */}
        <Card>
          <CardHeader>
            <CardTitle>One-time Services</CardTitle>
            <CardDescription>Purchase security services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneTimeProducts.map(product => {
                const ProductIcon = getIconForProduct(product.name);
                return (
                  <Card key={product.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="bg-cyber-primary/10 p-3 rounded-full mr-3">
                          <ProductIcon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold mb-4">${product.price}</p>
                      <Button className="w-full">Purchase</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Available Add-ons */}
        <section className="pt-4">
          <h2 className="text-xl font-bold mb-4">Available Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add-on 1 */}
            <Card>
              <CardHeader>
                <CardTitle>API Security Testing</CardTitle>
                <CardDescription>Monitor and secure your API endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-4">
                  $29<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Automated API endpoint discovery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Authentication testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Vulnerability detection</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Subscription</Button>
              </CardFooter>
            </Card>
            
            {/* Add-on 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Malware Detection</CardTitle>
                <CardDescription>Identify and remove malicious code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-4">
                  $39<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Continuous malware scanning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Automatic removal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Blacklist monitoring</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Subscription</Button>
              </CardFooter>
            </Card>
            
            {/* Add-on 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Security Monitoring</CardTitle>
                <CardDescription>24/7 security incident monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-4">
                  $49<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Real-time alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Incident response</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Monthly security reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Subscription</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanelProducts;
