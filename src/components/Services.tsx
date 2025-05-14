
import React from 'react';
import { Shield, Code, Database, Cpu, Lock, Server, Radio, FileKey, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, url }) => {
  return (
    <Link to={url} className="block">
      <div className="cyber-card p-6 flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-300 h-full">
        <div className="rounded-full bg-cyber-primary/10 p-3 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield className="h-6 w-6 text-cyber-primary" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and identification of security weaknesses in your systems before they can be exploited.",
      url: "/services/vulnerability-assessment"
    },
    {
      icon: <FileSearch className="h-6 w-6 text-cyber-primary" />,
      title: "Web App Vulnerability Scanner",
      description: "Automated scanning tool to detect and report vulnerabilities in your web applications with detailed reporting.",
      url: "/services/web-app-scanner"
    },
    {
      icon: <Code className="h-6 w-6 text-cyber-primary" />,
      title: "Plugin Development",
      description: "Custom-built security plugins designed to harden your systems at the core and integrate seamlessly.",
      url: "/services/plugin-development"
    },
    {
      icon: <Radio className="h-6 w-6 text-cyber-primary" />,
      title: "Penetration Testing",
      description: "Real-world attack simulations that uncover and address vulnerabilities before hackers do.",
      url: "/services/penetration-testing"
    },
    {
      icon: <Database className="h-6 w-6 text-cyber-primary" />,
      title: "Data Protection",
      description: "Advanced encryption and security protocols to keep your sensitive information safe from breaches.",
      url: "/services/data-protection"
    },
    {
      icon: <Cpu className="h-6 w-6 text-cyber-primary" />,
      title: "DevSecOps Integration",
      description: "We integrate security directly into your CI/CD pipelines for agile, threat-resistant development.",
      url: "/services/devsecops-integration"
    },
    {
      icon: <Server className="h-6 w-6 text-cyber-primary" />,
      title: "Security Architecture",
      description: "Design and implementation of robust security frameworks tailored to your organization's needs.",
      url: "/services/security-architecture"
    },
    {
      icon: <Lock className="h-6 w-6 text-cyber-primary" />,
      title: "Compliance Solutions",
      description: "Navigate complex regulatory requirements with our expert guidance and implementation support.",
      url: "/services/compliance-solutions"
    },
    {
      icon: <FileKey className="h-6 w-6 text-cyber-primary" />,
      title: "Secure Development",
      description: "Building security into every line of code, from concept to deployment and beyond.",
      url: "/services/secure-development"
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our comprehensive range of cybersecurity services designed to protect your digital assets from evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
