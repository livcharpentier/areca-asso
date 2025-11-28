import { FileText, Download } from "lucide-react";

const FigurationSalaries = () => {
  return (
    <div className="space-y-4">
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

          <div className="mt-4 pt-4 border-t border-orange-400/30">
            <button
              onClick={() => window.open('/acfda_salaire_figu-1er-janv-2025_new.pdf', '_blank')}
              className="w-full bg-orange-600/20 hover:bg-orange-600/30 text-orange-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Télécharger le guide complet ACFDA des salaires figuration (1er janvier 2025)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigurationSalaries;
