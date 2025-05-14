
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Shield, Calendar, Users, CheckCircle } from 'lucide-react';

const FormalAgreement = () => {
  return (
    <InnerPageLayout
      title="Formal Agreement & Project Kickoff"
      emoji="📋"
      description="Clear commitments and a strong foundation for project success."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Building Trust Through Clear Agreements</h2>
          <p>
            After we've defined your project scope and provided a transparent quotation, we formalize our 
            working relationship with a clear, comprehensive agreement. This critical step establishes mutual 
            understanding and sets the foundation for a successful security partnership.
          </p>
          
          <p>
            Our agreements are written in straightforward language, avoiding unnecessary legal jargon while 
            still providing the protection and clarity both parties need. We believe that a good agreement 
            should serve as a roadmap for our collaboration, not as a weapon to be wielded in disputes.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">What Our Agreements Cover</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <FileCheck className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clearly Defined Deliverables</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed descriptions of all services, products, and outcomes to be delivered, leaving no room for misinterpretation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Project Timeline & Milestones</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Specific dates for key deliverables, progress reviews, and project completion, establishing accountability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Roles & Responsibilities</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clear delineation of what Zeroday will provide and what we'll need from your team to ensure smooth collaboration.
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
                  <h3 className="font-semibold text-lg mb-2">Confidentiality & Data Protection</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Strong provisions ensuring the protection of your sensitive information and compliance with relevant regulations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">The Project Kickoff Process</h2>
          <p className="mb-6">
            Once the agreement is signed, we initiate a structured kickoff process to ensure a smooth start:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Kickoff Meeting</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Introduction of key team members, review of project goals, and alignment on communication protocols.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Resource Provisioning</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Setting up necessary access, tools, and environments required for the project.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Project Management Setup</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Configuration of project tracking tools, communication channels, and documentation repositories.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Initial Payment Processing</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Secure handling of deposit or first milestone payment according to the agreed terms.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "The formal agreement process with Zeroday was refreshingly straightforward. They provided a clear contract 
            that protected both parties without excessive legal complexity, and their kickoff process got our security 
            project moving quickly with everyone aligned on goals and expectations."
          </blockquote>
          <div className="mt-4 font-medium">
            — COO, Healthcare Technology Provider
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default FormalAgreement;
