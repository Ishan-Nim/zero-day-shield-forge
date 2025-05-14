
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, DollarSign, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomQuotation = () => {
  return (
    <InnerPageLayout
      title="Custom Quotation & Clear Invoicing"
      emoji="📝"
      description="Transparent pricing tailored to your specific security needs."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Transparent Pricing, No Surprises</h2>
          <p>
            At Zeroday, we believe in complete financial transparency. Once we've thoroughly understood your security needs 
            during our <Link to="/company/discovery-scope" className="text-cyber-primary hover:underline">discovery and scoping phase</Link>, 
            we provide you with a detailed, customized quotation that reflects the exact services required to address your specific challenges.
          </p>
          
          <p>
            Our quotation process eliminates ambiguity and prevents unexpected costs, giving you the confidence to make informed 
            decisions about your security investments. We break down our services into clear line items, so you understand exactly 
            what you're paying for.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Our Quotation Process</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tailored Security Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We create customized security packages based on your specific requirements, never pushing 
                    unnecessary services or one-size-fits-all solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Detailed Breakdown</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our quotations include comprehensive breakdowns of services, deliverables, timelines, and costs, 
                    ensuring you understand exactly what you're getting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <DollarSign className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Flexible Payment Options</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We offer various payment structures including project-based, milestone-based, and retainer options 
                    to accommodate your budgeting needs and cash flow concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Clear Invoicing Process</h2>
          <p className="mb-6">
            We understand that unclear invoices can create friction and delay payments. Our invoicing system is designed 
            for maximum clarity and efficiency:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Detailed line items matching your approved quotation</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Clear payment terms and multiple payment methods</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Timely invoice delivery aligned with project milestones</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Secure digital invoicing integrated with popular accounting systems</span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "What impressed me most about Zeroday was their transparent quotation process. They took the time to 
            explain every line item, and there were absolutely no hidden costs or surprises when the invoices arrived. 
            This level of financial clarity is rare in the cybersecurity industry."
          </blockquote>
          <div className="mt-4 font-medium">
            — CFO, Retail Technology Company
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Ready to secure your business with confidence?</h3>
          <p className="mb-4">
            Contact us today for a no-obligation consultation. We'll discuss your security needs and provide 
            a clear, customized quote that addresses your specific challenges.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default CustomQuotation;
