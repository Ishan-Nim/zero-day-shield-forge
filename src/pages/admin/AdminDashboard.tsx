import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, 
  Users, 
  CreditCard, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminPanelLayout from '@/components/AdminPanelLayout';
import { checkAdminStatus } from '@/utils/adminUtils';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    productCount: 0,
    userCount: 0,
    orderCount: 0,
    revenueTotal: 0
  });

  // Check if user is admin
  useEffect(() => {
    const verifyAdminStatus = async () => {
      if (!user) return;
      
      const isUserAdmin = await checkAdminStatus(user.id);
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
  
  // Fetch dashboard stats
  useEffect(() => {
    const fetchStats = async () => {
      if (!isAdmin) return;
      
      try {
        // Fetch product count
        const { data: products, error: productsError } = await supabase
          .from('products')
          .select('id');
        
        if (productsError) throw productsError;
        
        // Fetch user count
        const { data: profiles, error: profilesError } = await supabase
          .from('profiles')
          .select('id');
        
        if (profilesError) throw profilesError;
        
        // Fetch order count and total
        const { data: orders, error: ordersError } = await supabase
          .from('orders')
          .select('total');
        
        if (ordersError) throw ordersError;
        
        const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total), 0) || 0;
        
        setStats({
          productCount: products?.length || 0,
          userCount: profiles?.length || 0,
          orderCount: orders?.length || 0,
          revenueTotal: totalRevenue
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, [isAdmin]);
  
  if (!isAdmin) {
    return null;
  }
  
  return (
    <AdminPanelLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading dashboard...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Products Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Total Products
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.productCount}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Products in your catalog
                  </p>
                </CardContent>
              </Card>

              {/* Users Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.userCount}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Registered customers
                  </p>
                </CardContent>
              </Card>

              {/* Orders Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Total Orders
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.orderCount}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Processed orders
                  </p>
                </CardContent>
              </Card>

              {/* Revenue Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${stats.revenueTotal.toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    From all orders
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest activities on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-8">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-3" />
                    <p className="text-center text-muted-foreground">
                      No recent activity to display
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common administrative tasks
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <a 
                    href="/admin/products" 
                    className="flex items-center p-3 hover:bg-muted rounded-md transition-colors"
                  >
                    <Package className="h-5 w-5 mr-3 text-cyber-primary" />
                    <span>Manage Products</span>
                  </a>
                  <a 
                    href="/admin/users" 
                    className="flex items-center p-3 hover:bg-muted rounded-md transition-colors"
                  >
                    <Users className="h-5 w-5 mr-3 text-cyber-primary" />
                    <span>Manage Users</span>
                  </a>
                  <a 
                    href="/admin/orders" 
                    className="flex items-center p-3 hover:bg-muted rounded-md transition-colors"
                  >
                    <CreditCard className="h-5 w-5 mr-3 text-cyber-primary" />
                    <span>View Orders</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </AdminPanelLayout>
  );
};

export default AdminDashboard;
