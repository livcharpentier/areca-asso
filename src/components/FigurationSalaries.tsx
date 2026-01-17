import { FileText, Download } from "lucide-react";

const FigurationSalaries = () => {
  return (
    <div className="space-y-4">
      <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
        <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Grille des tarifs 2026 - Cachets Figuration Cinéma et Série TV (ACFDA - 1er janv. 2026)
        </h3>
        <div className="space-y-4">
          <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30 text-sm text-cyan-100">
            <p className="font-semibold">📊 Temps de travail : 8h à partir de la convocation (préparation et déshabillage inclus, repas exclu)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Convention Cinéma */}
            <div className="bg-slate-900/60 p-4 rounded-lg border border-cyan-400/20">
              <h4 className="font-bold text-cyan-300 mb-3 text-center text-lg">🎬 Convention Cinéma (en brut) *</h4>
              <div className="space-y-3 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">(pour mémoire) Rôle</span>
                    <span className="font-bold text-cyan-300">418,25 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Salaire figurants</span>
                    <span className="font-bold text-cyan-300">107,00 €</span>
                  </div>
                  <div className="text-xs text-slate-400 italic ml-2">
                    (8h x 12,16 € + 10% prime précarité)
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Figuration costumes spéciaux</span>
                    <span className="font-bold text-cyan-300">Uniforme +70€ / Smoking-Robe +95€</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Indemnité essayage</span>
                    <span className="font-bold text-cyan-300">25,00 €</span>
                  </div>
                  <div className="text-xs text-slate-400 italic ml-2">
                    (en USPA +50% des frais réels de transport sur base trajet Paris sur justificatif)
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Indemnité repas</span>
                    <span className="font-bold text-cyan-300">21,10 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Silhouette</span>
                    <span className="font-bold text-cyan-300">150,00 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Silhouette parlante</span>
                    <span className="font-bold text-cyan-300">250 € jusqu'à 5 mots</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Doublure</span>
                    <span className="font-bold text-cyan-300">Simple 165 € / Polyvalente 200 €</span>
                  </div>
                </div>

                <div className="bg-cyan-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-cyan-200 mb-1">📅 Engagement figurant à la semaine</p>
                  <p className="text-slate-300">5 jours (40h) : 501,60 € | 6 jours (48h) : 623,20 €</p>
                </div>

                <div className="bg-cyan-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-cyan-200 mb-1">⏰ Majorations heures supplémentaires</p>
                  <p className="text-slate-300">+25% les 9ème et 10ème heures</p>
                  <p className="text-slate-300">+50% les 11ème et 12ème heures</p>
                </div>

                <div className="bg-cyan-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-cyan-200 mb-1">🌙 Heures de nuit</p>
                  <p className="text-slate-300 text-xs">En cinéma - du 1er/04 au 30/09 : 22h/6h et du 1er/10 au 31/03 : 20h/6h sauf studio 21h/6h</p>
                  <p className="text-slate-300 text-xs">En USPA - du 21 Déc au 20 Mars : entre 20h et 6h le reste de l'année entre 22h et 7h</p>
                  <p className="text-slate-300">Les 8 premières heures +50%, à partir de la 9ème heure +100%</p>
                </div>

                <div className="bg-cyan-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-cyan-200 mb-1">🚌 Indemnités de transport en commun</p>
                  <p className="text-slate-300">Accord préalable de la production</p>
                </div>
              </div>
            </div>

            {/* Convention Audiovisuelle */}
            <div className="bg-slate-900/60 p-4 rounded-lg border border-cyan-400/20">
              <h4 className="font-bold text-cyan-300 mb-3 text-center text-lg">📺 Convention Audiovisuelle (en brut)</h4>
              <div className="space-y-3 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">(pour mémoire) Rôle</span>
                    <span className="font-bold text-cyan-300">304,99 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Salaire figurants</span>
                    <span className="font-bold text-cyan-300">98 €</span>
                  </div>
                  <div className="text-xs text-slate-400 italic ml-2">
                    (Cachet plus de 30 figurants inapplicable car &lt; SMIC)
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Figuration costumes spéciaux</span>
                    <span className="font-bold text-cyan-300">majoration + 47,05 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Indemnité essayage</span>
                    <span className="font-bold text-cyan-300">15,53 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Indemnité repas</span>
                    <span className="font-bold text-cyan-300">Traitement égal à l'équipe (cf Code du Travail)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Majoration silhouette : muette et jusqu'à 2 répliques</span>
                    <span className="font-bold text-cyan-300">+ 42,24 €</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">Doublure</span>
                    <span className="font-bold text-cyan-300">122,00 €</span>
                  </div>
                </div>

                <div className="bg-blue-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-blue-200 mb-1">📅 Engagement figurant à la semaine</p>
                  <p className="text-slate-300">4,5 x salaire journalier (ne peut pas être inférieur au smic)</p>
                </div>

                <div className="bg-blue-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-blue-200 mb-1">⏰ Majorations heures supplémentaires</p>
                  <p className="text-slate-300">+25% les 9ème, 10ème, 11ème heures</p>
                  <p className="text-slate-300">+50% la 12ème heure</p>
                </div>

                <div className="bg-blue-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-blue-200 mb-1">🌙 Heures de nuit</p>
                  <p className="text-slate-300">+25% par heure</p>
                </div>

                <div className="bg-blue-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-blue-200 mb-1">🚌 Indemnités de transport en commun</p>
                  <p className="text-slate-300">50% des frais réels engagés</p>
                </div>

                <div className="bg-blue-800/20 p-2 rounded text-xs">
                  <p className="font-semibold text-blue-200 mb-1">📝 Note</p>
                  <p className="text-slate-300 text-xs">Cumul des majorations limité à 200%, sauf 1er mai.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Majorations communes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
              <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Cinéma)</p>
              <div className="text-xs text-slate-300 space-y-1">
                <p>• Dimanche : Cachet doublé</p>
                <p>• 1er Mai : Cachet doublé</p>
                <p>• 1/01, 14/07, 15/08, 1/11, 11/11, 25/12 : Cachet doublé</p>
                <p>• Lundi de Pâques 08/05 ET Jeudi de l'Ascension : Cachet doublé</p>
              </div>
            </div>

            <div className="bg-slate-900/60 p-3 rounded border border-cyan-400/20">
              <p className="font-semibold text-cyan-200 mb-2 text-sm">🎉 Jours fériés (Audiovisuel)</p>
              <div className="text-xs text-slate-300 space-y-1">
                <p>• Dimanche : majoration de 50% par h travaillée</p>
                <p>• 1er Mai : 300% de la rémunération</p>
                <p>• 1/01, 14/07, 15/08, 1/11, 11/11, 25/12 : 200% de la rémunération</p>
                <p>• Lundi de Pâques 08/05 ET Jeudi de l'Ascension : 150% de la rémunération</p>
              </div>
            </div>
          </div>

          {/* Indemnités spéciales */}
          <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/30">
            <p className="font-semibold text-cyan-200 mb-2 text-sm">💰 Indemnités spéciales - Uniquement en cinéma</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-300">
              <div>• Scènes danse et/ou chant : +25€</div>
              <div>• Répétitions danse/chant : 50% du salaire journalier</div>
              <div>• Pluie/Natation : +15€</div>
              <div>• Topless/Cadavre/Nu : +50€</div>
              <div>• Scènes particulièrement pénibles : +20€</div>
              <div>• Animaux/Accessoires professionnels : +25€</div>
              <div>• Véhicules sans permis : +25€</div>
              <div>• Véhicule avec permis (hors carburant) : +35€</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-orange-400/30">
            <button
              onClick={() => window.open('/acfda_salaire_figu-1er-janv-2025_new.pdf', '_blank')}
              className="w-full bg-orange-600/20 hover:bg-orange-600/30 text-orange-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Télécharger le guide complet ACFDA des salaires figuration (1er janvier 2026)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigurationSalaries;
