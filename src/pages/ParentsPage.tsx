import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HealthMonitoring from "@/components/HealthMonitoring";
import ArtistSalaries from "@/components/ArtistSalaries";
import CaisseDepots from "@/components/CaisseDepots";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const ParentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Espace Parents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Informations essentielles pour les parents d'enfants dans le cinéma et l'audiovisuel
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="suivi-sante" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
              <TabsTrigger value="suivi-sante">
                <span>Suivi Santé</span>
              </TabsTrigger>
              <TabsTrigger value="dossier">
                <span>Dossier Enfant</span>
              </TabsTrigger>
              <TabsTrigger value="salaires">
                <span>Rôles et salaires</span>
              </TabsTrigger>
              <TabsTrigger value="caisse-depots">
                <span>Caisse des Dépôts</span>
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

const DossierEnfantContent = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Dossier Enfant — Pièces à fournir
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Documents à réunir pour chaque enfant dans le cadre d'une demande d'autorisation
      </p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Qui fait quoi ?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 text-foreground">
          <div className="border border-border rounded-lg p-4 space-y-2">
            <p className="font-bold text-primary">La DRIEETS</p>
            <p className="text-sm text-muted-foreground">Direction régionale interdépartementale de l'économie, de l'emploi, du travail et des solidarités d'Île-de-France</p>
            <p className="text-sm">
              C'est le service de l'État qui <strong>instruit les demandes d'autorisation</strong> de travail des enfants de moins de 16 ans.
              Elle vérifie le dossier déposé par la production avec le rectorat et la médecine du travail, puis le présente à la
              commission des enfants du spectacle. L'autorisation est ensuite délivrée par le préfet.
            </p>
            <p className="text-sm bg-muted/50 rounded p-2"><strong>Plus de 13 000 demandes</strong> par an en Île-de-France (cinéma, télévision, radio, spectacle vivant, e-sport).</p>
          </div>
          <div className="border border-border rounded-lg p-4 space-y-2">
            <p className="font-bold text-primary">Thalie Santé</p>
            <p className="text-sm text-muted-foreground">Service de prévention et de santé au travail, ex-Centre médical de la Bourse</p>
            <p className="text-sm">
              C'est le <strong>seul service de santé au travail agréé</strong> pour le suivi des enfants du spectacle de moins de 16 ans en Île-de-France.
              Son Pôle Enfants lit les scénarios, reçoit l'enfant en visite médicale (son ressenti du rôle, sa scolarité, la différence
              entre fiction et réalité) et conseille les productions sur la prévention des risques.
              Ce n'est pas le médecin qui délivre l'autorisation de travail.
            </p>
            <div className="text-sm bg-muted/50 rounded p-2">
              <p className="font-semibold mb-1">En 2023 :</p>
              <p>566 projets et scénarios lus · 901 visites médicales · 1 345 avis médicaux délivrés</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Sources : <a className="underline" href="https://beta.gouv.fr/startups/enfants-du-spectacle.html" target="_blank" rel="noopener noreferrer">beta.gouv.fr</a> ;
          brochure Thalie Santé, mai 2024 (à télécharger dans l'onglet Suivi Santé).
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Pièces à fournir pour chaque enfant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#fdf1e7] border border-[#ee7d2b]/40 rounded-lg overflow-hidden">
            <p className="bg-[#ee7d2b] text-white text-center font-bold text-lg md:text-xl uppercase tracking-wider py-3 px-2">À fournir par les parents</p>
            <div className="p-4">
            <ul className="space-y-3 text-foreground">
              <li><p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Livret de famille à jour ou acte de naissance</p></li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Autorisation parentale</p>
                <p className="text-sm text-muted-foreground pl-5">À remplir à partir du modèle officiel (à télécharger plus bas)</p>
              </li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Avis favorable écrit de l'enfant</p>
                <p className="text-sm text-muted-foreground pl-5">Si l'enfant a plus de 13 ans (art. L7124-2 du Code du travail)</p>
              </li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Certificat de scolarité</p>
                <p className="text-sm text-muted-foreground pl-5">À partir de 3 ans, quelle que soit la durée du tournage</p>
              </li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Avis pédagogique signé par l'école</p>
                <p className="text-sm text-muted-foreground pl-5">À partir de 4 jours d'absence scolaire (voir ci-dessous)</p>
              </li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Avis médical d'aptitude</p>
                <p className="text-sm text-muted-foreground pl-5">Le médecin dépend du type d'emploi (voir « Rôle ou figuration »)</p>
              </li>
            </ul>
            </div>
          </div>
          <div className="bg-muted/40 border border-[#16213f]/30 rounded-lg overflow-hidden">
            <p className="bg-[#16213f] text-white text-center font-bold text-lg md:text-xl uppercase tracking-wider py-3 px-2">Préparé par la production</p>
            <div className="p-4">
            <p className="text-center font-bold text-foreground mb-4 pb-3 border-b border-border">Rien à faire de votre côté</p>
            <ul className="space-y-3 text-foreground">
              <li><p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Projet de contrat de travail</p></li>
              <li><p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Synopsis et plan de travail</p></li>
              <li><p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Note de sécurité, le cas échéant</p></li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Tableau principal de l'avis pédagogique</p>
                <p className="text-sm text-muted-foreground pl-5">Et l'avis du DASEN si l'enfant est scolarisé hors académie de Paris</p>
              </li>
              <li>
                <p className="font-semibold"><span className="text-[#ee7d2b] font-bold mr-2">–</span>Dépôt du dossier à la DRIEETS</p>
                <p className="text-sm text-muted-foreground pl-5">Sur la plateforme numérique, et envoi des avis pédagogiques au rectorat</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Rôle ou figuration : ce qui change</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 text-foreground">
          <div className="border border-primary/30 rounded-lg p-4">
            <p className="font-bold text-primary mb-3">Rôle</p>
            <p className="text-sm font-semibold">Documents à remettre à :</p>
            <p className="text-sm mb-3">l'assistant·e de production ou l'administrateur·rice de production</p>
            <p className="text-sm font-semibold">Avis médical :</p>
            <ul className="text-sm space-y-1">
              <li>• rôle 1er ou 2nd choix : médecin du travail de <strong>Thalie Santé</strong> obligatoire (ou, a minima, justificatif de prise de rendez-vous)</li>
              <li>• petit rôle : médecin généraliste en exercice accepté</li>
            </ul>
          </div>
          <div className="border border-primary/30 rounded-lg p-4">
            <p className="font-bold text-primary mb-3">Figuration, silhouette, doublure</p>
            <p className="text-sm font-semibold">Documents à remettre à :</p>
            <p className="text-sm mb-3">le directeur ou la directrice de casting figuration</p>
            <p className="text-sm font-semibold">Avis médical :</p>
            <ul className="text-sm space-y-1">
              <li>• 3 ans et plus : médecin généraliste en exercice</li>
              <li>• moins de 3 ans : pédiatre</li>
              <li>• à partir de 5 jours d'absence scolaire : Thalie Santé</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Les familles n'envoient rien elles-mêmes à l'administration : c'est la production qui dépose le dossier.
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Obtenir l'avis pédagogique</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground">
        <p className="text-sm text-muted-foreground">
          La production remplit le tableau principal (notamment les modalités du suivi scolaire) ;
          la famille le fait signer par l'établissement scolaire de l'enfant, puis le remet à la production ou au casting.
        </p>
        <ul className="space-y-2 ml-4">
          <li>• <strong>École primaire</strong> (enfant de plus de 3 ans) : signé par le directeur d'école, puis validé par l'inspecteur de l'éducation nationale de circonscription</li>
          <li>• <strong>Collège et lycée</strong> (moins de 16 ans) : signé par le chef d'établissement</li>
        </ul>
        <div className="bg-muted/50 p-3 rounded-lg border border-border text-sm space-y-1">
          <p><strong>Rappel aux familles :</strong> prévenir le directeur d'école ou le chef d'établissement dès le premier jour d'absence de l'enfant.</p>
          <p>La commission des enfants du spectacle, présidée par un juge des enfants, se réunit une fois par mois : les documents doivent être remis à temps pour respecter ses dates de dépôt.</p>
        </div>
        <p className="text-xs text-muted-foreground">
          Source : <a href="https://www.ac-paris.fr/scolarite-des-enfants-du-spectacle-123037" target="_blank" rel="noopener noreferrer" className="underline">Académie de Paris — scolarité des enfants du spectacle</a>
        </p>
      </CardContent>
    </Card>

    <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
      <p className="text-sm text-foreground">
        <strong>Situation particulière :</strong> En cas de retrait d'autorité parentale, tutelle, etc., fournir tout document justifiant de cette situation.
      </p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Formulaires officiels à télécharger</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <a
          href="https://enfants-du-spectacle.fabrique.social.gouv.fr/autorisation_parentale.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-muted/50 hover:bg-muted text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all border border-border"
        >
          <Download className="h-4 w-4 text-primary" />
          Modèle d'autorisation parentale (DOCX)
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="https://www.ac-paris.fr/media/20903/download"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted/50 hover:bg-muted text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm border border-border"
          >
            <Download className="h-4 w-4 text-primary" />
            Avis pédagogique primaire (1D)
          </a>
          <a
            href="https://www.ac-paris.fr/media/20906/download"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted/50 hover:bg-muted text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm border border-border"
          >
            <Download className="h-4 w-4 text-primary" />
            Avis pédagogique collège et lycée (2D)
          </a>
          <a
            href="https://www.ac-paris.fr/media/63723/download"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted/50 hover:bg-muted text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all text-sm border border-border"
          >
            <Download className="h-4 w-4 text-primary" />
            Modèle avis DASEN
          </a>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-5">
        <p className="text-foreground text-sm">
          <strong className="text-primary">Besoin d'aide ?</strong> Contactez le service d'instruction à l'adresse : {' '}
          <a href="mailto:drieets-idf-ud75.eesam@drieets.gouv.fr" className="text-primary hover:text-primary/80 underline">
            drieets-idf-ud75.eesam@drieets.gouv.fr
          </a>
        </p>
        <p className="text-muted-foreground text-xs mt-2 italic">
          Sources : <a href="https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">démarche DRIEETS-IDF-Enfants du Spectacle</a> et <a href="https://www.ac-paris.fr/scolarite-des-enfants-du-spectacle-123037" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">Académie de Paris</a>
        </p>
      </CardContent>
    </Card>
  </div>
);

export default ParentsPage;
