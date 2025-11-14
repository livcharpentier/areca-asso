export interface CommissionDate {
  reunion: string;
  depot: string;
  departements: string;
}

export interface RegionCalendrier {
  nom: string;
  slug: string;
  drieets: {
    adresse: string;
    telephone: string;
    email: string;
    horaires: string;
  };
  dates2025: CommissionDate[];
  dates2026: CommissionDate[];
  disponible: boolean;
}

export const regionsCalendriers: RegionCalendrier[] = [
  {
    nom: "Île-de-France",
    slug: "ile-de-france",
    drieets: {
      adresse: "19 rue Madeleine Vionnet, 93300 Aubervilliers",
      telephone: "01 70 95 52 00",
      email: "idf-ut75.enfants-spectacle@drieets.gouv.fr",
      horaires: "Lundi au vendredi : 9h00 - 12h00 / 14h00 - 17h00 (Sur rendez-vous)",
    },
    dates2025: [
      { reunion: "6 NOVEMBRE", depot: "1er OCTOBRE 2025", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "12 NOVEMBRE", depot: "1er OCTOBRE 2025", departements: "92" },
      { reunion: "4 DÉCEMBRE", depot: "4 NOVEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "10 DÉCEMBRE", depot: "3 NOVEMBRE", departements: "92" },
    ],
    dates2026: [
      { reunion: "8 JANVIER", depot: "1er DÉCEMBRE 2025", departements: "75, 77, 78, 91, 92, 93, 94, 95" },
      { reunion: "5 FÉVRIER", depot: "2 JANVIER", departements: "75, 77, 78, 91, 92, 93, 94, 95" },
      { reunion: "12 MARS", depot: "2 FÉVRIER", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "11 MARS", depot: "2 FÉVRIER", departements: "92" },
      { reunion: "9 AVRIL", depot: "2 MARS", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "8 AVRIL", depot: "2 MARS", departements: "92" },
      { reunion: "7 MAI", depot: "1er AVRIL", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "6 MAI", depot: "1er AVRIL", departements: "92" },
      { reunion: "11 JUIN", depot: "1er MAI", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "10 JUIN", depot: "1er MAI", departements: "92" },
      { reunion: "9 JUILLET", depot: "1er JUIN", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "8 JUILLET", depot: "1er JUIN", departements: "92" },
      { reunion: "10 SEPTEMBRE", depot: "1er JUILLET", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "9 SEPTEMBRE", depot: "1er JUILLET", departements: "92" },
      { reunion: "8 OCTOBRE", depot: "1er SEPTEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "7 OCTOBRE", depot: "1er SEPTEMBRE", departements: "92" },
      { reunion: "5 NOVEMBRE", depot: "1er OCTOBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "4 NOVEMBRE", depot: "1er OCTOBRE", departements: "92" },
      { reunion: "3 DÉCEMBRE", depot: "2 NOVEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
      { reunion: "2 DÉCEMBRE", depot: "2 NOVEMBRE", departements: "92" },
    ],
    disponible: true,
  },
  {
    nom: "Auvergne-Rhône-Alpes",
    slug: "auvergne-rhone-alpes",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Bourgogne-Franche-Comté",
    slug: "bourgogne-franche-comte",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Bretagne",
    slug: "bretagne",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Centre-Val de Loire",
    slug: "centre-val-de-loire",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Corse",
    slug: "corse",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Grand Est",
    slug: "grand-est",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Hauts-de-France",
    slug: "hauts-de-france",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Normandie",
    slug: "normandie",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Nouvelle-Aquitaine",
    slug: "nouvelle-aquitaine",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Occitanie",
    slug: "occitanie",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Pays de la Loire",
    slug: "pays-de-la-loire",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
  {
    nom: "Provence-Alpes-Côte d'Azur",
    slug: "provence-alpes-cote-azur",
    drieets: {
      adresse: "À compléter",
      telephone: "À compléter",
      email: "À compléter",
      horaires: "À compléter",
    },
    dates2025: [],
    dates2026: [],
    disponible: false,
  },
];
