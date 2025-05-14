
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Binary } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-cyber-dark/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Binary className="h-8 w-8 text-cyber-primary" />
            <span className="gradient-text">Zeroday</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/#services" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors">Services</Link>
            <Link to="/#why-us" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors">Why Us</Link>
            <Link to="/#how-we-work" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors">Process</Link>
            <Link to="/#about" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors">About</Link>
            <Link to="/#faq" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors">FAQ</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link to="/customer-panel">
                <Button variant="outline" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/auth/login">
                <Button variant="outline" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white">
                  Customer Panel
                </Button>
              </Link>
            )}
            <Link to="/contact">
              <Button className="bg-cyber-primary hover:bg-cyber-accent text-white">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-cyber-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/#services" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors p-2" onClick={toggleMobileMenu}>Services</Link>
            <Link to="/#why-us" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors p-2" onClick={toggleMobileMenu}>Why Us</Link>
            <Link to="/#how-we-work" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors p-2" onClick={toggleMobileMenu}>Process</Link>
            <Link to="/#about" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors p-2" onClick={toggleMobileMenu}>About</Link>
            <Link to="/#faq" className="text-gray-700 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-secondary transition-colors p-2" onClick={toggleMobileMenu}>FAQ</Link>
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              {user ? (
                <Link to="/customer-panel" onClick={toggleMobileMenu} className="w-full">
                  <Button variant="outline" className="w-full border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/auth/login" onClick={toggleMobileMenu} className="w-full">
                  <Button variant="outline" className="w-full border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white">
                    Customer Panel
                  </Button>
                </Link>
              )}
              <Link to="/contact" onClick={toggleMobileMenu} className="w-full">
                <Button className="w-full bg-cyber-primary hover:bg-cyber-accent text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
