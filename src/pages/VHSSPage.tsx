import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const VHSSPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-relaxed">
              Prévention des Violences et Harcèlements Sexistes et Sexuels (VHSS)
            </h1>

            <div className="bg-destructive/10 border border-destructive/30 p-5 rounded-lg mb-8">
              <p className="font-semibold text-foreground text-lg mb-1">
                FORMATION OBLIGATOIRE
              </p>
              <p className="text-sm text-foreground/90">
                La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Étude VHSS - Février 2025 (17 associations professionnelles)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <p className="text-sm text-foreground mb-3">
                      <strong>1 698 réponses</strong> de technicien·ne·s du cinéma et de l'audiovisuel sur 40 ans de carrière
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-card p-3 rounded-lg border border-border">
                        <p className="font-semibold text-primary text-sm">DISCRIMINATION</p>
                        <p className="text-xs mt-1 text-foreground"><strong>47%</strong> ont subi une discrimination (56% femmes, 35% hommes)</p>
                        <p className="text-xs text-muted-foreground">Motifs : sexe, âge, apparence physique</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border">
                        <p className="font-semibold text-primary text-sm">AGISSEMENTS SEXISTES</p>
                        <p className="text-xs mt-1 text-foreground"><strong>59%</strong> ont subi des agissements sexistes (85% femmes, 25% hommes)</p>
                        <p className="text-xs text-muted-foreground">Remarques, blagues sexistes, interpellations familières</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border">
                        <p className="font-semibold text-primary text-sm">HARCÈLEMENT SEXUEL</p>
                        <p className="text-xs mt-1 text-foreground"><strong>37%</strong> ont subi du harcèlement sexuel (50% femmes, 20% hommes)</p>
                        <p className="text-xs text-muted-foreground">Blagues grivoises, rapprochements physiques non-consentis</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border">
                        <p className="font-semibold text-primary text-sm">AGRESSIONS SEXUELLES</p>
                        <p className="text-xs mt-1 text-foreground"><strong>11%</strong> ont été victimes (15% femmes, 5% hommes)</p>
                        <p className="text-xs text-muted-foreground">Baisers forcés, attouchements</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg border border-border text-sm">
                    <p className="font-semibold text-primary">VIOLS / TENTATIVES : 25 personnes (23 femmes, 2 hommes)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Constats clés de l'étude</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <ul className="text-sm space-y-2 text-foreground">
                      <li><strong>Victimes :</strong> Principalement des femmes, jeunes, en postes subalternes ou techniques</li>
                      <li><strong>Auteurs :</strong> Très majoritairement des hommes avec pouvoir hiérarchique, notoriété ou âge</li>
                      <li><strong>Omerta :</strong> 82% des femmes et 65% des hommes estiment que la loi du silence persiste</li>
                      <li><strong>Contexte :</strong> Tournages en déplacement, horaires tardifs, promiscuité, situations festives</li>
                      <li><strong>Évolution positive :</strong> 83% estiment que la situation s'améliore depuis le début de leur carrière</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avenant VHSS (17 mai 2024 - étendu septembre 2024)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
                    <p className="text-sm text-foreground"><strong>Harcèlement sexuel :</strong> Propos ou comportements à connotation sexuelle répétés portant atteinte à la dignité.</p>
                    <p className="text-sm text-foreground"><strong>Agissement sexiste :</strong> Tout agissement lié au sexe créant un environnement hostile.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-primary">Référent VHSS obligatoire</p>
                        <p className="text-sm">Désignation d'un référent formé sur chaque film (30€ brut/semaine en long-métrage)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Procédure de signalement</p>
                        <p className="text-sm">Dispositif interne obligatoire - Mail/téléphone dédié - Confidentialité garantie</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Protection des victimes</p>
                        <p className="text-sm">Interdiction de sanctions, licenciement ou discrimination des victimes et témoins</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-primary">Cellule d'écoute Audiens</p>
                        <p className="text-sm">Accompagnement psychologique et juridique gratuit - Anonymat préservé</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Enquête interne</p>
                        <p className="text-sm">Procédure contradictoire obligatoire - Peut être externalisée - Respect présomption d'innocence</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Formation obligatoire</p>
                        <p className="text-sm">Formation VHSS pour producteurs (depuis 2022) et équipes de tournage (depuis janvier 2025)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg border border-border text-sm">
                    <p className="font-semibold text-primary mb-2">Mesures de prévention obligatoires</p>
                    <ul className="space-y-1 ml-4 list-disc text-foreground">
                      <li>Information de tous les salariés (kit de prévention)</li>
                      <li>Affichage des numéros utiles et procédures</li>
                      <li>Formation des managers et référents</li>
                      <li>Au moins 2 référents VHSS formés à chaque étape (prépa, tournage, post-prod)</li>
                      <li>Notification au CCHSCT en cas de signalement (anonymisée)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documents de référence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <button
                    onClick={() => window.open('/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf', '_blank')}
                    className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-5 h-5 text-primary" />
                    Télécharger l'Étude complète VHSS (Février 2025)
                  </button>
                  <button
                    onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                    className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-5 h-5 text-primary" />
                    Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VHSSPage;
