import { useEffect, useState } from "react";

export type FilmCV = {
  titre: string;
  annee?: number;
  realisateur?: string;
  type?: "film" | "serie" | "court";
  /** Affiche fournie à la main (ex. "/affiches/mon-film.jpg") : prioritaire sur la recherche automatique */
  affiche?: string;
};

const normaliser = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// « FURIES - SAISON 2 » → « Furies »
const titreDeBase = (t: string) => t.replace(/\s*[-–—]?\s*saison\s*\d+.*$/i, "").trim();

const CLE_CACHE = "arenca-affiches-v2";
const DUREE_CACHE = 1000 * 60 * 60 * 24 * 30;

type Cache = Record<string, { url: string | null; t: number }>;
const lireCache = (): Cache => {
  try {
    return JSON.parse(localStorage.getItem(CLE_CACHE) || "{}");
  } catch {
    return {};
  }
};
const ecrireCache = (c: Cache) => {
  try {
    localStorage.setItem(CLE_CACHE, JSON.stringify(c));
  } catch {
    /* stockage indisponible : on cherchera à nouveau la prochaine fois */
  }
};

const anneeProche = (a: number | undefined, b: number | undefined) => !a || !b || Math.abs(a - b) <= 1;

// Affiche d'iTunes (films et séries sortis en France)
async function chercherAfficheItunes(film: FilmCV): Promise<string | null> {
  const base = titreDeBase(film.titre);
  const serie = film.type === "serie";
  const url = "https://itunes.apple.com/search?country=fr&limit=15&term=" + encodeURIComponent(base) +
    (serie ? "&media=tvShow&entity=tvSeason" : "&media=movie&entity=movie");
  const rep = await fetch(url);
  if (!rep.ok) return null;
  const json = await rep.json();
  const cible = normaliser(base);
  const r = (json.results || []).find((x: any) => {
    const nom = normaliser(String(serie ? x.collectionName || "" : x.trackName || "").replace(/[,:-]\s*saison.*$/i, ""));
    const annee = x.releaseDate ? new Date(x.releaseDate).getFullYear() : undefined;
    return nom === cible && x.artworkUrl100 && (serie || anneeProche(film.annee, annee));
  });
  return r ? String(r.artworkUrl100).replace(/\/\d+x\d+bb\./, "/400x600bb.") : null;
}

async function chercherAffiche(film: FilmCV): Promise<string | null> {
  for (const source of [chercherAfficheWikipedia, chercherAfficheItunes]) {
    try {
      const url = await source(film);
      if (url) return url;
    } catch {
      /* source indisponible : on essaie la suivante */
    }
  }
  return null;
}

// Cherche l'affiche sur Wikipédia (page du film ou de la série), en vérifiant que c'est bien une œuvre du même titre
async function chercherAfficheWikipedia(film: FilmCV): Promise<string | null> {
  const base = titreDeBase(film.titre);
  const genre = film.type === "serie" ? "série télévisée" : "film";
  const url =
    "https://fr.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=5" +
    "&prop=pageimages|pageprops&piprop=thumbnail&pithumbsize=400&ppprop=wikibase-shortdesc" +
    "&gsrsearch=" + encodeURIComponent(`"${base}" ${genre}`);
  const rep = await fetch(url);
  if (!rep.ok) return null;
  const json = await rep.json();
  const pages: any[] = Object.values(json?.query?.pages || {});
  const cible = normaliser(base);
  const candidats = pages.filter((p) => {
    const titrePage = String(p.title || "");
    const sansParenthese = normaliser(titrePage.replace(/\s*\(.*\)\s*$/, ""));
    if (sansParenthese !== cible) return false;
    if (!p.thumbnail?.source) return false;
    const desc = String(p.pageprops?.["wikibase-shortdesc"] || "") + " " + titrePage;
    if (!/film|s[ée]rie|t[ée]l[ée]film|court/i.test(desc)) return false;
    if (film.annee) {
      const annees = (desc.match(/\b(19|20)\d{2}\b/g) || []).map(Number);
      if (annees.length && !annees.some((a) => Math.abs(a - film.annee!) <= 1)) return false;
    }
    return true;
  });
  candidats.sort((a, b) => (a.index ?? 99) - (b.index ?? 99));
  return candidats[0]?.thumbnail?.source || null;
}

const COULEURS = [
  ["#1e3a8a", "#3b82f6"],
  ["#7c2d12", "#ea580c"],
  ["#14532d", "#16a34a"],
  ["#581c87", "#a855f7"],
  ["#0f172a", "#475569"],
  ["#831843", "#db2777"],
];

const LIBELLE_TYPE: Record<string, string> = { film: "Long métrage", serie: "Série", court: "Court métrage" };

function AfficheDessinee({ film, index }: { film: FilmCV; index: number }) {
  const [c1, c2] = COULEURS[index % COULEURS.length];
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-2 text-white"
      style={{ background: `linear-gradient(160deg, ${c1}, ${c2})` }}
    >
      <span className="text-[9px] uppercase tracking-widest opacity-80">{LIBELLE_TYPE[film.type || "film"]}</span>
      <span className="text-[12px] font-bold uppercase leading-tight break-words">{film.titre}</span>
      <span className="text-[9px] opacity-90 leading-tight">
        {film.realisateur}
        {film.annee ? <><br />{film.annee}</> : null}
      </span>
    </div>
  );
}

