
import React from 'react';
import { User, Key, Bell, Shield } from 'lucide-react';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerPanelSettings: React.FC = () => {
  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile and account preferences.</p>
        </section>
        
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="api">API Access</TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 555-123-4567" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Change Password</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Authenticator App</div>
                    <div className="text-sm text-muted-foreground">Use an authentication app to generate verification codes.</div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">SMS Authentication</div>
                    <div className="text-sm text-muted-foreground">Get verification codes via SMS.</div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Login Sessions</CardTitle>
                <CardDescription>Manage your active login sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">Current Session</div>
                        <div className="text-sm text-muted-foreground">Los Angeles, United States • Chrome on Windows</div>
                        <div className="text-xs text-muted-foreground mt-1">Started May 14, 2023 at 10:23 AM</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Active now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">Previous Session</div>
                        <div className="text-sm text-muted-foreground">San Francisco, United States • Safari on macOS</div>
                        <div className="text-xs text-muted-foreground mt-1">May 12, 2023 at 3:45 PM</div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-destructive">Revoke</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Sign out all other sessions</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage your notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="font-medium">Security Alerts</div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Critical Vulnerabilities</div>
                      <div className="text-xs text-muted-foreground">Get notified about critical security issues immediately</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Login Attempts</div>
                      <div className="text-xs text-muted-foreground">Get notified about suspicious login attempts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="font-medium">Scanner Notifications</div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Scan Started</div>
                      <div className="text-xs text-muted-foreground">Get notified when a security scan begins</div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Scan Completed</div>
                      <div className="text-xs text-muted-foreground">Get notified when a security scan is completed</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="font-medium">Account Notifications</div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Billing Updates</div>
                      <div className="text-xs text-muted-foreground">Get notified about payments and subscription changes</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Product Updates</div>
                      <div className="text-xs text-muted-foreground">Receive news about product updates and new features</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* API Tab */}
          <TabsContent value="api" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>Manage API keys for programmatic access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">Production API Key</div>
                      <div className="text-xs text-muted-foreground mt-1">Created on May 10, 2023</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Reveal</Button>
                      <Button variant="outline" size="sm" className="text-destructive">Revoke</Button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Input value="••••••••••••••••••••••••••••••" readOnly className="font-mono bg-muted" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium">API Key Permissions</div>
                  <div className="text-sm text-muted-foreground">This key provides access to:</div>
                  <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                    <li>Scan API endpoints (read/write)</li>
                    <li>Reports API endpoints (read only)</li>
                    <li>User API endpoints (read only)</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Generate New API Key</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>Configure webhook endpoints for real-time event notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <Input id="webhook-url" placeholder="https://your-domain.com/webhook" />
                </div>
                
                <div className="space-y-2">
                  <Label>Events to Send</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="event-scan-complete" className="rounded border-gray-300" />
                      <Label htmlFor="event-scan-complete">scan.completed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="event-vuln-found" className="rounded border-gray-300" />
                      <Label htmlFor="event-vuln-found">vulnerability.found</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="event-report-generated" className="rounded border-gray-300" />
                      <Label htmlFor="event-report-generated">report.generated</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="event-subscription-updated" className="rounded border-gray-300" />
                      <Label htmlFor="event-subscription-updated">subscription.updated</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Webhook</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanelSettings;
