
import React from 'react';
import { Helmet } from 'react-helmet-async';
import InnerPageLayout from '@/components/InnerPageLayout';
import Contact from '@/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Zeroday (Pvt) Ltd</title>
        <meta name="description" content="Get in touch with our team of security experts at Zeroday to discuss how we can help protect your business." />
      </Helmet>
      
      <InnerPageLayout 
        title="Contact Us" 
        emoji="📞" 
        description="We're here to help. Reach out to discuss your security needs."
      >
        <div className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </InnerPageLayout>
    </>
  );
};

export default ContactPage;
