
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlexiblePayments = () => {
  return (
    <InnerPageLayout
      title="Fast, Flexible Payments"
      emoji="⚡"
      description="Payment options designed to accommodate your business needs."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Payments That Work for You</h2>
          <p>
            At Zeroday, we understand that every business has unique financial workflows and constraints. 
            That's why we've developed flexible payment options that accommodate a variety of preferences 
            and requirements, making it easier to invest in the security solutions you need without 
            disrupting your cash flow or budgeting processes.
          </p>
          
          <p>
            Our payment approach is built on the same principles as our security services: transparency, 
            efficiency, and client satisfaction. We've streamlined our payment processes to eliminate 
            unnecessary complexity and delays, ensuring that financial aspects of our relationship are 
            as smooth and hassle-free as our technical delivery.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Payment Options</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Milestone-Based Payments</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Link payments to project milestones, allowing you to pay as value is delivered rather than 
                    all at once. This option works well for larger projects with clear delivery phases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Monthly Retainer</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Spread costs evenly with monthly payments that cover ongoing services or long-term projects. 
                    Ideal for continuous security monitoring, maintenance, and support arrangements.
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
                  <h3 className="font-semibold text-lg mb-2">Upfront Payments with Discounts</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    For organizations with available budget, we offer attractive discounts for full upfront payment, 
                    allowing you to maximize the value of your security investment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Multiple Payment Methods</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We accept various payment methods including bank transfers, credit cards, and major payment 
                    platforms, with options for both local and international transactions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Payment Process</h2>
          <p className="mb-6">
            We've designed our payment process to be as straightforward and efficient as possible:
          </p>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1 h-6 w-6 flex items-center justify-center text-cyber-primary font-semibold">
                1
              </div>
              <div>
                <span className="font-medium">Clear Quotation</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  You receive a detailed quote with itemized costs and a complete breakdown of services.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1 h-6 w-6 flex items-center justify-center text-cyber-primary font-semibold">
                2
              </div>
              <div>
                <span className="font-medium">Payment Schedule Agreement</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  We discuss and agree on the payment structure that best suits your needs and project timeline.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1 h-6 w-6 flex items-center justify-center text-cyber-primary font-semibold">
                3
              </div>
              <div>
                <span className="font-medium">Secure Invoice Delivery</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Invoices are sent electronically with all necessary details and payment instructions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1 h-6 w-6 flex items-center justify-center text-cyber-primary font-semibold">
                4
              </div>
              <div>
                <span className="font-medium">Payment Confirmation</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Automatic confirmation of received payments and detailed receipts for your records.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "The payment flexibility that Zeroday offers was a key factor in our decision to work with them. 
            As a growing business with careful cash flow management, their milestone-based payment option allowed 
            us to implement critical security improvements without straining our financial resources."
          </blockquote>
          <div className="mt-4 font-medium">
            — Finance Director, E-commerce Startup
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Questions about our payment options?</h3>
          <p className="mb-4">
            We're happy to discuss the best payment approach for your specific situation. Contact our team to 
            explore options that align with your budgeting processes and financial requirements.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors"
          >
            Contact Us About Payment Options
          </Link>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default FlexiblePayments;
