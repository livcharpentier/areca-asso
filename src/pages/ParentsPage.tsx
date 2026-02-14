import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HealthMonitoring from "@/components/HealthMonitoring";
import ArtistSalaries from "@/components/ArtistSalaries";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Coins, Briefcase } from "lucide-react";

const ParentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Espace Parents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Informations essentielles pour les parents d'enfants dans le cinéma et l'audiovisuel
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="suivi-sante" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="suivi-sante" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <Coins className="h-4 w-4" />
                <span className="hidden sm:inline">Salaires Artistes</span>
              </TabsTrigger>
              <TabsTrigger value="fiche-metier" className="gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Fiche Métier</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="suivi-sante">
              <HealthMonitoring />
            </TabsContent>

            <TabsContent value="salaires">
              <ArtistSalaries />
            </TabsContent>

            <TabsContent value="fiche-metier">
              <ChildSupervisorRole />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParentsPage;
