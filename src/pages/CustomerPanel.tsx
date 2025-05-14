
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Shield, Zap, Code, Lock, FileText } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
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
];

const CustomerPanel: React.FC = () => {
  const [userProducts, setUserProducts] = useState(products);

  const toggleProductStatus = (productId: string) => {
    setUserProducts(userProducts.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          status: product.status === 'active' ? 'inactive' : 'active',
          nextScan: product.status === 'inactive' ? getNextScanDate() : '-',
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Customer Panel</h1>
            <p className="text-gray-600">Manage your security products and subscriptions</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Your Products</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Last Scan</TableHead>
                      <TableHead>Next Scan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="bg-cyber-primary/10 p-2 rounded-full mr-3">
                              <product.icon className="h-5 w-5 text-cyber-primary" />
                            </div>
                            {product.name}
                          </div>
                        </TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.lastScan}</TableCell>
                        <TableCell>{product.nextScan}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${product.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            <span className={product.status === 'active' ? 'text-green-600 font-medium' : 'text-gray-500'}>
                              {product.status === 'active' ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`activate-${product.id}`} 
                                checked={product.status === 'active'}
                                onCheckedChange={() => toggleProductStatus(product.id)}
                              />
                              <Label htmlFor={`activate-${product.id}`}>
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
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
            
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Billing Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-3">Current Subscription</h3>
                  <div className="bg-cyber-primary/5 border border-cyber-primary/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span>Plan:</span>
                      <span className="font-medium">Professional</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Billing Cycle:</span>
                      <span className="font-medium">Monthly</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Next Payment:</span>
                      <span className="font-medium">June 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-medium">$99.00</span>
                    </div>
                  </div>
                  <div className="mt-4 space-x-3">
                    <Button variant="outline">Update Payment Method</Button>
                    <Button variant="outline">View Invoices</Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Plan Options</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Basic</h4>
                          <p className="text-sm text-gray-600">For small websites and applications</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$49</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 border-cyber-primary rounded-lg p-4 bg-cyber-primary/5 relative">
                      <div className="absolute top-0 right-0 bg-cyber-primary text-white text-xs px-2 py-1 rounded-bl rounded-tr">
                        Current Plan
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Professional</h4>
                          <p className="text-sm text-gray-600">For medium-sized businesses</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$99</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Enterprise</h4>
                          <p className="text-sm text-gray-600">For large organizations</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$249</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Activity History</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-2 rounded-full mr-4">
                    <Shield className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">Web App Scanner completed scan</h4>
                      <span className="text-xs text-gray-500 ml-2">May 12, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600">Found 3 low severity issues. No critical vulnerabilities detected.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-2 rounded-full mr-4">
                    <Shield className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">Web App Scanner started scan</h4>
                      <span className="text-xs text-gray-500 ml-2">May 12, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600">Scanning domain: example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-2 rounded-full mr-4">
                    <Lock className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">Subscription activated</h4>
                      <span className="text-xs text-gray-500 ml-2">May 10, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600">Professional Plan subscription activated successfully.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomerPanel;
