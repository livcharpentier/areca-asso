import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import CommissionCalendar from "@/components/CommissionCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import HealthMonitoring from "@/components/HealthMonitoring";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileText, Users, Heart, Calendar, Folder } from "lucide-react";

const MinorsEmploymentPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-relaxed text-center">
            Réglementation Emploi des Mineurs
          </h1>

          <Tabs defaultValue="temps-travail" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 h-auto bg-muted/50">
              <TabsTrigger value="temps-travail" className="flex items-center gap-2 py-3">
                <Clock className="h-4 w-4" />
                <span className="hidden md:inline">Temps de travail</span>
              </TabsTrigger>
              <TabsTrigger value="conditions" className="flex items-center gap-2 py-3">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Conditions</span>
              </TabsTrigger>
              <TabsTrigger value="responsable" className="flex items-center gap-2 py-3">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Responsable</span>
              </TabsTrigger>
              <TabsTrigger value="medical" className="flex items-center gap-2 py-3">
                <Heart className="h-4 w-4" />
                <span className="hidden md:inline">Suivi médical</span>
              </TabsTrigger>
              <TabsTrigger value="calendrier" className="flex items-center gap-2 py-3">
                <Calendar className="h-4 w-4" />
                <span className="hidden md:inline">Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="dossier" className="flex items-center gap-2 py-3">
                <Folder className="h-4 w-4" />
                <span className="hidden md:inline">Dossier</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="temps-travail">
              <WorkTimeRegulations />
            </TabsContent>

            <TabsContent value="conditions">
              <section className="py-8 bg-background">
                <div className="max-w-5xl mx-auto">
                  {/* Conditions d'Emploi des Mineurs */}
            <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
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
                        <li>Diplôme niveau bac minimum dans secteur éducatif/social</li>
                        <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
                        <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
                      </ul>
                      <p className="text-orange-100 mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-400/30 mb-4">
                  <p className="font-semibold text-orange-200 mb-2">Nouvelle obligation - Castings :</p>
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

                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                  <p className="font-semibold text-blue-200 mb-2">Dossier obligatoire :</p>
                  <ul className="text-sm ml-4 list-disc space-y-1">
                    <li>Autorisation parentale</li>
                    <li>Certificat médical (validité selon âge)</li>
                    <li>Avis pédagogique Éducation Nationale</li>
                    <li>Assurance responsabilité civile</li>
                    <li>Casier B3 du Responsable enfants</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                  <p className="font-semibold text-green-200 mb-2">Scolarité obligatoire :</p>
                  <p className="text-sm">Répétiteur agréé si absence scolaire - Minimum 3h d'enseignement/jour en période scolaire</p>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="responsable">
              <ChildSupervisorRole />
            </TabsContent>

            <TabsContent value="medical">
              <HealthMonitoring />
            </TabsContent>

            <TabsContent value="calendrier">
              <CommissionCalendar />
            </TabsContent>

            <TabsContent value="dossier">
              <DrieetsDossier />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MinorsEmploymentPage;
