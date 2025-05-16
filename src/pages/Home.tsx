
import React from 'react';
import StaticLayout from '@/components/CustomerPanelLayout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Shield, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <StaticLayout>
      <div className="space-y-6">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ZeroDay.Security</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional cybersecurity services to protect your digital assets.
            </p>
            <Button size="lg" className="bg-cyber-primary hover:bg-cyber-primary/90">
              Learn More
            </Button>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-cyber-primary/10">
                    <Shield className="h-8 w-8 text-cyber-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Web App Security</CardTitle>
                <CardDescription className="text-center">
                  Protect your web applications from vulnerabilities and attacks.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>Our comprehensive scanning and testing identifies vulnerabilities before hackers do.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-cyber-primary/10">
                    <Zap className="h-8 w-8 text-cyber-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Penetration Testing</CardTitle>
                <CardDescription className="text-center">
                  In-depth security assessments by expert professionals.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>We simulate real-world attacks to find security gaps in your systems.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-cyber-primary/10">
                    <Lock className="h-8 w-8 text-cyber-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Security Audits</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive review of your security posture.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>Get a detailed report on your security strengths and areas for improvement.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 bg-muted rounded-lg">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to secure your business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our cybersecurity services can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Sales</Button>
              <Button size="lg" variant="outline">View Services</Button>
            </div>
          </div>
        </section>
      </div>
    </StaticLayout>
  );
};

export default Home;
