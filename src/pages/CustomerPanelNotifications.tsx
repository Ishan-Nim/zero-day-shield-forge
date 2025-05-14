
import React from 'react';
import { Bell, Shield, CreditCard, Settings, User } from 'lucide-react';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerPanelNotifications: React.FC = () => {
  const notifications = [
    {
      id: 'notif-1',
      type: 'security',
      title: 'Scan completed successfully',
      description: 'Your weekly security scan has completed. 3 low-level issues were found.',
      date: '2 hours ago',
      read: false,
      icon: Shield,
    },
    {
      id: 'notif-2',
      type: 'billing',
      title: 'Invoice available',
      description: 'Your monthly invoice for May has been generated and is available for download.',
      date: '1 day ago',
      read: false,
      icon: CreditCard,
    },
    {
      id: 'notif-3',
      type: 'security',
      title: 'New security alert',
      description: 'A potential security vulnerability was detected on your website.',
      date: '2 days ago',
      read: true,
      icon: Shield,
    },
    {
      id: 'notif-4',
      type: 'account',
      title: 'Password changed',
      description: 'Your account password was changed successfully.',
      date: '1 week ago',
      read: true,
      icon: User,
    },
    {
      id: 'notif-5',
      type: 'system',
      title: 'System maintenance',
      description: 'Scheduled maintenance will occur on May 25th from 2AM to 4AM UTC.',
      date: '1 week ago',
      read: true,
      icon: Settings,
    },
  ];
  
  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with important security alerts and account information.</p>
        </section>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Your Notifications</CardTitle>
                <CardDescription>You have 2 unread notifications</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Mark all as read</Button>
                <Button variant="ghost" size="sm">Clear all</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="pt-4">
                <div className="space-y-4">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-cyber-primary/5 border-cyber-primary/30' : ''}`}
                    >
                      <div className="flex">
                        <div className={`bg-cyber-primary/10 p-2 rounded-full mr-4 ${!notification.read ? 'bg-cyber-primary/20' : ''}`}>
                          <notification.icon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="pt-4">
                <div className="space-y-4">
                  {notifications.filter(n => n.type === 'security').map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-cyber-primary/5 border-cyber-primary/30' : ''}`}
                    >
                      <div className="flex">
                        <div className={`bg-cyber-primary/10 p-2 rounded-full mr-4 ${!notification.read ? 'bg-cyber-primary/20' : ''}`}>
                          <notification.icon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="billing" className="pt-4">
                <div className="space-y-4">
                  {notifications.filter(n => n.type === 'billing').map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-cyber-primary/5 border-cyber-primary/30' : ''}`}
                    >
                      <div className="flex">
                        <div className={`bg-cyber-primary/10 p-2 rounded-full mr-4 ${!notification.read ? 'bg-cyber-primary/20' : ''}`}>
                          <notification.icon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="account" className="pt-4">
                <div className="space-y-4">
                  {notifications.filter(n => n.type === 'account').map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-cyber-primary/5 border-cyber-primary/30' : ''}`}
                    >
                      <div className="flex">
                        <div className={`bg-cyber-primary/10 p-2 rounded-full mr-4 ${!notification.read ? 'bg-cyber-primary/20' : ''}`}>
                          <notification.icon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="system" className="pt-4">
                <div className="space-y-4">
                  {notifications.filter(n => n.type === 'system').map(notification => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 ${!notification.read ? 'bg-cyber-primary/5 border-cyber-primary/30' : ''}`}
                    >
                      <div className="flex">
                        <div className={`bg-cyber-primary/10 p-2 rounded-full mr-4 ${!notification.read ? 'bg-cyber-primary/20' : ''}`}>
                          <notification.icon className="h-5 w-5 text-cyber-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanelNotifications;
