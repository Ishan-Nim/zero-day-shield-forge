
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-bold text-xl sm:text-2xl">
              <span className="text-cyber-primary">Zeroday</span>
              <span className="text-gray-700">.lk</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 max-w-3xl ml-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { title: "Web App Scanner", href: "/services/web-app-scanner", description: "Automated scanning of web applications" },
                        { title: "Vulnerability Assessment", href: "/services/vulnerability-assessment", description: "Identify security vulnerabilities" },
                        { title: "Penetration Testing", href: "/services/penetration-testing", description: "Simulate cyber attacks to test security" },
                        { title: "Plugin Development", href: "/services/plugin-development", description: "Custom security plugin solutions" }
                      ].map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                      {[
                        { title: "Local Roots", href: "/company/local-roots", description: "Our story and local presence" },
                        { title: "Security-First Philosophy", href: "/company/security-first", description: "Our approach to security" },
                        { title: "Our Process", href: "/company/discovery-scope", description: "How we work with clients" },
                        { title: "Client Support", href: "/company/client-support", description: "How we support our clients" }
                      ].map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={cn(navigationMenuTriggerStyle())}>
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-cyber-primary hover:bg-cyber-accent transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
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
                  to="/contact"
                  className="text-gray-800 hover:text-cyber-primary font-medium"
                >
                  About
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link to="/contact">
                  <Button className="w-full bg-cyber-primary hover:bg-cyber-accent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
