
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart as CartIcon, UserCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CartButton from '@/components/ShoppingCart';
import useMobile from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Check for admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }
      
      try {
        const { data } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        setIsAdmin(data ? true : false);
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      }
    };
    
    checkAdminStatus();
  }, [user]);
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl sm:text-2xl text-cyber-primary">Zeroday</span>
            <span className="font-normal text-xl sm:text-2xl text-gray-700">.Security</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Our Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/services/web-app-scanner">Web App Scanner</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/vulnerability-assessment">Vulnerability Assessment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/penetration-testing">Penetration Testing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/plugin-development">Plugin Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/data-protection">Data Protection</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/devsecops-integration">DevSecOps Integration</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>About Us</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/company/local-roots">Local Roots</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/security-first">Security-First Philosophy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/client-support">Client-First Support</Link>
                </DropdownMenuItem>
                <DropdownMenuLabel className="mt-2">Our Process</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/company/discovery-scope">Discovery & Scope</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/custom-quotation">Custom Quotation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/formal-agreement">Formal Agreement</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/secure-delivery">Secure Delivery</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Regular Links */}
            <Link to="/store">
              <Button variant="ghost">Store</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <CartButton />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <UserCircle2 className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {profile?.full_name || user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/customer-panel">My Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/customer-panel/products">My Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/customer-panel/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <CartButton />

            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white border-t mt-2 pb-4">
          <div className="container mx-auto px-4">
            <div className="py-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-500">Services</h3>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  <Link 
                    to="/services/web-app-scanner"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Web App Scanner
                  </Link>
                  <Link 
                    to="/services/vulnerability-assessment"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Vulnerability Assessment
                  </Link>
                  <Link 
                    to="/services/penetration-testing"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Penetration Testing
                  </Link>
                  <Link 
                    to="/services/plugin-development"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Plugin Development
                  </Link>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-gray-500">Company</h3>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  <Link 
                    to="/company/local-roots"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Local Roots
                  </Link>
                  <Link 
                    to="/company/security-first"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Security-First Philosophy
                  </Link>
                  <Link 
                    to="/company/discovery-scope"
                    className="text-gray-800 hover:text-cyber-primary"
                  >
                    Our Process
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <Link 
                  to="/store"
                  className="text-gray-800 hover:text-cyber-primary font-medium"
                >
                  Store
                </Link>
                <Link 
                  to="/contact"
                  className="text-gray-800 hover:text-cyber-primary font-medium"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                {user ? (
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Signed in as {profile?.full_name || user.email}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="text-gray-800 hover:text-cyber-primary"
                        >
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        to="/customer-panel"
                        className="text-gray-800 hover:text-cyber-primary"
                      >
                        My Dashboard
                      </Link>
                      <Link
                        to="/customer-panel/products"
                        className="text-gray-800 hover:text-cyber-primary"
                      >
                        My Products
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="text-left text-gray-800 hover:text-cyber-primary"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link to="/auth/login">
                      <Button className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/auth/register">
                      <Button variant="outline" className="w-full">Register</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
