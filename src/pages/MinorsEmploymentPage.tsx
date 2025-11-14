import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import WorkTimeRegulations from "@/components/WorkTimeRegulations";

const MinorsEmploymentPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Réglementation des horaires en premier */}
      <WorkTimeRegulations />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-relaxed">
              Informations Emploi des Mineurs
            </h1>

            {/* Avenant Conditions d'Emploi des Mineurs */}
            <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/60 rounded-lg p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">
                Avenant Conditions d'Emploi des Mineurs (17 mai 2024)
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
                        <li>Personne qualifiée justifiant d'un <strong>diplôme</strong> OU d'une <strong>expérience significative</strong> pour l'exercice de ses fonctions</li>
                        <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
                        <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
                      </ul>
                      <p className="text-orange-100 mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau</p>
                    </div>
                    <p className="text-yellow-300 font-semibold mt-2">
                      Cette obligation s'ajoute à la présence obligatoire du parent ou tuteur légal
                    </p>
                  </div>
                </div>

                <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-400/30 mb-4">
                  <p className="font-semibold text-orange-200 mb-2">Autre nouvelle obligation (Castings) :</p>
                  <p className="text-sm">Accompagnement obligatoire par un adulte référent lors de tous les castings avec des mineurs</p>
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
                      <p className="text-sm">• Casier B3 du Responsable enfants</p>
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

                    <div>
                      <p className="font-semibold text-blue-200">📅 Délais commission :</p>
                      <p className="text-sm">Dépôt : 15 jours avant tournage</p>
                      <p className="text-sm">Décision sous 8 jours ouvrables</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-blue-200">👨‍🏫 Scolarité obligatoire :</p>
                      <p className="text-sm">Répétiteur agréé si absence scolaire</p>
                      <p className="text-sm">3h d'enseignement/jour minimum</p>
                      <p className="text-sm">Maintien du rythme scolaire</p>
                    </div>

                    <div>
                      <p className="font-semibold text-blue-200">👤 Accompagnement plateau :</p>
                      <p className="text-sm">Présence d'un parent ou tuteur légal</p>
                      <p className="text-sm">Responsable des enfants qualifié (cinéma)</p>
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

                {/* Section Enfants Mannequins */}
                <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-5 rounded-lg border-2 border-pink-400/40 mt-4">
                  <h4 className="text-lg font-bold text-pink-200 mb-3">
                    Enfants Mannequins - Durées spécifiques
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-pink-200 mb-2">Moins de 6 ans :</p>
                      <div className="text-sm space-y-1 ml-3">
                        <p><strong>Durée journalière maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>&lt; 3 ans : 1h/jour (max 30 min en continu)</li>
                          <li>3-6 ans : 2h/jour (max 1h en continu)</li>
                        </ul>
                        <p className="mt-2"><strong>Durée hebdomadaire maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>&lt; 6 mois : 1h/semaine</li>
                          <li>6 mois - 3 ans : 2h/semaine</li>
                          <li>3-6 ans : 3h/semaine</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-pink-200 mb-2">6-16 ans - PÉRIODE SCOLAIRE :</p>
                      <div className="text-sm space-y-1 ml-3">
                        <p className="text-yellow-300">Uniquement jours/demi-journées de repos (sauf dimanche)</p>
                        <p><strong>Durée journalière maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>6-11 ans : 3h/jour (max 1h30 en continu) - 1h30 en demi-journée</li>
                          <li>12-16 ans : 4h/jour (max 2h en continu) - 2h en demi-journée</li>
                        </ul>
                        <p className="mt-2"><strong>Durée hebdomadaire maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>6-11 ans : 4h30/semaine</li>
                          <li>12-16 ans : 6h/semaine</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-pink-200 mb-2">6-16 ans - VACANCES SCOLAIRES :</p>
                      <div className="text-sm space-y-1 ml-3">
                        <p className="text-yellow-300">Maximum 50% de la durée des vacances</p>
                        <p><strong>Durée journalière maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>6-11 ans : 6h/jour (max 2h en continu)</li>
                          <li>12-16 ans : 7h/jour (max 3h en continu)</li>
                        </ul>
                        <p className="mt-2"><strong>Durée hebdomadaire maximum :</strong></p>
                        <ul className="ml-4 list-disc space-y-1">
                          <li>6-11 ans : 12h/semaine</li>
                          <li>12-14 ans : 15h/semaine</li>
                          <li>14-16 ans : 18h/semaine</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Procédure administrative */}
                <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 p-5 rounded-lg border-2 border-indigo-400/40 mt-4">
                  <h4 className="text-lg font-bold text-indigo-200 mb-3 flex items-center gap-2">
                    Procédure d'Autorisation Administrative (Préfecture)
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-indigo-200 mb-2">Commission départementale spécialisée :</p>
                      <div className="text-sm space-y-1">
                        <p className="text-slate-300">La demande est examinée par une commission composée de :</p>
                        <ul className="ml-4 list-disc space-y-1 mt-2">
                          <li>Un magistrat (juge des enfants)</li>
                          <li>Un représentant de l'Éducation Nationale</li>
                          <li>Un représentant de la DDETS (Direction du travail)</li>
                          <li>Un médecin</li>
                          <li>Un représentant des affaires culturelles</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-indigo-200 mb-2">Délais de traitement :</p>
                      <div className="text-sm space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300">•</span>
                          <span><strong>Délai standard :</strong> 1 mois à compter du dossier complet</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300">•</span>
                          <span><strong>Complément d'instruction :</strong> Prolongation de 1 mois possible</span>
                        </div>
                        <div className="bg-red-900/30 p-2 rounded mt-2 border border-red-400/30">
                          <p className="text-red-200 font-semibold">Absence de réponse après délai :</p>
                          <ul className="ml-4 list-disc space-y-1 mt-1">
                            <li>Demande initiale = REJETÉE</li>
                            <li>Demande de renouvellement = ACCEPTÉE</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-indigo-200 mb-2">Documents requis (liste complète) :</p>
                      <div className="text-sm space-y-1">
                        <ul className="ml-4 list-disc space-y-1">
                          <li>Demande d'autorisation individuelle</li>
                          <li>État civil de l'enfant</li>
                          <li>Autorisation écrite des représentants légaux</li>
                          <li>Liste des emplois précédents/actuels de l'enfant</li>
                          <li>Documents sur l'activité (scénario, plan de travail, etc.)</li>
                          <li>Conditions d'emploi et rémunération détaillées</li>
                          <li>Dispositions pour la fréquentation scolaire</li>
                          <li>Examen médical obligatoire</li>
                          <li>Avis favorable écrit de l'enfant si &gt; 13 ans</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-indigo-200 mb-2">🔍 Vérifications du casier judiciaire :</p>
                      <div className="text-sm space-y-1">
                        <p>L'administration peut demander le <strong>bulletin n°2 du casier judiciaire</strong> des dirigeants, associés ou gérants.</p>
                        <p className="text-red-300 mt-2">Si une condamnation y figure, l'agrément ne peut être ni accordé, ni renouvelé.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caisse des Dépôts */}
                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-5 rounded-lg border-2 border-green-400/40 mt-4">
                  <h4 className="text-lg font-bold text-green-200 mb-3 flex items-center gap-2">
                    💰 Caisse des Dépôts et Consignations (CDC) - Gestion du Pécule
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-green-200 mb-2">Gestion du compte :</p>
                      <div className="text-sm space-y-2">
                        <p>La CDC gère le pécule jusqu'à la <strong>majorité</strong> de l'enfant ou son <strong>émancipation</strong>.</p>
                        <ul className="ml-4 list-disc space-y-1 mt-2">
                          <li>Ouverture d'un compte de dépôt au nom de l'enfant</li>
                          <li>Versement direct par l'employeur (hors part aux représentants légaux)</li>
                          <li>Production d'intérêts (minimum : taux d'intérêt légal)</li>
                          <li>Relevé annuel avant le 31 mars (montants + intérêts)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-green-200 mb-2">🔓 Déblocage du pécule :</p>
                      <div className="text-sm space-y-2">
                        <p><strong>À la majorité :</strong> La CDC communique le solde et tient les fonds à disposition</p>
                        <p><strong>En cas d'émancipation :</strong> Sur communication de la décision définitive</p>
                        <p className="text-yellow-300 mt-2">Les fonds sont ensuite transférés sur un compte ordinaire</p>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-green-200 mb-2">Prélèvements exceptionnels :</p>
                      <div className="text-sm space-y-1">
                        <p>À titre exceptionnel et dans l'intérêt exclusif de l'enfant, la commission peut autoriser les représentants légaux à effectuer des prélèvements sur le pécule.</p>
                        <p className="text-red-300 mt-1">Cette autorisation peut être retirée si les sommes ne sont pas affectées à l'usage prévu.</p>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-green-200 mb-2">📝 Obligations de l'employeur :</p>
                      <div className="text-sm space-y-1">
                        <p>L'employeur doit joindre au versement une déclaration rappelant :</p>
                        <ul className="ml-4 list-disc space-y-1 mt-1">
                          <li>État civil de l'enfant</li>
                          <li>Domicile de l'enfant</li>
                          <li>Nom des représentants légaux</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plateformes vidéo */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-5 rounded-lg border-2 border-purple-400/40 mt-4">
                  <h4 className="text-lg font-bold text-purple-200 mb-3 flex items-center gap-2">
                    📹 Vidéos sur Plateformes de Partage (Loi du 19 octobre 2020)
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-900/20 p-3 rounded border border-purple-400/30">
                      <p className="text-sm text-purple-100 mb-2">La loi encadre la réalisation et mise en ligne de vidéos ayant pour sujet principal un enfant de moins de 16 ans.</p>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-purple-200 mb-2">Dispositif gradué (3 régimes) :</p>
                      <div className="text-sm space-y-3">
                        <div className="border-l-4 border-green-400 pl-3">
                          <p className="font-semibold text-green-300">1. Activité libre (aucune formalité)</p>
                          <p className="text-slate-300 text-xs mt-1">Vidéos privées, pur loisir, faible nombre/durée, absence de flux financier</p>
                        </div>
                        <div className="border-l-4 border-yellow-400 pl-3">
                          <p className="font-semibold text-yellow-300">2. Régime de déclaration</p>
                          <p className="text-slate-300 text-xs mt-1">Nombre, durée cumulée ou revenus dépassent les seuils fixés par décret</p>
                        </div>
                        <div className="border-l-4 border-red-400 pl-3">
                          <p className="font-semibold text-red-300">3. Autorisation administrative préalable (Code du Travail)</p>
                          <p className="text-slate-300 text-xs mt-1">Cadre professionnel, objectif lucratif → L'enfant devient <strong>salarié</strong></p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-purple-200 mb-2">Régime d'autorisation préalable (activité lucrative) :</p>
                      <div className="text-sm space-y-2">
                        <div className="bg-red-900/20 p-2 rounded border border-red-400/30">
                          <p className="text-red-200 font-semibold">Conditions :</p>
                          <ul className="ml-4 list-disc space-y-1 mt-1">
                            <li>L'enfant est un <strong>salarié</strong></li>
                            <li>La personne qui met en ligne les vidéos est l'<strong>employeur</strong></li>
                            <li>L'employeur doit être une <strong>entreprise</strong> (pas de particulier ni association)</li>
                            <li>La plateforme est un tiers (n'est pas l'employeur)</li>
                            <li>Agrément obligatoire avant tout commencement</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-900/20 p-2 rounded border border-yellow-400/30 mt-2">
                          <p className="text-yellow-200 font-semibold">Double statut des parents :</p>
                          <p className="text-xs mt-1">Lorsque l'employeur est aussi le parent/représentant légal, distinguer les obligations liées à chaque statut (notamment pour la rémunération)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-purple-200 mb-2">🛡️ Renforcement de la protection des enfants :</p>
                      <div className="text-sm space-y-1">
                        <ul className="ml-4 list-disc space-y-1">
                          <li>Droit à l'effacement des données personnelles par l'enfant (sans consentement parental)</li>
                          <li>Obligations pour les plateformes (chartes d'information)</li>
                          <li>Rôle renforcé de l'Arcom (Autorité de régulation)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-purple-200 mb-2">Agrément spécifique :</p>
                      <div className="text-sm space-y-1">
                        <p>• Durée : 1 an (renouvelable)</p>
                        <p>• Suivi médical périodique obligatoire</p>
                        <p>• Suspension possible en urgence (1 mois max)</p>
                        <p>• Le préfet peut saisir le juge si contenu mis en ligne sans agrément</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suspension et retrait */}
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-5 rounded-lg border-2 border-red-400/40 mt-4">
                  <h4 className="text-lg font-bold text-red-200 mb-3 flex items-center gap-2">
                    ⛔ Suspension et Retrait d'Autorisation
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-red-200 mb-2">⏸️ Suspension d'urgence (agences mannequins / vidéos) :</p>
                      <div className="text-sm space-y-2">
                        <p>En cas d'urgence, si la santé ou la moralité de l'enfant sont <strong>immédiatement et gravement mis en cause</strong> :</p>
                        <ul className="ml-4 list-disc space-y-1 mt-2">
                          <li>Le préfet peut suspendre l'agrément pour max. <strong>1 mois</strong></li>
                          <li>Délai permettant à l'employeur de fournir les indications nécessaires</li>
                          <li>La commission propose : retrait OU levée de suspension</li>
                          <li>Sans réponse après 1 mois : suspension levée automatiquement</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-red-200 mb-2">🚫 Retrait d'autorisation :</p>
                      <div className="text-sm space-y-2">
                        <p>L'autorisation individuelle ou l'agrément peuvent être <strong>retirés à tout moment</strong> par le préfet.</p>
                        <p className="text-yellow-300 mt-2">Pour les vidéos sur plateformes : le retrait peut aussi être demandé par des personnes qualifiées dans le domaine de la protection de l'enfance.</p>
                      </div>
                    </div>

                    <div className="bg-black/30 p-3 rounded">
                      <p className="font-semibold text-red-200 mb-2">⚖️ Recours :</p>
                      <div className="text-sm space-y-1">
                        <p>Les décisions de refus, non-renouvellement ou retrait sont susceptibles de :</p>
                        <ul className="ml-4 list-disc space-y-1 mt-1">
                          <li>Recours administratif</li>
                          <li>Recours contentieux</li>
                        </ul>
                        <p className="text-slate-300 text-xs mt-2">Les voies et délais de recours figurent sur la décision administrative</p>
                      </div>
                    </div>

                    <div className="bg-orange-900/20 p-3 rounded border border-orange-400/30">
                      <p className="font-semibold text-orange-200 mb-2">📰 Publication au Journal Officiel :</p>
                      <div className="text-sm">
                        <p>La liste des décisions concernant les agences de mannequins (attribution, renouvellement, non-renouvellement ou retrait d'agrément) est publiée au JO de la République française.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm mt-4">
                  <p className="font-semibold text-blue-200 mb-1">📅 Travail dominical et jours fériés :</p>
                  <p>Le travail du dimanche et des jours fériés est autorisé dans les entreprises de spectacles, selon les conditions définies par la convention collective applicable.</p>
                </div>

                <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm mt-4">
                  <p className="font-semibold text-blue-200">🔄 Travaux en cours :</p>
                  <p className="mt-1">Les partenaires sociaux poursuivent leurs travaux pour améliorer l'organisation des castings et du travail des enfants, afin de sécuriser l'ensemble des parties prenantes : enfants, responsables légaux, personnels d'encadrement et employeurs.</p>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg border-2 border-red-500 text-sm">
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
              </div>
              <div className="mt-4 pt-4 border-t border-blue-400/30 space-y-2">
                  <button
                  onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                  className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Consulter l'avenant complet dans la Convention Collective
                </button>
                <button
                  onClick={() => window.open('/informations_emploi_mineurs_spectacle_drieets.pdf', '_blank')}
                  className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Guide officiel DRIEETS - Informations à savoir sur l'emploi des mineurs
                </button>
                <button
                  onClick={() => window.open('/duree_travail_enfants_spectacle_drieets.pdf', '_blank')}
                  className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Guide DRIEETS - Durée du travail des enfants dans le spectacle
                </button>
                <button
                  onClick={() => window.open('/livret_travail_des_enfants_080223.pdf', '_blank')}
                  className="w-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Livret complet Ministère du Travail - L'emploi des enfants dans le spectacle
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MinorsEmploymentPage;
