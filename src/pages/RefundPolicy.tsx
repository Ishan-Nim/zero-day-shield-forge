
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-cyber-primary hover:text-cyber-accent transition-colors mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: May 14, 2025</p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Overview</h2>
          <p>
            This Refund Policy outlines the terms and conditions under which Zeroday (Pvt) Ltd ("Company", "we", "us", or "our") provides refunds for our cybersecurity services. We are committed to fair business practices and maintaining client satisfaction.
          </p>
          
          <h2>2. Project-Based Services</h2>
          <p>
            For project-based services, including but not limited to vulnerability assessments, penetration testing, secure development, and security architecture consulting:
          </p>
          <ul>
            <li><strong>Before Project Start:</strong> If you cancel prior to the commencement of work, you may be eligible for a full refund of any upfront payments, less a 10% administrative fee.</li>
            <li><strong>During Project:</strong> Once work has begun, refunds will be prorated based on the percentage of work completed and deliverables provided.</li>
            <li><strong>After Project Completion:</strong> No refunds will be issued after project completion and delivery of all agreed-upon deliverables.</li>
          </ul>
          
          <h2>3. Subscription-Based Services</h2>
          <p>
            For subscription-based services such as ongoing security monitoring or regular security assessments:
          </p>
          <ul>
            <li><strong>Monthly Subscriptions:</strong> No prorated refunds are provided for partial months of service.</li>
            <li><strong>Annual Subscriptions:</strong> May be eligible for a prorated refund of unused service periods, less a 15% early termination fee.</li>
            <li><strong>Service Cancellation:</strong> To cancel a subscription, written notice must be provided at least 15 days before the next billing cycle.</li>
          </ul>
          
          <h2>4. Quality Guarantee</h2>
          <p>
            If you are not satisfied with the quality of our services, please notify us in writing within seven (7) days of service delivery or issue detection. We will work with you to address your concerns and may offer:
          </p>
          <ul>
            <li>Remediation of the identified issues at no additional cost</li>
            <li>Additional services to compensate for any shortcomings</li>
            <li>A partial refund commensurate with the extent of the quality issue</li>
            <li>A full refund in exceptional circumstances where we cannot meet the agreed-upon standards</li>
          </ul>
          
          <h2>5. Non-Refundable Items</h2>
          <p>The following items are non-refundable:</p>
          <ul>
            <li>Setup fees and implementation costs</li>
            <li>Training and educational services already delivered</li>
            <li>Custom development work that has been delivered and accepted</li>
            <li>Third-party services or tools procured on your behalf</li>
            <li>Services where deliverables have been accepted in writing</li>
          </ul>
          
          <h2>6. Refund Process</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Submit your request in writing to <a href="mailto:finance@zerodaysecurity.com" className="text-cyber-primary hover:text-cyber-accent">finance@zerodaysecurity.com</a></li>
            <li>Include your full name, company name, project details, and reason for the refund request</li>
            <li>Refund requests will be reviewed within 5 business days</li>
            <li>Approved refunds will be processed using the original payment method within 14 business days</li>
          </ul>
          
          <h2>7. Force Majeure</h2>
          <p>
            No refunds will be issued for service disruptions or delays resulting from circumstances beyond our reasonable control, including but not limited to natural disasters, acts of terrorism, labor disputes, or government actions.
          </p>
          
          <h2>8. Dispute Resolution</h2>
          <p>
            If a dispute arises regarding this Refund Policy, both parties agree to attempt to resolve the issue through good-faith negotiations. If a resolution cannot be reached, the dispute will be subject to binding arbitration in accordance with the laws of Sri Lanka.
          </p>
          
          <h2>9. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any such changes constitutes your acceptance of the new Refund Policy.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Refund Policy or would like to request a refund, please contact us at <a href="mailto:finance@zerodaysecurity.com" className="text-cyber-primary hover:text-cyber-accent">finance@zerodaysecurity.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
