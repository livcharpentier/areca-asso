// Accès au site réservé pendant la validation par les membres.
// Le mot de passe est défini dans Vercel : Settings → Environment Variables → SITE_PASSWORD.
// Pour rouvrir le site à tout le monde : supprimer ce fichier (ou mettre SITE_OUVERT=oui dans Vercel).
export const config = { matcher: "/:path*" };

const PAGE_FERMEE = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>ARENCA — site en préparation</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f1ea;color:#1a1a2e;font-family:Georgia,serif;text-align:center;padding:24px}
h1{font-size:2rem;letter-spacing:.08em;margin:0 0 12px}p{margin:6px 0;color:#444}a{color:#3b5bb5}</style></head>
<body><div><h1>ARENCA</h1><p>Association des Responsables Enfants dans le Cinéma et l'Audiovisuel</p>
<p style="margin-top:24px">Notre site est en cours de préparation.</p>
<p>Contact : <a href="mailto:contact@arenca.fr">contact@arenca.fr</a></p></div></body></html>`;

export default function middleware(request) {
  const env = (typeof process !== "undefined" && process.env) || {};
  if ((env.SITE_OUVERT || "").toLowerCase() === "oui") return;
  const motDePasse = env.SITE_PASSWORD || "";
  const auth = request.headers.get("authorization") || "";
  if (motDePasse && auth.startsWith("Basic ")) {
    try {
      const [, mdp] = atob(auth.slice(6)).split(":");
      if (mdp === motDePasse) return; // accès autorisé : le site s'affiche normalement
    } catch (e) { /* identifiant illisible : on redemande */ }
  }
  return new Response(PAGE_FERMEE, {
    status: 401,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "www-authenticate": 'Basic realm="ARENCA - acces reserve", charset="UTF-8"',
      "x-robots-tag": "noindex",
      "cache-control": "no-store",
    },
  });
}
