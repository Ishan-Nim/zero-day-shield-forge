
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Package, 
  Users, 
  CreditCard, 
  Settings,
  BarChart3,
  Shield,
  LogOut 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface AdminPanelLayoutProps {
  children: React.ReactNode;
}

const AdminPanelLayout: React.FC<AdminPanelLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const isActive = (path: string) => location.pathname === path;
  
  // Get user initials for the avatar fallback
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase();
    }
    return user?.email?.substring(0, 2).toUpperCase() || 'A';
  };

  const handleSignOut = async () => {
    await signOut();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white">
                  {profile && (
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src={profile.avatar_url} alt={profile.full_name} />
                        <AvatarFallback>{getInitials()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{profile.full_name || 'Admin'}</p>
                        <p className="text-xs opacity-80">{user?.email}</p>
                      </div>
                    </div>
                  )}
                  <h2 className="font-bold text-lg">Admin Panel</h2>
                </div>
                
                <nav className="p-2">
                  <ul className="space-y-1">
                    <li>
                      <Link 
                        to="/admin" 
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isActive('/admin') ? 'bg-cyber-primary/10 text-cyber-primary font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/admin/products" 
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isActive('/admin/products') ? 'bg-cyber-primary/10 text-cyber-primary font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Package className="h-5 w-5 mr-3" />
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/admin/users" 
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isActive('/admin/users') ? 'bg-cyber-primary/10 text-cyber-primary font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Users className="h-5 w-5 mr-3" />
                        Users
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/admin/orders" 
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isActive('/admin/orders') ? 'bg-cyber-primary/10 text-cyber-primary font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        <CreditCard className="h-5 w-5 mr-3" />
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/admin/settings" 
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isActive('/admin/settings') ? 'bg-cyber-primary/10 text-cyber-primary font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Settings className="h-5 w-5 mr-3" />
                        Settings
                      </Link>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <Link 
                      to="/" 
                      className="flex items-center px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <Shield className="h-5 w-5 mr-3" />
                      Back to Website
                    </Link>
                    <button 
                      className="flex items-center px-4 py-2 w-full text-left rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </nav>
              </div>
            </aside>
            
            {/* Main Content Area */}
            <div className="md:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPanelLayout;
