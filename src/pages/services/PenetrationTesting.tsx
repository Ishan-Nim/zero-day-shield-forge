
import React from 'react';
import { Bug, Radio, ShieldX, FileSearch } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const PenetrationTesting: React.FC = () => {
  return (
    <ServicePageLayout
      serviceTitle="Penetration Testing"
      serviceIcon={<Bug className="h-8 w-8 text-white" />}
      bannerImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
      description="Real-world attack simulations that uncover and address vulnerabilities before malicious actors can exploit them."
      whatWeDo="Our penetration testing service provides comprehensive security assessments that go beyond automated scanning by actively attempting to exploit vulnerabilities in your systems. Our certified ethical hackers simulate real-world attack scenarios to identify security weaknesses, validate existing controls, and provide actionable recommendations for improving your security posture. We offer various types of penetration tests including network, web application, mobile application, API, cloud infrastructure, and social engineering assessments, all customized to your specific environment and security concerns."
      howWeDoIt={[
        {
          title: "Scope Definition and Planning",
          description: "We work with you to define the scope, objectives, and constraints of the penetration test, establishing clear rules of engagement and success criteria."
        },
        {
          title: "Reconnaissance and Information Gathering",
          description: "Our team collects information about target systems using both passive and active techniques, similar to how real attackers would prepare for an attack."
        },
        {
          title: "Vulnerability Identification",
          description: "We identify potential vulnerabilities through manual testing and specialized tools, looking for security weaknesses that could be exploited."
        },
        {
          title: "Exploitation and Privilege Escalation",
          description: "Our ethical hackers attempt to exploit discovered vulnerabilities to gain access and escalate privileges, documenting successful attack paths."
        },
        {
          title: "Post-Exploitation Analysis",
          description: "We assess the potential impact of successful exploits, including data access, lateral movement capabilities, and persistence opportunities."
        },
        {
          title: "Comprehensive Reporting",
          description: "We provide detailed reports with executive summaries, technical findings, exploitation proof, risk assessments, and prioritized remediation recommendations."
        }
      ]}
      benefits={[
        "Identification of real-world security vulnerabilities before attackers find them",
        "Validation of existing security controls and their effectiveness",
        "Clear understanding of potential attack paths and their business impact",
        "Prioritized remediation guidance based on exploitability and risk",
        "Compliance support for various regulatory frameworks requiring security testing",
        "Security awareness improvement through demonstration of attack scenarios",
        "Third-party validation of your security posture"
      ]}
    />
  );
};

export default PenetrationTesting;
