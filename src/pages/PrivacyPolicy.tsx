
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-cyber-primary hover:text-cyber-accent transition-colors mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: May 14, 2025</p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Zeroday (Pvt) Ltd ("Company", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect several types of information from and about users of our services, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, postal address, phone number, company name, and job title.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our services.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            <li><strong>Project Data:</strong> Information related to your systems, networks, or applications that you provide to us for the purpose of our cybersecurity services.</li>
          </ul>
          
          <h2>3. How We Collect Your Information</h2>
          <p>We use different methods to collect data from and about you including through:</p>
          <ul>
            <li><strong>Direct Interactions:</strong> Information you provide when filling in forms, corresponding with us, or using our services.</li>
            <li><strong>Automated Technologies:</strong> As you interact with our website, we may automatically collect technical data about your equipment, browsing actions, and patterns.</li>
            <li><strong>Third Parties:</strong> We may receive information about you from various third parties such as analytics providers or technical service providers.</li>
          </ul>
          
          <h2>4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Develop new products and services</li>
            <li>Generate anonymized, aggregate data for internal analysis</li>
            <li>Protect against, identify, and prevent fraud and other unlawful activity</li>
            <li>Comply with our legal obligations</li>
            <li>Enforce our terms and conditions</li>
          </ul>
          
          <h2>5. Disclosure of Your Information</h2>
          <p>We may disclose your personal information to:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (e.g., IT services, payment processing).</li>
            <li><strong>Professional Advisers:</strong> Including lawyers, bankers, auditors, and insurers.</li>
            <li><strong>Authorities:</strong> When required by law, regulation, or legal process.</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
          </ul>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties for marketing purposes.</p>
          
          <h2>6. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
          
          <h2>7. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <h2>8. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>The right to access information we hold about you</li>
            <li>The right to request correction of inaccurate personal data</li>
            <li>The right to request erasure of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
          <p>To exercise any of these rights, please contact us at the information provided below.</p>
          
          <h2>9. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@zerodaysecurity.com" className="text-cyber-primary hover:text-cyber-accent">privacy@zerodaysecurity.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
