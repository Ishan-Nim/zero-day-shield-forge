
import React from 'react';

const ScannerReporting: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Report Generation</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
            Each report includes comprehensive details to help you understand and address vulnerabilities:
          </p>
          
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-3">Executive Summary</h3>
              <p className="text-gray-600 dark:text-gray-400">High-level overview of detected issues with severity levels.</p>
            </div>
            
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-3">Technical Breakdown</h3>
              <p className="text-gray-600 dark:text-gray-400">In-depth details of each vulnerability, affected endpoints, and proof-of-concept examples.</p>
            </div>
            
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-3">Risk Assessment</h3>
              <p className="text-gray-600 dark:text-gray-400">Severity ratings based on CVSS and exploitability context.</p>
            </div>
            
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-3">Remediation Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">Actionable steps to fix or mitigate each vulnerability.</p>
            </div>
            
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-lg mb-3">Compliance Mapping</h3>
              <p className="text-gray-600 dark:text-gray-400">Identify how vulnerabilities relate to standards like OWASP, PCI-DSS, HIPAA, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerReporting;
