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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <CardContent className="space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    Durées maximales de travail selon l'âge de l'enfant, horaires autorisés, et temps de repos obligatoires.
                  </p>
                  
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      ⚠️ Respect strict obligatoire
                    </p>
                    <p className="text-base text-white">
                      Ces durées sont des maximums légaux. Le dépassement expose à des sanctions pénales.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-amber-300 text-lg">Points clés :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Durées quotidiennes :</strong> Varient selon l'âge (1h à 6h/jour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Pauses obligatoires :</strong> Après 30 min à 3h selon l'âge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Horaires :</strong> Début au plus tôt à 6h du matin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Travail de nuit :</strong> Interdit entre 20h-6h (dérogation jusqu'à 24h)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Limites :</strong> Maximum 6 jours/semaine et 80 jours/an</span>
                      </li>
                    </ul>
                  </div>
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
                <CardContent className="space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    Conditions générales d'emploi, obligations légales, et protection des mineurs sur les tournages.
                  </p>
                  
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      📋 Autorisation préalable obligatoire
                    </p>
                    <p className="text-base text-white">
                      Toute participation d'un enfant de moins de 16 ans nécessite une autorisation de la commission enfants du spectacle.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-amber-300 text-lg">Documents essentiels :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Guide DRIEETS :</strong> Informations emploi des mineurs dans le spectacle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Livret enfants :</strong> Document de référence (Février 2023)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Certificat médical :</strong> Obligatoire et renouvelable selon l'âge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Responsable enfant :</strong> Présence obligatoire sur le tournage</span>
                      </li>
                    </ul>
                  </div>
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
                <CardContent className="space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    Démarches et documents nécessaires pour obtenir l'autorisation préalable de la commission enfants du spectacle.
                  </p>
                  
                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-amber-300 text-lg">Procédure :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Dépôt :</strong> Demande auprès de la DRIEETS du département</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Délai :</strong> 1 mois (prorogeable d'1 mois supplémentaire)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Commission :</strong> Présidée par un magistrat juge des enfants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Décision :</strong> Autorisation ou refus par le préfet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">⚠️</span>
                        <span><strong>Retrait possible :</strong> L'autorisation peut être retirée à tout moment</span>
                      </li>
                    </ul>
                  </div>
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
                <CardContent className="space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    Protection financière obligatoire des revenus des mineurs : obligations de versement et gestion des fonds.
                  </p>
                  
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      💰 Versement obligatoire
                    </p>
                    <p className="text-base text-white">
                      Une partie des revenus de l'enfant doit être versée à la Caisse des Dépôts et Consignations.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-amber-300 text-lg">Règles importantes :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Protection :</strong> Fonds bloqués jusqu'à la majorité de l'enfant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Modalités :</strong> Pourcentage variable selon les revenus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Déblocage :</strong> À la majorité ou par décision judiciaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Obligations :</strong> Le producteur doit effectuer le versement</span>
                      </li>
                    </ul>
                  </div>
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
                <CardContent className="space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    Réglementation spécifique aux contenus vidéos mettant en scène des mineurs sur les plateformes en ligne.
                  </p>
                  
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      📹 Cadre légal renforcé
                    </p>
                    <p className="text-base text-white">
                      La loi encadre strictement les contenus avec mineurs sur les plateformes de partage vidéo.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-amber-300 text-lg">Points de vigilance :</h4>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Déclaration :</strong> Obligatoire si revenus réguliers générés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Protection :</strong> Image et données personnelles de l'enfant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Autorisation :</strong> Parentale requise pour toute publication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Encadrement :</strong> Heures de tournage limitées comme au cinéma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Rémunération :</strong> Droits d'auteur et protection financière</span>
                      </li>
                    </ul>
                  </div>
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
                <CardContent className="space-y-4">
                  <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
                    <p className="font-semibold text-white text-lg mb-2">
                      ⚠️ Non-respect de la réglementation
                    </p>
                    <p className="text-base text-white">
                      Le non-respect des règles de protection des mineurs expose à des sanctions pénales sévères.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-destructive/30 p-5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-destructive text-lg mb-3">Infractions principales :</h4>
                    <ul className="space-y-3 text-slate-200">
                      <li className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5 rounded">
                        <strong className="text-destructive">Emploi sans autorisation :</strong>
                        <p className="text-sm mt-1">Jusqu'à 2 ans d'emprisonnement et 30 000€ d'amende</p>
                      </li>
                      <li className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5 rounded">
                        <strong className="text-destructive">Dépassement des durées :</strong>
                        <p className="text-sm mt-1">Sanctions pénales et administratives immédiates</p>
                      </li>
                      <li className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5 rounded">
                        <strong className="text-destructive">Absence de responsable :</strong>
                        <p className="text-sm mt-1">Suspension immédiate du tournage</p>
                      </li>
                      <li className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5 rounded">
                        <strong className="text-destructive">Non-versement CDC :</strong>
                        <p className="text-sm mt-1">Sanctions financières majorées</p>
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
