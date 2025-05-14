
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import VulnerabilityAssessment from "./pages/services/VulnerabilityAssessment";
import PluginDevelopment from "./pages/services/PluginDevelopment";
import PenetrationTesting from "./pages/services/PenetrationTesting";
import DataProtection from "./pages/services/DataProtection";
import DevSecOpsIntegration from "./pages/services/DevSecOpsIntegration";
import SecurityArchitecture from "./pages/services/SecurityArchitecture";
import ComplianceSolutions from "./pages/services/ComplianceSolutions";
import SecureDevelopment from "./pages/services/SecureDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessment />} />
          <Route path="/services/plugin-development" element={<PluginDevelopment />} />
          <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/services/data-protection" element={<DataProtection />} />
          <Route path="/services/devsecops-integration" element={<DevSecOpsIntegration />} />
          <Route path="/services/security-architecture" element={<SecurityArchitecture />} />
          <Route path="/services/compliance-solutions" element={<ComplianceSolutions />} />
          <Route path="/services/secure-development" element={<SecureDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
