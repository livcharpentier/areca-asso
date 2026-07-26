import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen } from "lucide-react";

const Resources = () => {
  const conventions = [
    { 
      title: "Convention Collective Cinéma (CCNPC)", 
      items: ["Grille des salaires", "Texte intégral", "Fiches pratiques"],
      link: "/ccn-production-cinema-consolidee-juin-24.pdf",
      hasHighlight: true
    },
    { 
      title: "Grilles Salaires Techniciens Cinéma",
      items: ["Annexe I - Préparation", "Annexe II - Tournage", "Annexe III - Intéressement"],
      hasSalaryDetail: true
    },
    { title: "Convention Collective Audiovisuel (CCNPAV)", items: ["Grille des salaires", "Texte intégral", "Dispositions"] },
    { title: "Stages et conventions", items: ["Conventions de stage", "Rémunération", "Modèles"] },
    { title: "Tournages internationaux", items: ["Réglementations", "Équivalences", "Contacts utiles"] },
  ];

  const tools = [
    "Fiches de renseignements enfants",
    "Planning type journée tournage",
    "Suivi scolaire tournage",
    "Calendrier scolaire & examens",
    "Calendrier des vacances",
  ];

  return (
    <section id="conventions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-relaxed">
            Informations Salaires et Conventions
          </h2>

          {/* Encadré Comparatif Figuration ACFDA */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Salaires Figuration - Cinéma vs Audiovisuel (ACFDA - 1er janv. 2025)
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30 text-sm text-cyan-100">
                <p className="font-semibold">📊 Temps de travail : 8h à partir de la convocation (préparation et déshabillage inclus, repas exclu)</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Convention Cinéma */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-center text-lg">🎬 Convention Cinéma</h4>
                  <div className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Artiste-Interprète</span>
                        <span className="font-bold text-cyan-300">418,25 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Figurant (8h)</span>
                        <span className="font-bold text-cyan-300">107,00 €</span>
                      </div>
                      <div className="text-xs text-muted-foreground italic ml-2">
                        (96€ si +30 figurants)
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Silhouette muette</span>
                        <span className="font-bold text-cyan-300">150,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Silhouette parlante (≤5 mots)</span>
                        <span className="font-bold text-cyan-300">250,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Doublure simple</span>
                        <span className="font-bold text-cyan-300">165,00 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Doublure polyvalente</span>
                        <span className="font-bold text-cyan-300">200,00 €</span>
                      </div>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">📅 Engagement semaine</p>
                      <p className="text-muted-foreground">5j (40h) : 501,60 € | 6j (48h) : 623,20 €</p>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">⏰ Heures supplémentaires</p>
                      <p className="text-muted-foreground">9è-10è h : +25% (14,91€/h)</p>
                      <p className="text-muted-foreground">11è-12è h : +50% (17,90€/h)</p>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">🌙 Heures de nuit</p>
                      <p className="text-muted-foreground text-xs">Avr-Sept: 22h-6h | Oct-Mars: 20h-6h</p>
                      <p className="text-muted-foreground">8 premières h: +50%, dès 9è h: +100%</p>
                    </div>
                  </div>
                </div>

                {/* Convention Audiovisuelle */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-center text-lg">📺 Convention Audiovisuelle</h4>
                  <div className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Rôle</span>
                        <span className="font-bold text-cyan-300">304,99 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Figurant (8h)</span>
                        <span className="font-bold text-cyan-300">98,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-muted-foreground">Silhouette muette (≤2 répliques)</span>
                        <span className="font-bold text-cyan-300">+42,24 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Doublure</span>
                        <span className="font-bold text-cyan-300">122,00 €</span>
                      </div>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-foreground mb-1">📅 Engagement semaine</p>
                      <p className="text-muted-foreground">4,5 x salaire journalier (min. SMIC)</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-foreground mb-1">⏰ Heures supplémentaires</p>
                      <p className="text-muted-foreground">9è-10è-11è h : +25%</p>
                      <p className="text-muted-foreground">12è h : +50%</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-foreground mb-1">🍽️ Repas</p>
                      <p className="text-muted-foreground">Traitement égal au reste de l'équipe (Code du Travail)</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-foreground mb-1">📝 Note</p>
                      <p className="text-muted-foreground text-xs">Cumul majorations limité à 200% (sauf 1er mai)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Majorations communes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
                  <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Cinéma)</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Dimanche : Cachet doublé (x2)</p>
                    <p>• 1er Mai : Cachet doublé (x2)</p>
                    <p>• 1/01, 14/07, 15/08, 1/11, 11/11, 25/12 : x2</p>
                    <p>• Lundi Pâques, 08/05, Ascension : x2</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
                  <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Audiovisuel)</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Dimanche : +50% par h travaillée</p>
                    <p>• 1er Mai : +300%</p>
                    <p>• Fériés principaux : +200%</p>
                    <p>• Pâques, 08/05, Ascension : +150%</p>
                  </div>
                </div>
              </div>

              {/* Indemnités spéciales CINÉMA */}
              <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30">
                <p className="font-semibold text-cyan-200 mb-2 text-sm">💰 Indemnités spéciales (Cinéma uniquement)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-muted-foreground">
                  <div>• Costume uniforme : +70€</div>
                  <div>• Smoking/Robe soirée : +95€</div>
                  <div>• Essayage : 25€</div>
                  <div>• Repas : 21,10€</div>
                  <div>• Danse/Chant : +25€</div>
                  <div>• Pluie/Natation : +15€</div>
                  <div>• Topless/Nu : +50€</div>
                  <div>• Scènes pénibles : +20€</div>
                  <div>• Animaux/Accessoires : +25€</div>
                  <div>• Véhicule sans permis : +25€</div>
                  <div>• Véhicule avec permis : +35€</div>
                </div>
              </div>

              <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30 text-xs text-foreground">
                <p className="font-semibold text-cyan-200 mb-1">ℹ️ Transports :</p>
                <p><strong>Cinéma :</strong> 50% des frais réels de transport en commun (accord préalable production)</p>
                <p><strong>Audiovisuel :</strong> 50% des frais réels engagés</p>
              </div>
            </div>
          </div>


          {/* Encadré Points Essentiels Convention */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Points Essentiels - Convention Collective Cinéma 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100">
              <div className="space-y-2">
                <p className="font-semibold text-primary">📋 Champ d'application :</p>
                <p className="text-sm">Production cinématographique (IDCC 3097)</p>
                
                <p className="font-semibold text-primary mt-3">⏰ Durée du travail :</p>
                <p className="text-sm">39h hebdomadaires - Heures supplémentaires majorées</p>
                
                <p className="font-semibold text-primary mt-3">🏖️ Congés payés :</p>
                <p className="text-sm">Minimum légal + dispositions spécifiques CDD d'usage</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-primary">📝 Types de contrats :</p>
                <p className="text-sm">CDI, CDD de droit commun, CDD d'usage</p>
                
                <p className="font-semibold text-primary mt-3">🛡️ Protection :</p>
                <p className="text-sm">Prévention VHSS, égalité F/H, lutte contre discriminations</p>
                
                <p className="font-semibold text-primary mt-3">📞 Instances paritaires :</p>
                <p className="text-sm">CPPNI - CPPHSCT de branche</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-400/30">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-amber-600/20 hover:bg-amber-600/30 text-primary font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Télécharger la Convention Collective complète (mise à jour juin 2024)
              </button>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {conventions.map((convention, index) => {
              const colors = [
                { border: 'border-t-accent', icon: 'text-accent', bg: 'bg-blue-vibrantLight' },
                { border: 'border-t-primary', icon: 'text-primary', bg: 'bg-green-light' },
                { border: 'border-t-blue-sky', icon: 'text-blue-sky', bg: 'bg-blue-light' },
                { border: 'border-t-gold', icon: 'text-gold', bg: 'bg-gold-light' }
              ];
              const color = colors[index % 4];
              
              return (
                <Card key={index} className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed flex items-start gap-3">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{convention.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                     <ul className="space-y-2">
                      {convention.items.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-foreground flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                          onClick={() => convention.link && window.open(convention.link, '_blank')}
                        >
                          <Download className="w-3 h-3 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div id="outils">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-relaxed">
              Boîte à Outils
            </h2>
            <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded bg-accent/10 hover:bg-accent/20 transition-all hover:scale-105 cursor-pointer group">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{tool}</span>
                      <Download className="w-4 h-4 ml-auto text-accent group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documentation Officielle - Emploi des mineurs */}
          <div id="documentation-officielle" className="mt-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-blue-400/60 rounded-lg p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Documentation Officielle - Emploi des mineurs
              </h3>
              <div className="space-y-3">
                <p className="text-foreground mb-4">
                  Accédez aux documents officiels et guides pratiques pour l'emploi des mineurs dans le spectacle
                </p>
                <button onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')} className="w-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                  <FileText className="w-5 h-5" />
                  Convention Collective - Document complet
                </button>
                <button onClick={() => window.open('/informations_emploi_mineurs_spectacle_drieets.pdf', '_blank')} className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                  <FileText className="w-5 h-5" />
                  Guide DRIEETS - Informations emploi des mineurs
                </button>
                <button onClick={() => window.open('/duree_travail_enfants_spectacle_drieets.pdf', '_blank')} className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                  <FileText className="w-5 h-5" />
                  Guide DRIEETS - Durée du travail
                </button>
                <button onClick={() => window.open('/livret_travail_des_enfants_080223.pdf', '_blank')} className="w-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                  <FileText className="w-5 h-5" />
                  Livret Ministère du Travail - Emploi des enfants
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
