import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import HealthMonitoring from "@/components/HealthMonitoring";
import ArtistSalaries from "@/components/ArtistSalaries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Clock, Calendar, Heart, Coins, Briefcase } from "lucide-react";

const ProductionPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Espace Production
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les informations essentielles pour les productions employant des mineurs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="dossier-drieets" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
              <TabsTrigger value="dossier-drieets" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Dossier DRIEETS</span>
              </TabsTrigger>
              <TabsTrigger value="fiche-metier" className="gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Fiche Métier</span>
              </TabsTrigger>
              <TabsTrigger value="temps-travail" className="gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Temps de travail</span>
              </TabsTrigger>
              <TabsTrigger value="suivi-sante" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <Coins className="h-4 w-4" />
                <span className="hidden sm:inline">Salaires Artistes</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dossier-drieets">
              <Tabs defaultValue="calendrier" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="calendrier" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Calendrier Commissions</span>
                  </TabsTrigger>
                  <TabsTrigger value="confection" className="gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Confection du dossier</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="calendrier">
                  <RegionalCalendar />
                </TabsContent>
                <TabsContent value="confection">
                  <DrieetsDossier />
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="fiche-metier">
              <ChildSupervisorRole />
            </TabsContent>

            <TabsContent value="temps-travail">
              <WorkTimeRegulations />
            </TabsContent>

            <TabsContent value="suivi-sante">
              <HealthMonitoring />
            </TabsContent>

            <TabsContent value="salaires">
              <ArtistSalaries />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionPage;
