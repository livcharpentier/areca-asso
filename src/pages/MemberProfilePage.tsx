import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, Download } from "lucide-react";
import jsPDF from "jspdf";
import FilmPosterBand, { filmsDepuisFilmographie } from "@/components/FilmPosterBand";

const memberData: { [key: string]: any } = {
  "liv-charpentier": {
    firstName: "Liv",
    lastName: "Charpentier",
    photo: "/liv-charpentier.png",
    email: "liv.charp@wanadoo.fr",
    phone: "06 19 60 12 96",
    role: "Responsable enfants | Casting figuration et petits rôles",
    bio: "Encadrement et animation des mineurs sur tournage depuis 1996.",
    experienceYears: 28,
    availability: "Disponible",
    recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
    actualite: "Disponible",
    cvUrl: "/CV_LIV_CHARPENTIER.pdf",
    affiches: {
      "Le Transporteur : Héritage": "/affiches/liv/le-transporteur-heritage.jpg",
      "Pigalle la nuit": "/affiches/liv/pigalle-la-nuit.jpg",
      "La pire semaine de ma vie": "/affiches/liv/la-pire-semaine-de-ma-vie.jpg",
      "Dracula": "/affiches/liv/dracula.jpg",
      "L'Abandon": "/affiches/liv/abandon.jpg",
      "Les enfants de la résistance": "/affiches/liv/les-enfants-de-la-resistance.jpg",
      "Karma": "/affiches/liv/karma.jpg",
      "Histoires parallèles": "/affiches/liv/histoire-parallele.jpg",
      "Robin": "/affiches/liv/robin.jpg",
      "Radin": "/affiches/liv/radin.jpg",
      "Le petit Spirou": "/affiches/liv/le-petit-spirou.jpg",
      "Rémi sans famille": "/affiches/liv/remi-sans-famille.jpg",
      "Parents d'élèves": "/affiches/liv/parents-d-eleves.jpg",
      "Le trésor du Petit Nicolas": "/affiches/liv/le-tresor-du-petit-nicolas.jpg",
      "Les vacances de Ducobu": "/affiches/liv/les-vacances-de-ducobu.jpg",
      "La guerre des boutons": "/affiches/liv/la-guerre-des-boutons.jpg",
      "Sans laisser de traces": "/affiches/liv/sans-laisser-de-traces.jpg",
      "Jamais contente": "/affiches/liv/jamais-contente.jpg",
      "La guerre des Lulus": "/affiches/liv/la-guerre-des-lulus.jpg",
      "Le 3ème jour": "/affiches/liv/le-3eme-jour.jpg",
      "L'ex-femme de ma vie": "/affiches/liv/l-ex-femme-de-ma-vie.jpg",
      "Podium": "/affiches/liv/podium.jpg",
      "Aurore": "/affiches/liv/aurore.jpg",
      "Marie Besnard": "/affiches/liv/marie-besnard.jpg",
      "Le grand Charles": "/affiches/liv/le-grand-charles.jpg",
      "Comme mon père": "/affiches/liv/comme-mon-pere.jpg",
      "Famille": "/affiches/liv/famille.jpg",
      "Molière": "/affiches/liv/moliere.jpg",
      "De l'autre côté du lit": "/affiches/liv/de-l-autre-cote-du-lit.jpg",
      "Elles et moi": "/affiches/liv/elles-et-moi.jpg",
      "Transporter 3": "/affiches/liv/transporter-3.jpg",
      "Le petit Nicolas": "/affiches/liv/le-petit-nicolas.jpg",
      "La reine et le cardinal": "/affiches/liv/la-reine-et-le-cardinal.jpg",
      "Mes amis mes amours mes emmerdes": "/affiches/liv/mes-amis-mes-amours-mes-emmerdes.jpg",
      "Gainsbourg": "/affiches/liv/gainsbourg.jpg",
      "Les vacances du Petit Nicolas": "/affiches/liv/les-vacances-du-petit-nicolas.jpg",
      "Les virtuoses episode 1 à 6": "/affiches/liv/les-virtuoses-episode-1-a-6.jpg",
      "Pièce Montée": "/affiches/liv/piece-montee.jpg",
      "Intouchables": "/affiches/liv/intouchables.jpg",
      "L'élève Ducobu": "/affiches/liv/l-eleve-ducobu.jpg",
      "Omar m'a tuer": "/affiches/liv/omar-m-a-tuer.jpg",
      "Quelques heures de printemps": "/affiches/liv/quelques-heures-de-printemps.jpg",
      "Cloclo": "/affiches/liv/cloclo.jpg",
      "Stars 80": "/affiches/liv/star-80.jpg",
      "Une famille formidable": "/affiches/liv/une-famille-formidable.jpg",
      "20 ans d'écart": "/affiches/liv/20-ans-d-ecart.jpg",
      "La dernière campagne": "/affiches/liv/la-derniere-campagne.jpg",
      "La grande boucle": "/affiches/liv/la-grande-boucle.jpg",
      "Les bracelets rouges": "/affiches/liv/les-bracelets-rouges.jpg",
      "On voulait tout casser": "/affiches/liv/on-voulait-tout-casser.jpg",
      "Chocolat": "/affiches/liv/chocolat.jpg",
      "Stavisky l'escroc du siècle": "/affiches/liv/stavisky-l-escroc-du-siecle.jpg",
      "Love Locks": "/affiches/liv/love-locks.jpg",
      "Mon poussin": "/affiches/liv/mon-poussin.jpg",
      "Deux gouttes d'eau": "/affiches/liv/deux-gouttes-d-eau.jpg",
      "Vise le coeur": "/affiches/liv/vise-le-coeur.jpg",
      "Pour elle": "/affiches/liv/pour-elle.jpg",
      "La Voix des Steppes": "/affiches/liv/la-voix-des-steppes.jpg",
      "Des nouvelles de la planète Mars": "/affiches/liv/des-nouvelles-de-la-planete-mars.jpg",
      "Arthur et les Minimoys": "/affiches/liv/arthur-et-les-minimoys.jpg",
      "À l'intérieur": "/affiches/liv/a-l-interieur.jpg",
      "Arthur 3": "/affiches/liv/arthur-3.jpg",
      "Valerian": "/affiches/liv/valerian.jpg"
    },
    filmography: {
      "Responsable des enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), L'Abandon (2026), Histoires parallèles (2025), Les enfants de la résistance (2025), Karma (2026), Robin (2026 — série TF1), Les Disparus des Argonnes (2026 — téléfilm), Les Enfants de la Résistance : L'Escalade (2026)",
      "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour (2010), Pigalle la nuit (2009 — série)",
      "Casting Petits Rôles & Figurations": "L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Le grand Charles (2006), Comme mon père (2007), Famille (2007), Molière (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), La reine et le cardinal (2009), Mes amis mes amours mes emmerdes (2009), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Les virtuoses episode 1 à 6 (2010), Pièce Montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), L'élève Ducobu (2011), Omar m'a tuer (2011), La pire semaine de ma vie (2011 — série), Quelques heures de printemps (2012), Cloclo (2012), Stars 80 (2012), Une famille formidable (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (3 saisons, 2014-2018), On voulait tout casser (2015), Chocolat (2016), Stavisky l'escroc du siècle (2016), Love Locks (2017), Mon poussin (2017), Deux gouttes d'eau (2018), Vise le coeur (2022), La guerre des Lulus (2023), Plusieurs publicités : Nike, Vuitton, KFC, Air France, Vittel… (2012-2026)",
      "Casting Clips": "Plusieurs clips musicaux : Renan Luce, Raphael…",
      "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes",
      "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
      "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Le Transporteur : Héritage (2015), Valerian (2017), Pub Afflelou, Pub KFC, Dracula (2025)"
    },
    animation: {
      "Animations entre 1996 et 2010": "Centre de loisirs, colonie de vacances, camp itinérant, encadrement voile, encadrement ski, surveillance mer, professeur spécialisé voile (ado, adulte).",
      "Professeur EPS (remplaçant) entre 1998 et 2005": "École maternelle, primaire, collège, lycée, et le centre sportif de la Ville de Paris le mercredi.",
      "Diplômes": "BAFA (1997). A2C (1996) / Monitorat fédéral de voile (aux Glenans, 2000) / Monitorat fédéral de voile (2003) / B1D1 Voile (2003). Maîtrise STAPS (2006). AFPS / A.F.S.P.A.M (brevet de secouriste avec matériel). B.N.S.S.A (brevet national de secouriste et sauvetage aquatique).",
      "Permis": "Voiture B. Bateau : Côtier / Rivière / Fleuve / Lac."
    }
  },
  "eleonore-aguillon": {
    firstName: "Éléonore",
    lastName: "Aguillon",
    photo: "/eleonore-aguillon.jpg",
    email: "eleonore.aguillon@gmail.com",
    role: "Responsable enfants | Coach enfants | Suivi scolaire | Formée à la petite enfance | Casting rôles et figuration",
    bio: "Responsable enfants et coach enfants sur longs métrages, séries et courts métrages, avec suivi scolaire en parallèle du tournage (du CP à la seconde).",
    experienceYears: 9,
    cvUrl: "/CV_ELEONORE_AGUILLON.pdf",
    films: [
      { titre: "Dans les yeux de Happy", realisateur: "Gilles de Maistre", annee: 2026, type: "film" },
      { titre: "Les Quatre Rendez-vous de Françoise", realisateur: "Sandrine Kiberlain", annee: 2026, type: "film" },
      { titre: "Pourquoi pas nous", realisateur: "Mélanie Auffret", annee: 2026, type: "film" },
      { titre: "Fifi et sa bande, c'était pas gagné !", realisateur: "Pierre Lacheau", annee: 2026, type: "serie", affiche: "/affiches/fifi-et-sa-bande.jpg" },
      { titre: "Slt ma belle !", realisateur: "Elisa Jadot", annee: 2026, type: "court" },
      { titre: "Civilisés", realisateur: "Chine Thybaud", annee: 2026, type: "court" },
      { titre: "Quelques mots d'amour", realisateur: "Rudi Rosenberg", annee: 2025, type: "film", affiche: "/affiches/quelques-mots-d-amour.jpg" },
      { titre: "Chasse gardée 2", realisateur: "Antonin Fourlon et Frédéric Forestier", annee: 2025, type: "film", affiche: "/affiches/chasse-gardee-2.jpg" },
      { titre: "La Guerre des prix", realisateur: "Anthony Dechaux", annee: 2025, type: "film", affiche: "/affiches/la-guerre-des-prix.jpg" },
      { titre: "Camembert", realisateur: "Matthieu Rumani et Nicolas Slomka", annee: 2025, type: "film", affiche: "/affiches/camembert.jpg" },
      { titre: "Le Triangle d'or", realisateur: "Hélène Rosselet-Ruiz", annee: 2025, type: "film" },
      { titre: "Sanguine", realisateur: "Marion Le Corroller", annee: 2025, type: "film" },
      { titre: "Icaros", realisateur: "Alaa Safi", annee: 2025, type: "film" },
      { titre: "Furies - saison 2", realisateur: "Cédric Nicolas-Troyan et Ludovic Bernard", annee: 2025, type: "serie", affiche: "/affiches/furies-saison-2.jpg" },
      { titre: "G.I.G.N. - saison 1", realisateur: "Julien Leclercq", annee: 2025, type: "serie", affiche: "/affiches/gign.jpg" },
      { titre: "Élysée - saison 1", realisateur: "Martin Bourboulon", annee: 2025, type: "serie" },
      { titre: "Seuls les poissons morts suivent le courant", realisateur: "Christophe Gomes", annee: 2025, type: "court" },
      { titre: "Qui brille au combat", realisateur: "Joséphine Japy", annee: 2024, type: "film" },
      { titre: "Banger", realisateur: "Bertrand de Langeron", annee: 2024, type: "film" },
      { titre: "Les Orphelins", realisateur: "Olivier Schneider", annee: 2024, type: "film" },
      { titre: "Yoroï", realisateur: "David Tomaszewski", annee: 2024, type: "film" },
      { titre: "B.R.I. - saison 2", realisateur: "Jérémy Guez", annee: 2024, type: "serie" },
      { titre: "Expulsion", realisateur: "Mathieu Vadepied", annee: 2024, type: "court" },
      { titre: "Par amour", realisateur: "Élise Otzenberger", annee: 2023, type: "film", affiche: "/affiches/par-amour.jpg" },
      { titre: "Des blessures invisibles", realisateur: "Sarah Marx", annee: 2023, type: "film" },
      { titre: "Le Règne animal", realisateur: "Thomas Cailley", annee: 2023, type: "film" },
      { titre: "Frères", realisateur: "Olivier Casas", annee: 2023, type: "film" },
      { titre: "Home-Jacking", realisateur: "Hervé Hadmar", annee: 2023, type: "serie" },
      { titre: "Sous le tapis", realisateur: "Camille Japy", annee: 2022, type: "film", affiche: "/affiches/sous-le-tapis.jpg" },
      { titre: "Truth or Consequences", realisateur: "Philippe Prouff", annee: 2022, type: "film" },
      { titre: "L'Abbé Pierre : Une vie de combats", realisateur: "Frédéric Tellier", annee: 2022, type: "film" },
      { titre: "La Petite", realisateur: "Guillaume Nicloux", annee: 2022, type: "film" },
      { titre: "La Révolution", realisateur: "J. Trousselier, J. Rozan, E. Saulnier", annee: 2019, type: "serie" },
      { titre: "Le Test", realisateur: "Gabrielle Stemmer", annee: 2019, type: "court" },
      { titre: "Les enfants font leur cinéma", realisateur: "Le Trianon", annee: 2019, type: "court" },
      { titre: "De l'autre côté des montagnes", realisateur: "Nina Doré", annee: 2019, type: "court" }
    ],
    filmography: {
      "Responsable enfants — Longs métrages": "Dans les yeux de Happy de Gilles de Maistre, Moana Films (2026), Les Quatre Rendez-vous de Françoise de Sandrine Kiberlain, Curiosa (2026), Pourquoi pas nous de Mélanie Auffret, Quad Films (2026), Quelques mots d'amour de Rudi Rosenberg, Chi Fou Mi (2025), Chasse gardée 2 d'Antonin Fourlon et Frédéric Forestier, Starman Films (2025), La Guerre des prix d'Anthony Dechaux, Les Films de Jeanne & La Filmerie (2025), Camembert de Matthieu Rumani et Nicolas Slomka, Jerico Films (2025), Le Triangle d'or d'Hélène Rosselet-Ruiz, Les Films de Pierre (2025), Sanguine de Marion Le Corroller, Windy Production (2025), Qui brille au combat de Joséphine Japy, Cowboys Films (2024), Par amour d'Élise Otzenberger, Mamma Roman (2023), Des blessures invisibles de Sarah Marx, What's Up Films (2023), Sous le tapis de Camille Japy, Mandarin et Compagnie (2022)",
      "Responsable enfants — Séries": "Fifi et sa bande, c'était pas gagné ! de Pierre Lacheau, BAF Prod (2026), Furies saison 2 de Cédric Nicolas-Troyan et Ludovic Bernard, Empreinte Digitale (2025), G.I.G.N. saison 1 de Julien Leclercq, Labyrinthe Films (2025), Élysée saison 1 de Martin Bourboulon, Mediawan (2025)",
      "Responsable enfants — Courts métrages": "Slt ma belle ! d'Elisa Jadot, Super 8 Films (2026), Civilisés de Chine Thybaud, 24 25 Films (2026), Seuls les poissons morts suivent le courant de Christophe Gomes (2025), Expulsion de Mathieu Vadepied, Boogie Nights (2024), Le Test de Gabrielle Stemmer, La Fémis (2019), Les enfants font leur cinéma, Le Trianon, film réalisé avec une classe de CE1 (2019), De l'autre côté des montagnes de Nina Doré, Après la 13 (2019)",
      "Coach enfants": "Longs métrages : Dans les yeux de Happy (2026), Pourquoi pas nous (2026), Quelques mots d'amour (2025), La Guerre des prix (2025), Par amour (2023), Sous le tapis (2022). Séries : Fifi et sa bande, c'était pas gagné ! (2026), Furies saison 2 (2025), G.I.G.N. saison 1 (2025). Courts métrages : Civilisés (2026), Seuls les poissons morts suivent le courant (2025), Le Test (2019), De l'autre côté des montagnes (2019)",
      "Suivi scolaire (en parallèle du tournage, du CP à la seconde générale)": "La Guerre des prix (2025) : 2 semaines de suivi pour un enfant en CE1. Par amour (2023) : 2 mois de suivi pour deux enfants en CE1 et CM1. Furies saison 2 (2025) : 4 mois de suivi pour un enfant en 4e",
      "Casting rôles & figuration — Longs métrages": "Icaros d'Alaa Safi, Oïkia : chargée de figuration (2025), Banger de Bertrand de Langeron, Iconoclast Films : chargée de figuration et assistante castings rôles (2024), Les Orphelins d'Olivier Schneider, Inoxy Films : chargée de figuration (2024), Yoroï de David Tomaszewski, Cinéfrance Studio : chargée de figuration et assistante castings rôles (2024), Le Règne animal de Thomas Cailley, Nord-Ouest Films : assistante castings rôles et figuration région (2023), Frères d'Olivier Casas, ADNP Quad Films : chargée de figuration et assistante castings rôles (2023), Truth or Consequences de Philippe Prouff, Walter Films : chargée de figuration (2022), L'Abbé Pierre de Frédéric Tellier, WY Production : chargée de figuration et assistante castings rôles (2022), La Petite de Guillaume Nicloux, Les Films du Kiosque : assistante castings rôles et figuration région (2022)",
      "Casting rôles & figuration — Séries et courts métrages": "B.R.I. saison 2 de Jérémy Guez, Cheyenne Fédération : chargée de figuration, bloc 3 (2024), Home-Jacking d'Hervé Hadmar, Lincoln TV : directrice de castings seconds rôles et chargée de figuration (2023), La Révolution de J. Trousselier, J. Rozan et E. Saulnier, John Doe Productions : stagiaire puis auxiliaire casting figuration, 8 épisodes (2019). Une quarantaine de courts métrages et de clips en tant que directrice de casting enfants et adultes depuis 2017"
    },
    cvSections: {
      "Diplômes & formations": "CAP Accompagnement éducatif petite enfance (niveau 3, en cours). Stage en crèche de 8 semaines, Crèche du Centre, Neuilly-Plaisance (2026). PSC, gestes de premiers secours, Protection civile (2026). SEN, secours enfants & nourrissons, Protection civile (2026). Licence de physique-chimie, Sorbonne Université (L1, 2022). Double licence cinéma & gestion, Sorbonne Panthéon (niveau 6, 2021). Bac scientifique section européenne, mention TB (2017). Permis B (2017)",
      "Langues": "Anglais courant (plusieurs tournages en anglais), allemand intermédiaire, braille",
      "Activités pédagogiques": "Quand la durée du tournage et le nombre d'enfants s'y prêtent, ateliers adaptés aux stades de développement des enfants : activités manuelles (pâtisserie, peinture, aquarelle, argile, décopatch, bricolage), activités audiovisuelles (petit making-of et interviews de l'équipe, en accord avec la production), expériences scientifiques en toute sécurité (lumière, magnétisme, chimie du quotidien, électricité), activités musicales (chant, guitare, piano, écriture, composition)"
    }
  }
};

const MemberProfilePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = memberData[slug || ""];

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = 210;
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = 20;

    // Couleurs site
    const bleu = [59, 130, 246] as [number, number, number];
    const noir = [15, 23, 42] as [number, number, number];
    const gris = [100, 116, 139] as [number, number, number];
    const beige = [245, 240, 232] as [number, number, number];

    // Fond beige header
    doc.setFillColor(...beige);
    doc.rect(0, 0, pageW, 50, "F");

    // Nom
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...noir);
    doc.text(`${member.firstName} ${member.lastName}`.toUpperCase(), margin, y + 8);

    // Role — sur plusieurs lignes si necessaire
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...bleu);
    const roleLines = doc.splitTextToSize(member.role || "", contentW);
    doc.text(roleLines, margin, y + 14);
    const roleHeight = roleLines.length * 5;

    // Contact
    doc.setFontSize(9);
    doc.setTextColor(...gris);
    let contactLine = "";
    if (member.phone) contactLine += member.phone + "  ";
    if (member.email) contactLine += member.email;
    doc.text(contactLine, margin, y + 14 + roleHeight + 3);

    y = 58;

    // Bio
    if (member.bio) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(...gris);
      const bioLines = doc.splitTextToSize(member.bio, contentW);
      doc.text(bioLines, margin, y);
      y += bioLines.length * 5 + 6;
    }

    // Ligne séparatrice
    doc.setDrawColor(...bleu);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageW - margin, y);
    y += 8;

    const addSection = (title: string, text: string) => {
      if (y > 265) { doc.addPage(); y = 20; }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...bleu);
      doc.text(title.toUpperCase(), margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...noir);
      const lines = doc.splitTextToSize(text, contentW);
      lines.forEach((line: string) => {
        if (y > 275) { doc.addPage(); y = 20; }
        doc.text(line, margin, y);
        y += 4.5;
      });
      y += 4;
    };

    // Filmographie
    if (member.filmography) {
      Object.entries(member.filmography).forEach(([role, films]) => {
        addSection(role, films as string);
      });
    }

    // Animation
    if (member.animation) {
      Object.entries(member.animation).forEach(([period, text]) => {
        addSection(period, text as string);
      });
    }

    // CV Sections (diplomes)
    if (member.cvSections) {
      Object.entries(member.cvSections).forEach(([section, text]) => {
        addSection(section, text as string);
      });
    }

    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...gris);
    doc.text("ARENCA — Association des Responsables Enfants Cinema et Audiovisuel", margin, 290);

    doc.save(`CV_${member.lastName}_${member.firstName}.pdf`);
  };

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-16 bg-background">
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
              <Avatar className="w-28 h-36 !rounded-lg overflow-hidden ring-4 ring-accent/30">
                <AvatarImage src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="!aspect-[3/4] object-cover" />
                <AvatarFallback className="!rounded-lg bg-accent/20 text-accent text-2xl font-bold h-full w-full">
                  {member.firstName[0]}{member.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  {member.firstName} {member.lastName}
                </h1>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                {member.actualite && (
                  <p className="flex items-center gap-2 text-sm font-semibold text-orange-600 mb-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block flex-shrink-0"></span>
                    {member.actualite}
                  </p>
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

            {/* Bandeau d'affiches des films du CV */}
            {(member.films || member.filmography) && (
              <FilmPosterBand films={member.films || filmsDepuisFilmographie(member.filmography, member.affiches)} />
            )}

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
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{period}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{content as string}</p>
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
            {member.actualite && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
                  <h2 className="text-xl font-semibold" style={{color: "#ea580c"}}>Actualité</h2>
                </div>
                <p className="text-orange-600 font-medium leading-relaxed">{member.actualite}</p>
              </div>
            )}
            {member.recentNews && !member.actualite && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">Actualité</h2>
                <p className="text-muted-foreground italic">{member.recentNews}</p>
              </div>
            )}

            {/* CV PDF (téléchargement) */}
            {member.cvUrl && (
              <Button
                size="lg"
                onClick={generatePDF}
                className="gap-2"
              >
                <Download className="h-5 w-5" />
                Télécharger le CV complet (PDF)
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