import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, FileText, Users, Shield, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HealthMonitoring = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Suivi en Santé au Travail
        </h2>
        <p className="text-lg text-slate-200 max-w-3xl mx-auto">
          Le suivi médical obligatoire des enfants du spectacle par Thalie Santé
        </p>
      </div>

      {/* Encadré important - Documents requis */}
      <Alert className="bg-amber-950/30 border-amber-500/40 backdrop-blur">
        <AlertCircle className="h-5 w-5 text-amber-400" />
        <AlertDescription className="text-slate-200">
          <strong className="text-amber-300 block mb-3 text-lg">Documents médicaux obligatoires</strong>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-amber-200 mb-1">Pour tous les enfants :</p>
              <ul className="space-y-1 ml-4">
                <li>• Avis médical d'aptitude d'un médecin du travail de <strong>Thalie Santé</strong> (ex-CMB)</li>
                <li>• À minima : document justifiant d'une prise de rendez-vous</li>
                <li>• Autorisation parentale obligatoire</li>
              </ul>
            </div>
            <div className="pt-2 border-t border-amber-500/20">
              <p className="font-semibold text-amber-200 mb-1">Cas particulier - Figurants et silhouettes :</p>
              <ul className="space-y-1 ml-4">
                <li>• Enfant de <strong>3 ans et plus</strong> : avis d'un médecin généraliste accepté</li>
                <li>• Enfant de <strong>moins de 3 ans</strong> : avis d'un pédiatre accepté</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>

      {/* Information principale */}
      <Alert className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20">
        <Heart className="h-5 w-5 text-accent" />
        <AlertDescription className="text-slate-200">
          <strong>Thalie Santé</strong> est le seul service de prévention et de santé au travail interentreprises agréé en France 
          pour le suivi médical des mineurs de moins de 16 ans dans le spectacle en Île-de-France, 
          avec une compétence de coordination sur tout le territoire français.
        </AlertDescription>
      </Alert>

      {/* Processus d'autorisation */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            Autorisation préalable de travail
          </CardTitle>
          <CardDescription className="text-slate-300">
            Démarche obligatoire avant tout engagement d'un enfant de moins de 16 ans
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</div>
              <div className="text-slate-200">
                <p className="font-semibold text-amber-300">Constitution du dossier</p>
                <p className="text-sm">L'employeur constitue un dossier de demande d'autorisation pour l'enfant</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
              <div className="text-slate-200">
                <p className="font-semibold text-amber-300">Visite médicale obligatoire</p>
                <p className="text-sm">
                  <strong>En Île-de-France :</strong> Médecin du travail (Thalie Santé)<br/>
                  <strong>En région :</strong> Médecin généraliste ou pédiatre
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</div>
              <div className="text-slate-200">
                <p className="font-semibold text-amber-300">Avis médical</p>
                <p className="text-sm">Le médecin émet un avis : apte, apte avec restriction, ou inapte</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">4</div>
              <div className="text-slate-200">
                <p className="font-semibold text-amber-300">Commission départementale</p>
                <p className="text-sm">L'avis médical est transmis à la Commission des Enfants du Spectacle qui examine le dossier complet</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">5</div>
              <div className="text-slate-200">
                <p className="font-semibold text-amber-300">Autorisation préfectorale</p>
                <p className="text-sm">Le Préfet délivre l'autorisation individuelle suite à l'avis conforme de la commission</p>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-950/40 border-accent/30">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-slate-200 text-sm">
              <strong>Important :</strong> Ce n'est pas le médecin qui accorde l'autorisation de travail, 
              mais le Préfet suite à l'avis de la commission. L'autorisation est valable uniquement pour 
              la prestation spécifique demandée.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* La visite médicale */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-accent" />
            La visite médicale
          </CardTitle>
          <CardDescription className="text-slate-300">
            Une visite médicale obligatoire à chaque nouveau contrat de travail
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-amber-300">Avant la visite</h3>
            <p className="text-slate-200 mb-3">
              L'équipe du Pôle Enfants de Thalie Santé analyse en détail :
            </p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                La charge et la durée de travail (sur ce projet et tous les autres projets de l'année)
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                La thématique du projet (spectacle, film, doublage, chant…)
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Les interactions avec les autres artistes
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Le rôle et la prestation : établissement d'une cartographie des risques
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-amber-300">Pendant la visite</h3>
            <p className="text-slate-200 mb-3">
              Le médecin du travail évalue les capacités physiques et psychiques de l'enfant :
            </p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Échange sur l'activité professionnelle récente et le parcours global
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Discussion sur la scolarité
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Perception du rôle par l'enfant : motivation, distinction fiction/réalité
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Examen médical et tests complémentaires (visuels, audiogramme, évaluation psychologique)
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                Consultation du carnet de santé (vaccinations, courbe de croissance)
              </li>
            </ul>
          </div>

          <Alert className="bg-blue-950/40 border-accent/30">
            <Heart className="h-4 w-4 text-accent" />
            <AlertDescription className="text-slate-200 text-sm">
              Le suivi s'inscrit dans une démarche de <strong>prévention primaire</strong> pour évaluer 
              l'impact du rôle sur la santé physique et psychologique de l'enfant. Le coût est pris en charge 
              par l'employeur dans le cadre de la cotisation santé au travail.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Actions en milieu de travail */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Actions en milieu de travail
          </CardTitle>
          <CardDescription className="text-slate-300">
            Conseil et prévention auprès des employeurs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-200">
            Le Pôle Enfants conseille les employeurs (producteurs, metteurs en scène…) en matière de prévention des risques. 
            Le médecin du travail exerce un rôle de conseil et recherche des solutions adaptées pour éviter 
            la mise en danger physique et psychique des enfants.
          </p>
          <p className="text-slate-200">
            Des déplacements sur les lieux de tournage ou de représentation sont possibles, bien que plus rarement réalisés 
            en raison de contraintes logistiques (transmission tardive des scénarios, changements de dernière minute, 
            courte durée de certains projets, éloignement géographique).
          </p>
        </CardContent>
      </Card>

      {/* Risques professionnels */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-accent" />
            Principaux risques professionnels
          </CardTitle>
          <CardDescription className="text-slate-300">
            Risques spécifiques identifiés dans le secteur du spectacle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-amber-300">Risques physiques</h4>
              <ul className="space-y-1 text-slate-200 text-sm">
                <li>• Troubles musculo-squelettiques</li>
                <li>• Risques auditifs (exposition au bruit)</li>
                <li>• Chutes et traumatismes</li>
                <li>• Fatigue et troubles du sommeil</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-amber-300">Risques psychosociaux</h4>
              <ul className="space-y-1 text-slate-200 text-sm">
                <li>• Stress et anxiété</li>
                <li>• Pression de la performance</li>
                <li>• Impact sur la scolarité</li>
                <li>• Gestion de l'image publique</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Téléchargement du document */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            Document complet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full sm:w-auto">
            <a href="/suivi_enfants_spectacle_talis_sante.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Télécharger la brochure Thalie Santé (PDF)
            </a>
          </Button>
          <p className="text-sm text-slate-400 mt-3">
            Brochure d'information complète sur le suivi en santé au travail des enfants du spectacle - Mai 2024
          </p>
        </CardContent>
      </Card>

      {/* Contact Thalie Santé */}
      <Alert className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20">
        <Shield className="h-5 w-5 text-accent" />
        <AlertDescription className="text-slate-200">
          <strong>Thalie Santé</strong> est issu de la fusion en 2021 du Centre Médical de la Bourse (CMB) 
          et du Centre Médical de la Publicité et de la Communication (CMPC). Depuis 2009, 
          il dispose d'un agrément spécifique pour le suivi des mineurs de moins de 16 ans en Île-de-France.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default HealthMonitoring;
