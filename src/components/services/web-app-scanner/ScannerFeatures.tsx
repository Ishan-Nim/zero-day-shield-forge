
import React from 'react';
import { Clock, Shield, Settings, Cloud, Radio, Lock, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Clock className="h-6 w-6 text-cyber-primary" />,
    title: "Automated Scanning",
    description: "Schedule regular scans or run them on-demand to detect vulnerabilities in real time."
  },
  {
    icon: <Shield className="h-6 w-6 text-cyber-primary" />,
    title: "OWASP Top 10 Coverage",
    description: "Identifies risks like SQL injection, XSS, broken authentication, security misconfigurations, and more."
  },
  {
    icon: <Settings className="h-6 w-6 text-cyber-primary" />,
    title: "Custom Scan Rules",
    description: "Fine-tune your scan configurations to suit your specific web environments."
  },
  {
    icon: <Cloud className="h-6 w-6 text-cyber-primary" />,
    title: "Cloud & On-Premise Support",
    description: "Scan apps hosted in the cloud or on your own servers."
  },
  {
    icon: <Radio className="h-6 w-6 text-cyber-primary" />,
    title: "Multi-Page & SPA Support",
    description: "Detect vulnerabilities in complex, multi-page applications and single-page applications (SPAs)."
  },
  {
    icon: <Lock className="h-6 w-6 text-cyber-primary" />,
    title: "Authentication Handling",
    description: "Supports cookie/session/token-based login workflows."
  },
  {
    icon: <Bell className="h-6 w-6 text-cyber-primary" />,
    title: "Instant Alerts",
    description: "Get real-time alerts via email or Slack on high-risk findings."
  }
];

const ScannerFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-t-4 border-cyber-primary">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-cyber-primary/10 p-3 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerFeatures;
