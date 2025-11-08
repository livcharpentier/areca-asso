import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide leading-relaxed">
            Conventions / Salaires
          </h2>

          {/* Encadré Grilles Salaires Artistes */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Grilles des Salaires Minima Artistes-Interprètes & Acteurs de Complément
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-900/20 p-3 rounded border border-purple-400/30 text-sm text-purple-100">
                <p className="font-semibold mb-1">🎭 Convention Collective Nationale de la Production Cinématographique (Titre III)</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Artistes-Interprètes */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-purple-400/20">
                  <h4 className="font-bold text-purple-300 mb-3 text-center text-lg">Artistes-Interprètes</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-purple-800/20 p-3 rounded">
                      <p className="text-purple-200 font-semibold mb-2">💰 Tournage</p>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Salaire journalier</span>
                          <span className="font-bold text-purple-300">418,25 €</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Semaine 5 jours</span>
                          <span className="font-bold text-purple-300">1 266,70 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Semaine 6 jours</span>
                          <span className="font-bold text-purple-300">1 570,23 €</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acteurs de Complément */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-purple-400/20">
                  <h4 className="font-bold text-purple-300 mb-3 text-center text-lg">Acteurs de Complément</h4>
                  <div className="space-y-2 text-xs">
                    <div className="bg-pink-900/20 p-2 rounded">
                      <p className="text-pink-200 font-semibold mb-1">Figuration</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Jour: 107€</span>
                        <span>5j: 501,60€</span>
                        <span>6j: 623,20€</span>
                      </div>
                    </div>
                    
                    <div className="bg-pink-900/20 p-2 rounded">
                      <p className="text-pink-200 font-semibold mb-1">Silhouette muette</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Jour: 150€</span>
                        <span>5j: 703,31€</span>
                        <span>6j: 873,81€</span>
                      </div>
                    </div>

                    <div className="bg-pink-900/20 p-2 rounded">
                      <p className="text-pink-200 font-semibold mb-1">Silhouette parlante (≤5 mots)</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Jour: 250€</span>
                        <span>5j: 1 171,91€</span>
                        <span>6j: 1 456,01€</span>
                      </div>
                    </div>

                    <div className="bg-pink-900/20 p-2 rounded">
                      <p className="text-pink-200 font-semibold mb-1">Doublure simple</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Jour: 165€</span>
                        <span>5j: 773,44€</span>
                        <span>6j: 960,94€</span>
                      </div>
                    </div>

                    <div className="bg-pink-900/20 p-2 rounded">
                      <p className="text-pink-200 font-semibold mb-1">Doublure polyvalente</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Jour: 200€</span>
                        <span>5j: 937,61€</span>
                        <span>6j: 1 164,91€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Définitions */}
              <div className="bg-purple-900/20 p-4 rounded border border-purple-400/30">
                <p className="font-semibold text-purple-200 mb-3">📖 Définitions des fonctions :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                  <div>
                    <p className="font-semibold text-purple-300">Figurant :</p>
                    <p>Acteur de complément engagé pour figurer une présence complémentaire à l'histoire</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Silhouette :</p>
                    <p>Personnage mentionné sur la feuille de service ou acteur avec savoir-faire spécifique</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Silhouette parlante :</p>
                    <p>Jusqu'à 5 mots. Au-delà = contrat artiste-interprète</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Doublure lumière/cadrage/texte :</p>
                    <p>Pour mise en place/réglages. N'apparaît pas à l'image</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Doublure image :</p>
                    <p>Remplace l'artiste-interprète pour scènes particulières avec accord</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Doublure simple :</p>
                    <p>Un seul type (lumière, cadrage, image ou texte)</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/20 p-3 rounded border border-purple-400/30 text-xs text-slate-200">
                <p className="font-semibold text-purple-200 mb-1">ℹ️ Note importante :</p>
                <p>Les silhouettes peuvent être désignées par la mise en scène le jour du tournage en accord avec la production, passant ainsi de figurant à silhouette.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-400/30">
              <button
                onClick={() => window.open('/acfda_salaire_figu-1er-janv-2025.pdf', '_blank')}
                className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Télécharger le guide complet ACFDA des salaires figurants (1er janvier 2025)
              </button>
            </div>
          </div>

          {/* Encadré Comparatif Figuration ACFDA */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Comparatif Salaires Figuration - Cinéma vs Audiovisuel (ACFDA - 1er janv. 2025)
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
                        <span className="text-slate-300">Artiste-Interprète</span>
                        <span className="font-bold text-cyan-300">418,25 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Figurant (8h)</span>
                        <span className="font-bold text-cyan-300">107,00 €</span>
                      </div>
                      <div className="text-xs text-slate-400 italic ml-2">
                        (96€ si +30 figurants)
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Silhouette muette</span>
                        <span className="font-bold text-cyan-300">150,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Silhouette parlante (≤5 mots)</span>
                        <span className="font-bold text-cyan-300">250,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Doublure simple</span>
                        <span className="font-bold text-cyan-300">165,00 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Doublure polyvalente</span>
                        <span className="font-bold text-cyan-300">200,00 €</span>
                      </div>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">📅 Engagement semaine</p>
                      <p className="text-slate-300">5j (40h) : 501,60 € | 6j (48h) : 623,20 €</p>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">⏰ Heures supplémentaires</p>
                      <p className="text-slate-300">9è-10è h : +25% (14,91€/h)</p>
                      <p className="text-slate-300">11è-12è h : +50% (17,90€/h)</p>
                    </div>

                    <div className="bg-cyan-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-cyan-200 mb-1">🌙 Heures de nuit</p>
                      <p className="text-slate-300 text-xs">Avr-Sept: 22h-6h | Oct-Mars: 20h-6h</p>
                      <p className="text-slate-300">8 premières h: +50%, dès 9è h: +100%</p>
                    </div>
                  </div>
                </div>

                {/* Convention Audiovisuelle */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-center text-lg">📺 Convention Audiovisuelle</h4>
                  <div className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Rôle</span>
                        <span className="font-bold text-cyan-300">304,99 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Figurant (8h)</span>
                        <span className="font-bold text-cyan-300">98,00 €</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Silhouette muette (≤2 répliques)</span>
                        <span className="font-bold text-cyan-300">+42,24 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Doublure</span>
                        <span className="font-bold text-cyan-300">122,00 €</span>
                      </div>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-blue-200 mb-1">📅 Engagement semaine</p>
                      <p className="text-slate-300">4,5 x salaire journalier (min. SMIC)</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-blue-200 mb-1">⏰ Heures supplémentaires</p>
                      <p className="text-slate-300">9è-10è-11è h : +25%</p>
                      <p className="text-slate-300">12è h : +50%</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-blue-200 mb-1">🍽️ Repas</p>
                      <p className="text-slate-300">Traitement égal au reste de l'équipe (Code du Travail)</p>
                    </div>

                    <div className="bg-blue-800/20 p-2 rounded text-xs">
                      <p className="font-semibold text-blue-200 mb-1">📝 Note</p>
                      <p className="text-slate-300 text-xs">Cumul majorations limité à 200% (sauf 1er mai)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Majorations communes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
                  <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Cinéma)</p>
                  <div className="text-xs text-slate-300 space-y-1">
                    <p>• Dimanche : Cachet doublé (x2)</p>
                    <p>• 1er Mai : Cachet doublé (x2)</p>
                    <p>• 1/01, 14/07, 15/08, 1/11, 11/11, 25/12 : x2</p>
                    <p>• Lundi Pâques, 08/05, Ascension : x2</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
                  <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Audiovisuel)</p>
                  <div className="text-xs text-slate-300 space-y-1">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-300">
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

              <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30 text-xs text-slate-200">
                <p className="font-semibold text-cyan-200 mb-1">ℹ️ Transports :</p>
                <p><strong>Cinéma :</strong> 50% des frais réels de transport en commun (accord préalable production)</p>
                <p><strong>Audiovisuel :</strong> 50% des frais réels engagés</p>
              </div>
            </div>
          </div>

          {/* Encadré Grilles Salaires Techniciens */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Grilles des Salaires Minima Techniciens Cinéma (Mise à jour 1er mars 2024)
            </h3>
            <div className="space-y-4">
              <div className="bg-green-900/20 p-3 rounded border border-green-400/30 text-sm text-green-100">
                <p className="font-semibold mb-1">📊 Base : 39 heures hebdomadaires (35h + 4h majorées à 25%)</p>
                <p className="text-xs">Revalorisation : +23€ bruts (Avenant du 23 janvier 2024)</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Annexe I - Préparation */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-green-400/20">
                  <h4 className="font-bold text-green-300 mb-3 text-center">Annexe I - Préparation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span className="text-slate-300">1er assistant réalisateur</span>
                      <span className="font-bold text-green-300">1 479,49 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span className="text-slate-300">2e assistant réalisateur</span>
                      <span className="font-bold text-green-300">1 070,37 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span className="text-slate-300">Responsable des enfants</span>
                      <span className="font-bold text-green-300">1 070,37 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span className="text-slate-300">Coach</span>
                      <span className="font-bold text-green-300">1 070,37 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Auxiliaire réalisation</span>
                      <span className="font-bold text-green-300">534,74 €</span>
                    </div>
                  </div>
                </div>

                {/* Annexe II - Tournage */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-green-400/20">
                  <h4 className="font-bold text-green-300 mb-3 text-center">Annexe II - Tournage</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">1er assistant réalisateur</p>
                      <p className="text-xs text-slate-400">5j (43h/46h éq.) : <span className="text-green-300 font-bold">1 664,43 €</span></p>
                      <p className="text-xs text-slate-400">6j (52h/56h éq.) : <span className="text-green-300 font-bold">2 200,74 €</span></p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">2e assistant réalisateur</p>
                      <p className="text-xs text-slate-400">5j (43h/46h éq.) : <span className="text-green-300 font-bold">1 204,17 €</span></p>
                      <p className="text-xs text-slate-400">6j (52h/56h éq.) : <span className="text-green-300 font-bold">1 592,18 €</span></p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">Responsable des enfants</p>
                      <p className="text-xs text-slate-400">5j (43h/46h éq.) : <span className="text-green-300 font-bold">1 204,17 €</span></p>
                      <p className="text-xs text-slate-400">6j (52h/56h éq.) : <span className="text-green-300 font-bold">1 592,18 €</span></p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">Coach</p>
                      <p className="text-xs text-slate-400">5j (43h/46h éq.) : <span className="text-green-300 font-bold">1 204,17 €</span></p>
                      <p className="text-xs text-slate-400">6j (52h/56h éq.) : <span className="text-green-300 font-bold">1 592,18 €</span></p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">Auxiliaire réalisation</p>
                      <p className="text-xs text-slate-400">5j : <span className="text-green-300 font-bold">601,58 €</span> | 6j : <span className="text-green-300 font-bold">795,42 €</span></p>
                    </div>
                  </div>
                </div>

                {/* Annexe III - Intéressement */}
                <div className="bg-slate-900/60 p-4 rounded-lg border border-green-400/20">
                  <h4 className="font-bold text-green-300 mb-3 text-center">Annexe III - Intéressement</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">1er assistant (Prépa)</p>
                      <p className="text-slate-400">MG : 1 082,91 € + Int. : 793,16 €</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">1er assistant (Tournage 5j)</p>
                      <p className="text-slate-400">MG : 1 218,27 € + Int. : 892,30 €</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">2e assistant (Prépa)</p>
                      <p className="text-slate-400">MG : 931,54 € + Int. : 277,67 €</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">2e assistant (Tournage 5j)</p>
                      <p className="text-slate-400">MG : 1 047,98 € + Int. : 312,38 €</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">Responsable enfants (Prépa)</p>
                      <p className="text-slate-400">MG : 931,54 € + Int. : 277,67 €</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold mb-1">Coach (Prépa)</p>
                      <p className="text-slate-400">MG : 931,54 € + Int. : 277,67 €</p>
                    </div>
                    <p className="text-yellow-300 text-xs mt-2">MG = Minimum Garanti | Int. = Intéressement recettes</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 p-3 rounded border border-green-400/30 text-xs text-slate-200">
                <p className="font-semibold text-green-200 mb-1">ℹ️ Notes importantes :</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>L'Annexe III propose un système avec Minimum Garanti + Intéressement aux recettes d'exploitation</li>
                  <li>Applicable aux sociétés adhérentes SPI/UPC/API dès signature, autres après extension JO</li>
                  <li>Grille complète disponible sur afar.cc/salairescine</li>
                </ul>
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
                <p className="font-semibold text-amber-200">📋 Champ d'application :</p>
                <p className="text-sm">Production cinématographique (IDCC 3097)</p>
                
                <p className="font-semibold text-amber-200 mt-3">⏰ Durée du travail :</p>
                <p className="text-sm">39h hebdomadaires - Heures supplémentaires majorées</p>
                
                <p className="font-semibold text-amber-200 mt-3">🏖️ Congés payés :</p>
                <p className="text-sm">Minimum légal + dispositions spécifiques CDD d'usage</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-amber-200">📝 Types de contrats :</p>
                <p className="text-sm">CDI, CDD de droit commun, CDD d'usage</p>
                
                <p className="font-semibold text-amber-200 mt-3">🛡️ Protection :</p>
                <p className="text-sm">Prévention VHSS, égalité F/H, lutte contre discriminations</p>
                
                <p className="font-semibold text-amber-200 mt-3">📞 Instances paritaires :</p>
                <p className="text-sm">CPPNI - CPPHSCT de branche</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-400/30">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Télécharger la Convention Collective complète (mise à jour juin 2024)
              </button>
            </div>
          </div>

          {/* Encadré VHSS */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Prévention des Violences et Harcèlements Sexistes et Sexuels (VHSS)
            </h3>
            <div className="space-y-4 text-slate-100">
              
              {/* Étude Février 2025 */}
              <div className="bg-red-900/30 p-4 rounded-lg border border-red-400/40">
                <p className="font-bold text-red-200 mb-3 text-lg">📊 ÉTUDE VHSS - Février 2025 (17 associations professionnelles)</p>
                <p className="text-sm mb-3"><strong>1 698 réponses</strong> de technicien·ne·s du cinéma et de l'audiovisuel sur 40 ans de carrière</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-950/40 p-3 rounded">
                    <p className="font-semibold text-red-300 text-sm">DISCRIMINATION</p>
                    <p className="text-xs mt-1"><strong>47%</strong> ont subi une discrimination (56% femmes, 35% hommes)</p>
                    <p className="text-xs text-slate-300">Motifs : sexe, âge, apparence physique</p>
                  </div>
                  
                  <div className="bg-red-950/40 p-3 rounded">
                    <p className="font-semibold text-red-300 text-sm">AGISSEMENTS SEXISTES</p>
                    <p className="text-xs mt-1"><strong>59%</strong> ont subi des agissements sexistes (85% femmes, 25% hommes)</p>
                    <p className="text-xs text-slate-300">Remarques, blagues sexistes, interpellations familières</p>
                  </div>
                  
                  <div className="bg-red-950/40 p-3 rounded">
                    <p className="font-semibold text-red-300 text-sm">HARCÈLEMENT SEXUEL</p>
                    <p className="text-xs mt-1"><strong>37%</strong> ont subi du harcèlement sexuel (50% femmes, 20% hommes)</p>
                    <p className="text-xs text-slate-300">Blagues grivoises, rapprochements physiques non-consentis</p>
                  </div>
                  
                  <div className="bg-red-950/40 p-3 rounded">
                    <p className="font-semibold text-red-300 text-sm">AGRESSIONS SEXUELLES</p>
                    <p className="text-xs mt-1"><strong>11%</strong> ont été victimes (15% femmes, 5% hommes)</p>
                    <p className="text-xs text-slate-300">Baisers forcés, attouchements</p>
                  </div>
                </div>
                
                <div className="bg-red-950/50 p-2 rounded text-xs">
                  <p className="font-semibold text-red-300">VIOLS / TENTATIVES : 25 personnes (23 femmes, 2 hommes)</p>
                </div>
              </div>

              {/* Profils et contexte */}
              <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                <p className="font-semibold text-red-200 mb-2">⚠️ Constats clés de l'étude :</p>
                <ul className="text-sm space-y-2">
                  <li><strong>Victimes :</strong> Principalement des femmes, jeunes, en postes subalternes ou techniques</li>
                  <li><strong>Auteurs :</strong> Très majoritairement des hommes avec pouvoir hiérarchique, notoriété ou âge</li>
                  <li><strong>Omerta :</strong> 82% des femmes et 65% des hommes estiment que la loi du silence persiste</li>
                  <li><strong>Contexte :</strong> Tournages en déplacement, horaires tardifs, promiscuité, situations festives</li>
                  <li><strong>Évolution positive :</strong> 83% estiment que la situation s'améliore depuis le début de leur carrière</li>
                </ul>
              </div>

              {/* Avenant VHSS Mai 2024 */}
              <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                <p className="font-semibold text-red-200 mb-2 text-lg">📜 Avenant VHSS (17 mai 2024 - étendu sept. 2024)</p>
                <p className="text-sm mb-2"><strong>Harcèlement sexuel :</strong> Propos/comportements à connotation sexuelle répétés portant atteinte à la dignité.</p>
                <p className="text-sm mb-3"><strong>Agissement sexiste :</strong> Tout agissement lié au sexe créant un environnement hostile.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-red-200">👤 Référent VHSS obligatoire :</p>
                    <p className="text-sm">Désignation d'un référent formé sur chaque film (30€ brut/semaine en long-métrage)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-red-200">📢 Procédure de signalement :</p>
                    <p className="text-sm">Dispositif interne obligatoire - Mail/téléphone dédié - Confidentialité garantie</p>
                  </div>

                  <div>
                    <p className="font-semibold text-red-200">🛡️ Protection des victimes :</p>
                    <p className="text-sm">Interdiction de sanctions, licenciement ou discrimination des victimes et témoins</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-red-200">📞 Cellule d'écoute Audiens :</p>
                    <p className="text-sm">Accompagnement psychologique et juridique gratuit - Anonymat préservé</p>
                  </div>

                  <div>
                    <p className="font-semibold text-red-200">🔍 Enquête interne :</p>
                    <p className="text-sm">Procédure contradictoire obligatoire - Peut être externalisée - Respect présomption d'innocence</p>
                  </div>

                  <div>
                    <p className="font-semibold text-red-200">✅ Formation obligatoire :</p>
                    <p className="text-sm">Formation VHSS pour producteurs (depuis 2022) et équipes de tournage (depuis janv. 2025)</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 p-3 rounded border border-red-400/30 text-sm">
                <p className="font-semibold text-red-200">⚖️ Mesures de prévention obligatoires :</p>
                <ul className="mt-2 space-y-1 ml-4 list-disc">
                  <li>Information de tous les salariés (kit de prévention)</li>
                  <li>Affichage des numéros utiles et procédures</li>
                  <li>Formation des managers et référents</li>
                  <li>Au moins 2 référents VHSS formés à chaque étape (prépa, tournage, post-prod)</li>
                  <li>Notification au CCHSCT en cas de signalement (anonymisée)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-400/30 space-y-2">
              <button
                onClick={() => window.open('/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf', '_blank')}
                className="w-full bg-red-600/30 hover:bg-red-600/40 text-red-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                📊 Télécharger l'Étude complète VHSS (Février 2025)
              </button>
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
              </button>
            </div>
          </div>

          {/* Encadré Mineurs */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Avenant Conditions d'Emploi des Mineurs (17 mai 2024)
            </h3>
            <div className="space-y-4 text-slate-100">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-blue-200 mb-2">🎬 Champ d'application :</p>
                <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable de la commission enfants du spectacle (DRIEETS).</p>
                <p className="text-sm mt-2"><strong>Objectif :</strong> Veiller à ce que l'emploi des enfants ne compromette pas leur scolarité, équilibre physique et moral, santé et sécurité au travail.</p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-blue-200 mb-2">🏛️ Commission départementale consultative :</p>
                <p className="text-sm mb-2">Présidée par un <strong>magistrat juge des enfants</strong> désigné par le 1er président de la cour d'appel.</p>
                <p className="text-sm"><strong>Composition :</strong></p>
                <ul className="text-sm ml-4 list-disc space-y-1 mt-1">
                  <li>Directeur académique des services de l'éducation nationale ou son représentant</li>
                  <li>Directeur départemental chargé de l'emploi (DDETS/DDETSPP) ou son représentant</li>
                  <li>Un médecin</li>
                  <li>Directeur régional des affaires culturelles (DRAC) ou son représentant</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-blue-200 mb-2">⏱️ Procédure et délais :</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Instruction :</strong> Par le directeur départemental (DDETS/DDETSPP)</li>
                  <li><strong>Délai de décision du préfet :</strong> 1 mois à compter de la réception de la demande complète</li>
                  <li><strong>Complément d'instruction :</strong> Délai prorogé d'1 mois supplémentaire si nécessaire</li>
                  <li><strong>Absence de réponse :</strong> Demande réputée rejetée passé le délai</li>
                  <li><strong>⚠️ L'autorisation peut être retirée à tout moment</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-5 rounded-lg border-2 border-orange-400 mb-4 shadow-lg">
                <p className="text-xl font-bold text-orange-200 mb-3 flex items-center gap-2">
                  🚨 OBLIGATION MAJEURE - Responsable des Enfants
                </p>
                <div className="space-y-3 text-sm bg-black/30 p-4 rounded">
                  <p className="text-base font-semibold text-white">
                    ⚠️ OBLIGATOIRE pour toute production avec mineurs
                  </p>
                  <div className="border-l-4 border-orange-400 pl-4 space-y-2">
                    <p className="text-orange-100"><strong>Profil requis :</strong></p>
                    <ul className="ml-4 space-y-1 list-disc text-slate-200">
                      <li>Personne qualifiée justifiant d'un <strong>diplôme</strong> OU d'une <strong>expérience significative</strong> pour l'exercice de ses fonctions</li>
                      <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
                      <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
                    </ul>
                    <p className="text-orange-100 mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau</p>
                  </div>
                  <p className="text-yellow-300 font-semibold mt-2">
                    💡 Cette obligation s'ajoute à la présence obligatoire du parent ou tuteur légal
                  </p>
                </div>
              </div>

              <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-400/30 mb-4">
                <p className="font-semibold text-orange-200 mb-2">🎭 Autre nouvelle obligation (Castings) :</p>
                <p className="text-sm">Accompagnement obligatoire par un adulte référent lors de tous les castings avec des mineurs</p>
              </div>

              <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 mb-4">
                <p className="font-semibold text-green-200 mb-2">🏥 Certificat médical obligatoire :</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Examen spécifique :</strong> Évalue l'impact du rôle sur la santé physique et psychologique de l'enfant</p>
                  <p><strong>Le médecin doit préalablement avoir pris connaissance :</strong></p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Du contenu du spectacle (histoire, paroles, scènes)</li>
                    <li>Du planning précis (dates, horaires des répétitions et représentations)</li>
                  </ul>
                  <p className="text-yellow-300 mt-2"><strong>Renouvellement obligatoire :</strong></p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Enfants &lt; 3 ans : Tous les <strong>3 mois</strong></li>
                    <li>Enfants 3-6 ans : Tous les <strong>6 mois</strong></li>
                    <li>Enfants &gt; 6 ans : Tous les <strong>ans</strong></li>
                  </ul>
                  <p className="text-red-300 mt-2">⚠️ En cas d'avis médical négatif, l'enfant ne peut être employé</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-blue-200">📋 Dossier obligatoire :</p>
                    <p className="text-sm">• Autorisation parentale</p>
                    <p className="text-sm">• Certificat médical (validité selon âge)</p>
                    <p className="text-sm">• Avis pédagogique Education Nationale</p>
                    <p className="text-sm">• Assurance responsabilité civile</p>
                    <p className="text-sm">• Casier B3 du Responsable enfants</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-200">⏰ Durée quotidienne DÉTAILLÉE :</p>
                    <div className="text-sm space-y-1 bg-blue-950/40 p-2 rounded">
                      <p><strong>&lt; 3 ans :</strong> 1h/jour (pause après 30 min)</p>
                      <p><strong>3-5 ans :</strong> 2h/jour (pause après 1h)</p>
                      <p><strong>6-11 ans :</strong></p>
                      <p className="ml-3">• Période scolaire : 3h/jour (pause après 1h30)</p>
                      <p className="ml-3">• Vacances scolaires : 4h/jour (pause après 2h)</p>
                      <p><strong>12-16 ans :</strong></p>
                      <p className="ml-3">• Vacances scolaires : 6h/jour (pause après 3h)</p>
                    </div>
                    <p className="text-xs text-yellow-300 mt-2">⚠️ Préparation, répétition et présence sur plateau = temps de travail effectif</p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-200">📅 Délais commission :</p>
                    <p className="text-sm">Dépôt : 15 jours avant tournage</p>
                    <p className="text-sm">Décision sous 8 jours ouvrables</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-blue-200">👨‍🏫 Scolarité obligatoire :</p>
                    <p className="text-sm">Répétiteur agréé si absence scolaire</p>
                    <p className="text-sm">3h d'enseignement/jour minimum</p>
                    <p className="text-sm">Maintien du rythme scolaire</p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-200">👤 Accompagnement plateau :</p>
                    <p className="text-sm">Présence d'un parent ou tuteur légal</p>
                    <p className="text-sm">Responsable des enfants qualifié (cinéma)</p>
                    <p className="text-sm">Adulte référent lors des castings</p>
                    <p className="text-sm">Conditions adaptées (repos, repas)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-200">💰 Rémunération :</p>
                    <p className="text-sm"><strong>90%</strong> versés à la Caisse des Dépôts et Consignations (pécule jusqu'à majorité)</p>
                    <p className="text-sm"><strong>10%</strong> à disposition des représentants légaux</p>
                    <p className="text-sm">Minimum : grille convention collective applicable</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-400/30 mb-4">
                <p className="font-semibold text-amber-200 mb-2">🏖️ Travail pendant les vacances scolaires :</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Maximum :</strong> 50% de la durée totale des vacances</li>
                  <li><strong>Été :</strong> Un mois entier de repos obligatoire (soit juillet SOIT août)</li>
                  <li><strong>Rentrée scolaire :</strong> Éviter de tourner la semaine de la rentrée</li>
                  <li className="text-yellow-300">⚠️ Valable quel que soit le nombre de jours de travail et d'employeurs</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30">
                  <p className="font-semibold text-indigo-200 mb-2">⏰ Durée du travail :</p>
                  <ul className="text-sm space-y-1">
                    <li><strong>Maximum :</strong> 8h/jour - 35h/semaine</li>
                    <li><strong>Pause obligatoire :</strong> 30 min toutes les 4h30</li>
                    <li><strong>Repos quotidien :</strong> Minimum 14h consécutives</li>
                    <li><strong>Repos hebdomadaire :</strong> 2 jours consécutifs (dérogation possible : 36h dont 24h consécutives)</li>
                  </ul>
                </div>

                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30">
                  <p className="font-semibold text-indigo-200 mb-2">🎭 Enfants du théâtre :</p>
                  <ul className="text-sm space-y-1">
                    <li>Âge minimum : <strong>9 ans</strong></li>
                    <li>Maximum : <strong>3 représentations/semaine</strong></li>
                    <li>Maximum : <strong>1 représentation/jour</strong></li>
                    <li>Respect du repos pendant vacances scolaires</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30">
                  <p className="font-semibold text-purple-200 mb-2">🌙 Travail de nuit :</p>
                  <ul className="text-sm space-y-1">
                    <li><strong>Interdiction totale :</strong> 20h-6h pour les moins de 16 ans</li>
                    <li><strong>Dérogation exceptionnelle :</strong> Possible jusqu'à 24h (inspecteur du travail)</li>
                    <li><strong>Repos minimum :</strong> 12h consécutives en cas de dérogation</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30">
                  <p className="font-semibold text-purple-200 mb-2">🎪 Acrobaties & professions spéciales :</p>
                  <ul className="text-sm space-y-1">
                    <li><strong>Interdit &lt; 16 ans :</strong> Tours de force périlleux, exercices de dislocation, travaux dangereux</li>
                    <li><strong>Exception :</strong> Enfants de parents acrobates/saltimbanques/montreurs d'animaux/directeurs de cirque si <strong>≥ 12 ans</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm mt-4">
                <p className="font-semibold text-blue-200 mb-1">📅 Travail dominical et jours fériés :</p>
                <p>Le travail du dimanche et des jours fériés est autorisé dans les entreprises de spectacles, selon les conditions définies par la convention collective applicable.</p>
              </div>

              <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm mt-4">
                <p className="font-semibold text-blue-200">🔄 Travaux en cours :</p>
                <p className="mt-1">Les partenaires sociaux poursuivent leurs travaux pour améliorer l'organisation des castings et du travail des enfants, afin de sécuriser l'ensemble des parties prenantes : enfants, responsables légaux, personnels d'encadrement et employeurs.</p>
              </div>

              <div className="bg-red-900/30 p-4 rounded-lg border-2 border-red-500 text-sm">
                <p className="font-bold text-red-200 text-base mb-2">⚠️ SANCTIONS PÉNALES (Art. Code du Travail) :</p>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-red-100 font-semibold mb-2">Engager ou produire un enfant ≤16 ans sans autorisation préalable :</p>
                  <div className="text-red-300 text-lg font-bold">
                    <p>🚨 5 ANS DE PRISON + 75 000 € D'AMENDE</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1 ml-4 list-disc text-slate-200">
                  <li>Arrêt immédiat du tournage possible</li>
                  <li>Amendes administratives supplémentaires</li>
                  <li>Interdiction d'employer des mineurs</li>
                  <li>Retrait de l'autorisation à tout moment par le préfet</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-400/30 space-y-2">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Consulter l'avenant complet dans la Convention Collective
              </button>
              <button
                onClick={() => window.open('/informations_emploi_mineurs_spectacle_drieets.pdf', '_blank')}
                className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Guide officiel DRIEETS - Informations à savoir sur l'emploi des mineurs
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
                <Card key={index} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-start gap-3">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{convention.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                     <ul className="space-y-2">
                      {convention.items.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-slate-200 flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide leading-relaxed">
              Boîte à Outils
            </h2>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded bg-accent/10 hover:bg-accent/20 transition-all hover:scale-105 cursor-pointer group">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{tool}</span>
                      <Download className="w-4 h-4 ml-auto text-accent group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
