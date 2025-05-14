
import React from 'react';
import { Cpu, Code, FileCode, Shield } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const DevSecOpsIntegration: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="DevSecOps Integration"
      serviceIcon={<Cpu className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Seamlessly integrate security directly into your CI/CD pipelines for agile, threat-resistant development processes."
      whatWeDo="Our DevSecOps Integration service embeds security throughout your software development lifecycle, transforming security from a bottleneck into an enabler of rapid, secure delivery. We integrate automated security testing, compliance verification, and security gates into your CI/CD pipelines, enabling early detection and remediation of security issues. Our approach balances security requirements with development velocity, ensuring your teams can deliver secure code at the speed your business demands. We provide the tools, processes, and cultural guidance needed to successfully implement DevSecOps practices across your organization."
      howWeDoIt={[
        {
          title: "Assessment and Roadmap Development",
          description: "We assess your current development practices and security requirements to create a tailored DevSecOps implementation roadmap."
        },
        {
          title: "Tool Selection and Integration",
          description: "We help select and integrate the right security tools into your development pipeline, including SAST, DAST, SCA, and container security."
        },
        {
          title: "Pipeline Security Implementation",
          description: "Our experts implement automated security testing, vulnerability management, and compliance checks at appropriate stages in your CI/CD pipeline."
        },
        {
          title: "Security as Code Practice",
          description: "We help implement infrastructure as code security, policy as code, and other automation practices to ensure consistent security controls."
        },
        {
          title: "Security Champions Program",
          description: "We establish and train security champions within development teams to foster security awareness and serve as bridges between security and development."
        },
        {
          title: "Metrics and Continuous Improvement",
          description: "We implement metrics to track security posture, remediation effectiveness, and development velocity to drive continuous improvement."
        }
      ]}
      benefits={[
        "Early detection and remediation of security vulnerabilities, reducing cost and impact",
        "Accelerated software delivery with built-in security assurance",
        "Consistent application of security controls across all applications and environments",
        "Improved collaboration between development, operations, and security teams",
        "Demonstrable security and compliance for auditors and customers",
        "Reduced security technical debt through continuous remediation",
        "Enhanced security awareness and ownership among development teams"
      ]}
    />
  );
};

export default DevSecOpsIntegration;
