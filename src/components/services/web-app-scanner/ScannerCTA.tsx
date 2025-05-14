
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ScannerCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Securing Your Web Applications Today</h2>
          <p className="mb-8 text-lg opacity-90">
            Don't wait for attackers to find vulnerabilities in your web applications. Take a proactive approach to security with our Web App Vulnerability Scanner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-white text-cyber-primary hover:bg-gray-100 transition-colors font-semibold py-3 px-8 rounded-md inline-flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <div className="bg-white/20 rounded-full px-6 py-2 inline-flex items-center">
              <span className="font-bold text-2xl mr-2 animate-count">100%</span>
              <span>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerCTA;
