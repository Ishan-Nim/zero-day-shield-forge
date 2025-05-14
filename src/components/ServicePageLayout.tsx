
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { ServiceSchema } from './StructuredData';

interface ServicePageLayoutProps {
  serviceTitle: string;
  serviceIcon: React.ReactNode;
  bannerImage: string;
  description: string;
  keywords?: string;
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
  keywords = "cybersecurity, security services, Sri Lanka",
  whatWeDo,
  howWeDoIt,
  benefits,
  callToAction = "Contact us today to get started.",
  children,
}) => {
  // Generate a canonical URL for this service
  const serviceSlug = serviceTitle
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
  const canonicalUrl = `https://zeroday.lk/services/${serviceSlug}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${serviceTitle} - Zeroday (Pvt) Ltd`}
        description={description}
        keywords={`${keywords}, ${serviceTitle.toLowerCase()}`}
        canonicalUrl={canonicalUrl}
      />
      <ServiceSchema
        name={serviceTitle}
        description={description}
        url={canonicalUrl}
      />
      <Header />
      
      {/* Banner */}
      <section className="relative py-20 bg-cyber-dark text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}></div>
        <div className="relative z-10 container container-padding mx-auto">
          <div className="flex items-center mb-4 space-x-2">
            {serviceIcon}
            <h1 className="text-3xl md:text-4xl font-bold">{serviceTitle}</h1>
          </div>
          <p className="max-w-3xl text-lg text-gray-100 mb-8">{description}</p>
          <a href="#contact" className="bg-cyber-primary hover:bg-cyber-accent text-white font-medium rounded-md py-3 px-6 transition-colors">
            Contact Us
          </a>
          <a href="#pricing" className="ml-4 bg-transparent border border-white hover:bg-white/20 text-white font-medium rounded-md py-3 px-6 transition-colors">
            Plan Comparison
          </a>
        </div>
      </section>
      
      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container container-padding mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700">{whatWeDo}</p>
          </div>
        </div>
      </section>
      
      {/* How We Do It */}
      <section className="py-16 bg-gray-50">
        <div className="container container-padding mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">How We Do It</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeDoIt.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center bg-cyber-primary/10 text-cyber-primary w-12 h-12 rounded-full font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container container-padding mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-cyber-primary/10 p-1.5 rounded-full">
                  <svg className="h-5 w-5 text-cyber-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional sections passed as children */}
      {children}
      
      {/* CTA */}
      <section className="bg-cyber-primary text-white py-16" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Security Journey</h2>
          <div className="max-w-3xl mx-auto">
            <a href="#contact" className="inline-block bg-white text-cyber-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
