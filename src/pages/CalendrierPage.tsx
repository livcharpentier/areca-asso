import Navigation from "@/components/Navigation";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import ArtistSalaries from "@/components/ArtistSalaries";
import HealthMonitoring from "@/components/HealthMonitoring";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Heart } from "lucide-react";

const CalendrierPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Dossier Enfants du Spectacle
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir pour constituer un dossier, connaître les dates de commissions et respecter la réglementation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="calendrier" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
              <TabsTrigger value="calendrier" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span>Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="confection" className="gap-2">
                <FileText className="h-4 w-4" />
                <span>Confection</span>
              </TabsTrigger>
              <TabsTrigger value="suivi-sante" className="gap-2">
                <Heart className="h-4 w-4" />
                <span>Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <FileText className="h-4 w-4" />
                <span>Salaires Artistes</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendrier">
              <RegionalCalendar />
            </TabsContent>

            <TabsContent value="confection">
              <DrieetsDossier />
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

export default CalendrierPage;
