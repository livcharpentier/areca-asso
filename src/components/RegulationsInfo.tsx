import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Shield, Landmark, Video, Scale } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <Tabs defaultValue="workTime" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-2 h-auto bg-muted/50 p-2">
            <TabsTrigger value="workTime" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Temps de travail</span>
            </TabsTrigger>
            <TabsTrigger value="employment" className="flex items-center gap-2 data-[state=active]:bg-background">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Emploi Mineurs</span>
            </TabsTrigger>
            <TabsTrigger value="authorization" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Autorisation</span>
            </TabsTrigger>
            <TabsTrigger value="caisse" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Landmark className="h-4 w-4" />
              <span className="hidden sm:inline">Caisse Dépôts</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Plateformes</span>
            </TabsTrigger>
            <TabsTrigger value="sanctions" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Scale className="h-4 w-4" />
              <span className="hidden sm:inline">Sanctions</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="workTime" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-full">
                    <Clock className="h-6 w-6 text-destructive" />
                  </div>
                  <span className="text-xl text-amber-300">Réglementation Temps de Travail</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employment" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xl text-amber-300">Information Emploi des Mineurs</span>
                </CardTitle>
              </CardHeader>
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

                {/* Champ d'application */}
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                  <h4 className="font-semibold text-amber-300 text-lg">Champ d'application :</h4>
                  <p className="text-slate-200">
                    Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable de la commission enfants du spectacle (DRIEETS).
                  </p>
                  <p className="text-slate-200">
                    <strong>Objectif :</strong> Veiller à ce que l'emploi des enfants ne compromette pas leur scolarité, équilibre physique et moral, santé et sécurité au travail.
                  </p>
                </div>

                {/* Commission départementale */}
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                  <h4 className="font-semibold text-amber-300 text-lg">Commission départementale consultative :</h4>
                  <p className="text-slate-200">
                    Présidée par un <strong>magistrat juge des enfants</strong> désigné par le 1er président de la cour d'appel.
                  </p>
                  <p className="text-slate-200"><strong>Composition :</strong></p>
                  <ul className="space-y-2 text-slate-200 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Directeur académique des services de l'éducation nationale ou son représentant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Directeur départemental chargé de l'emploi (DDETS/DDETSPP) ou son représentant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Un médecin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Directeur régional des affaires culturelles (DRAC) ou son représentant</span>
                    </li>
                  </ul>
                </div>

                {/* Obligation responsable enfant */}
                <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-5 rounded-lg border-2 border-orange-400 shadow-lg">
                  <p className="text-xl font-bold text-orange-200 mb-3">
                    OBLIGATION MAJEURE - Responsable des Enfants
                  </p>
                  <div className="space-y-3 bg-black/30 p-4 rounded">
                    <p className="text-base font-semibold text-white">
                      OBLIGATOIRE pour toute production avec mineurs
                    </p>
                    <div className="border-l-4 border-orange-400 pl-4 space-y-2">
                      <p className="text-orange-100"><strong>Profil requis :</strong></p>
                      <ul className="space-y-2 text-orange-100">
                        <li>• Diplôme niveau bac minimum dans secteur éducatif/social</li>
                        <li>• <strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
                        <li>• N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
                      </ul>
                      <p className="text-orange-100 mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau</p>
                    </div>
                  </div>
                </div>

                {/* Certificat médical */}
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-accent/30 p-5 rounded-lg space-y-3">
                  <h4 className="font-semibold text-amber-300 text-lg">Certificat médical obligatoire :</h4>
                  <p className="text-slate-200">
                    <strong>Examen spécifique :</strong> Évalue l'impact du rôle sur la santé physique et psychologique de l'enfant
                  </p>
                  <p className="text-slate-200"><strong>Le médecin doit préalablement avoir pris connaissance :</strong></p>
                  <ul className="space-y-2 text-slate-200 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Du contenu du spectacle (histoire, paroles, scènes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Du planning précis (dates, horaires des répétitions et représentations)</span>
                    </li>
                  </ul>
                  <div className="bg-amber-500/20 border border-amber-400 p-3 rounded mt-3">
                    <p className="text-white font-semibold">⚠️ Renouvellement obligatoire :</p>
                    <ul className="space-y-1 text-white text-sm mt-2">
                      <li>• Enfants &lt; 3 ans : Tous les <strong>3 mois</strong></li>
                      <li>• Enfants 3-6 ans : Tous les <strong>6 mois</strong></li>
                      <li>• Enfants &gt; 6 ans : Tous les <strong>ans</strong></li>
                    </ul>
                    <p className="text-red-300 mt-2 font-semibold">En cas d'avis médical négatif, l'enfant ne peut être employé</p>
                  </div>
                </div>
                </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authorization" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xl text-amber-300">Autorisation Administrative</span>
                </CardTitle>
              </CardHeader>
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
            </Card>
          </TabsContent>

          <TabsContent value="caisse" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <Landmark className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="text-xl text-amber-300">Caisse des Dépôts et Consignations</span>
                </CardTitle>
              </CardHeader>
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
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Video className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="text-xl text-amber-300">Vidéos sur les Plateformes de Partage</span>
                </CardTitle>
              </CardHeader>
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
            </Card>
          </TabsContent>

          <TabsContent value="sanctions" className="mt-6">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-destructive/10 rounded-full">
                    <Scale className="h-6 w-6 text-destructive" />
                  </div>
                  <span className="text-xl text-amber-300">Sanctions Pénales</span>
                </CardTitle>
              </CardHeader>
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
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RegulationsInfo;
