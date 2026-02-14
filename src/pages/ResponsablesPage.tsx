import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DailyReport from "@/components/DailyReport";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import FigurationSalaries from "@/components/FigurationSalaries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Scale, ShieldAlert, Clock, Coins, Landmark, AlertTriangle, BookOpen, Download } from "lucide-react";

const ResponsablesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
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
              <TabsTrigger value="compte-rendu" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Compte Rendu Journalier</span>
              </TabsTrigger>
              <TabsTrigger value="reglementations" className="gap-2">
                <Scale className="h-4 w-4" />
                <span className="hidden sm:inline">Réglementations</span>
              </TabsTrigger>
              <TabsTrigger value="vhss" className="gap-2">
                <ShieldAlert className="h-4 w-4" />
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

/* Contenu Réglementations (extrait de MinorsEmploymentPage sans Navigation/Footer) */
const ReglementationsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="temps-travail" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="temps-travail" className="gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Temps de travail</span>
          </TabsTrigger>
          <TabsTrigger value="salaires-figuration" className="gap-2">
            <Coins className="h-4 w-4" />
            <span className="hidden sm:inline">Salaires Figuration</span>
          </TabsTrigger>
          <TabsTrigger value="conditions" className="gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Conditions</span>
          </TabsTrigger>
          <TabsTrigger value="caisse-depots" className="gap-2">
            <Landmark className="h-4 w-4" />
            <span className="hidden sm:inline">Caisse des Dépôts</span>
          </TabsTrigger>
          <TabsTrigger value="sanctions" className="gap-2">
            <Scale className="h-4 w-4" />
            <span className="hidden sm:inline">Sanctions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="temps-travail">
          <div className="space-y-6">
            <WorkTimeRegulations />
          </div>
        </TabsContent>

        <TabsContent value="salaires-figuration">
          <FigurationSalaries />
        </TabsContent>

        <TabsContent value="conditions">
          <ConditionsContent />
        </TabsContent>

        <TabsContent value="caisse-depots">
          <CaisseDepotsContent />
        </TabsContent>

        <TabsContent value="sanctions">
          <SanctionsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

