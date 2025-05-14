
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verification from './pages/auth/Verification';

// Main Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

// Company Pages
import DiscoveryScopeDefinition from './pages/company/DiscoveryScopeDefinition';
import CustomQuotation from './pages/company/CustomQuotation';
import FormalAgreement from './pages/company/FormalAgreement';
import SecureDelivery from './pages/company/SecureDelivery';
import LocalRoots from './pages/company/LocalRoots';
import SecurityFirstPhilosophy from './pages/company/SecurityFirstPhilosophy';
import FlexiblePayments from './pages/company/FlexiblePayments';
import ClientFirstSupport from './pages/company/ClientFirstSupport';
import TransparentCommunication from './pages/company/TransparentCommunication';

// Service Pages
import VulnerabilityAssessment from './pages/services/VulnerabilityAssessment';
import PluginDevelopment from './pages/services/PluginDevelopment';
import PenetrationTesting from './pages/services/PenetrationTesting';
import DataProtection from './pages/services/DataProtection';
import DevSecOpsIntegration from './pages/services/DevSecOpsIntegration';
import SecurityArchitecture from './pages/services/SecurityArchitecture';
import ComplianceSolutions from './pages/services/ComplianceSolutions';
import SecureDevelopment from './pages/services/SecureDevelopment';
import WebAppVulnerabilityScanner from './pages/services/WebAppVulnerabilityScanner';

// Customer Panel Pages
import CustomerPanel from './pages/CustomerPanel';
import CustomerPanelSubscriptions from './pages/CustomerPanelSubscriptions';
import CustomerPanelProducts from './pages/CustomerPanelProducts';
import CustomerPanelInvoices from './pages/CustomerPanelInvoices';
import CustomerPanelSettings from './pages/CustomerPanelSettings';
import CustomerPanelNotifications from './pages/CustomerPanelNotifications';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundPolicy />} />
      
      {/* Auth Routes */}
      <Route 
        path="/auth/login" 
        element={user ? <Navigate to="/customer-panel" replace /> : <Login />} 
      />
      <Route 
        path="/auth/register" 
        element={user ? <Navigate to="/customer-panel" replace /> : <Register />} 
      />
      <Route path="/auth/verification" element={<Verification />} />
      
      {/* Protected Customer Panel Routes */}
      <Route path="/customer-panel" element={
        <ProtectedRoute>
          <CustomerPanel />
        </ProtectedRoute>
      } />
      <Route path="/customer-panel/subscriptions" element={
        <ProtectedRoute>
          <CustomerPanelSubscriptions />
        </ProtectedRoute>
      } />
      <Route path="/customer-panel/products" element={
        <ProtectedRoute>
          <CustomerPanelProducts />
        </ProtectedRoute>
      } />
      <Route path="/customer-panel/invoices" element={
        <ProtectedRoute>
          <CustomerPanelInvoices />
        </ProtectedRoute>
      } />
      <Route path="/customer-panel/settings" element={
        <ProtectedRoute>
          <CustomerPanelSettings />
        </ProtectedRoute>
      } />
      <Route path="/customer-panel/notifications" element={
        <ProtectedRoute>
          <CustomerPanelNotifications />
        </ProtectedRoute>
      } />
      
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
