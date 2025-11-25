import Navigation from "@/components/Navigation";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import ArtistSalaries from "@/components/ArtistSalaries";
import HealthMonitoring from "@/components/HealthMonitoring";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Clock, BookOpen, Heart, Clipboard } from "lucide-react";
import DailyReport from "@/components/DailyReport";
import { useSearchParams } from "react-router-dom";

const CalendrierPage = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "calendrier";
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
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
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="calendrier" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="confection" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Confection</span>
              </TabsTrigger>
              <TabsTrigger value="suivi-sante" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Salaires Artistes</span>
              </TabsTrigger>
              <TabsTrigger value="reglementation" className="gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Temps de travail</span>
              </TabsTrigger>
              <TabsTrigger value="compte-rendu" className="gap-2">
                <Clipboard className="h-4 w-4" />
                <span className="hidden sm:inline">Compte Rendu</span>
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

            <TabsContent value="reglementation">
              <WorkTimeRegulations />
            </TabsContent>

            <TabsContent value="compte-rendu">
              <DailyReport />
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalendrierPage;
