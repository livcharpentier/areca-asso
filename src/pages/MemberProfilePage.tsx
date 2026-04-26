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
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Liv",
    email: "liv.charp@wanadoo.fr",
    phone: "06 19 60 12 96",
    role: "Responsable enfants",
    bio: "Responsable des enfants sur tournage, 3ème Assistante mise en scène, Assistante régisseuse. Spécialisée dans l'encadrement et l'animation depuis 1996.",
    experienceYears: 28,
    availability: "Disponible",
    recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
    cvUrl: "/CV_LIV_CHARPENTIER.pdf",
    filmography: {
      "Responsable des enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), Abandon, Histoire parallèle, Les enfants de la résistance (2026), Karma (2026)",
      "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour",
      "Casting Petits Rôles & Figurations": "L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Le grand Charles (2006), Comme mon père (2007), Famille (2007), Molière (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), La reine et le cardinal (2009), Mes amis mes amours mes emmerdes (2009), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Les virtuoses episode 1 à 6 (2010), Pièce Montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), L'élève Ducobu (2011), Omar m'a tuer (2011), Quelques heures de printemps (2012), Cloclo (2012), Star 80 (2012), Une famille formidable (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (3 saisons, 2014-2018), On voulait tout casser (2015), Chocolat (2016), Stavisky l'escroc du siècle (2016), Love Locks (2017), Mon poussin (2017), Deux gouttes d'eau (2018), Vise le coeur (2022), La guerre des Lulus (2023)",
      "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes",
      "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
      "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Valerian (2017), Pub Afflelou, Pub KFC, Dracula (2025)"
    }
  },
  "thomas-martin": {
    firstName: "Christophe", lastName: "Denis",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Christophe",
    email: "christophe.denis@example.com", phone: "+33 6 23 45 67 89",
    role: "Responsable enfants",
    bio: "Spécialisé dans l'accompagnement des jeunes acteurs sur les tournages de longue durée.",
    experienceYears: 10, availability: "En tournage",
    recentNews: "Formation continue en psychologie de l'enfant"
  },
  "sophie-bernard": {
    firstName: "Sophie", lastName: "Bernard",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Sophie",
    email: "sophie.bernard@example.com", phone: "+33 6 34 56 78 90",
    role: "Responsable enfants",
    bio: "Passionnée par le cinéma jeunesse et forte de 12 ans d'expérience.",
    experienceYears: 12, availability: "Disponible",
    recentNews: "Vient de terminer un projet avec Canal+"
  },
  "claire-dupont": {
    firstName: "Claire", lastName: "Dupont",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Claire",
    email: "claire.dupont@example.com", phone: "+33 6 45 67 89 01",
    role: "Préceptrice",
    bio: "Enseignante détachée, suivi scolaire sur les tournages longs métrages.",
    experienceYears: 8, availability: "Disponible"
  },
  "marc-lefevre": {
    firstName: "Marc", lastName: "Lefèvre",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Marc",
    email: "marc.lefevre@example.com", phone: "+33 6 56 78 90 12",
    role: "Précepteur",
    bio: "Professeur des écoles, spécialiste du maintien pédagogique en milieu audiovisuel.",
    experienceYears: 6, availability: "En tournage"
  },
  "julie-moreau": {
    firstName: "Julie", lastName: "Moreau",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Julie",
    email: "julie.moreau@example.com", phone: "+33 6 67 89 01 23",
    role: "Animatrice",
    bio: "Animation et encadrement jeunesse sur plateaux de cinéma et séries TV.",
    experienceYears: 5, availability: "Disponible"
  },
  "pierre-roux": {
    firstName: "Pierre", lastName: "Roux",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Pierre",
    email: "pierre.roux@example.com", phone: "+33 6 78 90 12 34",
    role: "Animateur",
    bio: "Animateur BAFA avec expérience en productions audiovisuelles jeunesse.",
    experienceYears: 4, availability: "Disponible"
  },
  "emma-laurent": {
    firstName: "Emma", lastName: "Laurent",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Emma",
    email: "emma.laurent@example.com", phone: "+33 6 89 01 23 45",
    role: "Cantinière",
    bio: "Restauration adaptée aux enfants sur les tournages, respect des normes alimentaires.",
    experienceYears: 7, availability: "Disponible"
  },
  "lucas-petit": {
    firstName: "Lucas", lastName: "Petit",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Lucas",
    email: "lucas.petit@example.com", phone: "+33 6 90 12 34 56",
    role: "Responsable enfants",
    bio: "Coordinateur terrain, gestion des plannings enfants et lien avec les familles.",
    experienceYears: 9, availability: "En tournage"
  },
  "camille-simon": {
    firstName: "Camille", lastName: "Simon",
    photo: "https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=ffd5dc,ffdfbf,c0aede,b6e3f4,d1d4f9,c1f4cd&seed=Camille",
    email: "camille.simon@example.com", phone: "+33 6 01 23 45 67",
    role: "Préceptrice",
    bio: "Suivi scolaire personnalisé et accompagnement éducatif sur tournages.",
    experienceYears: 5, availability: "Disponible"
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

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Biographie</h2>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
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

            {/* Actualité */}
            {member.recentNews && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">Actualité</h2>
                <p className="text-muted-foreground italic">{member.recentNews}</p>
              </div>
            )}

            {/* CV */}
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