import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Shield, Landmark, Video, Scale } from "lucide-react";

const RegulationsInfo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Réglementation & Informations
          </h2>
          <p className="text-muted-foreground text-lg">
            Toutes les informations essentielles sur l'emploi des mineurs dans l'audiovisuel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Réglementation temps de travail */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <span className="text-lg">Réglementation Temps de Travail</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Durées maximales selon l'âge, horaires autorisés et temps de repos obligatoires.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Durées quotidiennes selon l'âge</li>
                <li>• Pauses obligatoires</li>
                <li>• Horaires (6h minimum)</li>
                <li>• Travail de nuit encadré</li>
                <li>• 80 jours/an maximum</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information emploi des mineurs */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Information Emploi des Mineurs</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Conditions d'emploi, obligations légales et protection sur les tournages.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Guide DRIEETS</li>
                <li>• Livret du travail enfants</li>
                <li>• Conditions de travail</li>
                <li>• Obligations employeur</li>
              </ul>
            </CardContent>
          </Card>

          {/* Procédure d'autorisation administrative */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <span className="text-lg">Autorisation Administrative</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Démarches pour l'autorisation de la commission enfants du spectacle.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Demande DRIEETS</li>
                <li>• Délai : 1 mois</li>
                <li>• Commission consultative</li>
                <li>• Décision préfet</li>
              </ul>
            </CardContent>
          </Card>

          {/* Caisse des dépôts et consignations */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <Landmark className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-lg">Caisse des Dépôts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Protection financière des revenus des mineurs.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Versement obligatoire</li>
                <li>• Protection jusqu'à majorité</li>
                <li>• Modalités de déblocage</li>
                <li>• Obligations producteur</li>
              </ul>
            </CardContent>
          </Card>

          {/* Vidéos sur les plateformes de partage */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Video className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-lg">Plateformes de Partage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Réglementation vidéos avec mineurs en ligne.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Déclaration obligatoire</li>
                <li>• Protection image/données</li>
                <li>• Autorisation parentale</li>
                <li>• Droits d'auteur</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sanctions pénales */}
          <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <Scale className="h-6 w-6 text-destructive" />
                </div>
                <span className="text-lg">Sanctions Pénales</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-200">
                Conséquences du non-respect de la réglementation.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Sans autorisation : 2 ans + 30k€</li>
                <li>• Dépassement durées</li>
                <li>• Absence responsable</li>
                <li>• Non-versement CDC</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegulationsInfo;
