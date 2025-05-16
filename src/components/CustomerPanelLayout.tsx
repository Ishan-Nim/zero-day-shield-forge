
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface StaticLayoutProps {
  children: React.ReactNode;
}

const StaticLayout: React.FC<StaticLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StaticLayout;
