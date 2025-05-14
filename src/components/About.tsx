
import React from 'react';
import { MapPin, Calendar, FileText, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-full opacity-10 absolute -top-10 -left-10 animate-pulse-slow"></div>
              <div className="cyber-card p-8 relative z-10">
                <h3 className="text-2xl font-semibold mb-6">From Local Roots to Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  What started as a bold idea in Sri Lanka has grown into a trusted cybersecurity force serving clients across Japan, Singapore, and beyond.
                </p>
                
                <h4 className="text-lg font-semibold mb-4">We've Delivered:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyber-primary mr-2"></div>
                    <span>Real-time security plugins for eCommerce giants</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyber-primary mr-2"></div>
                    <span>Full DevSecOps pipelines for fast-paced dev teams</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyber-primary mr-2"></div>
                    <span>Red-team-style pentests for enterprises and startups</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-cyber-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">About Zeroday</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Zeroday (Pvt) Ltd is a cybersecurity-first technology company based in Sri Lanka. We're dedicated to delivering secure, scalable, and smart solutions that help businesses innovate with confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-cyber-primary mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Founded</div>
                  <div>March 20, 2025</div>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-cyber-primary mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Registration No</div>
                  <div>PV 00325212</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-cyber-primary mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Head Office</div>
                  <div>Mangala Road, Beliatta, Sri Lanka</div>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-cyber-primary mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Director</div>
                  <div>Chitra Prera Edirisingha</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-cyber-primary/5 dark:bg-cyber-primary/10 rounded-lg border-l-4 border-cyber-primary">
              <h3 className="font-semibold text-xl mb-3">Let's Build a Safer Digital Future</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Empower your business with next-gen cybersecurity solutions. From custom development to complete digital protection — Zeroday has your back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
