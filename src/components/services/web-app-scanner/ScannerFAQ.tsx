
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ScannerFAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How does the scanner avoid impacting my production environment?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our scanner is designed to be non-intrusive and safe for production environments. It uses carefully calibrated request rates to avoid overloading your servers and can be scheduled during low-traffic periods. Additionally, it never performs destructive tests that could affect your data integrity or service availability.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I scan applications behind a firewall?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we offer an on-premise scanner option that can be deployed within your network to scan internal applications. Alternatively, you can configure your firewall to allow access from our scanner IP ranges or set up a VPN connection for secure access.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How frequently should I run scans?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For optimal security, we recommend running scans after each significant code deployment. For stable applications, weekly scans are generally sufficient to catch newly discovered vulnerabilities. High-value targets or applications undergoing active development benefit from daily scans.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How does the scanner handle authentication?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our scanner supports various authentication methods, including form-based login, OAuth, API keys, JWT, and custom header-based authentication. You can provide credentials securely, and the scanner will maintain session state throughout the scan to test protected areas of your application.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerFAQ;
