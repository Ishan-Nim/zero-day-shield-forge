
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, BarChart, FileText, Users, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransparentCommunication = () => {
  return (
    <InnerPageLayout
      title="Transparent Communication"
      emoji="📡"
      description="Keeping you informed, aligned, and in control throughout our engagement."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Information is Security</h2>
          <p>
            At Zeroday, we believe that effective security isn't just about technical controls—it's about 
            information sharing, clear communication, and mutual understanding. That's why we've built 
            our client relationships around a foundation of transparency that keeps you informed and 
            empowered at every stage of our engagement.
          </p>
          
          <p>
            Our transparent communication approach eliminates the uncertainty and opacity that often 
            surrounds security services. We don't hide behind technical jargon or vague updates—we provide 
            clear, accessible insights into our work, your security posture, and the evolving threat landscape 
            affecting your organization.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">How We Maintain Transparency</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regular Status Updates</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We provide frequent, scheduled updates on project progress, security findings, and ongoing 
                    activities, ensuring you're never left wondering about the status of your security initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <BarChart className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our detailed reports translate technical findings into business-relevant insights, with both 
                    executive summaries and detailed technical documentation to serve different stakeholders.
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
                  <h3 className="font-semibold text-lg mb-2">Clear Documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    From proposals to technical specifications to user guides, our documentation is written in clear, 
                    accessible language with minimal jargon and maximum utility.
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
                  <h3 className="font-semibold text-lg mb-2">Open Access to Our Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We provide direct access to our security experts and project leads, not just account managers, 
                    ensuring your questions are answered by those with the deepest knowledge of your environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Communication Channels</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Client Portal</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Secure, 24/7 access to project status, security dashboards, documentation, and communication history.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Scheduled Meetings</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Regular check-ins and review sessions tailored to your preferences and project requirements.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Real-time Collaboration Tools</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Integration with popular team communication platforms for quick questions and daily updates.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Emergency Notification System</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Immediate alerts and escalation paths for critical security issues requiring urgent attention.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg mb-12">
          <h2 className="text-xl font-bold mb-4">Transparency in Action: Our Communication Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full h-8 w-8 flex items-center justify-center text-cyber-primary font-semibold mr-4">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Project Kickoff</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Clear communication of project scope, timelines, responsibilities, and expectations.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 ml-4 pl-8 py-1">
              <div className="text-sm text-gray-500">Ongoing communication</div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full h-8 w-8 flex items-center justify-center text-cyber-primary font-semibold mr-4">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Weekly Progress Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Regular reports on work completed, upcoming tasks, and any challenges encountered.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 ml-4 pl-8 py-1">
              <div className="text-sm text-gray-500">Ongoing communication</div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full h-8 w-8 flex items-center justify-center text-cyber-primary font-semibold mr-4">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Milestone Reviews</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  In-depth assessment of completed project phases with demonstrations and knowledge transfer.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 ml-4 pl-8 py-1">
              <div className="text-sm text-gray-500">Ongoing communication</div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full h-8 w-8 flex items-center justify-center text-cyber-primary font-semibold mr-4">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Project Completion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Comprehensive final reporting, handover documentation, and transition to ongoing support.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 ml-4 pl-8 py-1">
              <div className="text-sm text-gray-500">Continued relationship</div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full h-8 w-8 flex items-center justify-center text-cyber-primary font-semibold mr-4">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Ongoing Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Regular security reviews, threat intelligence updates, and continuous improvement recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "What I value most about working with Zeroday is that they never leave us in the dark. Their transparent 
            communication means we always know exactly where our security projects stand, what risks we're facing, 
            and what actions are being taken. This level of clarity is invaluable for reporting to our board and 
            making informed security decisions."
          </blockquote>
          <div className="mt-4 font-medium">
            — CISO, Financial Services Company
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Experience the clarity of transparent security communication</h3>
          <p className="mb-4">
            Ready to work with a security partner that keeps you informed and in control? Contact us today to discuss 
            how our transparent communication approach can transform your security operations.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default TransparentCommunication;