/* Contenu Conditions - extrait de MinorsEmploymentPage */
const ConditionsContent = () => (
  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
    <h3 className="text-2xl font-bold text-orange-300 mb-4">
      Conditions d'Emploi des Mineurs (17 mai 2024)
    </h3>
    <div className="space-y-4 text-slate-100">
      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
        <p className="font-semibold text-blue-200 mb-2">Champ d'application :</p>
        <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable de la commission enfants du spectacle (DRIEETS).</p>
        <p className="text-sm mt-2"><strong>Objectif :</strong> Veiller à ce que l'emploi des enfants ne compromette pas leur scolarité, équilibre physique et moral, santé et sécurité au travail.</p>
      </div>

      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
        <p className="font-semibold text-blue-200 mb-2">Commission départementale consultative :</p>
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
        <p className="font-semibold text-blue-200 mb-2">Procédure et délais :</p>
        <ul className="text-sm space-y-1">
          <li><strong>Instruction :</strong> Par le directeur départemental (DDETS/DDETSPP)</li>
          <li><strong>Délai de décision du préfet :</strong> 1 mois à compter de la réception de la demande complète</li>
          <li><strong>Complément d'instruction :</strong> Délai prorogé d'1 mois supplémentaire si nécessaire</li>
          <li><strong>Absence de réponse :</strong> Demande réputée rejetée passé le délai</li>
          <li><strong>L'autorisation peut être retirée à tout moment</strong></li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-5 rounded-lg border-2 border-orange-400 mb-4 shadow-lg">
        <p className="text-xl font-bold text-orange-200 mb-3">
          OBLIGATION MAJEURE - Responsable des Enfants
        </p>
        <div className="space-y-3 text-sm bg-black/30 p-4 rounded">
          <p className="text-base font-semibold text-white">
            OBLIGATOIRE pour toute production avec mineurs
          </p>
          <div className="border-l-4 border-orange-400 pl-4 space-y-2">
            <p className="text-orange-100"><strong>Profil requis :</strong></p>
            <ul className="ml-4 space-y-1 list-disc text-slate-200">
              <li>Personne qualifiée justifiant d'un <strong>diplôme (BAFA)</strong> OU d'une <strong>expérience significative</strong> pour l'exercice de ses fonctions</li>
              <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
              <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
            </ul>
            <p className="text-orange-100 mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-400/30 mb-4">
        <p className="font-semibold text-orange-200 mb-2">Autre nouvelle obligation (Castings) :</p>
        <p className="text-sm">Présence obligatoire d'un adulte référent lors de tous les castings avec des mineurs</p>
      </div>

      <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 mb-4">
        <p className="font-semibold text-green-200 mb-2">Certificat médical obligatoire :</p>
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
          <p className="text-red-300 mt-2">En cas d'avis médical négatif, l'enfant ne peut être employé</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-blue-200">Dossier obligatoire :</p>
            <p className="text-sm">• Autorisation parentale</p>
            <p className="text-sm">• Certificat médical (validité selon âge)</p>
            <p className="text-sm">• Avis pédagogique Education Nationale</p>
            <p className="text-sm">• Assurance responsabilité civile</p>
            <p className="text-sm">• Casier B3 du Responsable des mineurs</p>
          </div>
          <div>
            <p className="font-semibold text-blue-200">Durée quotidienne DÉTAILLÉE :</p>
            <div className="text-sm space-y-1 bg-blue-950/40 p-2 rounded">
              <p><strong>&lt; 3 ans :</strong> 1h/jour (pause après 30 min)</p>
              <p><strong>3-5 ans :</strong> 2h/jour (pause après 1h)</p>
              <p><strong>6-11 ans :</strong></p>
              <p className="ml-3">• Période scolaire : 3h/jour (pause après 1h30)</p>
              <p className="ml-3">• Vacances scolaires : 4h/jour (pause après 2h)</p>
              <p><strong>12-16 ans :</strong></p>
              <p className="ml-3">• Vacances scolaires : 6h/jour (pause après 3h)</p>
            </div>
            <p className="text-xs text-yellow-300 mt-2">Préparation, répétition et présence sur plateau = temps de travail effectif</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-blue-200">Scolarité obligatoire :</p>
            <p className="text-sm">Répétiteur agréé si absence scolaire</p>
            <p className="text-sm">3h d'enseignement/jour minimum</p>
            <p className="text-sm">Maintien du rythme scolaire</p>
          </div>
          <div>
            <p className="font-semibold text-blue-200">👤 Accompagnement plateau :</p>
            <p className="text-sm">Présence d'un parent ou tuteur légal</p>
            <p className="text-sm">Responsable des mineurs qualifié (cinéma)</p>
            <p className="text-sm">Adulte référent lors des castings</p>
            <p className="text-sm">Conditions adaptées (repos, repas)</p>
          </div>
          <div>
            <p className="font-semibold text-blue-200">Rémunération :</p>
            <p className="text-sm"><strong>90%</strong> versés à la Caisse des Dépôts et Consignations (pécule jusqu'à majorité)</p>
            <p className="text-sm"><strong>10%</strong> à disposition des représentants légaux</p>
            <p className="text-sm">Minimum : grille convention collective applicable</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-400/30 mb-4">
        <p className="font-semibold text-amber-200 mb-2">Travail pendant les vacances scolaires :</p>
        <ul className="text-sm space-y-1">
          <li><strong>Maximum :</strong> 50% de la durée totale des vacances</li>
          <li><strong>Été :</strong> Un mois entier de repos obligatoire (soit juillet SOIT août)</li>
          <li><strong>Rentrée scolaire :</strong> Éviter de tourner la semaine de la rentrée</li>
          <li className="text-yellow-300">Valable quel que soit le nombre de jours de travail et d'employeurs</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30">
          <p className="font-semibold text-indigo-200 mb-2">Durée du travail :</p>
          <ul className="text-sm space-y-1">
            <li><strong>Maximum :</strong> 8h/jour - 35h/semaine</li>
            <li><strong>Pause obligatoire :</strong> 30 min toutes les 4h30</li>
            <li><strong>Repos quotidien :</strong> Minimum 14h consécutives</li>
            <li><strong>Repos hebdomadaire :</strong> 2 jours consécutifs (dérogation possible : 36h dont 24h consécutives)</li>
          </ul>
        </div>
        <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30">
          <p className="font-semibold text-indigo-200 mb-2">Enfants du théâtre :</p>
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
          <p className="font-semibold text-purple-200 mb-2">Travail de nuit :</p>
          <ul className="text-sm space-y-1">
            <li><strong>&lt; 16 ans :</strong> Interdiction totale 20h-6h</li>
            <li><strong>16-18 ans :</strong> Interdiction totale 22h-6h</li>
            <li><strong>Dérogation exceptionnelle :</strong> Possible jusqu'à 24h (inspecteur du travail)</li>
            <li><strong>Repos minimum :</strong> 12h consécutives (&lt;16 ans) / 14h consécutives (16-18 ans) en cas de dérogation</li>
          </ul>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30">
          <p className="font-semibold text-purple-200 mb-2">Acrobaties & professions spéciales :</p>
          <ul className="text-sm space-y-1">
            <li><strong>Interdit &lt; 16 ans :</strong> Tours de force périlleux, exercices de dislocation, travaux dangereux</li>
            <li><strong>Exception :</strong> Enfants de parents acrobates/saltimbanques/montreurs d'animaux/directeurs de cirque si <strong>≥ 12 ans</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* Contenu Caisse des Dépôts */
const CaisseDepotsContent = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-5 rounded-lg border-2 border-emerald-400/40">
      <h4 className="text-lg font-bold text-emerald-200 mb-3 flex items-center gap-2">
        <Landmark className="h-5 w-5" />
        Caisse des Dépôts et Consignations - Mission d'intérêt général
      </h4>
      <div className="space-y-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">Rôle de la Caisse des Dépôts</p>
          <div className="text-sm space-y-2">
            <p>La Caisse des Dépôts est <strong>garante de la conservation des rémunérations des mineurs</strong> jusqu'à leur majorité (18 ans).</p>
            <p>Les versements se font sur un <strong>compte au nom de l'enfant</strong>. Les représentants légaux ne peuvent en aucun cas le créditer ou le débiter.</p>
            <p className="text-emerald-300">À noter : si l'enfant a plus de 16 ans, sa rémunération lui est directement versée par son employeur.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">💰 Répartition de la rémunération</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-500 text-white font-bold px-3 py-1 rounded">90%</span>
              <p>Versés à la Caisse des Dépôts (pécule conservé jusqu'à la majorité)</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-500 text-white font-bold px-3 py-1 rounded">10%</span>
              <p>À disposition des représentants légaux</p>
            </div>
            <p className="text-yellow-300 text-xs mt-2">Pour ESM : la part est fixée par décision de la Commission DREETS</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">Gratuit</p>
            <p className="text-xs text-slate-300">Aucun frais de dépôt ni gestion</p>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">2,76%</p>
            <p className="text-xs text-slate-300">Taux de rémunération (nov. 2025)</p>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">30 ans</p>
            <p className="text-xs text-slate-300">Conservation après majorité</p>
          </div>
        </div>
        <div className="bg-amber-900/30 p-3 rounded border border-amber-400/40">
          <p className="font-semibold text-amber-200 mb-2">📅 Prescription applicable</p>
          <div className="text-sm">
            <p>À la majorité, la Caisse des Dépôts adresse un courrier recommandé précisant les modalités pour récupérer le pécule.</p>
            <p className="mt-1">Sans réclamation : fonds conservés <strong>30 ans</strong> (non rémunérés après majorité), puis acquis à l'État.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-5 rounded-lg border-2 border-emerald-400/40">
      <h4 className="text-lg font-bold text-emerald-200 mb-3 flex items-center gap-2">
        🎓 Restitution à la Majorité (18 ans)
      </h4>
      <div className="space-y-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">Pourquoi les revenus sont-ils bloqués ?</p>
          <div className="text-sm space-y-2">
            <p>Pour <strong>protéger les mineurs</strong> et éviter les abus, la loi encadre strictement les revenus des enfants du spectacle et du mannequinat.</p>
            <p>Les sommes sont <strong>sécurisées jusqu'à 18 ans</strong> sur un compte à la Caisse des Dépôts, garantissant un capital pour l'entrée dans la vie adulte.</p>
            <p className="text-emerald-300">Gestion <strong>totalement gratuite</strong>. Taux de rémunération : <strong>2,76%</strong> depuis le 1er novembre 2025.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📬 Comment récupérer ses revenus à 18 ans ?</p>
          <div className="text-sm space-y-2">
            <p>Dans le mois de vos 18 ans, vous recevrez une <strong>lettre recommandée</strong> avec la procédure à suivre.</p>
            <ol className="ml-4 list-decimal space-y-1 mt-2">
              <li>Cliquez sur <strong>"Faire ma démarche en ligne"</strong> sur le site CDC</li>
              <li>Créez un compte profil <strong>Particulier</strong></li>
              <li>Remplissez la demande en indiquant votre <strong>N° compte CDC</strong></li>
              <li>Joignez les pièces justificatives (voir ci-dessous)</li>
              <li>Suivez l'avancement dans votre espace personnel</li>
            </ol>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📄 Pièces justificatives requises :</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Pièce d'identité</strong> (CNI, passeport ou carte de séjour) - Recto/Verso</li>
            <li><strong>RIB actif</strong> à votre nom et prénom</li>
          </ul>
          <p className="text-yellow-300 text-xs mt-2">⚠️ Majeurs sous tutelle et héritiers : demandes par courrier uniquement.</p>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">💡 Cas particulier : percevoir avant 18 ans</p>
          <div className="text-sm">
            <p>Après 16 ans, la <strong>Commission DDCS/DIRECCTE</strong> peut autoriser le versement direct d'une partie de la rémunération.</p>
            <p className="text-slate-400 mt-1">La part bloquée reste à la CDC jusqu'à la majorité.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📍 Changement de coordonnées</p>
          <div className="text-sm">
            <p>En cas de changement d'adresse, envoyez un mail à :</p>
            <a href="mailto:contacts-consignations@caissedesdepots.fr" className="text-emerald-300 hover:text-emerald-100 underline">
              contacts-consignations@caissedesdepots.fr
            </a>
            <p className="text-slate-400 mt-1 text-xs">Objet : "Changement adresse postale représentant légal ESM"</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40">
            <a href="https://consignations.caissedesdepots.fr/particulier/restitution-jeunes-majeurs-enfance-protegee/restitution-remuneration-enfants-spectacle-mannequinat-esm" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-100 underline text-sm">
              Faire ma démarche de restitution ESM →
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-5 rounded-lg border-2 border-red-400/40">
      <h4 className="text-lg font-bold text-red-200 mb-3 flex items-center gap-2">
        ⚠️ Règle Importante - Virements
      </h4>
      <div className="space-y-3 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="text-sm">
            <strong className="text-red-300">Chaque virement</strong> effectué doit <strong>obligatoirement</strong> correspondre à <strong>une seule demande saisie et transmise</strong>, quel que soit le nombre d'enfants et/ou prestations contenus.
          </p>
        </div>
        <div className="bg-red-950/50 p-3 rounded border border-red-500">
          <p className="text-sm font-bold text-red-200">🚫 VIREMENTS REJETÉS si :</p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Virement global pour plusieurs demandes</li>
            <li>• Plusieurs virements pour une seule demande</li>
          </ul>
          <p className="text-xs text-red-300 mt-2">Dans ce cas, vous devrez refaire l'ensemble de vos démarches.</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 rounded-lg border-2 border-slate-400/40">
      <h4 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
        📞 Contact et Références
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-slate-200 mb-2">Service Consignations</p>
          <p className="text-lg font-bold text-emerald-300">01 58 50 89 88</p>
          <p className="text-xs text-slate-400">Prix d'un appel local</p>
          <p className="text-sm mt-2">Lundi - Vendredi : 9h-12h / 13h-17h</p>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-slate-200 mb-2">Textes de référence</p>
          <ul className="text-xs space-y-1">
            <li>• Articles L7124-1 et suivants du Code du travail</li>
            <li>• Articles R7124-1 et suivants du Code du travail</li>
            <li>• Article R7124-35 du Code du travail</li>
            <li>• Loi n° 2020-1266 du 19/10/2020</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* Contenu Sanctions */
const SanctionsContent = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
      <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center gap-2">
        <AlertTriangle className="h-6 w-6" />
        Sanctions Pénales
      </h3>
      <div className="space-y-4 text-slate-100">
        <div className="bg-red-900/30 p-4 rounded-lg border-2 border-red-500">
          <p className="font-bold text-red-200 text-base mb-2">SANCTIONS PÉNALES (Art. Code du Travail) :</p>
          <div className="bg-black/30 p-3 rounded">
            <p className="text-red-100 font-semibold mb-2">Engager ou produire un enfant ≤16 ans sans autorisation préalable :</p>
            <div className="text-red-300 text-lg font-bold">
              <p>5 ANS DE PRISON + 75 000 € D'AMENDE</p>
            </div>
          </div>
          <ul className="mt-3 space-y-1 ml-4 list-disc text-slate-200">
            <li>Arrêt immédiat du tournage possible</li>
            <li>Amendes administratives supplémentaires</li>
            <li>Interdiction d'employer des mineurs</li>
            <li>Retrait de l'autorisation à tout moment par le préfet</li>
          </ul>
        </div>
        <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30">
          <p className="font-semibold text-blue-200 mb-1">📅 Travail dominical et jours fériés :</p>
          <p className="text-sm">Le travail du dimanche et des jours fériés est autorisé dans les entreprises de spectacles, selon les conditions définies par la convention collective applicable.</p>
        </div>
        <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30">
          <p className="font-semibold text-blue-200">🔄 Travaux en cours :</p>
          <p className="text-sm mt-1">Les partenaires sociaux poursuivent leurs travaux pour améliorer l'organisation des castings et du travail des enfants, afin de sécuriser l'ensemble des parties prenantes : enfants, responsables légaux, personnels d'encadrement et employeurs.</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-blue-400/60 rounded-lg p-6 backdrop-blur">
      <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        Documentation Officielle
      </h3>
      <div className="space-y-3">
        <p className="text-slate-200 mb-4">
          Accédez aux documents officiels et guides pratiques pour l'emploi des mineurs dans le spectacle
        </p>
        <button onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')} className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <FileText className="h-5 w-5" />
          Convention Collective - Document complet
        </button>
        <button onClick={() => window.open('/informations_emploi_mineurs_spectacle_drieets.pdf', '_blank')} className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <FileText className="h-5 w-5" />
          Guide DRIEETS - Informations emploi des mineurs
        </button>
        <button onClick={() => window.open('/duree_travail_enfants_spectacle_drieets.pdf', '_blank')} className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <FileText className="h-5 w-5" />
          Guide DRIEETS - Durée du travail
        </button>
        <button onClick={() => window.open('/livret_travail_des_enfants_080223.pdf', '_blank')} className="w-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <FileText className="h-5 w-5" />
          Livret Ministère du Travail - Emploi des enfants
        </button>
      </div>
    </div>
  </div>
);

/* Contenu VHSS */
const VHSSContent = () => (
  <div className="space-y-6">
    <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
      <div className="flex items-start gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <p className="font-semibold text-foreground text-lg mb-1">FORMATION OBLIGATOIRE</p>
          <p className="text-sm text-foreground/90">
            La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
          </p>
        </div>
      </div>
    </div>

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

    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-400/60 rounded-lg p-6 backdrop-blur">
      <div className="space-y-2">
        <button onClick={() => window.open('/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf', '_blank')} className="w-full bg-red-600/30 hover:bg-red-600/40 text-red-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <Download className="w-5 h-5" />
          📊 Télécharger l'Étude complète VHSS (Février 2025)
        </button>
        <button onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')} className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
          <Download className="w-5 h-5" />
          Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
        </button>
      </div>
    </div>
  </div>
);

export default ResponsablesPage;
