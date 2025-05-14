
import React from 'react';
import { Lock, FileCheck, ShieldCheck, FileText } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const ComplianceSolutions: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="Compliance Solutions"
      serviceIcon={<FileCheck className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Navigate complex regulatory requirements with our expert guidance and implementation support for comprehensive compliance."
      whatWeDo="Our Compliance Solutions service helps organizations navigate complex regulatory landscapes and industry standards while building effective security programs that satisfy compliance requirements. We provide end-to-end support for compliance initiatives including readiness assessments, gap analysis, remediation planning, control implementation, documentation, and audit preparation. Our approach focuses on creating sustainable compliance programs that integrate with your business operations rather than standalone checkbox exercises. We specialize in various frameworks including ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and industry-specific regulations."
      howWeDoIt={[
        {
          title: "Compliance Scope and Requirements Analysis",
          description: "We help determine which regulations apply to your organization and define the specific requirements and scope for compliance efforts."
        },
        {
          title: "Gap Assessment and Risk Analysis",
          description: "Our experts conduct thorough assessments of your current controls against compliance requirements, identifying gaps and associated risks."
        },
        {
          title: "Remediation Planning and Roadmap Development",
          description: "We create prioritized roadmaps to address compliance gaps with practical, risk-based remediation strategies aligned with your resources."
        },
        {
          title: "Control Implementation Support",
          description: "We provide technical and procedural guidance to implement required security controls efficiently and effectively."
        },
        {
          title: "Documentation and Evidence Collection",
          description: "Our team develops and organizes comprehensive compliance documentation and evidence to demonstrate adherence to requirements."
        },
        {
          title: "Audit Preparation and Support",
          description: "We prepare your team for compliance audits through readiness assessments, mock audits, and direct support during actual audits."
        }
      ]}
      benefits={[
        "Reduced risk of compliance violations and associated penalties",
        "Strategic approach to compliance that supports business operations",
        "Cost-effective implementation of controls that satisfy multiple compliance frameworks",
        "Enhanced customer and partner trust through demonstrated compliance",
        "Improved security posture as a natural outcome of compliance efforts",
        "Streamlined audit processes with prepared documentation and evidence",
        "Ongoing advisory support to adapt to evolving compliance requirements"
      ]}
    />
  );
};

export default ComplianceSolutions;
