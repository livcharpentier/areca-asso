import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";

const VHSSPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide leading-relaxed">
              Prévention des Violences et Harcèlements Sexistes et Sexuels (VHSS)
            </h1>

            {/* Formation obligatoire - Encadré rose important */}
            <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">
                    FORMATION OBLIGATOIRE
                  </p>
                  <p className="text-sm text-foreground/90">
                    La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Étude Février 2025 */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-400/40">
                  <p className="font-bold text-red-200 mb-3 text-lg">📊 ÉTUDE VHSS - Février 2025 (17 associations professionnelles)</p>
                  <p className="text-sm mb-3 text-slate-100"><strong>1 698 réponses</strong> de technicien·ne·s du cinéma et de l'audiovisuel sur 40 ans de carrière</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="bg-red-950/40 p-3 rounded">
                      <p className="font-semibold text-red-300 text-sm">DISCRIMINATION</p>
                      <p className="text-xs mt-1 text-slate-200"><strong>47%</strong> ont subi une discrimination (56% femmes, 35% hommes)</p>
                      <p className="text-xs text-slate-300">Motifs : sexe, âge, apparence physique</p>
                    </div>
                    
                    <div className="bg-red-950/40 p-3 rounded">
                      <p className="font-semibold text-red-300 text-sm">AGISSEMENTS SEXISTES</p>
                      <p className="text-xs mt-1 text-slate-200"><strong>59%</strong> ont subi des agissements sexistes (85% femmes, 25% hommes)</p>
                      <p className="text-xs text-slate-300">Remarques, blagues sexistes, interpellations familières</p>
                    </div>
                    
                    <div className="bg-red-950/40 p-3 rounded">
                      <p className="font-semibold text-red-300 text-sm">HARCÈLEMENT SEXUEL</p>
                      <p className="text-xs mt-1 text-slate-200"><strong>37%</strong> ont subi du harcèlement sexuel (50% femmes, 20% hommes)</p>
                      <p className="text-xs text-slate-300">Blagues grivoises, rapprochements physiques non-consentis</p>
                    </div>
                    
                    <div className="bg-red-950/40 p-3 rounded">
                      <p className="font-semibold text-red-300 text-sm">AGRESSIONS SEXUELLES</p>
                      <p className="text-xs mt-1 text-slate-200"><strong>11%</strong> ont été victimes (15% femmes, 5% hommes)</p>
                      <p className="text-xs text-slate-300">Baisers forcés, attouchements</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-950/50 p-2 rounded text-xs">
                    <p className="font-semibold text-red-300">VIOLS / TENTATIVES : 25 personnes (23 femmes, 2 hommes)</p>
                  </div>
                </div>
              </div>

              {/* Profils et contexte */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                  <p className="font-semibold text-red-200 mb-2">⚠️ Constats clés de l'étude :</p>
                  <ul className="text-sm space-y-2 text-slate-100">
                    <li><strong>Victimes :</strong> Principalement des femmes, jeunes, en postes subalternes ou techniques</li>
                    <li><strong>Auteurs :</strong> Très majoritairement des hommes avec pouvoir hiérarchique, notoriété ou âge</li>
                    <li><strong>Omerta :</strong> 82% des femmes et 65% des hommes estiment que la loi du silence persiste</li>
                    <li><strong>Contexte :</strong> Tournages en déplacement, horaires tardifs, promiscuité, situations festives</li>
                    <li><strong>Évolution positive :</strong> 83% estiment que la situation s'améliore depuis le début de leur carrière</li>
                  </ul>
                </div>
              </div>

              {/* Avenant VHSS Mai 2024 */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 mb-4">
                  <p className="font-semibold text-red-200 mb-2 text-lg">📜 Avenant VHSS (17 mai 2024 - étendu sept. 2024)</p>
                  <p className="text-sm mb-2 text-slate-100"><strong>Harcèlement sexuel :</strong> Propos/comportements à connotation sexuelle répétés portant atteinte à la dignité.</p>
                  <p className="text-sm mb-3 text-slate-100"><strong>Agissement sexiste :</strong> Tout agissement lié au sexe créant un environnement hostile.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100">
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

                <div className="bg-red-900/20 p-3 rounded border border-red-400/30 text-sm mt-4">
                  <p className="font-semibold text-red-200">⚖️ Mesures de prévention obligatoires :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc text-slate-100">
                    <li>Information de tous les salariés (kit de prévention)</li>
                    <li>Affichage des numéros utiles et procédures</li>
                    <li>Formation des managers et référents</li>
                    <li>Au moins 2 référents VHSS formés à chaque étape (prépa, tournage, post-prod)</li>
                    <li>Notification au CCHSCT en cas de signalement (anonymisée)</li>
                  </ul>
                </div>
              </div>

              {/* Boutons de téléchargement */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
                <div className="space-y-2">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VHSSPage;
