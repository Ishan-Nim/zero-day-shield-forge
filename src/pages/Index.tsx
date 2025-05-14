
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import HowWeWork from '@/components/HowWeWork';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganizationSchema } from '@/components/StructuredData';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Zeroday (Pvt) Ltd - Innovating Secure Digital Solutions" 
        description="From vulnerability assessments to proactive threat detection, Zeroday is your partner in cybersecurity solutions for enterprises and businesses in Sri Lanka."
        keywords="cybersecurity, vulnerability assessment, penetration testing, security architecture, data protection, Sri Lanka cybersecurity, web application scanner, plugin development"
        canonicalUrl="https://zeroday.lk/"
      />
      <OrganizationSchema />
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <HowWeWork />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
