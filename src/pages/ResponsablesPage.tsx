import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DailyReport from "@/components/DailyReport";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const ResponsablesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Espace Membres
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outils et ressources pour les membres de l'ARENCA
            </p>
          </div>
        </div>
      </section>

      {/* Deux sections : RE et Animateurs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="responsables" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="responsables" className="text-base font-semibold">
                Responsables Enfants
              </TabsTrigger>
              <TabsTrigger value="animateurs" className="text-base font-semibold">
                Animateurs
              </TabsTrigger>
            </TabsList>

            {/* SECTION RESPONSABLES ENFANTS */}
            <TabsContent value="responsables">
              <Tabs defaultValue="compte-rendu" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="compte-rendu">
                    <span className="hidden sm:inline">Compte Rendu</span>
                  </TabsTrigger>
                  <TabsTrigger value="reglementations">
                    <span className="hidden sm:inline">Réglementations</span>
                  </TabsTrigger>
                  <TabsTrigger value="vhss">
                    <span className="hidden sm:inline">VHSS</span>
                  </TabsTrigger>
                  <TabsTrigger value="positionnement">
                    <span className="hidden sm:inline">Positionnement</span>
                  </TabsTrigger>
                </TabsList>

            <TabsContent value="compte-rendu">
              <DailyReport />
            </TabsContent>

            <TabsContent value="reglementations">
              <ReglementationsContent />
            </TabsContent>

            <TabsContent value="vhss">
              <VHSSContent />
            </TabsContent>
            <TabsContent value="positionnement">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-primary mb-4">Notre positionnement</h3>
                  <p className="text-foreground leading-relaxed">
                    Lors de l&#39;adh&#233;sion, chaque nouveau membre, en plus de signer la charte de l&#39;association,
                    d&#233;clare sur l&#39;honneur, par &#233;crit, avoir un casier vierge, lui permettant de travailler
                    en contact avec des enfants.
                  </p>
                  <p className="text-muted-foreground mt-4 italic border-t border-border pt-4">
                    La v&#233;rification incombe &#224; la production.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
            </TabsContent>

            {/* SECTION ANIMATEURS */}
            <TabsContent value="animateurs">
              <AnimateursSection />
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Contenu Réglementations */
const ReglementationsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="temps-travail" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="temps-travail" className="text-xs">
            <span className="hidden sm:inline">Temps de travail</span>
          </TabsTrigger>
          <TabsTrigger value="organisation" className="text-xs">
            <span className="hidden sm:inline">Organisation</span>
          </TabsTrigger>
          <TabsTrigger value="familles-emploi" className="text-xs">
            <span className="hidden sm:inline">Familles d'emploi</span>
          </TabsTrigger>
          <TabsTrigger value="conditions" className="text-xs">
            <span className="hidden sm:inline">Conditions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="temps-travail">
          <div className="space-y-6">
            <WorkTimeRegulations />
          </div>
        </TabsContent>

        <TabsContent value="organisation">
          <OrganisationTravailContent />
        </TabsContent>

        <TabsContent value="familles-emploi">
          <FamillesEmploiContent />
        </TabsContent>

        <TabsContent value="conditions">
          <ConditionsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

