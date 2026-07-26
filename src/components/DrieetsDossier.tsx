import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, MapPin, Phone, Mail, Clock, ExternalLink, AlertCircle, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const DrieetsDossier = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-4xl space-y-6">

        {/* Encadré important */}
        <div className="bg-destructive/15 border-2 border-destructive/60 p-5 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-lg mb-2">
                ⚠️ Démarche obligatoire
              </p>
              <p className="text-foreground/90 text-sm">
                L'emploi d'un enfant de moins de 16 ans dans le secteur du spectacle vivant et enregistré nécessite <strong>l'accord préalable de l'autorité administrative</strong>. 
                Chaque dossier nécessite entre 3 et 5 semaines d'instruction. Pensez à déposer votre dossier suffisamment à l'avance.
              </p>
            </div>
          </div>
        </div>

        {/* Plateforme numérique */}
        <div className="bg-card border rounded-lg p-5">
          <div className="flex items-start gap-3">
            <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-primary mb-2">🆕 Nouveau service numérique (depuis janvier 2026)</p>
              <p className="text-foreground text-sm mb-3">
                La procédure de demande d'autorisation est désormais dématérialisée. Déposez votre dossier en ligne sur la plateforme officielle.
              </p>
              <a 
                href="https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Accéder à la plateforme de dépôt
              </a>
            </div>
          </div>
        </div>

        {/* Pièces relatives au projet */}
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            Pièces relatives au projet
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Synopsis</p>
                <p className="text-sm text-muted-foreground">Résumé du projet artistique</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Scénario ou script</p>
                <p className="text-sm text-muted-foreground">Les séquences où interviennent les enfants doivent être clairement identifiées</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Note de sécurité</p>
                <p className="text-sm text-muted-foreground">Document détaillant les scènes susceptibles d'exposer les enfants à un risque et les mesures prises pour les éviter</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Plan de travail</p>
                <p className="text-sm text-muted-foreground">Planning des jours de tournage avec horaires</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pièces par enfant */}
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-accent" />
            Pièces à fournir pour chaque enfant
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Livret de famille à jour</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Projet de contrat de travail</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Autorisation parentale</p>
                <p className="text-sm text-muted-foreground">À remplir à partir du modèle officiel</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Certificat de scolarité</p>
                <p className="text-sm text-muted-foreground">Obligatoire à partir de 3 ans, quelle que soit la durée du tournage</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Avis pédagogique</p>
                <p className="text-sm text-muted-foreground">À fournir à partir de 4 jours d'absence scolaire</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-foreground">
                <p className="font-semibold">Avis médical d'aptitude</p>
                <p className="text-sm text-muted-foreground">Médecin du travail Thalie Santé (ex-CMB) ou justificatif de prise de rendez-vous</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-muted/50 p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-primary mb-2">Cas particuliers — Figurants et silhouettes :</h4>
            <ul className="space-y-1 text-foreground text-sm ml-4">
              <li>• Enfant de <strong>3 ans et plus</strong> : avis d'un médecin généraliste accepté</li>
              <li>• Enfant de <strong>moins de 3 ans</strong> : avis d'un pédiatre accepté</li>
            </ul>
          </div>
        </div>

        {/* Coordonnées DRIEETS */}
        <div className="bg-card border border-border p-6 rounded-lg space-y-4">
          <h3 className="font-semibold text-lg mb-4 text-accent">
            Coordonnées DRIEETS Île-de-France
          </h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-primary">Adresse</p>
                <p className="text-sm text-foreground">
                  19 rue Madeleine Vionnet<br />
                  93300 Aubervilliers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-primary">Téléphone</p>
                <p className="text-sm text-foreground">01 70 95 52 00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-primary">Email</p>
                <p className="text-sm text-foreground">idf-ut75.enfants-spectacle@drieets.gouv.fr</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-primary">Horaires d'accueil</p>
                <p className="text-sm text-foreground">
                  Lundi au vendredi : 9h00 - 12h00 / 14h00 - 17h00<br />
                  <span className="text-xs italic">(Sur rendez-vous uniquement)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ressources et boutons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026', '_blank')}
          >
            <FileText className="h-4 w-4" />
            Confectionner un dossier en ligne
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://www.ac-paris.fr/scolarite-des-enfants-du-spectacle-123037', '_blank')}
          >
            <FileText className="h-4 w-4" />
            Guide Académie de Paris
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open('/guide_commission_enfants_spectacle.doc', '_blank')}
          >
            <FileText className="h-4 w-4" />
            Télécharger le guide officiel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DrieetsDossier;
