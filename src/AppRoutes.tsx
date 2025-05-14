
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import DiscoveryScopeDefinition from './pages/company/DiscoveryScopeDefinition';
import CustomQuotation from './pages/company/CustomQuotation';
import FormalAgreement from './pages/company/FormalAgreement';
import SecureDelivery from './pages/company/SecureDelivery';
import LocalRoots from './pages/company/LocalRoots';
import SecurityFirstPhilosophy from './pages/company/SecurityFirstPhilosophy';
import FlexiblePayments from './pages/company/FlexiblePayments';
import ClientFirstSupport from './pages/company/ClientFirstSupport';
import TransparentCommunication from './pages/company/TransparentCommunication';
import VulnerabilityAssessment from './pages/services/VulnerabilityAssessment';
import PluginDevelopment from './pages/services/PluginDevelopment';
import PenetrationTesting from './pages/services/PenetrationTesting';
import DataProtection from './pages/services/DataProtection';
import DevSecOpsIntegration from './pages/services/DevSecOpsIntegration';
import SecurityArchitecture from './pages/services/SecurityArchitecture';
import ComplianceSolutions from './pages/services/ComplianceSolutions';
import SecureDevelopment from './pages/services/SecureDevelopment';
import WebAppVulnerabilityScanner from './pages/services/WebAppVulnerabilityScanner';
import CustomerPanel from './pages/CustomerPanel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/customer-panel" element={<CustomerPanel />} />
      
      {/* Company Pages */}
      <Route path="/company/discovery-scope" element={<DiscoveryScopeDefinition />} />
      <Route path="/company/custom-quotation" element={<CustomQuotation />} />
      <Route path="/company/formal-agreement" element={<FormalAgreement />} />
      <Route path="/company/secure-delivery" element={<SecureDelivery />} />
      <Route path="/company/local-roots" element={<LocalRoots />} />
      <Route path="/company/security-first" element={<SecurityFirstPhilosophy />} />
      <Route path="/company/flexible-payments" element={<FlexiblePayments />} />
      <Route path="/company/client-support" element={<ClientFirstSupport />} />
      <Route path="/company/transparent-communication" element={<TransparentCommunication />} />
      
      {/* Service Pages */}
      <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessment />} />
      <Route path="/services/plugin-development" element={<PluginDevelopment />} />
      <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
      <Route path="/services/data-protection" element={<DataProtection />} />
      <Route path="/services/devsecops-integration" element={<DevSecOpsIntegration />} />
      <Route path="/services/security-architecture" element={<SecurityArchitecture />} />
      <Route path="/services/compliance-solutions" element={<ComplianceSolutions />} />
      <Route path="/services/secure-development" element={<SecureDevelopment />} />
      <Route path="/services/web-app-scanner" element={<WebAppVulnerabilityScanner />} />
      
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