/* Contenu Organisation du travail */
const OrganisationTravailContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Organisation du temps de travail</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground">
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Temps de travail effectif vs. temps de présence</p>
          <p className="text-sm text-foreground mb-2">Le temps de travail effectif comprend :</p>
          <ul className="text-sm text-foreground ml-4 list-disc space-y-1">
            <li><strong>Préparation :</strong> Maquillage, coiffure, habillage</li>
            <li><strong>Répétitions :</strong> Toutes les répétitions sur plateau</li>
            <li><strong>Prises :</strong> Temps de tournage effectif</li>
          </ul>
          <div className="mt-3 bg-card p-3 rounded border border-border">
            <p className="font-semibold text-primary text-sm">Ne sont PAS du temps de travail :</p>
            <ul className="text-sm text-foreground ml-4 list-disc space-y-1 mt-1">
              <li><strong>Temps de transport</strong> (trajet domicile → lieu de tournage)</li>
              <li><strong>Temps de repas</strong> (pause déjeuner/dîner)</li>
              <li><strong>Temps d'attente</strong> dans la loge (si l'enfant n'est pas sollicité)</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Travail du dimanche et jours fériés</p>
          <ul className="text-sm text-foreground space-y-1 ml-4 list-disc">
            <li>Le travail du dimanche et des jours fériés est <strong>autorisé</strong> dans les entreprises de spectacles</li>
            <li>Conditions définies par la <strong>convention collective</strong> applicable</li>
            <li>Les majorations de salaire prévues s'appliquent</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Règle des vacances scolaires</p>
          <ul className="text-sm text-foreground space-y-2 ml-4 list-disc">
            <li><strong>Règle des 50% :</strong> L'enfant ne peut travailler plus de la moitié de la durée totale de chaque période de vacances scolaires</li>
            <li><strong>Vacances d'été :</strong> Un mois entier de repos obligatoire (soit juillet SOIT août complet)</li>
            <li><strong>Rentrée scolaire :</strong> Éviter de tourner la semaine de la rentrée</li>
            <li><strong>Cumul :</strong> Cette règle s'applique quel que soit le nombre d'employeurs et le nombre de jours travaillés</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Repos obligatoire</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
            <div>
              <p><strong>Repos quotidien :</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Minimum <strong>14 heures consécutives</strong> pour les moins de 16 ans</li>
                <li>Minimum <strong>12 heures consécutives</strong> pour les 16-18 ans</li>
              </ul>
            </div>
            <div>
              <p><strong>Repos hebdomadaire :</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>2 jours consécutifs</strong> incluant le dimanche</li>
                <li>Dérogation possible : 36h dont 24h consécutives</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu Familles d'emploi */
const FamillesEmploiContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Familles d'Emploi des Mineurs dans le Spectacle</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground">
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-3">Rôle vs. Figuration</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="bg-card p-3 rounded border border-border">
              <p className="font-semibold text-primary mb-1">Rôle (Artiste interprète)</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Texte à dire ou jeu d'acteur identifiable</li>
                <li>Rémunération selon la convention collective artistes</li>
                <li>Droits voisins (ADAMI) applicables</li>
                <li>Contrat d'artiste interprète obligatoire</li>
              </ul>
            </div>
            <div className="bg-card p-3 rounded border border-border">
              <p className="font-semibold text-primary mb-1">Figuration</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Présence dans le décor sans jeu identifiable</li>
                <li>Rémunération selon grille de figuration</li>
                <li>Pas de droits voisins</li>
                <li>Contrat de figuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Théâtre & Cirque</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Âge minimum :</strong> 9 ans (pas de dérogation possible)</li>
            <li><strong>Maximum :</strong> 3 représentations par semaine</li>
            <li><strong>Maximum :</strong> 1 représentation par jour</li>
            <li>Repos obligatoire pendant les vacances scolaires</li>
            <li><strong>Cirque :</strong> Mêmes règles, interdiction des exercices dangereux pour les moins de 16 ans</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">E-sport & Compétitions de jeux vidéo</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li>Les compétitions de jeux vidéo professionnelles sont soumises à la réglementation du spectacle</li>
            <li>Autorisation de la commission obligatoire pour les mineurs</li>
            <li>Mêmes règles de temps de travail et de repos applicables</li>
            <li>Obligation de déclaration à la Caisse des Dépôts pour les gains</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Compétence territoriale</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Entreprise française :</strong> Demande auprès de la DRIEETS du département du siège social de l'entreprise</li>
            <li><strong>Entreprise étrangère :</strong> Demande auprès de la DRIEETS du département du lieu de tournage</li>
            <li><strong>Île-de-France :</strong> Commission centralisée pour les départements 75, 77, 78, 91, 92, 93, 94, 95</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu Conditions */
const ConditionsContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Conditions d'Emploi des Mineurs (17 mai 2024)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground">
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Champ d'application</p>
          <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable de la commission enfants du spectacle (DRIEETS).</p>
          <p className="text-sm mt-2"><strong>Objectif :</strong> Veiller à ce que l'emploi des enfants ne compromette pas leur scolarité, équilibre physique et moral, santé et sécurité au travail.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Commission départementale consultative</p>
          <p className="text-sm mb-2">Présidée par un <strong>magistrat juge des enfants</strong> désigné par le 1er président de la cour d'appel.</p>
          <p className="text-sm"><strong>Composition :</strong></p>
          <ul className="text-sm ml-4 list-disc space-y-1 mt-1">
            <li>Directeur académique des services de l'éducation nationale ou son représentant</li>
            <li>Directeur départemental chargé de l'emploi (DDETS/DDETSPP) ou son représentant</li>
            <li>Un médecin</li>
            <li>Directeur régional des affaires culturelles (DRAC) ou son représentant</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Procédure et délais</p>
          <ul className="text-sm space-y-1">
            <li><strong>Instruction :</strong> Par le directeur départemental (DDETS/DDETSPP)</li>
            <li><strong>Délai de décision du préfet :</strong> 1 mois à compter de la réception de la demande complète</li>
            <li><strong>Complément d'instruction :</strong> Délai prorogé d'1 mois supplémentaire si nécessaire</li>
            <li><strong>Absence de réponse :</strong> Demande réputée rejetée passé le délai</li>
            <li><strong>L'autorisation peut être retirée à tout moment</strong></li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-3">Obligation majeure - Responsable des enfants</p>
          <p className="text-sm mb-3">Obligatoire pour toute production avec mineurs.</p>
          <div className="bg-card p-3 rounded border border-border">
            <p className="font-semibold text-primary mb-2">Profil requis</p>
            <ul className="ml-4 space-y-1 list-disc text-sm">
              <li>Personne qualifiée justifiant d'un <strong>diplôme (BAFA)</strong> ou d'une <strong>expérience significative</strong> pour l'exercice de ses fonctions</li>
              <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
              <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
            </ul>
            <p className="text-sm mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau.</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Autre nouvelle obligation (Castings)</p>
          <p className="text-sm">Présence obligatoire d'un adulte référent lors de tous les castings avec des mineurs.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Certificat médical obligatoire</p>
          <div className="space-y-2 text-sm">
            <p><strong>Examen spécifique :</strong> Évalue l'impact du rôle sur la santé physique et psychologique de l'enfant.</p>
            <p><strong>Le médecin doit préalablement avoir pris connaissance :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Du contenu du spectacle (histoire, paroles, scènes)</li>
              <li>Du planning précis (dates, horaires des répétitions et représentations)</li>
            </ul>
            <p className="mt-2"><strong>Renouvellement obligatoire :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Enfants &lt; 3 ans : Tous les <strong>3 mois</strong></li>
              <li>Enfants 3-6 ans : Tous les <strong>6 mois</strong></li>
              <li>Enfants &gt; 6 ans : Tous les <strong>ans</strong></li>
            </ul>
            <p className="text-destructive mt-2">En cas d'avis médical négatif, l'enfant ne peut être employé.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-3">
            <p className="font-semibold text-primary">Dossier obligatoire</p>
            <p className="text-sm">• Autorisation parentale</p>
            <p className="text-sm">• Certificat médical (validité selon âge)</p>
            <p className="text-sm">• Avis pédagogique Education Nationale</p>
            <p className="text-sm">• Assurance responsabilité civile</p>
            <p className="text-sm">• Casier B3 du Responsable des mineurs</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-3">
            <p className="font-semibold text-primary">Accompagnement plateau</p>
            <p className="text-sm">Présence d'un parent ou tuteur légal</p>
            <p className="text-sm">Responsable des mineurs qualifié (cinéma)</p>
            <p className="text-sm">Adulte référent lors des castings</p>
            <p className="text-sm">Conditions adaptées (repos, repas)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-3">
            <p className="font-semibold text-primary">Durée quotidienne détaillée</p>
            <div className="text-sm space-y-1">
              <p><strong>&lt; 3 ans :</strong> 1h/jour (pause après 30 min)</p>
              <p><strong>3-5 ans :</strong> 2h/jour (pause après 1h)</p>
              <p><strong>6-11 ans :</strong></p>
              <p className="ml-3">• Période scolaire : 3h/jour (pause après 1h30)</p>
              <p className="ml-3">• Vacances scolaires : 4h/jour (pause après 2h)</p>
              <p><strong>12-16 ans :</strong></p>
              <p className="ml-3">• Vacances scolaires : 6h/jour (pause après 3h)</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Préparation, répétition et présence sur plateau = temps de travail effectif.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-3">
            <p className="font-semibold text-primary">Scolarité obligatoire</p>
            <p className="text-sm">Répétiteur agréé si absence scolaire</p>
            <p className="text-sm">3h d'enseignement/jour minimum</p>
            <p className="text-sm">Maintien du rythme scolaire</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Rémunération</p>
          <p className="text-sm"><strong>90%</strong> versés à la Caisse des Dépôts et Consignations (pécule jusqu'à majorité).</p>
          <p className="text-sm"><strong>10%</strong> à disposition des représentants légaux.</p>
          <p className="text-sm">Minimum : grille convention collective applicable.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Travail pendant les vacances scolaires</p>
          <ul className="text-sm space-y-1">
            <li><strong>Maximum :</strong> 50% de la durée totale des vacances</li>
            <li><strong>Été :</strong> Un mois entier de repos obligatoire (soit juillet SOIT août)</li>
            <li><strong>Rentrée scolaire :</strong> Éviter de tourner la semaine de la rentrée</li>
            <li>Valable quel que soit le nombre de jours de travail et d'employeurs</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-2">Durée du travail</p>
            <ul className="text-sm space-y-1">
              <li><strong>Maximum :</strong> 8h/jour - 35h/semaine</li>
              <li><strong>Pause obligatoire :</strong> 30 min toutes les 4h30</li>
              <li><strong>Repos quotidien :</strong> Minimum 14h consécutives</li>
              <li><strong>Repos hebdomadaire :</strong> 2 jours consécutifs (dérogation possible : 36h dont 24h consécutives)</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-2">Enfants du théâtre</p>
            <ul className="text-sm space-y-1">
              <li>Âge minimum : <strong>9 ans</strong></li>
              <li>Maximum : <strong>3 représentations/semaine</strong></li>
              <li>Maximum : <strong>1 représentation/jour</strong></li>
              <li>Respect du repos pendant vacances scolaires</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-2">Travail de nuit</p>
            <ul className="text-sm space-y-1">
              <li><strong>&lt; 16 ans :</strong> Interdiction totale 20h-6h</li>
              <li><strong>16-18 ans :</strong> Interdiction totale 22h-6h</li>
              <li><strong>Dérogation exceptionnelle :</strong> Possible jusqu'à 24h (inspecteur du travail)</li>
              <li><strong>Repos minimum :</strong> 12h consécutives (&lt;16 ans) / 14h consécutives (16-18 ans) en cas de dérogation</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-2">Acrobaties et professions spéciales</p>
            <ul className="text-sm space-y-1">
              <li><strong>Interdit &lt; 16 ans :</strong> Tours de force périlleux, exercices de dislocation, travaux dangereux</li>
              <li><strong>Exception :</strong> Enfants de parents acrobates/saltimbanques/montreurs d'animaux/directeurs de cirque si <strong>≥ 12 ans</strong></li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu VHSS */
const VHSSContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Formation obligatoire</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Étude VHSS - Février 2025 (17 associations professionnelles)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground">
          <strong>1 698 réponses</strong> de technicien·ne·s du cinéma et de l'audiovisuel sur 40 ans de carrière
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Discrimination</p>
            <p className="text-sm text-foreground"><strong>47%</strong> ont subi une discrimination (56% femmes, 35% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Motifs : sexe, âge, apparence physique</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agissements sexistes</p>
            <p className="text-sm text-foreground"><strong>59%</strong> ont subi des agissements sexistes (85% femmes, 25% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Remarques, blagues sexistes, interpellations familières</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Harcèlement sexuel</p>
            <p className="text-sm text-foreground"><strong>37%</strong> ont subi du harcèlement sexuel (50% femmes, 20% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Blagues grivoises, rapprochements physiques non-consentis</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agressions sexuelles</p>
            <p className="text-sm text-foreground"><strong>11%</strong> ont été victimes (15% femmes, 5% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Baisers forcés, attouchements</p>
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary">Viols / tentatives : 25 personnes (23 femmes, 2 hommes)</p>
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
          Télécharger l'Étude complète VHSS (Février 2025)
        </button>
        <button
          onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
          className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
        </button>
      </CardContent>
    </Card>
  </div>
);

/* Section Animateurs */
const AnimateursSection = () => (
  <Tabs defaultValue="charte-anim" className="w-full">
    <TabsList className="grid w-full grid-cols-4 mb-6">
      <TabsTrigger value="charte-anim" className="text-xs">Charte</TabsTrigger>
      <TabsTrigger value="idees-animation" className="text-xs">Animations</TabsTrigger>
      <TabsTrigger value="jeux-rapides" className="text-xs">Jeux Rapides</TabsTrigger>
      <TabsTrigger value="jeux-societe" className="text-xs">Jeux Société</TabsTrigger>
    </TabsList>

    <TabsContent value="charte-anim">
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-end">
          <button
            onClick={() => window.open('/Charte_Animateur_ARENCA.pdf', '_blank')}
            className="bg-accent text-white hover:bg-accent/90 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 text-sm transition-all"
          >
            ⬇ Télécharger la charte PDF
          </button>
        </div>
        <Card>
          <CardHeader><CardTitle>Charte de l&apos;Animateur/trice — ARENCA</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-sm text-foreground">
            <div><p className="italic text-muted-foreground">La présente charte définit les principes fondamentaux pour adhérer à l&apos;ARENCA en tant qu&apos;animateur. Elle vise à garantir la protection et le bien-être des mineurs pendant les temps d&apos;attente sur les tournages.</p></div>
            {[
              { title: "Article 1 — Rôle", content: "L&apos;animateur intervient sous la responsabilité directe du Responsable Enfants. Il encadre les mineurs pendant les temps d&apos;attente et les périodes hors plateau." },
              { title: "Article 2 — Engagement éthique", content: "Lors de l&apos;adhésion, chaque animateur déclare sur l&apos;honneur, par écrit, avoir un casier judiciaire vierge. La vérification incombe à la production." },
            ].map((a, i) => (
              <div key={i} className="border-t border-border pt-3">
                <p className="font-semibold text-primary mb-1">{a.title}</p>
                <p dangerouslySetInnerHTML={{__html: a.content}} />
              </div>
            ))}
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-primary mb-2">Article 3 — Principes fondamentaux</p>
              <ul className="space-y-1 ml-4">
                <li>• L&apos;intérêt supérieur de l&apos;enfant est au coeur de toutes les actions</li>
                <li>• Bienveillance et confidentialité des informations personnelles des mineurs et de leurs familles</li>
              </ul>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-primary mb-2">Article 4 — Accompagnement</p>
              <ul className="space-y-1 ml-4">
                <li>• S&apos;adapter au rythme, à la personnalité et aux limites de chaque enfant</li>
                <li>• Assurer une présence fiable sans créer de lien de dépendance</li>
                <li>• Mettre en place des activités adaptées pendant les temps d&apos;attente</li>
              </ul>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-primary mb-2">Article 5 — Relation avec les familles</p>
              <ul className="space-y-1 ml-4">
                <li>• Établir une relation de confiance avec les représentants légaux</li>
                <li>• Ne prendre aucune décision concernant l&apos;enfant sans en référer au Responsable Enfants</li>
                <li>• Respecter la confidentialité des informations familiales</li>
              </ul>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-primary mb-2">Article 6 — Coordination</p>
              <ul className="space-y-1 ml-4">
                <li>• Travailler sous la supervision directe du Responsable Enfants</li>
                <li>• Rendre compte régulièrement de l&apos;état des enfants au Responsable Enfants</li>
                <li>• Ne pas intervenir auprès des équipes de production sans l&apos;accord du Responsable Enfants</li>
                <li>• En cas de situation préoccupante, en informer immédiatement le Responsable Enfants</li>
              </ul>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-primary mb-1">Article 7 — Application</p>
              <p>L&apos;ARENCA peut reconsidérer l&apos;adhésion d&apos;un membre dont le comportement serait contraire aux valeurs de l&apos;association.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>

    <TabsContent value="idees-animation">
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Idées d&apos;animation par tranche d&apos;âge</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                age: "3 — 6 ans",
                color: "bg-yellow-50 border-yellow-200",
                idees: [
                  "Dessin libre et coloriage sur grand format",
                  "Jeux de construction (Duplo, kapla)",
                  "Histoires et contes racontés",
                  "Jeux d&apos;imitation et de dînette",
                  "Bulles de savon et jeux sensoriels",
                  "Puzzles simples et encastrements",
                ]
              },
              {
                age: "6 — 10 ans",
                color: "bg-green-50 border-green-200",
                idees: [
                  "Dessin, coloriage manga, origami",
                  "Lego et constructions créatives",
                  "Jeux de société simples (Uno, Dobble, Jungle Speed)",
                  "Lecture de BD et livres illustrés",
                  "Activités manuelles (découpage, collage)",
                  "Jeux de cartes et mémory",
                ]
              },
              {
                age: "10 — 13 ans",
                color: "bg-blue-50 border-blue-200",
                idees: [
                  "Jeux de société stratégiques (Puissance 4, Échecs, Uno)",
                  "Dessin créatif, manga, BD",
                  "Quiz et jeux de culture générale",
                  "Écriture créative et scénarios",
                  "Puzzles complexes",
                  "Jeux de cartes à collectionner",
                ]
              },
              {
                age: "13 — 16 ans",
                color: "bg-purple-50 border-purple-200",
                idees: [
                  "Jeux de société (Catan, Codenames, Time&apos;s Up)",
                  "Quiz cinéma, musique, culture pop",
                  "Écoute de musique et discussion",
                  "Dessin, manga, illustrations",
                  "Jeux de rôle simples",
                  "Activités créatives libres",
                ]
              },
            ].map((groupe, i) => (
              <div key={i} className={`p-4 rounded-lg border ${groupe.color}`}>
                <p className="font-bold text-lg mb-3">{groupe.age}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  {groupe.idees.map((idee, j) => (
                    <li key={j} dangerouslySetInnerHTML={{__html: `• ${idee}`}} />
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </TabsContent>

    <TabsContent value="jeux-rapides">
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Jeux rapides — Sans matériel</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                titre: "Pour tous (3-16 ans)",
                jeux: [
                  { nom: "Jacques a dit", desc: "Classique intemporel, adapter la complexité selon l&apos;âge" },
                  { nom: "1, 2, 3 Soleil", desc: "Idéal pour se dégourdir les jambes entre deux prises" },
                  { nom: "Le jeu du silence", desc: "Utile pour les moments de calme avant une scène" },
                  { nom: "Devinettes", desc: "Animaux, objets, personnages célèbres — s&apos;adapte à tous les âges" },
                ]
              },
              {
                titre: "6 — 12 ans",
                jeux: [
                  { nom: "Le jeu du baccalauréat", desc: "Trouver un prénom, ville, animal... pour chaque lettre" },
                  { nom: "Ni oui ni non", desc: "Répondre aux questions sans dire oui ou non" },
                  { nom: "Le message secret", desc: "Chuchoter un message de personne en personne" },
                  { nom: "Mime express", desc: "Mimer un film, un animal, un métier en moins d&apos;une minute" },
                ]
              },
              {
                titre: "10 — 16 ans",
                jeux: [
                  { nom: "Quiz cinéma/séries", desc: "Parfait pour créer du lien avec les ados passionnés" },
                  { nom: "Le mot interdit", desc: "Faire deviner un mot sans utiliser certains mots clés" },
                  { nom: "Qui suis-je ?", desc: "Personnage collé dans le dos à faire deviner" },
                  { nom: "Story Cubes verbal", desc: "Inventer une histoire à partir de mots tirés au sort" },
                ]
              },
            ].map((groupe, i) => (
              <div key={i} className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="font-bold text-primary mb-3">{groupe.titre}</p>
                <div className="space-y-2">
                  {groupe.jeux.map((jeu, j) => (
                    <div key={j} className="flex gap-2 text-sm">
                      <span className="font-semibold min-w-[140px]" dangerouslySetInnerHTML={{__html: jeu.nom}} />
                      <span className="text-muted-foreground" dangerouslySetInnerHTML={{__html: `— ${jeu.desc}`}} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </TabsContent>
    <TabsContent value="jeux-societe">
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Jeux de société recommandés</CardTitle></CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">6 — 10 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Mille Sabord</p><p className="text-muted-foreground">Jeu de dés pirate, rapide et rigolo, parfait pour les petits</p></div>
                <div><p className="font-semibold">Dobble</p><p className="text-muted-foreground">Réflexes et observation, fonctionne avec tout le monde</p></div>
                <div><p className="font-semibold">Uno</p><p className="text-muted-foreground">Classique indémodable, simple et rapide</p></div>
                <div><p className="font-semibold">Jungle Speed</p><p className="text-muted-foreground">Jeu de réflexes, crée beaucoup d&apos;animation</p></div>
                <div><p className="font-semibold">Zombie Kidz</p><p className="text-muted-foreground">Jeu coopératif, idéal pour apprendre à jouer ensemble</p></div>
                <div><p className="font-semibold">Loup Garou pour une Nuit</p><p className="text-muted-foreground">Version courte du célèbre jeu, à partir de 6 ans, parfait en groupe</p></div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">10 — 13 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Mito</p><p className="text-muted-foreground">Bluff et déduction, très populaire chez les ados</p></div>
                <div><p className="font-semibold">Wasabi</p><p className="text-muted-foreground">Jeu de sushis et de stratégie, drôle et coloré</p></div>
                <div><p className="font-semibold">Flip Seven</p><p className="text-muted-foreground">Jeu de cartes addictif, facile à apprendre</p></div>
                <div><p className="font-semibold">Cluster</p><p className="text-muted-foreground">Jeu de réflexion et de placement, stimule la stratégie</p></div>
                <div><p className="font-semibold">Zombie Buzz</p><p className="text-muted-foreground">Rapide et nerveux, idéal pour les temps courts</p></div>
                <div><p className="font-semibold">Skull King</p><p className="text-muted-foreground">Jeu de plis pirate, facile et très amusant</p></div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">13 — 16 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Time&apos;s Up</p><p className="text-muted-foreground">Faire deviner des noms célèbres, crée beaucoup de rires</p></div>
                <div><p className="font-semibold">Codenames</p><p className="text-muted-foreground">Jeu d&apos;espions en équipe, stimule la communication</p></div>
                <div><p className="font-semibold">Blanc Manger Coco</p><p className="text-muted-foreground">Humour absurde, parfait pour détendre l&apos;atmosphère</p></div>
                <div><p className="font-semibold">Mysterium</p><p className="text-muted-foreground">Jeu coopératif d&apos;enquête, crée des échanges</p></div>
                <div><p className="font-semibold">Concept</p><p className="text-muted-foreground">Faire deviner sans parler, universel et créatif</p></div>
                <div><p className="font-semibold">Exploding Kittens</p><p className="text-muted-foreground">Rapide, drôle et plein de rebondissements</p></div>
                <div><p className="font-semibold">2 Pommes 3 Pins</p><p className="text-muted-foreground">Jeu de culture générale décalé, parfait pour les ados, crée beaucoup de fous rires</p></div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border p-4 rounded-lg">
              <p className="font-semibold text-primary mb-2">Conseil pratique</p>
              <p className="text-sm text-foreground">Privilégier les jeux courts (15-20 min max) adaptés aux interruptions fréquentes du tournage. Avoir toujours 2-3 jeux de niveaux différents pour s&apos;adapter rapidement au groupe.</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </TabsContent>

  </Tabs>
);

export default ResponsablesPage;
