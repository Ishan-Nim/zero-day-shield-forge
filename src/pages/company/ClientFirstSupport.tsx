
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, MessageSquare, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientFirstSupport = () => {
  return (
    <InnerPageLayout
      title="Client-First Support"
      emoji="🌟"
      description="Our unwavering commitment to your satisfaction and success."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Beyond Standard Support</h2>
          <p>
            At Zeroday, "client-first" isn't just a catchphrase—it's the foundation of our entire approach to service. 
            We understand that cybersecurity is not just about implementing technical solutions; it's about building 
            a trusted partnership that supports your organization's unique security journey.
          </p>
          
          <p>
            Our client-first philosophy means we take the time to truly understand your business objectives, align 
            our security solutions with your goals, and provide responsive, personalized support throughout our 
            relationship. We measure our success by your satisfaction and the tangible value our services bring to 
            your organization.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Elements of Our Client-First Support</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dedicated Support Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Each client is assigned a dedicated team that becomes intimately familiar with your environment, 
                    requirements, and preferences, ensuring continuity in service delivery.
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
                  <h3 className="font-semibold text-lg mb-2">Rapid Response Times</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We prioritize quick responses to your inquiries and concerns, with defined SLAs for different 
                    types of support requests to ensure timely assistance when you need it most.
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
                  <h3 className="font-semibold text-lg mb-2">Multi-Channel Communication</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect with us through your preferred channels—phone, email, chat, or video conferencing—with 
                    options for regular check-ins and review meetings tailored to your preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proactive Service Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We don't wait for issues to arise—our team proactively monitors your security posture, suggests 
                    improvements, and keeps you informed about emerging threats relevant to your industry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Support Commitments</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Response Time Guarantees</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Critical issues: Response within 1 hour<br/>
                  High priority: Response within 4 hours<br/>
                  Standard requests: Response within 24 hours
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Knowledge Transfer</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  We don't just solve problems—we help you understand them. Our support includes clear explanations 
                  and knowledge sharing to build your team's capabilities.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Regular Service Reviews</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Scheduled reviews of our support performance, with transparent metrics and continuous improvement 
                  based on your feedback.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <div>
                <span className="font-medium">Extended Hours Coverage</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Support options beyond standard business hours, including emergency response for critical security incidents.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
              "When we experienced a security incident during a weekend, Zeroday's response was immediate. Their team 
              worked through the night to contain the threat and restore our systems. That level of commitment is rare."
            </blockquote>
            <div className="text-sm font-medium">IT Manager, Healthcare Provider</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
              "What sets Zeroday apart is how they take the time to explain complex security concepts in terms our 
              team can understand. They're building our knowledge, not just maintaining our systems."
            </blockquote>
            <div className="text-sm font-medium">Operations Director, Retail Chain</div>
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Experience our client-first approach firsthand</h3>
          <p className="mb-4">
            Ready to work with a security partner that prioritizes your success? Contact us today to discuss your 
            security challenges and discover how our client-first support can make a difference for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/#contact" 
              className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors text-center"
            >
              Contact Our Support Team
            </Link>
            <Link 
              to="/company/transparent-communication" 
              className="inline-block px-6 py-3 bg-white border border-cyber-primary text-cyber-primary font-medium rounded-md hover:bg-cyber-primary/5 transition-colors text-center"
            >
              Learn About Our Communication
            </Link>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default ClientFirstSupport;
