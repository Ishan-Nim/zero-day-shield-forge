
import React, { useState } from 'react';
import { 
  Package, 
  CreditCard, 
  LineChart, 
  Shield, 
  ArrowRight, 
  Zap, 
  Lock, 
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

const CustomerPanel: React.FC = () => {
  const [userProducts, setUserProducts] = useState([
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
    }
  ]);

  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <section>
          <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
          <p className="text-gray-600">Here's an overview of your account and security services.</p>
        </section>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-cyber-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Plan</p>
                  <p className="text-2xl font-bold">Professional</p>
                </div>
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-cyber-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Invoice</p>
                  <p className="text-2xl font-bold">May 15</p>
                </div>
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-cyber-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Security Score</p>
                  <p className="text-2xl font-bold">85<span className="text-sm text-muted-foreground">/100</span></p>
                </div>
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <LineChart className="h-6 w-6 text-cyber-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-between">
                  Run Security Scan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  View Latest Report <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Manage Subscription <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest security events</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Your Services/Products */}
        <section>
          <h2 className="text-xl font-bold mb-4">Your Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userProducts.map(product => (
              <Card key={product.id} className={`overflow-hidden ${product.status === 'active' ? 'border-l-4 border-l-green-500' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                      <product.icon className="h-6 w-6 text-cyber-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${product.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>{product.status === 'active' ? 'Active' : 'Inactive'}</span>
                    </div>
                    
                    {product.status === 'active' && (
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Next scan:</div>
                        <div>{product.nextScan}</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex justify-between">
                    <Button variant="outline" size="sm">
                      {product.status === 'active' ? 'Manage' : 'Activate'}
                    </Button>
                    <Link to={`/services/${product.id}`}>
                      <Button variant="ghost" size="sm">Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-4">
            <Link to="/customer-panel/products">
              <Button variant="link" className="p-0">
                View all products <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanel;
