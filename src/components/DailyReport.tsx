import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DailyReport = () => {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <CardTitle>Compte Rendu Journalier de Tournage</CardTitle>
          <CardDescription>
            Document obligatoire à remplir quotidiennement pour chaque mineur présent sur le tournage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => window.open('/compte_rendu_tournage.xls', '_blank')}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Télécharger le modèle Excel
          </Button>
        </CardContent>
      </Card>

      {/* Guide de remplissage */}
      <Card>
        <CardHeader>
          <CardTitle>Guide de remplissage du compte rendu</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="jour">
              <AccordionTrigger>JOUR</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Indiquez la date du jour de tournage au format JJ/MM/AAAA.
                </p>
                <p className="text-sm italic">
                  Exemple : 15/01/2025
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="noms-prenoms">
              <AccordionTrigger>NOMS/PRÉNOMS DU OU DES MINEURS</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Inscrivez le nom et prénom complet de chaque mineur présent sur le tournage.
                </p>
                <p className="text-sm italic">
                  Format : NOM Prénom
                </p>
                <p className="text-sm italic">
                  Exemple : DUPONT Marie
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ages">
              <AccordionTrigger>ÂGES</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Notez l'âge exact du mineur au moment du tournage.
                </p>
                <p className="text-sm font-semibold text-destructive">
                  Important : L'âge détermine les durées maximales de travail autorisées.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="role">
              <AccordionTrigger>RÔLE/FIGURATION/DOUBLURE/CASCADEUR</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Précisez la nature de la prestation du mineur :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Rôle</strong> : Personnage avec dialogues</li>
                  <li><strong>Figuration</strong> : Présence sans dialogue</li>
                  <li><strong>Doublure</strong> : Remplacement pour répétitions ou plans techniques</li>
                  <li><strong>Cascadeur</strong> : Cascades (nécessite autorisations spécifiques)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="heures">
              <AccordionTrigger>HORAIRES (Arrivée, Début, Fin)</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>
                  <p className="font-semibold">HEURE D'ARRIVÉE</p>
                  <p className="text-sm text-muted-foreground">
                    Heure à laquelle le mineur arrive sur le lieu de tournage (habillage/maquillage inclus).
                  </p>
                </div>
                <div>
                  <p className="font-semibold">HEURE DÉBUT TOURNAGE</p>
                  <p className="text-sm text-muted-foreground">
                    Heure du début effectif de la prestation devant la caméra.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">HEURE FIN DE TOURNAGE</p>
                  <p className="text-sm text-muted-foreground">
                    Heure de fin de la dernière prise impliquant le mineur.
                  </p>
                </div>
                <p className="text-sm font-semibold text-destructive">
                  Ces horaires permettent de vérifier le respect des durées maximales légales.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pauses">
              <AccordionTrigger>TEMPS PAUSE & PAUSE CANTINE</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>
                  <p className="font-semibold">TEMPS PAUSE</p>
                  <p className="text-sm text-muted-foreground">
                    Durée totale des pauses prises par le mineur (hors repas). Format : XXh ou XXmin
                  </p>
                </div>
                <div>
                  <p className="font-semibold">PAUSE CANTINE</p>
                  <p className="text-sm text-muted-foreground">
                    Durée de la pause repas. Minimum obligatoire selon l'âge et la durée de présence.
                  </p>
                </div>
                <p className="text-sm font-semibold text-destructive">
                  Important : Les pauses sont obligatoires et leur durée minimale est réglementée.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transport">
              <AccordionTrigger>TRANSPORT (durée + accompagnant)</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Indiquez la durée du trajet et le nom de l'accompagnant.
                </p>
                <p className="text-sm italic">
                  Format : Durée (XXmin ou XXh) + Nom de l'accompagnant
                </p>
                <p className="text-sm italic">
                  Exemple : 45min - Parent / 1h30 - Production
                </p>
                <p className="text-sm font-semibold text-destructive">
                  Le temps de transport peut être comptabilisé dans le temps de travail total.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="encadrants">
              <AccordionTrigger>ENCADRANTS PRÉSENTS</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Listez tous les encadrants présents sur le tournage :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Responsable mineur (obligatoire)</li>
                  <li>Parents/tuteurs légaux</li>
                  <li>Précepteur (si scolarité obligatoire)</li>
                  <li>Autres professionnels d'encadrement</li>
                </ul>
                <p className="text-sm italic">
                  Exemple : Responsable mineur : Marie MARTIN, Parent : Mme DUPONT, Précepteur : Jean BERNARD
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="situations">
              <AccordionTrigger>SITUATION(S) SURVENUE(S)</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-muted-foreground">
                  Notez tout événement particulier survenu pendant la journée :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Médical</strong> : Malaise, blessure, prise de médicament</li>
                  <li><strong>Émotionnel</strong> : Stress, pleurs, refus de tourner, fatigue</li>
                  <li><strong>Incident</strong> : Retard, absence, conflit, problème technique</li>
                  <li><strong>Comportement</strong> : Difficultés de concentration, agitation</li>
                </ul>
                <p className="text-sm font-semibold text-destructive">
                  Soyez factuel et précis. Ces informations sont essentielles pour la protection du mineur.
                </p>
                <p className="text-sm italic">
                  Exemple : "Légère fatigue en fin de journée - Pause supplémentaire accordée" ou "RAS"
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="observations">
              <AccordionTrigger>OBSERVATIONS</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-muted-foreground">
                  Espace libre pour toute remarque complémentaire :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Ambiance générale de la journée</li>
                  <li>Points positifs notables</li>
                  <li>Suggestions d'amélioration</li>
                  <li>Coordination avec l'équipe technique</li>
                  <li>Communication avec les parents</li>
                </ul>
                <p className="text-sm italic">
                  Exemple : "Excellente collaboration avec le réalisateur. L'enfant était très concentré et motivé."
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Bonnes pratiques */}
      <Card>
        <CardHeader>
          <CardTitle>Bonnes pratiques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm text-foreground">
            <li>Remplissez le compte rendu <strong>immédiatement après la journée</strong> de tournage</li>
            <li>Conservez une copie pour votre journal de bord professionnel</li>
            <li>En cas de situation particulière, informez immédiatement la production et les parents</li>
            <li>Archivez tous les comptes rendus pendant au moins 3 ans</li>
          </ul>
        </CardContent>
      </Card>

      {/* Note sur le bilan scolaire */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-foreground">
            <strong>Note importante :</strong> Si un précepteur est présent, un bilan scolaire sera réalisé 
            pour chaque mineur et transmis à la production et à la famille en fin de tournage.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyReport;
