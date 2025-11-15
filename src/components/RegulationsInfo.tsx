import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Shield, Landmark, Video, Scale, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const RegulationsInfo = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    workTime: false,
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
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-destructive/10 rounded-full">
                        <Clock className="h-6 w-6 text-destructive" />
                      </div>
                      <span className="text-lg text-amber-300">Réglementation Temps de Travail</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.workTime ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Information emploi des mineurs */}
          <Collapsible open={openSections.employment} onOpenChange={() => toggleSection("employment")}>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-lg text-amber-300">Information Emploi des Mineurs</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.employment ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Procédure d'autorisation administrative */}
          <Collapsible open={openSections.authorization} onOpenChange={() => toggleSection("authorization")}>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-lg text-amber-300">Autorisation Administrative</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.authorization ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Caisse des dépôts et consignations */}
          <Collapsible open={openSections.caisse} onOpenChange={() => toggleSection("caisse")}>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-500/10 rounded-full">
                        <Landmark className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="text-lg text-amber-300">Caisse des Dépôts</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.caisse ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Vidéos sur les plateformes de partage */}
          <Collapsible open={openSections.videos} onOpenChange={() => toggleSection("videos")}>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-500/10 rounded-full">
                        <Video className="h-6 w-6 text-blue-500" />
                      </div>
                      <span className="text-lg text-amber-300">Plateformes de Partage</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.videos ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Sanctions pénales */}
          <Collapsible open={openSections.sanctions} onOpenChange={() => toggleSection("sanctions")}>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer hover:bg-accent/5 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-destructive/10 rounded-full">
                        <Scale className="h-6 w-6 text-destructive" />
                      </div>
                      <span className="text-lg text-amber-300">Sanctions Pénales</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openSections.sanctions ? 'rotate-180' : ''}`} />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default RegulationsInfo;
