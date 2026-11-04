import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download, Mail, Phone } from "lucide-react";

const lien = "text-accent underline font-semibold";

const DepotDossier = () => (
  <div className="space-y-6">
    <div className="text-center mb-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Déposer une demande d'autorisation</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Réservé aux sociétés de production : ce sont elles qui déposent le dossier, jamais les familles.
      </p>
    </div>

    <Card className="border-primary/40">
      <CardHeader>
        <CardTitle>Plateforme de dépôt en ligne</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground">
        <p>
          Les demandes se déposent uniquement en ligne, sur la démarche officielle
          <strong> « DRIEETS-IDF-Enfants du Spectacle »</strong>. Chaque dossier demande 3 à 5 semaines d'instruction :
          respectez les dates de dépôt du calendrier des commissions.
        </p>
        <a
          href="https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90"
        >
          <ExternalLink className="h-4 w-4" />
          Accéder à la plateforme de dépôt
        </a>
        <p className="text-sm text-muted-foreground">
          Certains départements d'Île-de-France ont leur propre démarche :{" "}
          <a className="underline" href="https://demarche.numerique.gouv.fr/commencer/05c734ad-6f03-4a33-8e0d-83fd47ac204a" target="_blank" rel="noopener noreferrer">77</a>,{" "}
          <a className="underline" href="https://demarche.numerique.gouv.fr/commencer/6cee78e5-0a28-48aa-b9b0-2aafbadb7632" target="_blank" rel="noopener noreferrer">78</a>,{" "}
          <a className="underline" href="https://demarche.numerique.gouv.fr/commencer/be4a5003-eaa7-40d4-aa98-e30376e0731d" target="_blank" rel="noopener noreferrer">91</a>,{" "}
          <a className="underline" href="https://demarche.numerique.gouv.fr/commencer/2edadde0-4959-4516-a410-b22a6ef20503" target="_blank" rel="noopener noreferrer">95</a>.
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Comment le dossier est instruit</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground space-y-2">
        <p>• <strong>1re étape :</strong> instruction par la Mission protection de l'enfance de la DRIEETS (unité de Paris), avec le rectorat et la médecine du travail.</p>
        <p>• <strong>2e étape :</strong> passage devant la commission des enfants du spectacle, présidée par un juge des enfants, qui réunit la DRIEETS, la Justice, l'Éducation nationale et la Culture. Elle se réunit une fois par mois.</p>
        <p className="text-sm text-muted-foreground">L'autorisation est ensuite délivrée par le préfet. Plus de 13 000 demandes sont déposées chaque année en Île-de-France.</p>
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Pièces pour le projet</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li>• Synopsis</li>
            <li>• Scénario ou script, avec les numéros de pages où l'enfant apparaît</li>
            <li>• Note sur les mesures de sécurité (scènes à risque et mesures prises)</li>
            <li>• Plan de travail</li>
            <li>• Le cas échéant, éléments d'information complémentaires</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pièces pour chaque enfant</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-foreground">
            <li>• Livret de famille à jour ou acte de naissance</li>
            <li>• Avis favorable écrit de l'enfant s'il a plus de 13 ans</li>
            <li>• Autorisation parentale</li>
            <li>• Le cas échéant, justificatif d'une situation particulière d'autorité parentale</li>
            <li>• Projet de contrat de travail</li>
            <li>• Certificat de scolarité, ou avis pédagogique à partir de 4 jours d'absence</li>
            <li>• Avis médical d'aptitude : Thalie Santé pour un rôle 1er ou 2nd choix et pour un figurant avec plus de 4 jours d'absence ; sinon médecin généraliste en exercice (pédiatre avant 3 ans)</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Avis pédagogique : formulaires de l'Académie de Paris</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground">
        <p className="text-sm text-muted-foreground">
          La production remplit le tableau principal (modalités du suivi scolaire), puis la famille le fait signer par l'école.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.ac-paris.fr/media/20903/download" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-lg px-3 py-2 hover:bg-muted"><Download className="h-4 w-4" />Primaire (1D)</a>
          <a href="https://www.ac-paris.fr/media/20906/download" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-lg px-3 py-2 hover:bg-muted"><Download className="h-4 w-4" />Collège et lycée (2D)</a>
          <a href="https://www.ac-paris.fr/media/63723/download" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-lg px-3 py-2 hover:bg-muted"><Download className="h-4 w-4" />Modèle avis DASEN</a>
        </div>
        <p className="text-sm">
          Primaire : signé par le directeur d'école et validé par l'inspecteur de circonscription. Collège et lycée : signé par le chef d'établissement.
          L'avis DASEN est à pré-remplir par la production, quel que soit le lieu de scolarisation.
          Les avis sont à envoyer dès leur obtention à <a className={lien} href="mailto:dve-enfantsduspectacle@ac-paris.fr">dve-enfantsduspectacle@ac-paris.fr</a>.
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6 text-foreground">
        <div>
          <p className="font-semibold mb-1">Rectorat de Paris — scolarité</p>
          <p className="text-sm">Division de la Vie de l'Élève (DVE 4, bureau 1073)</p>
          <p className="text-sm flex items-center gap-2"><Phone className="h-4 w-4" />01 44 62 43 33</p>
          <p className="text-sm flex items-center gap-2"><Mail className="h-4 w-4" /><a className={lien} href="mailto:dve-enfantsduspectacle@ac-paris.fr">dve-enfantsduspectacle@ac-paris.fr</a></p>
        </div>
        <div>
          <p className="font-semibold mb-1">DRIEETS — instruction des dossiers</p>
          <p className="text-sm flex items-center gap-2"><Mail className="h-4 w-4" /><a className={lien} href="mailto:drieets-idf-ud75.eesam@drieets.gouv.fr">drieets-idf-ud75.eesam@drieets.gouv.fr</a></p>
        </div>
      </CardContent>
    </Card>

    <p className="text-xs text-muted-foreground text-center">
      Sources :{" "}
      <a className="underline" href="https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026" target="_blank" rel="noopener noreferrer">démarche DRIEETS-IDF-Enfants du Spectacle</a>,{" "}
      <a className="underline" href="https://www.ac-paris.fr/scolarite-des-enfants-du-spectacle-123037" target="_blank" rel="noopener noreferrer">Académie de Paris</a>,{" "}
      <a className="underline" href="https://beta.gouv.fr/startups/enfants-du-spectacle.html" target="_blank" rel="noopener noreferrer">beta.gouv.fr</a>
    </p>
  </div>
);

export default DepotDossier;
