
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface InnerPageLayoutProps {
  title: string;
  emoji?: string;
  description?: string;
  children: React.ReactNode;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
  title,
  emoji,
  description,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-cyber-primary to-cyber-accent text-white">
          <div className="container mx-auto px-4 py-16">
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
                {emoji && <span className="mr-3 text-3xl">{emoji}</span>}
                {title}
              </h1>
              {description && (
                <p className="text-lg opacity-90 mb-4">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InnerPageLayout;
