
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldCheck, ShieldAlert } from "lucide-react";
import GlobeParticles from './GlobeParticles';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-slate-900 overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-cyber-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-cyber-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[20%] w-32 h-32 bg-cyber-accent/10 rounded-full blur-xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNTFBMUIiIGQ9Ik0zNiAxOGMtLjk5NCAwLTEuOTkyLS4wMDItMi45OS0uMDA1bDMtLjAwNUgzNnoiLz48L2c+PC9zdmc+')] bg-[length:30px_30px] opacity-[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in mb-12 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyber-secondary/10 text-cyber-secondary text-sm font-medium mb-2">
              <Shield className="h-4 w-4 mr-2" />
              <span>Cybersecurity Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Innovating Secure</span>
              <span className="gradient-text">Digital Solutions</span>
              <span className="block">for a Smarter, Safer Tomorrow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
              From vulnerability assessments to proactive threat detection, Zeroday is your partner in cybersecurity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-cyber-primary hover:bg-cyber-accent text-white px-8 py-6 text-lg flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">End-to-end Security</span>
              </div>
              <div className="flex items-center">
                <ShieldAlert className="h-5 w-5 text-cyber-secondary mr-2" />
                <span className="text-sm">Threat Detection</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-cyber-primary mr-2" />
                <span className="text-sm">24/7 Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-up relative">
            {/* 3D Particle Globe - positioned as a prominent visual element */}
            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Particle Globe Container with proper z-index and positioning */}
              <div className="absolute inset-0 z-10">
                <div className="relative w-full h-full">
                  <GlobeParticles />
                </div>
              </div>
              
              {/* Background glow effects for the globe */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-full opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