const FilmPosterBand = ({ films }: { films: FilmCV[] }) => {
  const [affiches, setAffiches] = useState<Record<string, string | null>>({});
  const cleFilms = films.map((f) => `${f.titre}|${f.annee || ""}|${f.affiche || ""}`).join(";");

  useEffect(() => {
    let annule = false;
    const cache = lireCache();
    const initial: Record<string, string | null> = {};
    const aChercher: FilmCV[] = [];
    films.forEach((f) => {
      const cle = `${f.titre}|${f.annee || ""}`;
      if (f.affiche) initial[cle] = f.affiche;
      else if (cache[cle] && Date.now() - cache[cle].t < DUREE_CACHE) initial[cle] = cache[cle].url;
      else aChercher.push(f);
    });
    setAffiches(initial);
    (async () => {
      for (const f of aChercher) {
        if (annule) return;
        const cle = `${f.titre}|${f.annee || ""}`;
        let url: string | null = null;
        try {
          url = await chercherAffiche(f);
        } catch {
          continue; // hors ligne : on réessaiera la prochaine fois
        }
        cache[cle] = { url, t: Date.now() };
        ecrireCache(cache);
        if (!annule) setAffiches((a) => ({ ...a, [cle]: url }));
      }
    })();
    return () => {
      annule = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleFilms]);

  if (!films.length) return null;
  // Par date de sortie, du plus récent au plus ancien (sans année : à la fin)
  const filmsTries = films.map((f, i) => ({ f, i })).sort((a, b) => (b.f.annee || 0) - (a.f.annee || 0) || a.i - b.i).map((x) => x.f);

  return (
    <div className="mb-8">
      <div className="flex gap-3 overflow-x-auto pb-3 snap-x" style={{ scrollbarWidth: "thin" }}>
        {filmsTries.map((f, i) => {
          const cle = `${f.titre}|${f.annee || ""}`;
          const url = affiches[cle];
          return (
            <figure key={cle} className="flex-shrink-0 w-[104px] snap-start" title={`${f.titre}${f.realisateur ? " — " + f.realisateur : ""}${f.annee ? " (" + f.annee + ")" : ""}`}>
              <div className="w-[104px] h-[156px] rounded-md overflow-hidden shadow-md bg-muted ring-1 ring-black/5">
                {url ? (
                  <img src={url} alt={`Affiche : ${f.titre}`} loading="lazy" className="w-full h-full object-cover" onError={() => setAffiches((a) => ({ ...a, [cle]: null }))} />
                ) : (
                  <AfficheDessinee film={f} index={i} />
                )}
              </div>
              <figcaption className="mt-1 text-[11px] leading-tight text-foreground line-clamp-2">{f.titre}</figcaption>
              {f.annee && <div className="text-[10px] text-muted-foreground">{f.annee}</div>}
            </figure>
          );
        })}
      </div>
    </div>
  );
};

// Pour un membre sans liste de films détaillée : on retrouve « Titre (année) » dans le texte de la filmographie
export function filmsDepuisFilmographie(filmography: Record<string, string> | undefined, affiches?: Record<string, string>): FilmCV[] {
  const affichesNorm: Record<string, string> = {};
  Object.entries(affiches || {}).forEach(([t, u]) => { affichesNorm[normaliser(t)] = u; });
  if (!filmography) return [];
  const vus = new Set<string>();
  const films: FilmCV[] = [];
  Object.values(filmography).forEach((texte) => {
    // « Plusieurs publicités : Nike, KFC… (2012-2026) » n'est pas un film
    String(texte)
      .replace(/Plusieurs[^(]*(\([^)]*\))?/gi, "")
      .split(/,(?![^()]*\))/)
      .map((s) => s.trim())
      .forEach((item) => {
        if (!item || /^(plusieurs|pub\b)/i.test(item)) return;
        const m = item.match(/^(.*?)\s*\((\d{4})[^)]*\)\s*$/);
        const titre = (m ? m[1] : item).replace(/\s*\(.*\)\s*$/, "").trim();
        if (!titre || titre.length > 60) return;
        const cle = normaliser(titre);
        if (vus.has(cle)) return;
        vus.add(cle);
        films.push({ titre, annee: m ? Number(m[2]) : undefined, type: /s[ée]rie/i.test(item) ? "serie" : "film", affiche: affichesNorm[cle] });
      });
  });
  return films.sort((a, b) => (b.annee || 0) - (a.annee || 0));
}

export default FilmPosterBand;

// ── Titres de films en gras dans le texte de la filmographie ──
export type Segment = { t: string; gras: boolean };

const echapper = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/['’]/g, "['’]");

export function titresDuMembre(member: any): string[] {
  const titres = new Set<string>();
  const ajouter = (t?: string) => {
    if (!t) return;
    const propre = t.replace(/\s*\([^)]*\d[^)]*\)\s*$/, "").trim();
    [propre, titreDeBase(propre), propre.split(/\s+:\s+/)[0]].forEach((x) => { if (x && x.length >= 3) titres.add(x); });
  };
  (member.films || []).forEach((f: FilmCV) => ajouter(f.titre));
  Object.keys(member.affiches || {}).forEach(ajouter);
  // Sans liste de films détaillée (fiche de Liv), les titres viennent du texte « Titre (année) »
  if (!member.films) filmsDepuisFilmographie(member.filmography).forEach((f) => ajouter(f.titre));
  return [...titres].sort((a, b) => b.length - a.length);
}

export function segmentsTitres(texte: string, titres: string[]): Segment[] {
  if (!titres.length) return [{ t: texte, gras: false }];
  const re = new RegExp("(?<![\\p{L}\\p{N}])(" + titres.map(echapper).join("|") + ")(?![\\p{L}\\p{N}])", "giu");
  const res: Segment[] = [];
  let dernier = 0;
  for (const m of texte.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > dernier) res.push({ t: texte.slice(dernier, i), gras: false });
    res.push({ t: m[0], gras: true });
    dernier = i + m[0].length;
  }
  if (dernier < texte.length) res.push({ t: texte.slice(dernier), gras: false });
  return res;
}
