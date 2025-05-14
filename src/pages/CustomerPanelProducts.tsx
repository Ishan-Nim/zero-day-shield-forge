
import React, { useState } from 'react';
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

const CustomerPanelProducts: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 'web-app-scanner',
      name: 'Web App Vulnerability Scanner',
      description: 'Automated security testing for web applications',
      status: 'active',
      icon: Shield,
      lastScan: '2023-05-12',
      nextScan: '2023-05-19',
    },
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      description: 'Manual security assessment by experts',
      status: 'inactive',
      icon: Zap,
      lastScan: '-',
      nextScan: '-',
    },
    {
      id: 'plugin-development',
      name: 'Security Plugin Development',
      description: 'Custom security plugins for your platform',
      status: 'inactive',
      icon: Code,
      lastScan: '-',
      nextScan: '-',
    },
    {
      id: 'data-protection',
      name: 'Data Protection Service',
      description: 'End-to-end encryption and data security',
      status: 'inactive',
      icon: Lock,
      lastScan: '-',
      nextScan: '-',
    },
    {
      id: 'compliance',
      name: 'Compliance Solutions',
      description: 'Meet industry regulations and standards',
      status: 'inactive',
      icon: FileText,
      lastScan: '-',
      nextScan: '-',
    },
  ]);

  const toggleProductStatus = (productId: string) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const newStatus = product.status === 'active' ? 'inactive' : 'active';
        return {
          ...product,
          status: newStatus,
          nextScan: newStatus === 'active' ? getNextScanDate() : '-',
        };
      }
      return product;
    }));
  };

  const getNextScanDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split('T')[0];
  };

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
            <CardTitle>Your Products</CardTitle>
            <CardDescription>Activate or manage your security products</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4 hidden md:table-cell">Description</th>
                    <th className="text-left p-4 hidden lg:table-cell">Last Scan</th>
                    <th className="text-left p-4 hidden lg:table-cell">Next Scan</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-right p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="bg-cyber-primary/10 p-2 rounded-full mr-3">
                            <product.icon className="h-5 w-5 text-cyber-primary" />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-sm text-gray-600">
                        {product.description}
                      </td>
                      <td className="p-4 hidden lg:table-cell">{product.lastScan}</td>
                      <td className="p-4 hidden lg:table-cell">{product.nextScan}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${product.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className={product.status === 'active' ? 'text-green-600 font-medium' : 'text-gray-500'}>
                            {product.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end space-x-4">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id={`activate-${product.id}`} 
                              checked={product.status === 'active'}
                              onCheckedChange={() => toggleProductStatus(product.id)}
                            />
                            <Label htmlFor={`activate-${product.id}`} className="hidden sm:block">
                              {product.status === 'active' ? 'Activated' : 'Activate'}
                            </Label>
                          </div>
                          
                          {product.status === 'active' && (
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
                                    <Input id="email-alerts" defaultValue="user@example.com" className="col-span-3" />
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
                  ))}
                </tbody>
              </table>
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
