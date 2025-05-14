
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ScannerSuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Success Stories</h2>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Leading E-Commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "The Web App Vulnerability Scanner identified a critical SQL injection vulnerability that our previous security tools missed. This could have exposed customer payment data if exploited. The detailed remediation guidance helped us fix the issue within hours."
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  — Security Director, Fortune 500 Retailer
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Healthcare Provider Network</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Integrating the scanner into our CI/CD pipeline has transformed our security posture. We now catch vulnerabilities before code reaches production, saving us countless hours and significantly reducing our risk exposure."
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  — CISO, Regional Healthcare Network
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Financial Services Startup</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "As a fintech startup, security is paramount but resources are limited. The scanner's automated approach and clear reporting allow our small team to maintain enterprise-grade security without dedicated security staff."
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  — CTO, Fintech Startup
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerSuccessStories;
