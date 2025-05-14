
import React, { useEffect, useState } from 'react';
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
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const CustomerPanel: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [userProducts, setUserProducts] = useState<any[]>([]);
  const [subscriptionCount, setSubscriptionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserSubscriptions();
    }
  }, [user]);

  const fetchUserSubscriptions = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*, product:product_id(*)')
        .eq('user_id', user.id)
        .eq('status', 'active');
      
      if (error) throw error;
      
      if (data) {
        setUserProducts(data.map((sub: any) => ({
          id: sub.product.id,
          name: sub.product.name,
          description: sub.product.description,
          status: sub.status,
          icon: getIconForProduct(sub.product.name),
          lastScan: new Date(sub.start_date).toISOString().split('T')[0],
          nextScan: getNextScanDate(sub.start_date),
        })));
        setSubscriptionCount(data.length);
      }
    } catch (error: any) {
      toast({
        title: 'Error fetching subscriptions',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getIconForProduct = (productName: string): React.ElementType => {
    const iconMap: Record<string, React.ElementType> = {
      'Web App Scanner Basic': Shield,
      'Web App Scanner Pro': Shield,
      'Penetration Testing Package': Zap,
      'Security Audit': LineChart,
    };
    
    return iconMap[productName] || Shield;
  };

  const getNextScanDate = (startDate: string): string => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + 7); // Assuming weekly scans
    return date.toISOString().split('T')[0];
  };

  if (isLoading) {
    return (
      <CustomerPanelLayout>
        <div className="flex items-center justify-center h-64">
          <p>Loading dashboard...</p>
        </div>
      </CustomerPanelLayout>
    );
  }

  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <section>
          <h1 className="text-3xl font-bold mb-2">Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ''}</h1>
          <p className="text-gray-600">Here's an overview of your account and security services.</p>
        </section>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">{subscriptionCount}</p>
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
                  <p className="text-2xl font-bold">{subscriptionCount > 0 ? 'Professional' : 'Free'}</p>
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
                  <p className="text-2xl font-bold">
                    {userProducts.length > 0 
                      ? new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) 
                      : 'N/A'}
                  </p>
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
                <Button className="w-full justify-between" disabled={userProducts.length === 0}>
                  Run Security Scan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline" disabled={userProducts.length === 0}>
                  View Latest Report <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/customer-panel/subscriptions">
                  <Button className="w-full justify-between" variant="outline">
                    Manage Subscription <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              {userProducts.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-cyber-primary/10 p-2 rounded-full mr-4">
                      <Shield className="h-5 w-5 text-cyber-primary" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Web App Scanner completed scan</h4>
                        <span className="text-xs text-gray-500 ml-2">Today</span>
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
                        <span className="text-xs text-gray-500 ml-2">Today</span>
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
                        <span className="text-xs text-gray-500 ml-2">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <p className="text-sm text-gray-600">Professional Plan subscription activated successfully.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent activity. Activate a subscription to get started.</p>
                  <Link to="/customer-panel/products">
                    <Button variant="outline" className="mt-4">Browse Products</Button>
                  </Link>
                </div>
              )}
            </CardContent>
            {userProducts.length > 0 && (
              <CardFooter>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardFooter>
            )}
          </Card>
        </div>

        {/* Your Services/Products */}
        <section>
          <h2 className="text-xl font-bold mb-4">Your Products</h2>
          {userProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userProducts.map(product => (
                <Card key={product.id} className="overflow-hidden border-l-4 border-l-green-500">
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
                        <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                        <span>Active</span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Next scan:</div>
                        <div>{product.nextScan}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t flex justify-between">
                      <Link to="/customer-panel/products">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <p className="text-gray-500 mb-4">You don't have any active products.</p>
              <p className="text-sm text-gray-600 mb-6">
                Activate a subscription to access our security services and protect your applications.
              </p>
              <Link to="/customer-panel/products">
                <Button>Browse Products</Button>
              </Link>
            </Card>
          )}
          
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
