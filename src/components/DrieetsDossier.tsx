import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DrieetsDossier = () => {
  const steps = [
    "Remplir le formulaire Cerfa n°13426*10",
    "Joindre les statuts de l'organisation",
    "Fournir la liste des membres du bureau",
    "Annexer le procès-verbal de la dernière assemblée générale",
    "Ajouter les justificatifs de représentativité",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">
              Confectionner un Dossier DRIEETS
            </CardTitle>
            <p className="text-muted-foreground">
              Direction Régionale et Interdépartementale de l'Économie, de l'Emploi, du Travail et des Solidarités
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Documents requis
              </h3>
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-primary-foreground text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-slate-200">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90">
                  <strong>Important :</strong> Le dossier complet doit être déposé en recommandé avec accusé de réception 
                  ou remis en main propre contre récépissé à la DRIEETS de votre région.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg mb-4 text-accent">
                Coordonnées DRIEETS Île-de-France
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-300">Adresse</p>
                    <p className="text-sm text-slate-200">
                      19 rue Madeleine Vionnet<br />
                      93300 Aubervilliers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-300">Téléphone</p>
                    <p className="text-sm text-slate-200">01 70 95 52 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-300">Email</p>
                    <p className="text-sm text-slate-200">idf-ut75.enfants-spectacle@drieets.gouv.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-300">Horaires d'accueil</p>
                    <p className="text-sm text-slate-200">
                      Lundi au vendredi : 9h00 - 12h00 / 14h00 - 17h00<br />
                      <span className="text-xs italic">(Sur rendez-vous uniquement)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-4 rounded-lg">
              <p className="text-sm text-foreground font-semibold mb-2">
                📚 Ressource officielle de l'Académie de Paris
              </p>
              <p className="text-sm text-slate-200">
                Consultez le guide complet sur la scolarité des enfants du spectacle, incluant tous les formulaires nécessaires pour constituer votre dossier.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button 
                variant="default" 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://formulaire-enfants-du-spectacle.fabrique.social.gouv.fr/login?callbackUrl=https%3A%2F%2Fformulaire-enfants-du-spectacle.fabrique.social.gouv.fr%2F', '_blank')}
              >
                <FileText className="h-4 w-4" />
                Accéder au formulaire DRIEETS
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DrieetsDossier;