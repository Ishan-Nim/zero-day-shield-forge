
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zeroday (Pvt) Ltd - Innovating Secure Digital Solutions',
  description = 'From vulnerability assessments to proactive threat detection, Zeroday is your partner in cybersecurity solutions for enterprises and businesses in Sri Lanka.',
  keywords = 'cybersecurity, vulnerability assessment, penetration testing, security architecture, data protection',
  canonicalUrl = 'https://zeroday.lk/',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogType = 'website',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
