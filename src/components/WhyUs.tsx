
import React from 'react';
import { ShieldCheck, Zap, Star, MessageSquare } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, emoji, title, description }) => {
  return (
    <div className="cyber-card p-6 border-t-4 border-cyber-primary">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl">{emoji}</div>
        <div className="bg-cyber-primary/10 p-2 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyber-primary" />,
      emoji: "🔒",
      title: "Security-First Philosophy",
      description: "We don't just develop software — we embed security at every stage. Whether you're scaling fast or tightening defenses, Zeroday is built to protect."
    },
    {
      icon: <Zap className="h-6 w-6 text-cyber-primary" />,
      emoji: "⚡",
      title: "Fast, Flexible Payments",
      description: "Easy, secure, and tailored to your workflow — no delays, no hidden fees."
    },
    {
      icon: <Star className="h-6 w-6 text-cyber-primary" />,
      emoji: "🌟",
      title: "Client-First Support",
      description: "With a proven track record and glowing feedback, we deliver value, not just code."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-cyber-primary" />,
      emoji: "📡",
      title: "Transparent Communication",
      description: "From kickoff to delivery, we keep you informed, aligned, and in control."
    }
  ];
  
  return (
    <section id="why-us" className="section-padding">
      <div className="container container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Why Zeroday?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              When it comes to your digital security, you deserve nothing but the best. Here's why leading organizations trust Zeroday to secure their most valuable assets.
            </p>
            
            <div className="bg-cyber-primary/5 dark:bg-cyber-primary/10 p-6 rounded-lg border-l-4 border-cyber-primary mb-8">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                "Zeroday transformed our security posture with their proactive approach. They don't just fix problems—they prevent them."
              </blockquote>
              <div className="mt-4 font-medium">
                - CTO, Leading Financial Institution
              </div>
            </div>
            
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-cyber-primary">98%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-cyber-primary">500+</div>
                <div className="text-sm text-gray-500">Vulnerabilities Fixed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-cyber-primary">24/7</div>
                <div className="text-sm text-gray-500">Expert Support</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                emoji={feature.emoji}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
