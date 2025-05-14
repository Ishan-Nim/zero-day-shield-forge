
import React from 'react';
import { Database, Lock, Shield, FileKey } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const DataProtection: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="Data Protection"
      serviceIcon={<Database className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Advanced encryption and security protocols to keep your sensitive information safe from breaches and unauthorized access."
      whatWeDo="Our Data Protection service provides comprehensive solutions to safeguard your organization's sensitive information throughout its lifecycle. We implement robust data security strategies that encompass identification, classification, encryption, access control, and monitoring of critical data assets. Our approach addresses both technical controls and governance frameworks to ensure your data remains protected whether at rest, in transit, or in use. We tailor our solutions to your specific regulatory requirements, risk tolerance, and business objectives to create a balanced data protection program that enables secure business operations."
      howWeDoIt={[
        {
          title: "Data Discovery and Classification",
          description: "We identify and categorize your sensitive data across all environments, establishing a clear understanding of what needs protection and at what level."
        },
        {
          title: "Risk Assessment and Strategy Development",
          description: "Our experts analyze potential threats and vulnerabilities to your data, developing a comprehensive protection strategy aligned with your business objectives."
        },
        {
          title: "Security Controls Implementation",
          description: "We deploy appropriate technical controls including encryption, access management, data loss prevention, and database security measures tailored to your environment."
        },
        {
          title: "Monitoring and Detection Setup",
          description: "We implement systems to continuously monitor data access patterns and detect potential breaches or policy violations in real-time."
        },
        {
          title: "Incident Response Planning",
          description: "We develop and test data breach response procedures to ensure rapid and effective action in the event of a security incident."
        },
        {
          title: "Compliance and Governance",
          description: "Our team establishes policies, procedures, and governance frameworks to maintain ongoing compliance with relevant data protection regulations."
        }
      ]}
      benefits={[
        "Reduced risk of data breaches and associated financial and reputational damages",
        "Enhanced compliance with data protection regulations like GDPR, HIPAA, PCI DSS, and others",
        "Greater visibility and control over sensitive data across your organization",
        "Improved ability to detect and respond to data security incidents",
        "Increased customer and partner trust through demonstrable data security measures",
        "Balanced security approach that protects data while enabling business operations",
        "Ongoing advisory support to adapt to evolving data protection challenges"
      ]}
    />
  );
};

export default DataProtection;
