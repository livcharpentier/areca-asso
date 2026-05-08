import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, Download } from "lucide-react";

const memberData: { [key: string]: any } = {
  "liv-charpentier": {
    firstName: "Liv",
    lastName: "Charpentier",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=LivYoung&backgroundColor=b6e3f4,c0aede,d1d4f9&hair=long01,long02,long03,long04,long05&hairColor=a55728,2c1b18,b58143&skinColor=f8d25c,fd9841,edb98a&accessories=round&accessoriesProbability=20",
    email: "liv.charp@wanadoo.fr",
    phone: "06 19 60 12 96",
    role: "Responsable enfants",
    bio: "Responsable des enfants sur tournage, 3ème Assistante mise en scène, Assistante régisseuse. Spécialisée dans l'encadrement et l'animation depuis 1996.",
    experienceYears: 28,
    availability: "Disponible",
    recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
    cvUrl: "/CV_LIV_CHARPENTIER.pdf",
    filmography: {
      "Responsable des enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), Abandon (2026), Histoire parallèle (2025), Les enfants de la résistance (2025), Karma (2026)",
      "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour (2010)",
      "Casting Petits Rôles & Figurations": "L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Le grand Charles (2006), Comme mon père (2007), Famille (2007), Molière (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), La reine et le cardinal (2009), Mes amis mes amours mes emmerdes (2009), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Les virtuoses episode 1 à 6 (2010), Pièce Montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), L'élève Ducobu (2011), Omar m'a tuer (2011), Quelques heures de printemps (2012), Cloclo (2012), Star 80 (2012), Une famille formidable (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (3 saisons, 2014-2018), On voulait tout casser (2015), Chocolat (2016), Stavisky l'escroc du siècle (2016), Love Locks (2017), Mon poussin (2017), Deux gouttes d'eau (2018), Vise le coeur (2022), La guerre des Lulus (2023), Plusieurs publicités : Nike, Vuitton, KFC, Vittel… (2012-2026)",
      "Casting Clips": "Plusieurs clips musicaux : Renan Luce, Raphael…",
      "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes",
      "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
      "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Valerian (2017), Pub Afflelou, Pub KFC, Dracula (2025)"
    },
    animation: {
      "Entre 1996 et 2005 (été et hiver)": "Animations dans divers centres (enfants/ados). Formation encadrement ski.",
      "Entre 1998 et 2005 (Primaire / Collège / Lycée)": "Professeur vacataire (remplaçant). Centre sportif à la Ville de Paris.",
      "En 2003": "Monitorat fédéral de voile.",
      "Entre 2003 et 2010": "Professeur spécialisée voile et animation — enfants / ados / adultes."
    },
    cvSections: {
      "Diplômes": "BAFA (1997). A2C (1996) / Monitorat fédérale de voile (aux Glenans, 2000) / B1D1 Voile (2003). Maîtrise STAPS (2006). AFPS / A.F.S.P.A.M (brevet de secouriste avec matériel). B.N.S.S.A (brevet national de secouriste et sauvetage aquatique).",
      "Permis": "Voiture B. Bateau : Côtier / Rivière / Fleuve / Lac."
    }
  },
  "thomas-martin": {
    firstName: "Christophe", lastName: "Denis",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisYoung&backgroundColor=b6e3f4,c0aede,d1d4f9&hair=short01,short02,short03,short04,short05&hairColor=2c1b18,a55728,724133&skinColor=f8d25c,fd9841,edb98a&facialHair=blank",
    email: "christophe.denis@example.com", phone: "+33 6 23 45 67 89",
    role: "Responsable enfants",
    bio: "Spécialisé dans l'accompagnement des jeunes acteurs sur les tournages de longue durée.",
    experienceYears: 10, availability: "En tournage",
    recentNews: "Formation continue en psychologie de l'enfant"
  }
};

const MemberProfilePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = memberData[slug || ""];

  if (!member) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Membre introuvable</h1>
          <Button onClick={() => navigate("/members")}>Retour aux membres</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/members")}
              className="mb-6 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux membres
            </Button>

            {/* En-tête profil */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <Avatar className="w-28 h-28 ring-4 ring-accent/30">
                <AvatarImage src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
                <AvatarFallback className="bg-accent/20 text-accent text-2xl font-bold">
                  {member.firstName[0]}{member.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  {member.firstName} {member.lastName}
                </h1>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                {member.availability && (
                  <Badge variant={member.availability === "Disponible" ? "default" : "secondary"} className="mb-3">
                    {member.availability}
                  </Badge>
                )}
                {member.experienceYears && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{member.experienceYears} ans d'expérience</span>
                  </div>
                )}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-lg border border-accent/20 bg-accent/5">
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-accent hover:text-accent/80">
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-accent hover:text-accent/80">
                  <Phone className="w-4 h-4" /> {member.phone}
                </a>
              )}
            </div>

            {/* Filmographie */}
            {member.filmography && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Filmographie</h2>
                <div className="space-y-4">
                  {Object.entries(member.filmography).map(([role, films], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{role}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{films as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Animation */}
            {member.animation && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Animation</h2>
                <div className="space-y-4">
                  {Object.entries(member.animation).map(([period, content], idx) => (
                    <div key={idx} className="border-l-2 border-foreground/40 pl-4">
                      <h3 className="font-medium text-foreground mb-1">{period}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{content as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CV / Diplômes */}
            {member.cvSections && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">CV</h2>
                <div className="space-y-4">
                  {Object.entries(member.cvSections).map(([section, content], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{section}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{content as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actualité */}
            {member.recentNews && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">Actualité</h2>
                <p className="text-muted-foreground italic">{member.recentNews}</p>
              </div>
            )}

            {/* CV PDF (téléchargement) */}
            {member.cvUrl && (
              <Button
                size="lg"
                onClick={() => window.open(member.cvUrl, '_blank')}
                className="gap-2"
              >
                <Download className="h-5 w-5" />
                Télécharger le CV complet
              </Button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MemberProfilePage;