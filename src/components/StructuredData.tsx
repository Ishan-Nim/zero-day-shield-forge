
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = 'Zeroday (Pvt) Ltd',
  url = 'https://zeroday.lk',
  logo = 'https://zeroday.lk/favicon.svg',
  description = 'Innovating Secure Digital Solutions for a Smarter, Safer Tomorrow'
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "sameAs": [
      "https://twitter.com/zerodaylk",
      "https://www.linkedin.com/company/zerodaylk",
      "https://www.facebook.com/zerodaylk"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-000-000000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Sinhala", "Tamil"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Sri Lanka"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  provider = 'Zeroday (Pvt) Ltd',
  areaServed = 'Sri Lanka'
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://zeroday.lk"
    },
    "url": url,
    "areaServed": areaServed,
    "serviceType": "Cybersecurity Service"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
