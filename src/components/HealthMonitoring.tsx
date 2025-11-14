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
        <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
          Le suivi médical obligatoire des enfants du spectacle par Thalie Santé
        </p>
      </div>

      {/* Encadré important - Documents requis */}
      <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-foreground text-lg mb-3">
              📋 Documents médicaux obligatoires
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-1">Pour tous les enfants :</p>
                <ul className="space-y-1 ml-4 text-foreground/90">
                  <li>• Avis médical d'aptitude d'un médecin du travail de <strong>Thalie Santé</strong> (ex-CMB)</li>
                  <li>• À minima : document justifiant d'une prise de rendez-vous</li>
                  <li>• Autorisation parentale obligatoire</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-destructive/20">
                <p className="font-semibold text-foreground mb-1">Cas particulier - Figurants et silhouettes :</p>
                <ul className="space-y-1 ml-4 text-foreground/90">
                  <li>• Enfant de <strong>3 ans et plus</strong> : avis d'un médecin généraliste accepté</li>
                  <li>• Enfant de <strong>moins de 3 ans</strong> : avis d'un pédiatre accepté</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choix du médecin */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Quel médecin consulter ?
          </CardTitle>
          <CardDescription className="text-slate-300">
            Critères de choix entre médecin Thalie Santé et médecin généraliste
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="bg-blue-950/40 p-4 rounded-lg border border-accent/30">
              <h3 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Médecin Thalie Santé obligatoire pour :
              </h3>
              <ul className="space-y-2 text-slate-200 ml-6">
                <li>• <strong>Rôle 1er choix</strong></li>
                <li>• <strong>Rôle 2nd choix</strong></li>
                <li>• <strong>Figurant avec plus de 4 jours d'absences</strong> (donc à partir de 5 jours d'absences)</li>
              </ul>
            </div>

            <div className="bg-blue-950/40 p-4 rounded-lg border border-accent/30">
              <h3 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Médecin généraliste autorisé pour :
              </h3>
              <p className="text-slate-200 mb-2">
                Tous les autres cas (petits rôles, figurants avec 4 jours ou moins d'absences)
              </p>
              <div className="bg-destructive/10 border-2 border-destructive/50 p-4 rounded-lg mt-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/90">
                      <strong>Important :</strong> Le médecin généraliste doit être en exercice. 
                      Les visites médicales réalisées chez des médecins retraités ne seront pas acceptées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-accent/20">
            <h3 className="font-semibold text-lg text-amber-300">Procédures selon la localisation</h3>
            
            <div className="space-y-3">
              <div className="bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-200 mb-2">Enfant en région parisienne (Île-de-France)</h4>
                <ul className="space-y-2 text-slate-200 text-sm ml-4">
                  <li>• Thalie Santé contacte directement les parents pour prendre rendez-vous</li>
                  <li>• Consultation en <strong>physique</strong> ou en <strong>téléconsultation</strong></li>
                  <li>• Vous devez renseigner les coordonnées des représentants légaux dans votre demande</li>
                  <li>• Thalie Santé charge directement le certificat d'aptitude/inaptitude sur la plateforme</li>
                </ul>
              </div>

              <div className="bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-200 mb-2">Enfant en région</h4>
                <ul className="space-y-2 text-slate-200 text-sm ml-4">
                  <li>• Thalie Santé charge un <strong>bon de prise en charge</strong> sur la plateforme</li>
                  <li>• Ce bon permet de prendre rendez-vous dans un <strong>centre agréé par Thalie Santé</strong> en région</li>
                  <li>• Vous devez renseigner les coordonnées des représentants légaux</li>
                  <li>• Liste des centres agréés disponible sur demande</li>
                </ul>
              </div>

              <div className="bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-200 mb-2">Examen sur pièce</h4>
                <p className="text-slate-200 text-sm ml-4">
                  Dans certains cas, Thalie Santé peut réaliser un examen sur pièce (analyse des documents sans consultation). 
                  Le certificat d'aptitude/inaptitude est alors chargé directement sur la plateforme.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information principale */}
      <Alert className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border-accent/20">
        <Heart className="h-5 w-5 text-accent" />
        <AlertDescription className="text-slate-200">
          <strong>Thalie Santé</strong> est le seul service de prévention et de santé au travail interentreprises agréé en France 
          pour le suivi médical des mineurs de moins de 16 ans dans le spectacle en Île-de-France, 
          avec une compétence de coordination sur tout le territoire français.
        </AlertDescription>
      </Alert>

      {/* Prise en charge financière */}
      <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            Prise en charge financière des visites médicales
          </CardTitle>
          <CardDescription className="text-slate-300">
            Qui paie les consultations médicales ?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-950/40 p-4 rounded-lg border border-accent/30">
            <h3 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Visites médicales obligatoires
            </h3>
            <p className="text-slate-200 mb-2">
              Les visites médicales obligatoires pour l'obtention de l'autorisation de travail sont 
              <strong> prises en charge par la production</strong> dans le cadre de la cotisation santé au travail.
            </p>
            <ul className="space-y-2 text-slate-200 ml-6 mt-3">
              <li>• Consultation chez le médecin du travail Thalie Santé</li>
              <li>• Consultation chez un médecin généraliste (selon les cas)</li>
              <li>• Consultation chez un pédiatre (enfants de moins de 3 ans figurants)</li>
            </ul>
          </div>

          <div className="bg-destructive/10 border-2 border-destructive/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              ⚠️ Visites chez un médecin spécialiste
            </h3>
            <p className="text-foreground/90">
              Les consultations chez des médecins spécialistes (hors médecin généraliste ou pédiatre autorisés) 
              ne sont <strong>pas prises en charge par la production</strong>.
            </p>
          </div>

          <div className="bg-blue-950/40 p-4 rounded-lg border border-accent/30">
            <h3 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Cas particulier : Figurants
            </h3>
            <p className="text-slate-200">
              Pour les figurants, la production <strong>rembourse les visites médicales</strong> effectuées 
              chez un médecin généraliste ou un pédiatre (selon l'âge de l'enfant).
            </p>
          </div>

          <Alert className="bg-blue-950/40 border-accent/30">
            <Heart className="h-4 w-4 text-accent" />
            <AlertDescription className="text-slate-200 text-sm">
              Le suivi en santé au travail est pris en charge par l'employeur dans le cadre de la cotisation 
              obligatoire à Thalie Santé. Cette cotisation couvre les visites médicales réglementaires.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

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

          <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground/90">
                  <strong>Important :</strong> Ce n'est pas le médecin qui accorde l'autorisation de travail, 
                  mais le Préfet suite à l'avis de la commission. L'autorisation est valable uniquement pour 
                  la prestation spécifique demandée.
                </p>
              </div>
            </div>
          </div>
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
