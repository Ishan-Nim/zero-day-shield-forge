
import React from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, MapPin, Users, Lightbulb } from 'lucide-react';

const LocalRoots = () => {
  return (
    <InnerPageLayout
      title="From Local Roots to Global Reach"
      emoji="🌏"
      description="Our journey from Sri Lanka to serving clients worldwide."
    >
      <div className="max-w-3xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Our Global Journey</h2>
          <p>
            Zeroday was founded in Sri Lanka with a vision to provide world-class cybersecurity services that 
            combine local expertise with global standards. What began as a small team of dedicated security 
            professionals has grown into an international operation serving clients across Asia, Europe, and beyond.
          </p>
          
          <p>
            Our Sri Lankan roots give us a unique perspective on building resilient security solutions that work in 
            diverse environments and economic contexts. We've leveraged this foundation to establish strong 
            partnerships in Japan, Singapore, and other key markets where our services help protect critical 
            digital assets from evolving threats.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Our Global Footprint</h2>
          
          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Headquartered in Sri Lanka</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our head office in Beliatta, Sri Lanka serves as our innovation hub and primary development center, 
                    nurturing local talent and driving our technical capabilities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Asian Market Expansion</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've established strong partnerships in Japan and Singapore, providing specialized security services 
                    to financial institutions, technology companies, and government entities.
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
                  <h3 className="font-semibold text-lg mb-2">Global Client Portfolio</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our clients span across multiple continents and industries, giving us diverse experience in addressing 
                    security challenges in various regulatory environments and threat landscapes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyber-primary overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Without Borders</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We leverage global best practices while developing innovative approaches to emerging threats, creating 
                    a unique blend of established methodologies and cutting-edge solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-primary mb-2">15+</div>
              <div className="text-sm text-gray-500 uppercase font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-primary mb-2">500+</div>
              <div className="text-sm text-gray-500 uppercase font-medium">Global Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-primary mb-2">24/7</div>
              <div className="text-sm text-gray-500 uppercase font-medium">International Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-primary mb-2">12</div>
              <div className="text-sm text-gray-500 uppercase font-medium">Languages Supported</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          <h2 className="text-2xl font-bold">Notable Global Solutions</h2>
          
          <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">E-commerce Security Platform for Japanese Market</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Developed and deployed a comprehensive security plugin for Japan's largest online marketplaces, 
              protecting millions of transactions and customer data points daily.
            </p>
            <div className="text-sm font-medium text-cyber-primary">Serving 5+ million customers</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Financial Services Security Architecture in Singapore</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Designed and implemented a zero-trust security architecture for a leading Singaporean financial 
              institution, enabling secure digital transformation while maintaining regulatory compliance.
            </p>
            <div className="text-sm font-medium text-cyber-primary">$10B in assets protected</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Global DevSecOps Pipeline for European Software Company</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Integrated security controls and automated testing into the development pipeline of a European 
              software giant, reducing security incidents by 87% in the first year.
            </p>
            <div className="text-sm font-medium text-cyber-primary">Supporting 300+ developers</div>
          </div>
        </div>

        <div className="border-l-4 border-cyber-primary pl-6 py-2 mb-12">
          <blockquote className="text-lg italic">
            "What impressed us most about Zeroday was their ability to understand our specific regional security 
            challenges while bringing a global perspective to the solutions. They combine local insights with 
            international standards in a way that few security providers can match."
          </blockquote>
          <div className="mt-4 font-medium">
            — CIO, Japanese Financial Services Group
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default LocalRoots;
