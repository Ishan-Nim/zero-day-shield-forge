
import React from 'react';
import { Server, Shield, FileText, Lock } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SecurityArchitecture: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="Security Architecture"
      serviceIcon={<Server className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Design and implementation of robust security frameworks tailored to your organization's specific needs and risk profile."
      whatWeDo="Our Security Architecture service provides comprehensive design and implementation of security frameworks that protect your organization's assets while enabling business objectives. We develop holistic security architectures that address technology, processes, and people aspects, creating defense-in-depth strategies tailored to your specific threat landscape and risk tolerance. Our architects bring deep expertise across network security, cloud security, application security, identity and access management, and data protection to create integrated security ecosystems that provide both protection and operational efficiency."
      howWeDoIt={[
        {
          title: "Current State Assessment",
          description: "We thoroughly evaluate your existing security architecture, identifying strengths, weaknesses, and gaps against business requirements and industry standards."
        },
        {
          title: "Threat Modeling and Risk Analysis",
          description: "Our experts analyze potential threats to your organization, conducting risk assessments to determine appropriate security controls and prioritization."
        },
        {
          title: "Architecture Design",
          description: "We develop comprehensive security architecture blueprints encompassing network segmentation, access controls, encryption, monitoring, and other security domains."
        },
        {
          title: "Reference Architecture Development",
          description: "We create detailed reference architectures for specific technology environments (cloud, on-premises, hybrid) with standardized security patterns and controls."
        },
        {
          title: "Implementation Planning",
          description: "We develop phased implementation roadmaps that balance security improvements with operational constraints and business priorities."
        },
        {
          title: "Governance and Oversight",
          description: "We establish architectural review processes, security standards, and governance frameworks to maintain architectural integrity over time."
        }
      ]}
      benefits={[
        "Comprehensive security strategy aligned with business objectives and risk tolerance",
        "Defense-in-depth protection against sophisticated and evolving threats",
        "Standardized security patterns that enable consistent implementation across the enterprise",
        "Improved operational efficiency through well-designed security controls",
        "Reduced complexity and security technical debt through architectural rationalization",
        "Enhanced ability to adapt to changing business and regulatory requirements",
        "Strategic roadmap for security investments with clear business value"
      ]}
    />
  );
};

export default SecurityArchitecture;
