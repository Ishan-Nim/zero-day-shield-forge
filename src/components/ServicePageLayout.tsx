
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { AspectRatio } from './ui/aspect-ratio';
import { Card, CardContent } from './ui/card';

interface ServicePageLayoutProps {
  serviceTitle: string;
  serviceIcon: React.ReactNode;
  bannerImage: string;
  description: string;
  whatWeDo: string;
  howWeDoIt: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  callToAction?: string;
  children?: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  serviceTitle,
  serviceIcon,
  bannerImage,
  description,
  whatWeDo,
  howWeDoIt,
  benefits,
  callToAction = "Ready to enhance your security posture? Contact us today for a consultation.",
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Banner */}
        <div className="bg-gradient-to-r from-cyber-primary to-cyber-accent text-white">
          <div className="container mx-auto px-4 py-16">
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    {serviceIcon}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">{serviceTitle}</h1>
                </div>
                <p className="text-lg md:text-xl opacity-90">
                  {description}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={bannerImage} 
                    alt={`${serviceTitle} banner`} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Do */}
        <section className="bg-white dark:bg-slate-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Do</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">{whatWeDo}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We Do It */}
        <section className="bg-slate-50 dark:bg-slate-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">How We Do It</h2>
              <div className="space-y-8">
                {howWeDoIt.map((step, index) => (
                  <Card key={index} className="border-l-4 border-cyber-primary overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyber-primary/10 text-cyber-primary font-bold mr-4">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="bg-white dark:bg-slate-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-cyber-accent mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Additional sections passed as children */}
        {children}
        
        {/* CTA */}
        <section className="bg-cyber-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started</h2>
              <p className="mb-8 text-white/90">{callToAction}</p>
              <Link 
                to="/#contact" 
                className="inline-block px-8 py-3 bg-white text-cyber-primary font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
