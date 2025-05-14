
import React from 'react';
import { FileKey, Code, Shield, Lock } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SecureDevelopment: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="Secure Development"
      serviceIcon={<FileKey className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Building security into every line of code, from concept to deployment and beyond for resilient applications."
      whatWeDo="Our Secure Development service embeds security throughout the entire software development lifecycle, creating applications that are resilient by design. We combine secure coding practices, automated security testing, architectural reviews, and developer training to produce software that withstands modern security threats. Whether you're building new applications or enhancing existing ones, our approach ensures security is considered from initial design through deployment and maintenance. We work with your development teams to increase security awareness and capabilities while maintaining development velocity and innovation."
      howWeDoIt={[
        {
          title: "Security Requirements Definition",
          description: "We help define clear security requirements and acceptance criteria at the beginning of the development process based on threat modeling and risk assessment."
        },
        {
          title: "Secure Design Review",
          description: "Our security architects review application designs to identify potential security issues early, when they're least expensive to address."
        },
        {
          title: "Secure Coding Guidelines and Training",
          description: "We provide language-specific secure coding guidelines and hands-on training to equip developers with the knowledge to write secure code."
        },
        {
          title: "Automated Security Testing",
          description: "We implement comprehensive automated security testing including SAST, DAST, SCA, and container security checks integrated into your development pipeline."
        },
        {
          title: "Manual Security Reviews",
          description: "Our security experts conduct targeted manual code reviews and penetration tests to identify vulnerabilities that automated tools might miss."
        },
        {
          title: "Secure Deployment Practices",
          description: "We implement secure configuration management, secrets handling, and deployment automation to maintain security through to production."
        }
      ]}
      benefits={[
        "Reduced security vulnerabilities in production applications",
        "Lower remediation costs by catching security issues early in development",
        "Faster time-to-market with fewer security-related delays",
        "Enhanced developer security awareness and skills",
        "Consistent security approach across applications and development teams",
        "Demonstrable security assurance for customers and partners",
        "Improved ability to respond to new threats and vulnerabilities"
      ]}
    />
  );
};

export default SecureDevelopment;
