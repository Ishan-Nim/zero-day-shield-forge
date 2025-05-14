
import React from 'react';
import { Network, Code, BarChart4, UserCheck } from 'lucide-react';

const ScannerTechnology: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Advanced Scanning Technology</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Our scanner employs cutting-edge technology to detect vulnerabilities with precision and accuracy.
          </p>
          
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="p-4 rounded-full bg-cyber-primary/10">
                  <Network className="h-12 w-12 text-cyber-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">Dynamic Application Security Testing (DAST)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our scanner operates from the outside, just like a real attacker would, sending requests to your web application and analyzing the responses for vulnerabilities. This "black-box" approach ensures we find the same security issues that malicious actors could exploit.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The DAST engine simulates real-world attacks without causing harm, testing for vulnerabilities like SQL injection, cross-site scripting (XSS), broken authentication, and more. It tests your application in its running state, catching runtime vulnerabilities that static analysis might miss.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="p-4 rounded-full bg-cyber-primary/10">
                  <Code className="h-12 w-12 text-cyber-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">Intelligent Crawling Engine</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our advanced crawler maps your entire web application, discovering hidden endpoints and parameters that might be overlooked. It handles complex JavaScript applications, single-page applications (SPAs), and multi-page applications with equal proficiency.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The crawler respects robots.txt directives and custom crawl rules, letting you control which parts of your application are scanned. It also supports various authentication mechanisms, ensuring that protected areas of your application are thoroughly tested.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="p-4 rounded-full bg-cyber-primary/10">
                  <BarChart4 className="h-12 w-12 text-cyber-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">Risk-Based Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Not all vulnerabilities are created equal. Our risk-based analytics engine scores each finding based on the CVSS (Common Vulnerability Scoring System) and considers contextual factors like exploitability and potential business impact.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  This intelligent prioritization helps your security team focus on the most critical issues first, optimizing remediation efforts. Detailed reporting includes risk trends over time, allowing you to track your security posture improvement.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="p-4 rounded-full bg-cyber-primary/10">
                  <UserCheck className="h-12 w-12 text-cyber-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">False Positive Reduction</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our scanner incorporates advanced verification algorithms to minimize false positives. Each potential vulnerability is double-checked through multiple techniques to ensure it's a genuine security issue.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The system continuously learns from feedback, improving detection accuracy over time. This means you spend less time filtering through noise and more time addressing real security concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerTechnology;
