
import React from 'react';
import { Code, Bell, FileWarning, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ScannerIntegration: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Seamless Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyber-primary/10 p-3 mr-4">
                    <Code className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">CI/CD Pipeline Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Integrate with Jenkins, GitHub Actions, GitLab CI, and other CI/CD platforms to automate security testing as part of your development process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyber-primary/10 p-3 mr-4">
                    <Bell className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Notification Systems</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connect with Slack, Microsoft Teams, email systems, and SMS gateways for instant vulnerability alerts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyber-primary/10 p-3 mr-4">
                    <FileWarning className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Issue Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automatically create tickets in Jira, Trello, Asana, or other project management tools when vulnerabilities are detected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyber-primary/10 p-3 mr-4">
                    <AlertTriangle className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Security Monitoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Integrate with SIEM systems like Splunk, ELK Stack, or security dashboards for comprehensive security monitoring.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerIntegration;
