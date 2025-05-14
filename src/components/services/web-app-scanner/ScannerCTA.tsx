
import React from 'react';

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
            <button className="bg-white text-cyber-primary hover:bg-gray-100 transition-colors font-semibold py-3 px-8 rounded-md">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors text-white font-semibold py-3 px-8 rounded-md">
              Request Demo
            </button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. 14-day free trial available for all plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScannerCTA;
