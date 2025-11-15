import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Shield, Landmark, Video, Scale, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const RegulationsInfo = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    workTime: true,
    employment: false,
    authorization: false,
    caisse: false,
    videos: false,
    sanctions: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

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

        <div className="space-y-4">
          {/* Réglementation temps de travail */}
          <Collapsible open={openSections.workTime} onOpenChange={() => toggleSection("workTime")}>
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-destructive/10 rounded-full">
                        <Clock className="h-6 w-6 text-destructive" />
                      </div>
                      <span className="text-xl">Réglementation Temps de Travail</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.workTime ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Durées maximales de travail selon l'âge de l'enfant, horaires autorisés, et temps de repos obligatoires.
                  </p>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-3">Points clés :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li>• Durées maximales quotidiennes selon l'âge</li>
                      <li>• Pauses obligatoires pendant le travail</li>
                      <li>• Horaires de début de journée (au plus tôt 6h)</li>
                      <li>• Travail de nuit strictement encadré</li>
                      <li>• Travail les jours fériés autorisé avec conditions</li>
                      <li>• Maximum 6 jours/semaine et 80 jours/an</li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Information emploi des mineurs */}
          <Collapsible open={openSections.employment} onOpenChange={() => toggleSection("employment")}>
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xl">Information Emploi des Mineurs</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.employment ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Conditions générales d'emploi, obligations légales, et protection des mineurs sur les tournages.
                  </p>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-3">Documents essentiels :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li>• Guide DRIEETS sur l'emploi des mineurs</li>
                      <li>• Livret du travail des enfants (Février 2023)</li>
                      <li>• Informations sur les conditions de travail</li>
                      <li>• Obligations du producteur et de l'employeur</li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Procédure d'autorisation administrative */}
          <Collapsible open={openSections.authorization} onOpenChange={() => toggleSection("authorization")}>
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-xl">Procédure d'Autorisation Administrative</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.authorization ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Démarches et documents nécessaires pour obtenir l'autorisation préalable de la commission enfants du spectacle.
                  </p>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-3">Étapes clés :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li>• Dépôt de la demande auprès de la DRIEETS</li>
                      <li>• Délai de traitement : 1 mois (prorogeable)</li>
                      <li>• Commission départementale consultative</li>
                      <li>• Décision du préfet</li>
                      <li>• Possibilité de retrait à tout moment</li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Caisse des dépôts et consignations */}
          <Collapsible open={openSections.caisse} onOpenChange={() => toggleSection("caisse")}>
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-500/10 rounded-full">
                        <Landmark className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="text-xl">Caisse des Dépôts et Consignations</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.caisse ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Protection financière des revenus des mineurs : obligations de versement et gestion des fonds.
                  </p>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-3">Règles importantes :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li>• Versement obligatoire d'une partie des revenus</li>
                      <li>• Protection jusqu'à la majorité de l'enfant</li>
                      <li>• Modalités de versement et de déblocage</li>
                      <li>• Obligations du producteur</li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Vidéos sur les plateformes de partage */}
          <Collapsible open={openSections.videos} onOpenChange={() => toggleSection("videos")}>
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-500/10 rounded-full">
                        <Video className="h-6 w-6 text-blue-500" />
                      </div>
                      <span className="text-xl">Vidéos sur les Plateformes de Partage</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.videos ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Réglementation spécifique aux contenus vidéos mettant en scène des mineurs sur les plateformes en ligne.
                  </p>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-3">Points de vigilance :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li>• Déclaration obligatoire pour les revenus réguliers</li>
                      <li>• Protection de l'image et des données personnelles</li>
                      <li>• Autorisation parentale requise</li>
                      <li>• Encadrement des heures de tournage</li>
                      <li>• Droits d'auteur et rémunération</li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Sanctions pénales */}
          <Collapsible open={openSections.sanctions} onOpenChange={() => toggleSection("sanctions")}>
            <Card className="border-destructive/30 shadow-lg hover:shadow-xl transition-all">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-destructive/10 rounded-full">
                        <Scale className="h-6 w-6 text-destructive" />
                      </div>
                      <span className="text-xl">Sanctions Pénales</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.sanctions ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="space-y-4">
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      ⚠️ Non-respect de la réglementation
                    </p>
                    <p className="text-base text-white">
                      Le non-respect des règles de protection des mineurs expose à des sanctions pénales sévères.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-destructive/30 p-6 rounded-lg">
                    <h4 className="font-semibold text-destructive mb-3">Infractions principales :</h4>
                    <ul className="space-y-3 text-slate-200">
                      <li className="border-l-4 border-destructive pl-4">
                        <strong className="text-destructive">Emploi sans autorisation :</strong> Jusqu'à 2 ans d'emprisonnement et 30 000€ d'amende
                      </li>
                      <li className="border-l-4 border-destructive pl-4">
                        <strong className="text-destructive">Dépassement des durées de travail :</strong> Sanctions pénales et administratives
                      </li>
                      <li className="border-l-4 border-destructive pl-4">
                        <strong className="text-destructive">Absence de responsable enfant :</strong> Suspension immédiate du tournage
                      </li>
                      <li className="border-l-4 border-destructive pl-4">
                        <strong className="text-destructive">Non-versement à la Caisse des Dépôts :</strong> Sanctions financières majorées
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default RegulationsInfo;
