
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, FileText, FileCheck, CheckCircle } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-10 w-10 text-cyber-primary" />,
      number: "01",
      title: "Discovery & Scope Definition",
      description: "We begin by understanding your business, goals, and challenges. Our experts collaborate with you to define a clear project scope and gather all essential details."
    },
    {
      icon: <FileText className="h-10 w-10 text-cyber-primary" />,
      number: "02",
      title: "Custom Quotation & Clear Invoicing",
      description: "You'll receive a personalized quote based on your exact needs — fully transparent, no surprises."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-cyber-primary" />,
      number: "03",
      title: "Formal Agreement & Project Kickoff",
      description: "We sign a formal agreement outlining deliverables, timelines, and responsibilities. Once approved, we begin with milestone-based or upfront payment."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-cyber-primary" />,
      number: "04",
      title: "Secure Delivery with Full Support",
      description: "Your solution is developed, tested, and delivered with precision. Post-launch, we stay by your side with continued support."
    }
  ];

  return (
    <section id="how-we-work" className="section-padding bg-gradient-to-br from-cyber-primary/5 to-cyber-secondary/5">
      <div className="container container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">How We Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our proven process ensures smooth collaboration, timely delivery, and exceptional results for your cybersecurity needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="cyber-card p-8 relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cyber-primary/10 flex items-center justify-center font-mono font-bold">
                {step.number}
              </div>
              <div className="mb-6 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-cyber-primary hover:bg-cyber-accent text-white px-8 py-6 text-lg">
            Start Your Security Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
