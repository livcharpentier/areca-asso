import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE = "ARENCA – Association des Responsables Enfants dans le Cinéma et l'Audiovisuel";
const TITRES: Record<string, string> = {
  "/metier": "Présentation – le métier de responsable enfant",
  "/production": "Réglementation – emploi des enfants sur les tournages",
  "/parents": "Espace parents – enfants en tournage",
  "/members": "Les membres – responsables enfants",
  "/responsables": "Espace membres",
  "/formations": "Formations",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales",
};

// Met à jour le titre de l'onglet (et de Google) selon la page.
const TitrePage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const t = TITRES[pathname];
    document.title = t ? `${t} | ARENCA` : BASE;
    const c = document.querySelector('link[rel="canonical"]');
    if (c) c.setAttribute("href", "https://arenca.fr" + (pathname === "/" ? "/" : pathname));
  }, [pathname]);
  return null;
};

export default TitrePage;
