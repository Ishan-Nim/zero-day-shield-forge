
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityFirstPhilosophy = () => {
  return (
    <InnerPageLayout
      title="Security-First Philosophy"
      emoji="🔒"
      description="Why security is at the core of everything we do."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Our Foundational Belief</h2>
          <p>
            At Zeroday, security isn't just a service we offer—it's the foundation of our entire approach to 
            technology. We believe that security must be built into every process, product, and service from 
            the very beginning, not added as an afterthought once vulnerabilities have already been introduced.
          </p>
          
          <p>
            This security-first mindset permeates everything we do, from how we develop solutions to how we 
            structure our own internal operations. We're committed to this philosophy because we understand 
            that in today's threat landscape, reactive security measures are simply not enough to protect 
            what matters most.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">What "Security-First" Means to Us</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proactive Protection</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We anticipate threats and build defenses before attacks occur, focusing on prevention rather 
                    than just detection and response.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Security by Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We integrate security controls into the earliest stages of solution design and development, 
                    making security an inherent property rather than an added feature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Eye className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Continuous Vigilance</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We maintain constant awareness of the evolving threat landscape and regularly update our 
                    approaches to address new vulnerabilities and attack vectors.
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
                  <h3 className="font-semibold text-lg mb-2">Rigorous Standards</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We adhere to the highest security standards and best practices in the industry, often 
                    exceeding compliance requirements to ensure truly robust protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Security Principles</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span><strong>Defense in Depth:</strong> We implement multiple layers of security controls to ensure that if one fails, others remain to protect your assets.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span><strong>Least Privilege:</strong> We ensure access rights are limited to the minimum necessary to perform required functions, reducing potential attack surfaces.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span><strong>Zero Trust:</strong> We design solutions with the assumption that threats may exist both outside and inside the network perimeter.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span><strong>Privacy by Default:</strong> We incorporate data protection and privacy controls automatically, not as optional features.</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyber-primary/10 p-1 rounded-full mr-3 mt-1">
                <CheckCircle className="h-4 w-4 text-cyber-primary" />
              </div>
              <span><strong>Security Education:</strong> We believe in empowering clients with the knowledge to maintain strong security postures beyond our direct involvement.</span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "Zeroday's security-first approach has fundamentally changed how we think about our digital infrastructure. 
            Rather than treating security as a checkbox exercise, they've helped us make it central to our 
            technology strategy and organizational culture."
          </blockquote>
          <div className="mt-4 font-medium">
            — CISO, Enterprise Software Company
          </div>
        </div>
        
        <div className="bg-cyber-primary/5 p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Experience the difference of a truly security-first partner</h3>
          <p className="mb-4">
            Discover how our foundational commitment to security can transform your organization's security posture. 
            Whether you're starting from scratch or enhancing existing defenses, our approach ensures protection 
            is built in—not bolted on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/#contact" 
              className="inline-block px-6 py-3 bg-cyber-primary text-white font-medium rounded-md hover:bg-cyber-accent transition-colors text-center"
            >
              Contact Our Security Team
            </Link>
            <Link 
              to="/services/vulnerability-assessment" 
              className="inline-block px-6 py-3 bg-white border border-cyber-primary text-cyber-primary font-medium rounded-md hover:bg-cyber-primary/5 transition-colors text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default SecurityFirstPhilosophy;
