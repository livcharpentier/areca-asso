import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  const conventions = [
    { 
      title: "Convention Collective Cinéma (CCNPC)", 
      items: ["Grille des salaires", "Texte intégral", "Fiches pratiques"],
      link: "/ccn-production-cinema-consolidee-juin-24.pdf",
      hasHighlight: true
    },
    { title: "Convention Collective Audiovisuel (CCNPAV)", items: ["Grille des salaires", "Texte intégral", "Dispositions"] },
    { title: "Stages et conventions", items: ["Conventions de stage", "Rémunération", "Modèles"] },
    { title: "Tournages internationaux", items: ["Réglementations", "Équivalences", "Contacts utiles"] },
  ];

  const tools = [
    "Fiches de renseignements enfants",
    "Planning type journée tournage",
    "Suivi scolaire tournage",
    "Calendrier scolaire & examens",
    "Calendrier des vacances",
  ];

  return (
    <section id="conventions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide leading-relaxed">
            Conventions / Salaires
          </h2>

          {/* Encadré Points Essentiels */}
          <div className="mb-8 bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-2 border-amber-400/50 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Points Essentiels - Convention Collective Cinéma 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100">
              <div className="space-y-2">
                <p className="font-semibold text-amber-200">📋 Champ d'application :</p>
                <p className="text-sm">Production cinématographique (IDCC 3097)</p>
                
                <p className="font-semibold text-amber-200 mt-3">⏰ Durée du travail :</p>
                <p className="text-sm">39h hebdomadaires - Heures supplémentaires majorées</p>
                
                <p className="font-semibold text-amber-200 mt-3">🏖️ Congés payés :</p>
                <p className="text-sm">Minimum légal + dispositions spécifiques CDD d'usage</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-amber-200">📝 Types de contrats :</p>
                <p className="text-sm">CDI, CDD de droit commun, CDD d'usage</p>
                
                <p className="font-semibold text-amber-200 mt-3">🛡️ Protection :</p>
                <p className="text-sm">Prévention VHSS, égalité F/H, lutte contre discriminations</p>
                
                <p className="font-semibold text-amber-200 mt-3">📞 Instances paritaires :</p>
                <p className="text-sm">CPPNI - CPPHSCT de branche</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-400/30">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Télécharger la Convention Collective complète (mise à jour juin 2024)
              </button>
            </div>
          </div>

          {/* Encadré VHSS */}
          <div className="mb-8 bg-gradient-to-br from-red-950/40 to-pink-950/40 border-2 border-red-400/50 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Avenant VHSS - Prévention des Violences et Harcèlements (17 mai 2024)
            </h3>
            <div className="space-y-4 text-slate-100">
              <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                <p className="font-semibold text-red-200 mb-2">🚨 Définitions :</p>
                <p className="text-sm"><strong>Harcèlement sexuel :</strong> Propos ou comportements à connotation sexuelle répétés qui portent atteinte à la dignité ou créent un environnement intimidant, hostile ou offensant.</p>
                <p className="text-sm mt-2"><strong>Agissement sexiste :</strong> Tout agissement lié au sexe, ayant pour objet ou effet de porter atteinte à la dignité ou de créer un environnement intimidant, hostile, dégradant, humiliant ou offensant.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-red-200">👤 Référent VHSS obligatoire :</p>
                    <p className="text-sm">Désignation d'un référent sur chaque film (30€ brut/semaine en long-métrage)</p>
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
                    <p className="font-semibold text-red-200">📊 CPPHSCT de branche :</p>
                    <p className="text-sm">Instance paritaire de conseil et observatoire des pratiques</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 p-3 rounded border border-red-400/30 text-sm">
                <p className="font-semibold text-red-200">⚖️ Mesures de prévention obligatoires :</p>
                <ul className="mt-2 space-y-1 ml-4 list-disc">
                  <li>Information de tous les salariés (kit de prévention)</li>
                  <li>Affichage des numéros utiles et procédures</li>
                  <li>Formation des managers et référents</li>
                  <li>Notification au CPPHSCT en cas de signalement (anonymisée)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-400/30">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
              </button>
            </div>
          </div>

          {/* Encadré Mineurs */}
          <div className="mb-8 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border-2 border-blue-400/50 rounded-lg p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Avenant Conditions d'Emploi des Mineurs (17 mai 2024)
            </h3>
            <div className="space-y-4 text-slate-100">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                <p className="font-semibold text-blue-200 mb-2">🎬 Champ d'application :</p>
                <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable de la commission enfants du spectacle (DRIEETS).</p>
              </div>

              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-5 rounded-lg border-2 border-orange-400 mb-4 shadow-lg">
                <p className="text-xl font-bold text-orange-200 mb-3 flex items-center gap-2">
                  🚨 OBLIGATION MAJEURE - Responsable des Enfants
                </p>
                <div className="space-y-3 text-sm bg-black/30 p-4 rounded">
                  <p className="text-base font-semibold text-white">
                    ⚠️ OBLIGATOIRE pour toute production avec mineurs
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
                    💡 Cette obligation s'ajoute à la présence obligatoire du parent ou tuteur légal
                  </p>
                </div>
              </div>

              <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-400/30 mb-4">
                <p className="font-semibold text-orange-200 mb-2">🎭 Autre nouvelle obligation (Castings) :</p>
                <p className="text-sm">Accompagnement obligatoire par un adulte référent lors de tous les castings avec des mineurs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-blue-200">📋 Dossier obligatoire :</p>
                    <p className="text-sm">• Autorisation parentale</p>
                    <p className="text-sm">• Certificat médical &lt; 3 mois</p>
                    <p className="text-sm">• Avis pédagogique Education Nationale</p>
                    <p className="text-sm">• Assurance responsabilité civile</p>
                    <p className="text-sm">• Casier B3 du Responsable enfants</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-200">⏰ Temps de travail (voir tableau) :</p>
                    <p className="text-sm">3-5 ans : Max 1h/jour</p>
                    <p className="text-sm">6-11 ans : Max 3h/jour</p>
                    <p className="text-sm">12-16 ans : Max 5h/jour</p>
                    <p className="text-sm text-yellow-300">Pauses obligatoires respectées</p>
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
                    <p className="font-semibold text-blue-200">💰 Rémunération :</p>
                    <p className="text-sm">15% versés à la Caisse des Dépôts</p>
                    <p className="text-sm">Bloqués jusqu'à majorité de l'enfant</p>
                    <p className="text-sm">Protection du patrimoine du mineur</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm mt-4">
                <p className="font-semibold text-blue-200">🔄 Travaux en cours :</p>
                <p className="mt-1">Les partenaires sociaux poursuivent leurs travaux pour améliorer l'organisation des castings et du travail des enfants, afin de sécuriser l'ensemble des parties prenantes : enfants, responsables légaux, personnels d'encadrement et employeurs.</p>
              </div>

              <div className="bg-blue-900/20 p-3 rounded border border-blue-400/30 text-sm">
                <p className="font-semibold text-blue-200">⚠️ Sanctions en cas de non-respect :</p>
                <ul className="mt-2 space-y-1 ml-4 list-disc">
                  <li>Arrêt immédiat du tournage possible</li>
                  <li>Amendes administratives (jusqu'à 7 500€)</li>
                  <li>Poursuites pénales (1 an de prison + 15 000€ d'amende)</li>
                  <li>Interdiction d'employer des mineurs</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-400/30">
              <button
                onClick={() => window.open('/ccn-production-cinema-consolidee-juin-24.pdf', '_blank')}
                className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Consulter l'avenant complet dans la Convention Collective
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {conventions.map((convention, index) => {
              const colors = [
                { border: 'border-t-accent', icon: 'text-accent', bg: 'bg-blue-vibrantLight' },
                { border: 'border-t-primary', icon: 'text-primary', bg: 'bg-green-light' },
                { border: 'border-t-blue-sky', icon: 'text-blue-sky', bg: 'bg-blue-light' },
                { border: 'border-t-gold', icon: 'text-gold', bg: 'bg-gold-light' }
              ];
              const color = colors[index % 4];
              
              return (
                <Card key={index} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-start gap-3">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{convention.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                     <ul className="space-y-2">
                      {convention.items.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-slate-200 flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                          onClick={() => convention.link && window.open(convention.link, '_blank')}
                        >
                          <Download className="w-3 h-3 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div id="outils">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide leading-relaxed">
              Boîte à Outils
            </h2>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded bg-accent/10 hover:bg-accent/20 transition-all hover:scale-105 cursor-pointer group">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{tool}</span>
                      <Download className="w-4 h-4 ml-auto text-accent group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
