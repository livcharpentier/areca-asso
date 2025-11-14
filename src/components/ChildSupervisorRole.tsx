import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, CheckCircle, AlertCircle } from "lucide-react";

const ChildSupervisorRole = () => {
  return (
    <section id="responsable-enfant" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Fiche Métier : Responsable Enfant
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez le rôle essentiel du responsable enfant dans l'encadrement et la protection des mineurs sur les tournages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Description du métier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le responsable enfant assure l'encadrement et la protection des mineurs de moins de 16 ans dans l'audiovisuel et le cinéma. 
                  Il veille au respect de la législation, organise leur quotidien pendant les tournages, et assure l'interface entre la famille, 
                  la production et les équipes artistiques et techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Autres appellations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encadrant enfant</li>
                  <li>• Coordinateur enfant</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Principales activités
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">En préparation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analyse du scénario pour évaluer les conditions d'intervention</li>
                  <li>• Création d'une relation de confiance avec la famille</li>
                  <li>• Organisation de la logistique (transport, hébergement, soutien scolaire)</li>
                  <li>• Constitution d'une équipe d'animation adaptée</li>
                  <li>• Sensibilisation des équipes aux spécificités du travail avec des mineurs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Pendant le tournage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Supervision et accompagnement quotidien de l'enfant</li>
                  <li>• Respect strict des horaires autorisés</li>
                  <li>• Organisation d'activités adaptées durant les temps d'attente</li>
                  <li>• Contrôle du respect des horaires légaux</li>
                  <li>• Gestion des émotions et situations conflictuelles</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Après le tournage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accompagnement de la transition vers le rythme normal</li>
                  <li>• Réalisation d'un bilan de fin de tournage</li>
                  <li>• Documentation des conditions de travail</li>
                  <li>• Développement du réseau professionnel</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => window.open('/fiche_metier_responsable_enfant.pdf', '_blank')}
              className="gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger la fiche métier complète
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSupervisorRole;