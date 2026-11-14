import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import MetierPage from "./pages/MetierPage";
import MembersPage from "./pages/MembersPage";
import MemberCategoryPage from "./pages/MemberCategoryPage";
import MemberProfilePage from "./pages/MemberProfilePage";
import FormationsPage from "./pages/FormationsPage";
import ContactPage from "./pages/ContactPage";
import ProductionPage from "./pages/ProductionPage";
import ParentsPage from "./pages/ParentsPage";
import EspaceMembres from "./pages/EspaceMembres";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import MyProfilePage from "./pages/MyProfilePage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

// Redirections pour les anciennes URLs
import { Navigate } from "react-router-dom";

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
            <Route path="/metier" element={<MetierPage />} />
            {/* Redirections anciennes URLs */}
            <Route path="/about" element={<Navigate to="/metier" replace />} />
            <Route path="/charte" element={<Navigate to="/metier" replace />} />
            <Route path="/faq" element={<Navigate to="/contact" replace />} />
            <Route path="/news" element={<Navigate to="/" replace />} />
            <Route path="/minors-employment" element={<Navigate to="/production" replace />} />
            {/* Pages actives */}
            <Route path="/members" element={<MembersPage />} />
            <Route path="/members/:category" element={<MemberCategoryPage />} />
            <Route path="/member/:slug" element={<MemberProfilePage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/responsables" element={<EspaceMembres />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/auth" element={<Navigate to="/responsables" replace />} />
            <Route path="/mon-profil" element={<ProtectedRoute><MyProfilePage /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
