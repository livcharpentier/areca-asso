import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DailyReport from "@/components/DailyReport";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResponsablesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Espace Responsables Enfants
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outils et réglementations pour les responsables enfants du cinéma et de l'audiovisuel
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="compte-rendu" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="compte-rendu">
                <span className="hidden sm:inline">Compte Rendu Journalier</span>
              </TabsTrigger>
              <TabsTrigger value="reglementations">
                <span className="hidden sm:inline">Réglementations</span>
              </TabsTrigger>
              <TabsTrigger value="vhss">
                <span className="hidden sm:inline">VHSS</span>
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
            <li>Autorisation de la commission obligatoire pour les mineurs de moins de 16 ans</li>
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

export default ResponsablesPage;
