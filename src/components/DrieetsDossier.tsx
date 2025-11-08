import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle2 } from "lucide-react";
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
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Documents requis
              </h3>
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent/20 border border-accent/50 p-4 rounded-lg">
              <p className="text-sm text-foreground/90">
                <strong>Important :</strong> Le dossier complet doit être déposé en recommandé avec accusé de réception 
                ou remis en main propre contre récépissé à la DRIEETS de votre région.
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