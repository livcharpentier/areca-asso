import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HealthMonitoring from "@/components/HealthMonitoring";
import ArtistSalaries from "@/components/ArtistSalaries";


import CaisseDepots from "@/components/CaisseDepots";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Coins, FolderOpen, CheckCircle, AlertCircle, Download, Landmark } from "lucide-react";

const ParentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/10 to-background">
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
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-6">
              <TabsTrigger value="suivi-sante" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="dossier" className="gap-2">
                <FolderOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Dossier Enfant</span>
              </TabsTrigger>
              <TabsTrigger value="salaires" className="gap-2">
                <Coins className="h-4 w-4" />
                <span className="hidden sm:inline">Définitions Fonctions</span>
              </TabsTrigger>
              <TabsTrigger value="caisse-depots" className="gap-2">
                <Landmark className="h-4 w-4" />
                <span className="hidden sm:inline">Caisse des Dépôts</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="suivi-sante">
              <HealthMonitoring />
            </TabsContent>

            <TabsContent value="dossier">
              <DossierEnfantContent />
            </TabsContent>

            <TabsContent value="salaires">
              <ArtistSalaries />
            </TabsContent>

            <TabsContent value="caisse-depots">
              <CaisseDepots />
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Contenu Dossier Enfant - Uniquement pièces par enfant et formulaires */
const DossierEnfantContent = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Dossier Enfant — Pièces à fournir
      </h2>
      <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
        Documents à réunir pour chaque enfant dans le cadre d'une demande d'autorisation
      </p>
    </div>

    {/* Pièces par enfant */}
    <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20 border rounded-lg p-6">
      <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
        <FolderOpen className="h-5 w-5 text-accent" />
        Pièces à fournir pour chaque enfant
      </h3>
      <div className="space-y-3">
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Livret de famille à jour</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Projet de contrat de travail</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Autorisation parentale</p>
            <p className="text-sm text-slate-400">À remplir à partir du modèle officiel</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Certificat de scolarité</p>
            <p className="text-sm text-slate-400">Obligatoire à partir de 3 ans, quelle que soit la durée du tournage</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Avis pédagogique</p>
            <p className="text-sm text-slate-400">À fournir à partir de 4 jours d'absence scolaire. Pour Paris, si l'enfant est scolarisé hors académie de Paris, joindre aussi l'avis du Directeur académique concerné</p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-slate-200">
            <p className="font-semibold">Avis médical d'aptitude</p>
            <p className="text-sm text-slate-400">Médecin du travail Thalie Santé (ex-CMB) ou, a minima, justificatif de prise de rendez-vous</p>
          </div>
        </div>
      </div>

      {/* Cas particuliers médicaux */}
      <div className="mt-4 bg-blue-950/40 p-4 rounded-lg border border-accent/30">
        <h4 className="font-semibold text-amber-300 mb-2">Cas particuliers — Figurants et silhouettes :</h4>
        <ul className="space-y-1 text-slate-200 text-sm ml-4">
          <li>• Enfant de <strong>3 ans et plus</strong> : avis d'un médecin généraliste accepté</li>
          <li>• Enfant de <strong>moins de 3 ans</strong> : avis d'un pédiatre accepté</li>
        </ul>
      </div>

      {/* Situation particulière */}
      <div className="mt-4 bg-destructive/20 border border-destructive/40 p-4 rounded-lg">
        <p className="text-sm text-white">
          <strong>Situation particulière :</strong> En cas de retrait d'autorité parentale, tutelle, etc., fournir tout document justifiant de cette situation.
        </p>
      </div>
    </div>

    {/* Formulaires téléchargeables */}
    <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20 border rounded-lg p-6">
      <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
        <Download className="h-5 w-5 text-accent" />
        Formulaires officiels à télécharger
      </h3>
      <div className="space-y-3">
        <a 
          href="https://enfants-du-spectacle.fabrique.social.gouv.fr/autorisation_parentale.docx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-accent/10 hover:bg-accent/20 text-accent font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
        >
          <Download className="h-4 w-4" />
          Modèle d'autorisation parentale (DOCX)
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a 
            href="https://enfants-du-spectacle.fabrique.social.gouv.fr/avis_pedagogique_1D.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
          >
            <Download className="h-4 w-4" />
            Avis pédagogique 1er degré (PDF)
          </a>
          <a 
            href="https://enfants-du-spectacle.fabrique.social.gouv.fr/avis_pedagogique_2D.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
          >
            <Download className="h-4 w-4" />
            Avis pédagogique 2nd degré (PDF)
          </a>
          <a 
            href="https://enfants-du-spectacle.fabrique.social.gouv.fr/avis_DASEN.docx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
          >
            <Download className="h-4 w-4" />
            Avis Directeur académique (DOCX)
          </a>
          <a 
            href="https://enfants-du-spectacle.fabrique.social.gouv.fr/avis_chef_etablissement_1er_degre.doc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm"
          >
            <Download className="h-4 w-4" />
            Avis chef d'établissement 1er degré
          </a>
        </div>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20 border rounded-lg p-5">
      <p className="text-slate-200 text-sm">
        <strong className="text-amber-300">Besoin d'aide ?</strong> Contactez le service d'instruction à l'adresse : {' '}
        <a href="mailto:drieets-idf-ud75.eesam@drieets.gouv.fr" className="text-accent hover:text-accent/80 underline">
          drieets-idf-ud75.eesam@drieets.gouv.fr
        </a>
      </p>
      <p className="text-slate-400 text-xs mt-2 italic">
        Source : <a href="https://enfants-du-spectacle.fabrique.social.gouv.fr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">enfants-du-spectacle.fabrique.social.gouv.fr</a> — Plateforme officielle DRIEETS Île-de-France
      </p>
    </div>
  </div>
);

export default ParentsPage;
