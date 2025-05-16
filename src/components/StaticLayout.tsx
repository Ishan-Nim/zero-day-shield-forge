
import React from 'react';
import Header from './Header';
import Footer from './Footer';

type StaticLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const StaticLayout: React.FC<StaticLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        <div className="container mx-auto px-4">
          {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StaticLayout;
