
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, CheckCircle, Users, FileText } from 'lucide-react';

const DiscoveryScopeDefinition = () => {
  return (
    <InnerPageLayout
      title="Discovery & Scope Definition"
      emoji="🔍"
      description="The first and crucial step in our cybersecurity engagement process."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Understanding Your Security Needs</h2>
          <p>
            At Zeroday, we believe that effective security solutions begin with a thorough understanding of your 
            unique business challenges. Our Discovery & Scope Definition phase is designed to establish a solid 
            foundation for our collaboration, ensuring that we deliver solutions tailored specifically to your needs.
          </p>
          
          <p>
            During this initial phase, our team of security experts works closely with you to 
            understand your organization's structure, technical environment, existing security measures, 
            and most importantly—your security goals and concerns.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Our Discovery Process</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We begin with a comprehensive consultation to understand your business objectives, security 
                    concerns, compliance requirements, and technical environment.
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
                  <h3 className="font-semibold text-lg mb-2">Stakeholder Interviews</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We conduct targeted interviews with key stakeholders to gather different perspectives on 
                    your security needs, priorities, and challenges.
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
                  <h3 className="font-semibold text-lg mb-2">Scope Documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We document a clear, comprehensive scope that outlines the systems, applications, networks, 
                    and processes to be included in our security services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scope Validation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We review the defined scope with you to ensure alignment with your expectations and 
                    make any necessary adjustments before proceeding to the next phase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Our Discovery Process Matters</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Ensures we address your actual security challenges, not generic problems</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Helps establish clear expectations about deliverables, timelines, and outcomes</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Prevents scope creep and unexpected costs during project execution</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span>Creates a foundation for measuring success and demonstrating value</span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "The thoroughness of Zeroday's discovery process gave us confidence that they truly understood our unique security challenges. Their attention to detail during the scoping phase resulted in a solution that perfectly addressed our needs."
          </blockquote>
          <div className="mt-4 font-medium">
            — CTO, Financial Services Company
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default DiscoveryScopeDefinition;
