import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import livPhoto from "@/assets/liv-charpentier.png";

const MemberCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryTitles: { [key: string]: string } = {
    "responsables-enfants": "Responsables des enfants",
    "coachs": "Coachs",
    "precepteurs": "Précepteurs",
    "animateurs": "Animateurs",
    "cantiniers": "Cantiniers",
    "autres": "Autres membres"
  };

  // Mock data - à remplacer par des données de la base de données
  const mockMembers = [
    {
      id: 1,
      slug: "liv-charpentier",
      firstName: "Liv",
      lastName: "Charpentier",
      photoUrl: livPhoto,
      email: "liv.charp@wanadoo.fr",
      phone: "06 19 60 12 96",
      bio: "Responsable des enfants sur tournage, 3ème Assistante mise en scène, Assistante régisseuse. ",
      experienceYears: 26,
      filmography: {
        "Responsable des enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), L'Abandon, Histoires parallèles, Les enfants de la résistance (2026), Karma (2026)",
        "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour",
        "Casting Petits Rôles & Figurations": "L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Le grand Charles (2006), Comme mon père (2007), Famille (2007), Molière (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), La reine et le cardinal (2009), Mes amis, mes amours, mes emmerdes (2009), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Les Virtuoses, épisodes 1 à 6 (2010), Pièce montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), L'élève Ducobu (2011), Omar m'a tuer (2011), Quelques heures de printemps (2012), Cloclo (2012), Stars 80 (2012), Une famille formidable (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (2017-2024, les 5 saisons), On voulait tout casser (2015), Chocolat (2016), Stavisky, l'escroc du siècle (2016), Love Locks (2017), Mon poussin (2017), Deux gouttes d'eau (2018), Vise le cœur (2022), La guerre des Lulus (2023)",
        "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes (2014)",
        "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
        "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Valérian (2017), Pub Afflelou, Pub KFC, Dracula (2025)"
      },
      availability: "",
      recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
      cvUrl: "/CV_LIV_CHARPENTIER.pdf"
    },
    {
      id: 2,
      slug: "eleonore-aguillon",
      firstName: "Éléonore",
      lastName: "Aguillon",
      photoUrl: "/eleonore-aguillon.jpg",
      email: "eleonore.aguillon@gmail.com",
      phone: "",
      bio: "Responsable et coach enfants, suivi scolaire, formée à la petite enfance. Casting rôles et figuration.",
      experienceYears: 9,
      availability: "",
      recentNews: "",
      cvUrl: "/CV_ELEONORE_AGUILLON.pdf"
    },
    {
      id: 3,
      slug: "christophe-denis",
      firstName: "Christophe",
      lastName: "Denis",
      photoUrl: "/christophe-denis.jpg?v=2",
      email: "christophe2ni@gmail.com",
      phone: "",
      bio: "Responsable de l'encadrement des enfants acteurs depuis 2006. Comédien, musicien, répétiteur musique.",
      experienceYears: 20,
      availability: "",
      recentNews: "",
      cvUrl: "/CV_CHRISTOPHE_DENIS.pdf"
    },
    {
      id: 4,
      slug: "marine-longuet",
      firstName: "Marine",
      lastName: "Longuet",
      photoUrl: "/marine-longuet.jpg",
      email: "marine.longuet@gmail.com",
      phone: "",
      bio: "Assistante réalisation et responsable enfants depuis 2007. Casting rôles et figuration.",
      experienceYears: 19,
      availability: "",
      recentNews: "",
      cvUrl: "/CV_MARINE_LONGUET.pdf"
    }
  ];

  // Pour l'instant, seuls les responsables des enfants ont des membres inscrits
  const membresAffiches = category === "responsables-enfants" ? mockMembers : [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/members")}
              className="mb-6 text-accent hover:text-blue-vibrant"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux catégories
            </Button>

            <h1 className="text-4xl font-bold text-foreground uppercase tracking-wide mb-8">
              {categoryTitles[category || ""] || "Membres"}
            </h1>

            {membresAffiches.length === 0 && (
              <p className="text-lg text-muted-foreground">Aucun membre inscrit dans cette catégorie pour le moment.</p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {membresAffiches.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => navigate(`/member/${(member as any).slug}`)}
                  className="flex flex-col items-center text-center group rounded-xl p-3 hover:bg-card transition-colors"
                >
                  <Avatar className="w-28 h-40 mb-3 !rounded-lg overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300">
                    <AvatarImage src={member.photoUrl} alt={`${member.firstName} ${member.lastName}`} className="!aspect-[3/4] object-cover" />
                    <AvatarFallback className="!rounded-lg bg-accent/20 text-accent text-lg font-bold h-full w-full">{member.firstName[0]}{member.lastName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-base font-semibold text-foreground">{member.firstName} {member.lastName}</span>
                  {member.availability && (
                    <span className="flex items-center justify-center gap-1 text-xs font-semibold text-orange-600 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block"></span>
                      {member.availability}
                    </span>
                  )}
                  <span className="text-xs text-accent mt-2 group-hover:underline">Voir le profil</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MemberCategoryPage;
