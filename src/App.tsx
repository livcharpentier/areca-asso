import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import MembersPage from "./pages/MembersPage";
import MemberCategoryPage from "./pages/MemberCategoryPage";
import MemberProfilePage from "./pages/MemberProfilePage";
import MinorsEmploymentPage from "./pages/MinorsEmploymentPage";
import VHSSPage from "./pages/VHSSPage";
import ResourcesPage from "./pages/ResourcesPage";
import FormationsPage from "./pages/FormationsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import CalendrierPage from "./pages/CalendrierPage";
import CompteRenduPage from "./pages/CompteRenduPage";
import ProductionPage from "./pages/ProductionPage";
import ParentsPage from "./pages/ParentsPage";
import ResponsablesPage from "./pages/ResponsablesPage";
import DocumentsPage from "./pages/DocumentsPage";
import Auth from "./pages/Auth";
import MyProfilePage from "./pages/MyProfilePage";
import FAQPage from "./pages/FAQPage";
import ChartePage from "./pages/ChartePage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/members/:category" element={<MemberCategoryPage />} />
            <Route path="/member/:slug" element={<MemberProfilePage />} />
            <Route path="/minors-employment" element={<MinorsEmploymentPage />} />
            <Route path="/vhss" element={<VHSSPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calendrier" element={<CalendrierPage />} />
            <Route path="/compte-rendu" element={<CompteRenduPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/responsables" element={<ResponsablesPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/mon-profil" element={<ProtectedRoute><MyProfilePage /></ProtectedRoute>} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/charte" element={<ChartePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
