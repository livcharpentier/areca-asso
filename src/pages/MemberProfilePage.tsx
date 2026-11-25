import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, Download, Film } from "lucide-react";
import jsPDF from "jspdf";
import FilmPosterBand, { filmsDepuisFilmographie, groupesDepuisFilmographie, titresDuMembre, segmentsTitres, lignesCV } from "@/components/FilmPosterBand";

export const memberData: { [key: string]: any } = {
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
    actualite: "",
    cvUrl: "/CV_LIV_CHARPENTIER.pdf",
    cvSections: {
      "IMDb": "https://www.imdb.com/fr/name/nm2444237/"
    },
    affiches: {
      "Le Transporteur : Héritage": "/affiches/liv/le-transporteur-heritage.jpg",
      "Pigalle, la nuit": "/affiches/liv/pigalle-la-nuit.jpg",
      "La pire semaine de ma vie": "/affiches/liv/la-pire-semaine-de-ma-vie.jpg",
      "Dracula": "/affiches/liv/dracula.jpg",
      "L'Abandon": "/affiches/liv/abandon.jpg",
      "Les enfants de la résistance": "/affiches/liv/les-enfants-de-la-resistance.jpg",
      "Karma": "/affiches/liv/karma.jpg",
      "Histoires parallèles": "/affiches/liv/histoire-parallele.jpg",
      "Robin": "/affiches/liv/robin.jpg",
      "Les Disparus des Argonnes": "/affiches/liv/les-disparus-des-argonnes.jpg",
      "Radin !": "/affiches/liv/radin.jpg",
      "Le petit Spirou": "/affiches/liv/le-petit-spirou.jpg",
      "Rémi sans famille": "/affiches/liv/remi-sans-famille.jpg",
      "Parents d'élèves": "/affiches/liv/parents-d-eleves.jpg",
      "Le trésor du Petit Nicolas": "/affiches/liv/le-tresor-du-petit-nicolas.jpg",
      "Les vacances de Ducobu": "/affiches/liv/les-vacances-de-ducobu.jpg",
      "La guerre des boutons": "/affiches/liv/la-guerre-des-boutons.jpg",
      "Sans laisser de traces": "/affiches/liv/sans-laisser-de-traces.jpg",
      "Jamais contente": "/affiches/liv/jamais-contente.jpg",
      "La guerre des Lulus": "/affiches/liv/la-guerre-des-lulus.jpg",
      "Les Enfants de la Résistance : L'Escalade": "/affiches/liv/les-enfants-de-la-resistance-l-escalade.jpg",
      "Les Bodin's partent en vrille": "/affiches/liv/les-bodins-partent-en-vrille.jpg",
      "Le 3ème jour": "/affiches/liv/le-3eme-jour.jpg",
      "L'ex-femme de ma vie": "/affiches/liv/l-ex-femme-de-ma-vie.jpg",
      "Podium": "/affiches/liv/podium.jpg",
      "Aurore": "/affiches/liv/aurore.jpg",
      "Marie Besnard": "/affiches/liv/marie-besnard.jpg",
      "Marie Besnard l'empoisonneuse": "/affiches/liv/marie-besnard.jpg",
      "Le grand Charles": "/affiches/liv/le-grand-charles.jpg",
      "Comme mon père": "/affiches/liv/comme-mon-pere.jpg",
      "Comme ton père": "/affiches/liv/comme-mon-pere.jpg",
      "Famille": "/affiches/liv/famille.jpg",
      "Molière": "/affiches/liv/moliere.jpg",
      "De l'autre côté du lit": "/affiches/liv/de-l-autre-cote-du-lit.jpg",
      "Elles et moi": "/affiches/liv/elles-et-moi.jpg",
      "Transporter 3": "/affiches/liv/transporter-3.jpg",
      "Le petit Nicolas": "/affiches/liv/le-petit-nicolas.jpg",
      "La reine et le cardinal": "/affiches/liv/la-reine-et-le-cardinal.jpg",
      "Mes amis, mes amours, mes emmerdes": "/affiches/liv/mes-amis-mes-amours-mes-emmerdes.jpg",
      "Mes amis mes amours mes emmerdes": "/affiches/liv/mes-amis-mes-amours-mes-emmerdes.jpg",
      "Gainsbourg": "/affiches/liv/gainsbourg.jpg",
      "Les vacances du Petit Nicolas": "/affiches/liv/les-vacances-du-petit-nicolas.jpg",
      "Les Virtuoses, épisodes 1 à 6": "/affiches/liv/les-virtuoses-episode-1-a-6.jpg",
      "Les Virtuoses – épisodes 1 à 6": "/affiches/liv/les-virtuoses-episode-1-a-6.jpg",
      "Pièce montée": "/affiches/liv/piece-montee.jpg",
      "Intouchables": "/affiches/liv/intouchables.jpg",
      "L'élève Ducobu": "/affiches/liv/l-eleve-ducobu.jpg",
      "Omar m'a tuer": "/affiches/liv/omar-m-a-tuer.jpg",
      "Quelques heures de printemps": "/affiches/liv/quelques-heures-de-printemps.jpg",
      "Cloclo": "/affiches/liv/cloclo.jpg",
      "Stars 80": "/affiches/liv/star-80.jpg",
      "Une famille formidable": "/affiches/liv/une-famille-formidable.jpg",
      "Une famille formidable – Vacances marocaines": "/affiches/liv/une-famille-formidable.jpg",
      "20 ans d'écart": "/affiches/liv/20-ans-d-ecart.jpg",
      "La dernière campagne": "/affiches/liv/la-derniere-campagne.jpg",
      "La grande boucle": "/affiches/liv/la-grande-boucle.jpg",
      "Les bracelets rouges": "/affiches/liv/les-bracelets-rouges.jpg",
      "Les bracelets rouges – saisons 4 et 5": "/affiches/liv/les-bracelets-rouges.jpg",
      "Les bracelets rouges – saisons 1 à 3": "/affiches/liv/les-bracelets-rouges.jpg",
      "On voulait tout casser": "/affiches/liv/on-voulait-tout-casser.jpg",
      "Chocolat": "/affiches/liv/chocolat.jpg",
      "Stavisky, l'escroc du siècle": "/affiches/liv/stavisky-l-escroc-du-siecle.jpg",
      "Love Locks": "/affiches/liv/love-locks.jpg",
      "Mon poussin": "/affiches/liv/mon-poussin.jpg",
      "Deux gouttes d'eau": "/affiches/liv/deux-gouttes-d-eau.jpg",
      "Vise le cœur": "/affiches/liv/vise-le-coeur.jpg",
      "Pour elle": "/affiches/liv/pour-elle.jpg",
      "La Voix des Steppes": "/affiches/liv/la-voix-des-steppes.jpg",
      "Des nouvelles de la planète Mars": "/affiches/liv/des-nouvelles-de-la-planete-mars.jpg",
      "Arthur et les Minimoys": "/affiches/liv/arthur-et-les-minimoys.jpg",
      "À l'intérieur": "/affiches/liv/a-l-interieur.jpg",
      "Arthur 3": "/affiches/liv/arthur-3.jpg",
      "Valérian": "/affiches/liv/valerian.jpg"
    },
    filmography: {
      "Responsable des enfants": "Robin (2026 — série TF1 · réal. Nicolas Guicheteau · 1re assistante Lucile Jacques · prod. Fédération Studio France, Égalité Studios), Les Disparus des Argonnes (2026 — série France TV · réal. Safy Nebbou · 1re assistante Marie Doller · prod. Studio 14 Films), Les Enfants de la Résistance : L'Escalade (2026 — réal. Christophe Barratier · 1er assistant Joseph Rapp · prod. Axel Films), L'Abandon (2025 — réal. Vincent Garenq · 1er assistant Thierry Verrier · prod. Outside Films, Les Films du Kiosque), Karma (2025 — réal. Guillaume Canet · 1re assistante Juliette Crété · prod. Iconoclast, Caneo Films), Histoires parallèles (2024 — réal. Asghar Farhadi · 1er assistant Joseph Rapp · prod. Memento Production), Les enfants de la résistance (2024 — réal. Christophe Barratier · 1er assistant Joseph Rapp · prod. Axel Films), Le trésor du Petit Nicolas (2020 — réal. Julien Rappeneau · 1er assistant Alain Braconnier · prod. Curiosa Films), Parents d'élèves (2019 — réal. Noémie Saglio · 1er assistant Tatum Drouilhat · prod. Rectangle Productions, TF1 Studio), Rémi sans famille (2017 — réal. Antoine Blossier · 1er assistant Brieuc Vanderswalm · prod. Jerico, TF1 Films Production), Le petit Spirou (2016 — réal. Nicolas Bary · 1re assistante Laure Prevost · prod. Les Films du Cap, Les Partenaires), Radin ! (2015 — réal. Fred Cavayé · 1er assistant James Canal · prod. Jerico)",
      "Assistante Casting Rôles (Adultes/Enfants)": "La guerre des Lulus (2022 — réal. Yann Samuell · 1er assistant François Domange · prod. Superprod Films, Wild Bunch, Les Films du Lézard, Bidibul Productions, Elle Driver), Jamais contente (2016 — réal. Émilie Deleuze · 1re assistante Valérie Roucher · prod. Agat Films & Cie – Ex Nihilo), Les vacances de Ducobu (2010 — réal. Philippe de Chauveron · 1er assistant François Domange · prod. Les Films du 24), La guerre des boutons (2010 — réal. Yann Samuell · 1re assistante Valérie Othnin-Girard · prod. One World Films), Sans laisser de traces (2009 — réal. Grégoire Vigneron · 1er assistant Denis Imbert · prod. Fidélité Films), Le 3ème jour (2009 — téléfilm · réal. Bernard Stora · 1er assistant Alan Corno · prod. Kien Productions, Maybe Movies), Pigalle la nuit (2008 — série · réal. Hervé Hadmar · 1er assistant Marc Baraduc · prod. Fidélité TV)",
      "Casting Figuration": "Les Bodin's partent en vrille (2024 — réal. Frédéric Forestier · 1er assistant Christophe Vassort · prod. Cheyenne Productions), Les bracelets rouges – saisons 4 et 5 (2022-2024 — réal. Xavier de Choudens et Fabien Gorgeart pour la saison 4 · prod. VEMA Productions), La guerre des Lulus (2022 — réal. Yann Samuell · 1er assistant François Domange · prod. Superprod Films, Wild Bunch, Les Films du Lézard, Bidibul Productions, Elle Driver), Vise le cœur (2021 — série · réal. Vincent Jamain et Jérémy Minui · 1ers assistants Sébastien Achard et Philippe Bourdais · prod. Beaubourg Fiction), Deux gouttes d'eau (2017 — téléfilm · réal. Nicolas Cuche · 1re assistante Michèle Hauteville · prod. VEMA Productions), Les vacances de Ducobu (2010 — réal. Philippe de Chauveron · 1er assistant François Domange · prod. Les Films du 24)",
      "Assistante Casting Figuration & Petits Rôles": "Les bracelets rouges – saisons 1 à 3 (2016 — réal. Nicolas Cuche pour les saisons 1 et 2 · prod. VEMA Productions), Love Locks (2016 — téléfilm · réal. Martin Wood · 1er assistant Matt Jemus), Mon poussin (2016 — réal. Frédéric Forestier · 1er assistant Christophe Vassort · prod. Les Films du 24), Chocolat (2015 — réal. Roschdy Zem · 1er assistant Mathieu Schiffman · prod. Mandarin Cinéma), Stavisky l'escroc du siècle (2015 — téléfilm · réal. Claude-Michel Rome · prod. Septembre Productions), On voulait tout casser (2014 — réal. Philippe Guillard · prod. LGM Productions, Gaumont), Les vacances du Petit Nicolas (2013 — réal. Laurent Tirard · 1er assistant Alan Corno · prod. Fidélité Films), 20 ans d'écart (2012 — réal. David Moreau · 1er assistant William Pruss), La dernière campagne (2012 — réal. Bernard Stora · 1er assistant Jérôme Brière · prod. GMT Productions), La grande boucle (2012 — réal. Laurent Tuel · 1re assistante Véronique Labrid · prod. Fidélité Films, Bago Films), Quelques heures de printemps (2011 — réal. Stéphane Brizé · 1er assistant Émile Louis · prod. TS Productions), Cloclo (2011 — réal. Florent-Emilio Siri · 1er assistant Michaël Viger · prod. LGM Cinéma), Stars 80 (2011 — réal. Frédéric Forestier et Thomas Langmann · 1re assistante Véronique Labrid), Une famille formidable (2011 — série, saison 9 · réal. Joël Santoni · 1er assistant Gary Saint-Martin), Intouchables (2010 — réal. Olivier Nakache et Éric Toledano · 1er assistant Hervé Ruet · prod. Quad, Gaumont), L'élève Ducobu (2010 — réal. Philippe de Chauveron · 1re assistante Fanny Aubrespin), Omar m'a tuer (2010 — réal. Roschdy Zem · 1er assistant Mathieu Schiffman · prod. 3B Productions), La pire semaine de ma vie (2010 — mini-série M6 · réal. Frédéric Auburtin · prod. Les Productions de l'Abreuvoir), Gainsbourg (2009 — réal. Joann Sfar · 1er assistant Yann Cuinet · prod. One World Films), Les Virtuoses – épisodes 1 à 6 (2009 — série · réal. Claude-Michel Rome), Pièce montée (2009 — réal. Denys Granier-Deferre · 1er assistant Patrick Delabrière), Le petit Nicolas (2008 — réal. Laurent Tirard · 1er assistant Alan Corno · prod. Fidélité Films), La reine et le cardinal (2008 — téléfilm · réal. Marc Rivière · 1ers assistants Emmanuel Rondeau et Stéphane Pelegri · prod. Gétévé), Mes amis mes amours mes emmerdes (2008 — série, saison 1 · réal. Sylvie Ayme), De l'autre côté du lit (2007 — réal. Pascale Pouzadoux · 1er assistant Frédéric Gérard · prod. Fidélité Films), Elles et moi (2007 — téléfilm · réal. Bernard Stora · 1er assistant Alan Corno · prod. Studio International), Transporter 3 (2007 — réal. Olivier Megaton · 1er assistant David Campi-Lemaire · prod. EuropaCorp), Comme ton père (2006 — réal. Marco Carmel · 1re assistante Élodie Morales), Une famille formidable – Vacances marocaines (2006 — série, saison 7 · 1er assistant François Azria), Molière (2006 — réal. Laurent Tirard · 1er assistant Alan Corno · prod. Fidélité Films), Marie Besnard l'empoisonneuse (2005 — téléfilm · réal. Christian Faure · 1er assistant Frédéric Roullier-Gall · prod. Ramona Productions), Le grand Charles (2005 — réal. Bernard Stora · 1er assistant Alan Corno · prod. GMT Productions), Aurore (2004 — réal. Nils Tavernier · prod. La Cinéfacture), L'ex-femme de ma vie (2003 — réal. Josiane Balasko · 1re assistante Zazie Carcedo), Podium (2003 — réal. Yann Moix · 1er assistant Alan Corno · prod. Fidélité Films), Une preuve d'amour (2002 — téléfilm · réal. Bernard Stora · casting Pascale Paddy), Les grands frères (2002 — casting Pascale Paddy), Joséphine, ange gardien – saison 5 (2000 — série TF1, 3 épisodes · casting Pascale Paddy), Juliette : Service(s) compris (2000 — téléfilm · casting Pascale Paddy), Plusieurs publicités : Nike, KFC, Air France, Louis Vuitton en 2025 (2012-2026)",
      "Casting Clips": "Plusieurs clips musicaux : Renan Luce, Raphael…",
      "Assistante Mise en Scène": "La Voix des Steppes (2013 — réal. Ermek Shinarbaev et Gérard Depardieu · prod. B-Tween Production), Pour elle (2007 — réal. Fred Cavayé · 1er assistant Eric Pujol · prod. Fidélité Films)",
      "Coach Enfants": "Des nouvelles de la planète Mars (2015 — réal. Dominik Moll · 1re assistante Rafaële Ravinet-Virbel · prod. Diaphana Films, Artemis Production)",
      "Assistante Régisseuse": "Robin (2026 — série TF1 · renfort régie · réal. Nicolas Guicheteau · prod. Fédération Studio France, Égalité Studios), Dracula (2024 — réal. Luc Besson · 1re assistante Camille Patrice · prod. EuropaCorp), Valérian (2016 — réal. Luc Besson · 1er assistant Stéphane Gluck · prod. EuropaCorp), Le Transporteur : Héritage (2014 — réal. Camille Delamarre · 1er assistant Stéphane Moreno-Carpio · prod. EuropaCorp), Arthur 3 (2009 — réal. Luc Besson · 1er assistant Stéphane Gluck · prod. EuropaCorp), À l'intérieur (2006 — réal. Alexandre Bustillo et Julien Maury · 1er assistant Léonard Guillain), Arthur et les Minimoys (2005 — réal. Luc Besson · 1er assistant Stéphane Gluck · prod. EuropaCorp), Pub Afflelou, Pub KFC"
    },
    animation: {
      "Animations entre 1996 et 2010": "Centre de loisirs, colonie de vacances, camp itinérant, encadrement voile, encadrement ski, surveillance mer, professeur spécialisé voile (ado, adulte).",
      "Professeur EPS (remplaçant) entre 1998 et 2005": "École maternelle, primaire, collège, lycée, et le centre sportif de la Ville de Paris le mercredi.",
      "Diplômes": "BAFA (1997). A2C (1996) / Monitorat fédéral de voile (aux Glenans, 2000) / Monitorat fédéral de voile (2003) / B1D1 Voile (2003). Maîtrise STAPS (2006). AFPS / A.F.S.P.A.M (brevet de secouriste avec matériel). B.N.S.S.A (brevet national de secouriste et sauvetage aquatique).",
      "Permis": "Voiture B. Bateau (côtier, rivière, fleuve, lac)."
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
      { titre: "Le Triangle d'or", realisateur: "Hélène Rosselet-Ruiz", annee: 2025, type: "film", affiche: "/affiches/le-triangle-d-or.jpg" },
      { titre: "Sanguine", realisateur: "Marion Le Corroller", annee: 2025, type: "film", affiche: "/affiches/sanguine.jpg" },
      { titre: "Icaros", realisateur: "Alaa Safi", annee: 2025, type: "film", affiche: "/affiches/icaros.jpg" },
      { titre: "Furies - saison 2", realisateur: "Cédric Nicolas-Troyan et Ludovic Bernard", annee: 2025, type: "serie", affiche: "/affiches/furies-saison-2.jpg" },
      { titre: "G.I.G.N. - saison 1", realisateur: "Julien Leclercq", annee: 2025, type: "serie", affiche: "/affiches/gign.jpg" },
      { titre: "Élysée - saison 1", realisateur: "Martin Bourboulon", annee: 2025, type: "serie", affiche: "/affiches/elysee.jpg" },
      { titre: "Seuls les poissons morts suivent le courant", realisateur: "Christophe Gomes", annee: 2025, type: "court" },
      { titre: "Qui brille au combat", realisateur: "Joséphine Japy", annee: 2024, type: "film", affiche: "/affiches/qui-brille-au-combat.jpg" },
      { titre: "Banger", realisateur: "Bertrand de Langeron", annee: 2024, type: "film", affiche: "/affiches/banger.jpg" },
      { titre: "Les Orphelins", realisateur: "Olivier Schneider", annee: 2024, type: "film", affiche: "/affiches/les-orphelins.jpg" },
      { titre: "Yoroï", realisateur: "David Tomaszewski", annee: 2024, type: "film", affiche: "/affiches/yoroi.jpg" },
      { titre: "B.R.I. - saison 2", realisateur: "Jérémy Guez", annee: 2024, type: "serie", affiche: "/affiches/bri.jpg" },
      { titre: "Expulsion", realisateur: "Mathieu Vadepied", annee: 2024, type: "court" },
      { titre: "Par amour", realisateur: "Élise Otzenberger", annee: 2023, type: "film", affiche: "/affiches/par-amour.jpg" },
      { titre: "Des blessures invisibles", realisateur: "Sarah Marx", annee: 2023, type: "film", affiche: "/affiches/des-blessures-invisibles.jpg" },
      { titre: "Le Règne animal", realisateur: "Thomas Cailley", annee: 2023, type: "film", affiche: "/affiches/le-regne-animal.jpg" },
      { titre: "Frères", realisateur: "Olivier Casas", annee: 2023, type: "film", affiche: "/affiches/freres.jpg" },
      { titre: "Home-Jacking", realisateur: "Hervé Hadmar", annee: 2023, type: "serie", affiche: "/affiches/home-jacking.jpg" },
      { titre: "Sous le tapis", realisateur: "Camille Japy", annee: 2022, type: "film", affiche: "/affiches/sous-le-tapis.jpg" },
      { titre: "Truth or Consequences", realisateur: "Philippe Prouff", annee: 2022, type: "film" },
      { titre: "L'Abbé Pierre : Une vie de combats", realisateur: "Frédéric Tellier", annee: 2022, type: "film", affiche: "/affiches/l-abbe-pierre.jpg" },
      { titre: "La Petite", realisateur: "Guillaume Nicloux", annee: 2022, type: "film", affiche: "/affiches/la-petite.jpg" },
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
  },
  "christophe-denis": {
    firstName: "Christophe",
    lastName: "Denis",
    photo: "/christophe-denis.jpg",
    email: "christophe2ni@gmail.com",
    role: "Responsable enfants | Comédien | Musicien | Répétiteur musique",
    bio: "Responsable de l'encadrement des enfants acteurs au cinéma et en audiovisuel depuis 2006. Basé à Paris.",
    experienceYears: 20,
    cvUrl: "/CV_CHRISTOPHE_DENIS.pdf",
    cvOriginal: true, // on télécharge le PDF envoyé tel quel (pas de CV regénéré)
    films: [
      { titre: "Anatole Latuile", realisateur: "François Descraques", annee: 2026, type: "film" },
      { titre: "Karma", realisateur: "Guillaume Canet", annee: 2025, type: "film", affiche: "/affiches/cdenis/karma.jpg" },
      { titre: "Singapura", realisateur: "Danielle Arbid et Lucie Borleteau", annee: 2024, type: "serie", affiche: "/affiches/cdenis/singapura.jpg" },
      { titre: "Sur un fil", realisateur: "Reda Kateb", annee: 2023, type: "film", affiche: "/affiches/cdenis/sur-un-fil.jpg" },
      { titre: "Toto : la classe se met au vert", realisateur: "Pascal Bourdiaux", annee: 2022, type: "film", affiche: "/affiches/cdenis/toto-classe-verte.jpg" },
      { titre: "La Guerre des Lulus", realisateur: "Yann Samuell", annee: 2021, type: "film", affiche: "/affiches/cdenis/la-guerre-des-lulus.jpg" },
      { titre: "Les Blagues de Toto", realisateur: "Pascal Bourdiaux", annee: 2019, type: "film", affiche: "/affiches/cdenis/les-blagues-de-toto.jpg" },
      { titre: "Christ(Off)", realisateur: "Pierre Dudan", annee: 2017, type: "film", affiche: "/affiches/cdenis/christ-off.jpg" },
      { titre: "Les Mystères de l'amour", annee: 2016, type: "serie", affiche: "/affiches/cdenis/les-mysteres-de-l-amour.jpg" },
      { titre: "Le Nouveau", realisateur: "Rudi Rosenberg", annee: 2015, type: "film", affiche: "/affiches/cdenis/le-nouveau.jpg" },
      { titre: "Un sac de billes", realisateur: "Christian Duguay", annee: 2015, type: "film", affiche: "/affiches/cdenis/un-sac-de-billes.jpg" },
      { titre: "West Coast", realisateur: "Benjamin Weill", annee: 2014, type: "film", affiche: "/affiches/cdenis/west-coast.jpg" },
      { titre: "Les Vacances du Petit Nicolas", realisateur: "Laurent Tirard", annee: 2013, type: "film", affiche: "/affiches/cdenis/les-vacances-du-petit-nicolas.jpg" },
      { titre: "Je m'appelle Hmmm…", realisateur: "Agnès b.", annee: 2012, type: "film", affiche: "/affiches/cdenis/je-m-appelle-hmmm.jpg" },
      { titre: "La Fleur de l'âge", realisateur: "Nick Quinn", annee: 2011, type: "film", affiche: "/affiches/cdenis/la-fleur-de-l-age.jpg" },
      { titre: "La Guerre des boutons", realisateur: "Yann Samuell", annee: 2011, type: "film", affiche: "/affiches/cdenis/la-guerre-des-boutons.jpg" },
      { titre: "Astérix et Obélix : Au service de Sa Majesté", realisateur: "Laurent Tirard", annee: 2011, type: "film", affiche: "/affiches/cdenis/asterix-au-service-de-sa-majeste.jpg" },
      { titre: "Ripoux anonymes", realisateur: "Claude et Julien Zidi", annee: 2010, type: "film", affiche: "/affiches/cdenis/ripoux-anonymes.jpg" },
      { titre: "Le Petit Nicolas", realisateur: "Laurent Tirard", annee: 2008, type: "film", affiche: "/affiches/cdenis/le-petit-nicolas.jpg" },
      { titre: "Les Enfants de Timpelbach", realisateur: "Nicolas Bary", annee: 2007, type: "film", affiche: "/affiches/cdenis/les-enfants-de-timpelbach.jpg" },
      { titre: "Big City", realisateur: "Djamel Bensalah", annee: 2006, type: "film", affiche: "/affiches/cdenis/big-city.jpg" },
      { titre: "À cran", realisateur: "Alain Tasma", annee: 2003, type: "film", affiche: "/affiches/cdenis/a-cran.jpg?v=2" }
    ],
    filmography: {
      "Responsable enfants": "Anatole Latuile de François Descraques, Pyramide Productions, enfants acteurs et figurants de 12 à 14 ans (2026), Karma de Guillaume Canet, Iconoclast Films, 7 à 15 ans (2025), Singapura, série de Danielle Arbid et Lucie Borleteau, Étoile Rouge Productions, 14 ans (2024), Sur un fil de Reda Kateb, Pyramide Productions, 5 à 11 ans (2023), Toto : la classe se met au vert de Pascal Bourdiaux, Superprod Films, 10 à 13 ans (2022), La Guerre des Lulus de Yann Samuell, Superprod Films, 7 à 16 ans (2021), Les Blagues de Toto de Pascal Bourdiaux, Superprod Films, 10 à 13 ans (2019), Le Nouveau de Rudi Rosenberg, Recifilms (2015), Un sac de billes de Christian Duguay, Mitico, 11 à 15 ans (2015), West Coast de Benjamin Weill, Jéricho, 12 à 17 ans (2014), Les Vacances du Petit Nicolas de Laurent Tirard, Fidélité Films, 8 à 10 ans (2013), La Fleur de l'âge de Nick Quinn, Gloria Films, 6 à 11 ans (2011), La Guerre des boutons de Yann Samuell, One World Films, 7 à 15 ans (2011), Le Petit Nicolas de Laurent Tirard, Fidélité Films, 8 à 10 ans (2008), Les Enfants de Timpelbach de Nicolas Bary, Chapter Two, 8 à 15 ans (2007), Big City de Djamel Bensalah, Miroir Magique, 7 à 15 ans (2006)",
      "Comédien": "Toto : la classe se met au vert de Pascal Bourdiaux (2022), Les Blagues de Toto de Pascal Bourdiaux (2019), Les Mystères de l'amour, série (2016), Je m'appelle Hmmm… d'Agnès b. (2012), Astérix et Obélix : Au service de Sa Majesté de Laurent Tirard (2011), Akım, court métrage de Nicolas Karolszyk (2011), Ripoux anonymes, téléfilm de Claude et Julien Zidi (2010), Courts métrages en 2010 : Bus Stop in Paris, Martin n'est pas blanc, Nicolas et Émilie, Circonstances atténuantes, Élégie, Sur un banc, Casting. À cran, téléfilm d'Alain Tasma (2003)",
      "Répétiteur musique": "Christ(Off) de Pierre Dudan (2017)"
    },
    cvSections: {
      "Formation": "Référent VHSS, violences, harcèlement et discriminations sexuelles et sexistes, Atelier Marcelle (2025). Formation professionnelle d'intervenant pédagogique en musiques actuelles, FIPMA (2016). Formation professionnelle de comédien, Studio Pygmalion (2012). Cycle professionnel de musicien, spécialisation musique de film, 300 heures (2009). Animation d'ateliers d'écriture de chansons, ALEPH (1998). Encadrement de répétitions en musiques actuelles, Le CRY, Yvelines (1996). Brevet d'État d'éducateur sportif 1er degré option natation, BEESAN (1990). Études de guitare et d'arrangement, école de jazz du CIM (1984-1989). BAFA (1983)",
      "IMDb": "https://www.imdb.com/fr/name/nm1456468/"
    }
  },
  "marine-longuet": {
    firstName: "Marine",
    lastName: "Longuet",
    photo: "/marine-longuet.jpg",
    email: "marine.longuet@gmail.com",
    role: "Responsable enfants | Assistante réalisation | Casting rôles et figuration | Coordination enfants",
    bio: "Assistante réalisation et responsable enfants depuis 2007, spécialisée dans la préparation et l'encadrement des mineurs. Assistante à la distribution des rôles et chargée de figuration.",
    experienceYears: 19,
    cvUrl: "/CV_MARINE_LONGUET.pdf",
    films: [
      { titre: "Opéra bleu", realisateur: "Vassia Chavaroche", annee: 2026, type: "court" },
      { titre: "Night", realisateur: "Beatrice Gibson", annee: 2025, type: "film", affiche: "/affiches/mlonguet/night.jpg" },
      { titre: "Les Princes du BTP", realisateur: "Antoine Giorgini", annee: 2025, type: "film", affiche: "/affiches/mlonguet/les-princes.jpg" },
      { titre: "Six jours, ce printemps-là", realisateur: "Joachim Lafosse", annee: 2024, type: "film", affiche: "/affiches/mlonguet/six-jours.jpg" },
      { titre: "À la hauteur", realisateur: "Hélène Fabre", annee: 2024, type: "court", affiche: "/affiches/mlonguet/a-la-hauteur.jpg" },
      { titre: "La Vallée des fous", realisateur: "Xavier Beauvois", annee: 2023, type: "film", affiche: "/affiches/mlonguet/la-vallee-des-fous.jpg" },
      { titre: "Les Fantômes", realisateur: "Jonathan Millet", annee: 2023, type: "film", affiche: "/affiches/mlonguet/les-fantomes.jpg" },
      { titre: "Second tour", realisateur: "Albert Dupontel", annee: 2023, type: "film", affiche: "/affiches/mlonguet/second-tour.jpg" },
      { titre: "Je ne suis pas un héros", realisateur: "Rudy Milstein", annee: 2022, type: "film", affiche: "/affiches/mlonguet/je-ne-suis-pas-un-heros.jpg" },
      { titre: "La Petite", realisateur: "Guillaume Nicloux", annee: 2022, type: "film", affiche: "/affiches/la-petite.jpg" },
      { titre: "La Nouvelle Femme", realisateur: "Léa Todorov", annee: 2022, type: "film", affiche: "/affiches/mlonguet/la-nouvelle-femme.jpg" },
      { titre: "Il n'y a pas d'ombre dans le désert", realisateur: "Yossi Aviram", annee: 2022, type: "film", affiche: "/affiches/mlonguet/il-n-y-a-pas-d-ombre.jpg" },
      { titre: "Les Enfants des autres", realisateur: "Rebecca Zlotowski", annee: 2021, type: "film", affiche: "/affiches/mlonguet/les-enfants-des-autres.jpg" },
      { titre: "Je te veux, moi non plus", realisateur: "Inès Reg et Kevin Debonne", annee: 2021, type: "film", affiche: "/affiches/mlonguet/je-te-veux-moi-non-plus.jpg" },
      { titre: "Petite Maman", realisateur: "Céline Sciamma", annee: 2020, type: "film", affiche: "/affiches/mlonguet/petite-maman.jpg" },
      { titre: "Albatros", realisateur: "Xavier Beauvois", annee: 2019, type: "film", affiche: "/affiches/mlonguet/albatros.jpg" },
      { titre: "Été 85", realisateur: "François Ozon", annee: 2019, type: "film", affiche: "/affiches/mlonguet/ete-85.jpg" },
      { titre: "Anna Vernor II", realisateur: "Edouardo Carretié", annee: 2019, type: "court", affiche: "/affiches/mlonguet/anna-vernor-2.jpg" },
      { titre: "La Dernière Vie de Simon", realisateur: "Léo Karmann", annee: 2018, type: "film", affiche: "/affiches/mlonguet/la-derniere-vie-de-simon.jpg" },
      { titre: "Sun", realisateur: "Jonathan Desoindre", annee: 2017, type: "film", affiche: "/affiches/mlonguet/sun.jpg" },
      { titre: "La Musique à l'eau", realisateur: "Claude Duty", annee: 2017, type: "court", affiche: "/affiches/mlonguet/la-musique-a-l-eau.jpg" },
      { titre: "La Fine Équipe", realisateur: "Magaly Richard-Serrano", annee: 2016, type: "film", affiche: "/affiches/mlonguet/la-fine-equipe.jpg" },
      { titre: "Je ne sais pas si c'est tout le monde", realisateur: "Vincent Delerm", annee: 2015, type: "film", affiche: "/affiches/mlonguet/je-ne-sais-pas-si-c-est-tout-le-monde.jpg" },
      { titre: "Tristesse Club", realisateur: "Vincent Mariette", annee: 2013, type: "film", affiche: "/affiches/mlonguet/tristesse-club.jpg" },
      { titre: "Les Conquérants", realisateur: "Xabi Molia", annee: 2012, type: "film", affiche: "/affiches/mlonguet/les-conquerants.jpg" },
      { titre: "De rouille et d'os", realisateur: "Jacques Audiard", annee: 2012, type: "film", affiche: "/affiches/mlonguet/de-rouille-et-d-os.jpg" },
      { titre: "38 témoins", realisateur: "Lucas Belvaux", annee: 2012, type: "film", affiche: "/affiches/mlonguet/38-temoins.jpg" },
      { titre: "La Fée", realisateur: "Abel, Gordon et Romy", annee: 2011, type: "film", affiche: "/affiches/mlonguet/la-fee.jpg" },
      { titre: "Belle Épine", realisateur: "Rebecca Zlotowski", annee: 2009, type: "film", affiche: "/affiches/mlonguet/belle-epine.jpg" }
    ],
    filmography: {
      "Responsable enfants": "Six jours, ce printemps-là de Joachim Lafosse, Stenola / Les Films du Losange, rôles principaux (2024), La Vallée des fous de Xavier Beauvois, Les Films du Worso, rôle principal (2023), Les Enfants des autres de Rebecca Zlotowski, Les Films Velvet, rôle principal (2021), Petite Maman de Céline Sciamma, Lilies Films, rôles principaux (2020)",
      "Assistante réalisation — Longs métrages": "Night de Beatrice Gibson, 1re assistante, Somesuch / Norte Productions / BBC (2025), Les Fantômes de Jonathan Millet, repérages, Grand Huit (2023), Je ne suis pas un héros de Rudy Milstein, 2e assistante, Delante (2022), La Petite de Guillaume Nicloux, 1re assistante pré-tournage en remplacement, Les Films du Kiosque (2022), La Dernière Vie de Simon de Léo Karmann, 2e assistante, Gekko Film (2018), Sun de Jonathan Desoindre, 2e assistante, Produits Frais / Rouge International (2017), Je ne sais pas si c'est tout le monde de Vincent Delerm, 1re assistante pré-tournage, Tôt ou Tard Films / Rouge International (2015), Tristesse Club de Vincent Mariette, 2e assistante, Kazak (2013), Les Conquérants de Xabi Molia, 2e assistante, Moteur s'il vous plaît (2012), La Fée d'Abel, Gordon et Romy, 2e assistante, MK2 / Courage Mon Amour (2011), Belle Épine de Rebecca Zlotowski, 3e assistante et repérages Normandie, Les Films Velvet (2009)",
      "Assistante réalisation — Courts métrages et publicité": "Opéra bleu de Vassia Chavaroche, 1re assistante, Apaches Films (2026), À la hauteur d'Hélène Fabre, 1re assistante, Offshore (2024), Anna Vernor II d'Edouardo Carretié, 1re assistante, Envie de Tempête (2019), Publicité Française des Jeux de Géraldine Nakache, 2e assistante, Quad Productions (2018), La Musique à l'eau de Claude Duty, 1re assistante, Envie de Tempête (2017)",
      "Assistante à la distribution des rôles & chargée de figuration": "Les Princes du BTP d'Antoine Giorgini, Deuxième Ligne Films (2025), La Vallée des fous de Xavier Beauvois, Les Films du Worso (2023), Second tour d'Albert Dupontel, ADCB Films, chargée de figuration retakes (2023), La Nouvelle Femme de Léa Todorov, Geko Films, reprise de poste et retakes (2022), Il n'y a pas d'ombre dans le désert de Yossi Aviram, Les Films du Poisson, chargée de figuration (2022), Je te veux, moi non plus d'Inès Reg et Kevin Debonne, Monkey Pack Films, chargée de figuration (2021), Albatros de Xavier Beauvois, Les Films du Worso (2019), Été 85 de François Ozon, Mandarin Production, chargée de figuration (2019), La Fine Équipe de Magaly Richard-Serrano, Blue Monday Productions (2016), 38 témoins de Lucas Belvaux, Agat Films (2012), De rouille et d'os de Jacques Audiard, Why Not Productions, recherche de doublure (2012)"
    },
    cvSections: {
      "Expériences spécifiques": "Préparation et encadrement de rôles enfants de 3 à 15 ans. Coordination d'intimité. Scènes de foules de 200 à 500 figurants. Tournages avec des personnes en situation de handicap. Animaux (singe, ours, chien). Drone et hélicoptère. Essayages figuration pour film d'époque",
      "Compétences": "Casting rôles adultes et enfants. Gestion de la figuration, administrative et plateau (Myrole, Starbizz, Movinmotion). Fichier figurants Normandie : Le Havre, Dieppe, Rouen, Fécamp",
      "Formation": "Atelier documentaire, La Fémis (2015). Licence de cinéma, Université Paris 1 Panthéon-Sorbonne (2006). BTS audiovisuel option montage, lycée Corneille, Rouen (2005). Bac littéraire spécialité cinéma, lycée Lumière, Lyon (2002). Permis B",
      "Engagements": "Membre du conseil d'administration du Collectif 50/50 (2023-2025). Référente VHSS, Atelier Marcelle. Consultante encadrement des mineurs (CPNEF)",
      "IMDb": "https://www.imdb.com/name/nm3142882/"
    }
  }
};

const MemberProfilePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = memberData[slug || ""];

  // Photo du site, recadrée en portrait 3:4, pour le CV en PDF
  const chargerPhotoPourPdf = (src: string): Promise<string | null> =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const W = 600, H = 800;
          const c = document.createElement("canvas");
          c.width = W; c.height = H;
          const ctx = c.getContext("2d");
          if (!ctx) return resolve(null);
          const ratio = Math.max(W / img.width, H / img.height);
          const w = img.width * ratio, h = img.height * ratio;
          ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, W, H);
          ctx.drawImage(img, (W - w) / 2, (H - h) / 3, w, h);
          resolve(c.toDataURL("image/jpeg", 0.88));
        } catch { resolve(null); }
      };
      img.onerror = () => resolve(null);
      img.src = src;
    });

  const generatePDF = async () => {
    const photoPdf = member.photo ? await chargerPhotoPourPdf(member.photo) : null;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = 210;
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = 20;

    // Couleurs site
    const bleu = [59, 130, 246] as [number, number, number];
    const noir = [15, 23, 42] as [number, number, number];
    const gris = [100, 116, 139] as [number, number, number];
    // Fond du bandeau : bleu léger pour Liv, beige pour les autres
    const beige = (slug === "liv-charpentier" ? [224, 236, 252] : [245, 240, 232]) as [number, number, number];

    // Fond beige header
    doc.setFillColor(...beige);
    doc.rect(0, 0, pageW, 50, "F");

    // Photo en haut à droite
    const largeurPhoto = 30;
    const largeurTexteEntete = photoPdf ? contentW - largeurPhoto - 6 : contentW;
    if (photoPdf) {
      doc.addImage(photoPdf, "JPEG", pageW - margin - largeurPhoto, 5, largeurPhoto, 40);
    }

    // Nom
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...noir);
    doc.text(`${member.firstName} ${member.lastName}`.toUpperCase(), margin, y + 8);

    // Role — sur plusieurs lignes si necessaire
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...bleu);
    const roleLines = doc.splitTextToSize(member.role || "", largeurTexteEntete);
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

    const titresPdf = titresDuMembre(member);
    const addSection = (title: string, text: string, avecTitres = false) => {
      if (y > 265) { doc.addPage(); y = 20; }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...bleu);
      doc.text(title.toUpperCase(), margin, y);
      y += 5;
      doc.setFontSize(9);
      doc.setTextColor(...noir);
      // Mots un par un, les titres de films en gras
      // Filmographie : un film par ligne, comme sur le site
      const items = avecTitres ? text.split(/(?<=\))\s*[,.]\s+/).filter(Boolean) : lignesCV(text, title);
      items.forEach((item, n) => {
      const mots: { t: string; gras: boolean }[] = [];
      (avecTitres ? segmentsTitres(item, titresPdf) : [{ t: item, gras: false }]).forEach((sg) => {
        sg.t.split(/(\s+)/).forEach((m) => { if (m) mots.push({ t: m, gras: sg.gras }); });
      });
      if (n > 0) y += 5.5;
      let x = margin;
      if (y > 275) { doc.addPage(); y = 20; }
      mots.forEach((m) => {
        doc.setFont("helvetica", m.gras ? "bold" : "normal");
        const espace = /^\s+$/.test(m.t);
        const w = doc.getTextWidth(espace ? " " : m.t);
        if (espace) { if (x > margin) x += w; return; }
        if (x + w > margin + contentW && x > margin) {
          x = margin; y += 4.5;
          if (y > 275) { doc.addPage(); y = 20; }
        }
        if (/^https?:\/\//.test(m.t)) {
          // Adresse web cliquable dans le PDF (ex. IMDb)
          doc.setTextColor(...bleu);
          doc.textWithLink(m.t, x, y, { url: m.t });
          doc.setDrawColor(...bleu);
          doc.line(x, y + 0.6, x + w, y + 0.6);
          doc.setTextColor(...noir);
        } else {
          doc.text(m.t, x, y);
        }
        x += w;
      });
      });
      doc.setFont("helvetica", "normal");
      y += 4.5 + 6;
    };

    // Filmographie
    if (member.filmography) {
      Object.entries(member.filmography).forEach(([role, films]) => {
        addSection(role, films as string, true);
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
    doc.text("ARENCA — Association des Responsables Enfants dans le Cinéma et l'Audiovisuel", margin, 290);

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
              {member.cvSections?.IMDb && (
                <a href={member.cvSections.IMDb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80">
                  <Film className="w-4 h-4" /> IMDb
                </a>
              )}
            </div>

            {/* Bandeau d'affiches des films du CV */}
            {(member.films || member.filmography) && (
              <FilmPosterBand films={member.films || filmsDepuisFilmographie(member.filmography, member.affiches)} groupes={!member.films && slug === "liv-charpentier" ? groupesDepuisFilmographie(member.filmography, member.affiches) : undefined} />
            )}

            {/* Filmographie */}
            {member.filmography && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Filmographie</h2>
                <div className="space-y-8">
                  {Object.entries(member.filmography).map(([role, films], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-3">{role}</h3>
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
                        {(films as string).split(/(?<=\))\s*[,.]\s+/).filter(Boolean).map((item, i) => (
                          <li key={i}>
                            {segmentsTitres(item, titresDuMembre(member)).map((sg, k) => sg.gras ? <strong key={k} className="font-semibold text-foreground">{sg.t}</strong> : <span key={k}>{sg.t}</span>)}
                          </li>
                        ))}
                      </ul>
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
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
                        {lignesCV(content as string, String(period)).map((l, i) => <li key={i}>{/^https?:/.test(l) ? <a href={l} target="_blank" rel="noreferrer" className="text-accent underline break-all">{l}</a> : l}</li>)}
                      </ul>
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
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
                        {lignesCV(content as string, String(section)).map((l, i) => <li key={i}>{/^https?:/.test(l) ? <a href={l} target="_blank" rel="noreferrer" className="text-accent underline break-all">{l}</a> : l}</li>)}
                      </ul>
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
            {member.cvUrl && (member as any).cvOriginal ? (
              <Button size="lg" className="gap-2" asChild>
                <a href={member.cvUrl} download={`CV_${member.firstName}_${member.lastName}.pdf`} target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  Télécharger le CV complet (PDF)
                </a>
              </Button>
            ) : member.cvUrl && (
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