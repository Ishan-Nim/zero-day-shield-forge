
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-cyber-primary hover:text-cyber-accent transition-colors mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: May 14, 2025</p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Zeroday (Pvt) Ltd ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.
          </p>
          
          <h2>2. Services Description</h2>
          <p>
            Zeroday (Pvt) Ltd provides cybersecurity services, including but not limited to vulnerability assessments, penetration testing, secure development, plugin development, DevSecOps integration, and security architecture consulting. The specific services to be provided will be outlined in a formal agreement between Zeroday and the client.
          </p>
          
          <h2>3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, Zeroday (Pvt) Ltd owns the intellectual property rights for all material on our website and deliverables created specifically for clients. All intellectual property rights are reserved. You may view and/or print pages for your personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from our website or services</li>
            <li>Sell, rent, or sub-license material from our website or services</li>
            <li>Reproduce, duplicate, or copy material from our website or services</li>
            <li>Redistribute content from Zeroday (Pvt) Ltd without express written consent</li>
          </ul>
          
          <h2>4. User Obligations</h2>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information as required for service delivery</li>
            <li>Maintain the confidentiality of any access credentials provided to you</li>
            <li>Notify us immediately upon discovering any unauthorized use of your account</li>
            <li>Use our services only for lawful purposes and in accordance with these Terms</li>
            <li>Not attempt to circumvent any security measures implemented in our services</li>
          </ul>
          
          <h2>5. Payment and Billing</h2>
          <p>
            Payment terms will be outlined in the formal agreement between Zeroday and the client. This may include upfront payments or milestone-based payments. All fees are non-refundable unless specified in our Refund Policy or required by law.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Zeroday (Pvt) Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the services</li>
            <li>Any conduct or content of any third party on the services</li>
            <li>Any content obtained from the services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Zeroday (Pvt) Ltd and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the services.
          </p>
          
          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
          
          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:legal@zerodaysecurity.com" className="text-cyber-primary hover:text-cyber-accent">legal@zerodaysecurity.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
