
import React, { useState } from 'react';
import { 
  CreditCard,
  Check,
  Calendar
} from 'lucide-react';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CustomerPanelSubscriptions: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('professional');
  
  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">Subscriptions</h1>
          <p className="text-gray-600">Manage your subscription plans and billing.</p>
        </section>
        
        {/* Current Subscription */}
        <Card className="border-cyber-primary/30 bg-cyber-primary/5">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Professional Plan</CardTitle>
                <CardDescription>Your current subscription</CardDescription>
              </div>
              <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Active
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Price</p>
                <p className="text-2xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Renewal Date</p>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="font-medium">June 15, 2023</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="font-medium">•••• 4242</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Update Payment Method</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Manage Subscription</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Manage Subscription</DialogTitle>
                  <DialogDescription>
                    Make changes to your subscription settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <div className="font-medium">Auto-renewal</div>
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-renewal" defaultChecked />
                      <Label htmlFor="auto-renewal">Enable auto-renewal</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your subscription will automatically renew on June 15, 2023
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium">Email notifications</div>
                    <div className="flex items-center space-x-2">
                      <Switch id="email-notifications" defaultChecked />
                      <Label htmlFor="email-notifications">Receive email reminders</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We'll send you reminders before your subscription renews
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="destructive">Cancel Subscription</Button>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
        
        {/* Available Plans */}
        <section>
          <h2 className="text-xl font-bold mb-4">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <Card className={currentPlan === 'basic' ? 'border-cyber-primary/30 bg-cyber-primary/5' : ''}>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For small websites</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  $49<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Weekly scans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Up to 100 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Basic vulnerability detection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Email reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={currentPlan === 'basic' ? 'outline' : 'default'} className="w-full">
                  {currentPlan === 'basic' ? 'Current Plan' : 'Downgrade'}
                </Button>
              </CardFooter>
            </Card>
            
            {/* Professional Plan */}
            <Card className={currentPlan === 'professional' ? 'border-cyber-primary/30 bg-cyber-primary/5 relative' : 'relative'}>
              {currentPlan === 'professional' && (
                <div className="absolute top-0 right-0 bg-cyber-primary text-white text-xs px-2 py-1 rounded-bl">Current Plan</div>
              )}
              <div className="absolute top-0 left-0 bg-cyber-accent text-white text-xs px-2 py-1 rounded-br">Popular</div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For medium businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Daily scans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Up to 500 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Advanced vulnerability detection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Customized reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>API access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={currentPlan === 'professional' ? 'outline' : 'default'} className="w-full">
                  {currentPlan === 'professional' ? 'Current Plan' : 'Select Plan'}
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className={currentPlan === 'enterprise' ? 'border-cyber-primary/30 bg-cyber-primary/5' : ''}>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  $249<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Continuous scans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Enterprise-grade security testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Dedicated security expert</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={currentPlan === 'enterprise' ? 'outline' : 'default'} className="w-full">
                  {currentPlan === 'enterprise' ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        {/* Billing History */}
        <section>
          <h2 className="text-xl font-bold mb-4">Billing History</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Description</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-right p-4">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-4">May 15, 2023</td>
                      <td className="p-4">Professional Plan - Monthly</td>
                      <td className="p-4">$99.00</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Paid
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-4">Apr 15, 2023</td>
                      <td className="p-4">Professional Plan - Monthly</td>
                      <td className="p-4">$99.00</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Paid
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-4">Mar 15, 2023</td>
                      <td className="p-4">Professional Plan - Monthly</td>
                      <td className="p-4">$99.00</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Paid
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanelSubscriptions;
