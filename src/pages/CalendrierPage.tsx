import Navigation from "@/components/Navigation";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import ArtistSalaries from "@/components/ArtistSalaries";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Clock, BookOpen } from "lucide-react";

const CalendrierPage = () => {
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
          <Tabs defaultValue="calendrier" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="calendrier" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="confection" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Confection</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Salaires Artistes</span>
              </TabsTrigger>
              <TabsTrigger value="reglementation" className="gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Temps de travail</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Ressources</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendrier">
              <RegionalCalendar />
            </TabsContent>

            <TabsContent value="confection">
              <DrieetsDossier />
            </TabsContent>

            <TabsContent value="salaires">
              <ArtistSalaries />
            </TabsContent>

            <TabsContent value="reglementation">
              <WorkTimeRegulations />
            </TabsContent>

            <TabsContent value="documents">
              <div className="space-y-6">
                {/* Header de la section */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ressources et Documentation
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Accédez à tous les documents, formulaires et guides officiels pour vous accompagner dans vos démarches
                  </p>
                </div>

                {/* Documents officiels */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Documents officiels</CardTitle>
                    <CardDescription>
                      Guides et formulaires nécessaires pour constituer votre dossier
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <a
                        href="/guide_commission_enfants_spectacle.doc"
                        download
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Guide Commission Enfants</p>
                          <p className="text-sm text-muted-foreground mb-2">Guide complet pour confectionner un dossier DRIEETS</p>
                          <p className="text-xs text-muted-foreground">Format DOC • Octobre 2021</p>
                        </div>
                      </a>

                      <a
                        href="https://www.ac-paris.fr/media/20903/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Formulaire primaire (1D)</p>
                          <p className="text-sm text-muted-foreground mb-2">Avis pédagogique pour les enfants de primaire</p>
                          <p className="text-xs text-muted-foreground">Académie de Paris</p>
                        </div>
                      </a>

                      <a
                        href="https://www.ac-paris.fr/media/20906/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Formulaire collège/lycée (2D)</p>
                          <p className="text-sm text-muted-foreground mb-2">Avis pédagogique pour collégiens et lycéens</p>
                          <p className="text-xs text-muted-foreground">Académie de Paris</p>
                        </div>
                      </a>

                      <a
                        href="https://www.ac-paris.fr/media/24485/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Avis DASEN</p>
                          <p className="text-sm text-muted-foreground mb-2">Formulaire d'avis du Directeur académique (hors Paris)</p>
                          <p className="text-xs text-muted-foreground">Académie de Paris</p>
                        </div>
                      </a>

                      <a
                        href="/livret_travail_des_enfants_080223.pdf"
                        download
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Livret Travail des Enfants</p>
                          <p className="text-sm text-muted-foreground mb-2">Guide complet du Ministère du Travail</p>
                          <p className="text-xs text-muted-foreground">Format PDF • Février 2023</p>
                        </div>
                      </a>

                      <a
                        href="/duree_travail_enfants_spectacle_drieets.pdf"
                        download
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Durée de travail DRIEETS</p>
                          <p className="text-sm text-muted-foreground mb-2">Réglementation des horaires enfants</p>
                          <p className="text-xs text-muted-foreground">Format PDF</p>
                        </div>
                      </a>

                      <a
                        href="/informations_emploi_mineurs_spectacle_drieets.pdf"
                        download
                        className="flex flex-col gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Informations Emploi Mineurs</p>
                          <p className="text-sm text-muted-foreground mb-2">Guide pratique DRIEETS</p>
                          <p className="text-xs text-muted-foreground">Format PDF</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Calendriers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Calendriers des commissions</CardTitle>
                    <CardDescription>
                      Dates des commissions enfants du spectacle par région
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <a
                        href="/calendrier_commissions_2025_2026.pdf"
                        download
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <Calendar className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Calendrier Île-de-France 2025-2026</p>
                          <p className="text-sm text-muted-foreground">Dates des commissions pour toute l'Île-de-France</p>
                        </div>
                      </a>

                      <a
                        href="/calendrier_commissions_92_hauts_de_seine.pdf"
                        download
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <Calendar className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Calendrier Hauts-de-Seine (92)</p>
                          <p className="text-sm text-muted-foreground">Dates spécifiques des commissions du 92</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Documents réglementation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Conventions collectives et salaires</CardTitle>
                    <CardDescription>
                      Documents de référence pour les conventions et grilles salariales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <a
                        href="/ccn-production-cinema-consolidee-juin-24.pdf"
                        download
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Convention Collective Cinéma</p>
                          <p className="text-sm text-muted-foreground">CCNPC consolidée - Grille des salaires</p>
                          <p className="text-xs text-muted-foreground">Format PDF • Juin 2024</p>
                        </div>
                      </a>

                      <a
                        href="/acfda_salaire_figu-1er-janv-2025.pdf"
                        download
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Salaires Figuration ACFDA</p>
                          <p className="text-sm text-muted-foreground">Comparatif Cinéma vs Audiovisuel</p>
                          <p className="text-xs text-muted-foreground">Format PDF • 1er janvier 2025</p>
                        </div>
                      </a>

                      <a
                        href="/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf"
                        download
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all hover:scale-105"
                      >
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">Étude VHSS 2025</p>
                          <p className="text-sm text-muted-foreground">Étude Cinéma-Audiovisuel AFAR</p>
                          <p className="text-xs text-muted-foreground">Format PDF • 2025</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalendrierPage;
