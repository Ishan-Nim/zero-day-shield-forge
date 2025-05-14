
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Code, MessageSquare, FileText } from 'lucide-react';

const SecureDelivery = () => {
  return (
    <InnerPageLayout
      title="Secure Delivery with Full Support"
      emoji="🛡️"
      description="Comprehensive implementation and ongoing assistance for your security solutions."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Excellence in Execution and Support</h2>
          <p>
            At Zeroday, we understand that the true value of a security solution lies not just in its design, but 
            in its effective implementation and continued performance. Our secure delivery process ensures that 
            your security solutions are deployed with precision, thoroughly tested, and supported long after the 
            initial implementation.
          </p>
          
          <p>
            We approach delivery with the same attention to detail and commitment to excellence that defines 
            our entire engagement process. Our team follows rigorous security protocols during implementation 
            to ensure that your systems remain protected throughout the transition.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Our Secure Delivery Framework</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Controlled Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We follow a staged deployment approach, implementing solutions in controlled environments before 
                    moving to production, minimizing disruption and risk.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rigorous Testing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every solution undergoes comprehensive security testing, including vulnerability assessments, 
                    penetration testing, and functional validation.
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
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We provide detailed technical documentation, user manuals, and knowledge transfer sessions 
                    to ensure your team can effectively manage the implemented solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our relationship doesn't end at delivery. We provide responsive support, regular check-ins, 
                    and continued guidance to ensure your security posture remains strong.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Support Options Tailored to Your Needs</h2>
          <p className="mb-6">
            We understand that different organizations have different support requirements. That's why we offer a range 
            of support options:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Standard Support</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Business hours assistance via email and phone, with guaranteed response times for critical issues.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Premium Support</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Extended hours support with faster response times and dedicated support personnel who know your environment.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">24/7 Critical Response</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Around-the-clock support for mission-critical security solutions with immediate response for security incidents.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Managed Security Services</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Full ongoing management and monitoring of your security solutions by our expert team.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "The Zeroday team didn't just implement our security solution and disappear. They stayed engaged, provided 
            exceptional support when we needed it, and continually offered guidance to help us maximize the value of 
            our investment. Their commitment to our success has been outstanding."
          </blockquote>
          <div className="mt-4 font-medium">
            — IT Director, Manufacturing Enterprise
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Ready for a security implementation that delivers lasting results?</h3>
          <p className="mb-4">
            Contact us today to learn more about our delivery and support services. We're committed to providing 
            not just solutions, but ongoing protection and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/#contact" 
              className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors text-center"
            >
              Contact Us
            </a>
            <a 
              href="/company/discovery-scope" 
              className="inline-block px-6 py-3 bg-white border border-cyber-primary text-cyber-primary font-medium rounded-md hover:bg-cyber-primary/5 transition-colors text-center"
            >
              Learn About Our Process
            </a>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default SecureDelivery;
