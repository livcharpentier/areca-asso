// 1) Espace membres : son contenu (fichiers /membres/...) n'est envoyé qu'aux membres connectés
//    (compte Supabase « arenca-membres ») ou aux invités (liens Thalie Santé / DRIEETS).
// 2) Tant que SITE_FERME vaut true, tout le site demande le mot de passe d'entrée.
const SITE_FERME = true;
const MEMBRES_URL = "https://vdirtxbyxnmblbyfjduf.supabase.co";
const MEMBRES_CLE = "sb_publishable_Syyjvg19IOYVaAXMtBG7zw_GAIsdojf";

// Accès au site réservé pendant la validation par les membres.
// Mot de passe : celui ci-dessous, ou SITE_PASSWORD dans Vercel (Settings → Environment Variables) s'il est défini.
// Pour rouvrir le site à tout le monde : supprimer ce fichier (ou mettre SITE_OUVERT=oui dans Vercel).
export const config = { matcher: "/:path*" };

const COOKIE = "arenca_acces";

// Liens d'invitation (accès sans mot de passe), par organisme. Seule l'empreinte est stockée ici.
// Pour couper un accès : supprimer sa ligne.
const INVITATIONS = {
  thalie: "7ff3b5ab38b65f0d5070916a01dc3afe8bc97173df71aedbc51610894b3aacec",
  drieets: "a49b57a3a5dc02e09af84ca6848663f2cd09e8a28a1e234416de651eddd9521a",
};

const pageFermee = (erreur) => `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>ARENCA — accès réservé</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f1ea;color:#16213f;font-family:Georgia,serif;text-align:center;padding:24px}
.box{max-width:380px;width:100%}h1{font-size:2rem;letter-spacing:.08em;margin:0 0 8px}p{margin:6px 0;color:#444}a{color:#3b5bb5}
form{margin-top:24px;text-align:left}label{font-size:14px;font-weight:bold;display:block;margin-bottom:6px}
.champ{display:flex;border:1.5px solid #16213f55;border-radius:10px;background:#fff;overflow:hidden}
.champ input{flex:1;border:0;padding:12px;font-size:18px;outline:none;min-width:0;font-family:inherit}
.champ button{border:0;background:#f0e8dc;padding:0 14px;cursor:pointer;font-size:14px;color:#16213f;font-family:inherit}
.ok{margin-top:12px;width:100%;padding:12px;border:0;border-radius:10px;background:#16213f;color:#fff;font-size:16px;cursor:pointer;font-family:inherit}
.err{color:#b42318;font-size:14px;margin-top:8px}
</style></head>
<body><div class="box"><h1>ARENCA</h1><p>Association des Responsables Enfants dans le Cinéma et l'Audiovisuel</p>
<p style="margin-top:18px">Le site est en cours de préparation. Accès réservé aux membres.</p>
<form method="POST">
<label for="mdp">Mot de passe</label>
<div class="champ"><input id="mdp" name="mdp" type="password" autocomplete="current-password" autofocus>
<button type="button" id="voir" aria-label="Afficher le mot de passe">👁 Afficher</button></div>
${erreur ? '<p class="err">Mot de passe incorrect, vérifiez-le en cliquant sur « Afficher ».</p>' : ""}
<button class="ok" type="submit">Entrer</button>
</form>
<p style="margin-top:24px;font-size:14px">Contact : <a href="mailto:contact@arenca.fr">contact@arenca.fr</a></p></div>
<script>
var c=document.getElementById('mdp'),b=document.getElementById('voir');
b.onclick=function(){var v=c.type==='password';c.type=v?'text':'password';b.textContent=v?'🙈 Masquer':'👁 Afficher';b.setAttribute('aria-label',v?'Masquer le mot de passe':'Afficher le mot de passe');c.focus();};
</script></body></html>`;

async function empreinte(texte) {
  const data = new TextEncoder().encode("arenca:" + texte);
  const h = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(h)).map((x) => x.toString(16).padStart(2, "0")).join("");
}

async function empreinteInvite(texte) {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("invite:" + texte));
  return Array.from(new Uint8Array(h)).map((x) => x.toString(16).padStart(2, "0")).join("");
}

const reponseFermee = (erreur) =>
  new Response(pageFermee(erreur), {
    status: 401,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex", "cache-control": "no-store" },
  });

const lireCookie = (request, nom) => {
  const m = (request.headers.get("cookie") || "").match(new RegExp("(?:^|; )" + nom + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : "";
};

async function inviteValide(cle) {
  if (!cle) return false;
  return Object.values(INVITATIONS).includes(await empreinteInvite(cle.trim()));
}

async function membreConnecte(jeton) {
  if (!jeton || jeton.length < 20) return false;
  try {
    const r = await fetch(MEMBRES_URL + "/auth/v1/user", {
      headers: { apikey: MEMBRES_CLE, authorization: "Bearer " + jeton },
    });
    return r.ok;
  } catch (e) {
    return false;
  }
}

export default async function middleware(request) {
  const env = (typeof process !== "undefined" && process.env) || {};
  const url = new URL(request.url);
  if (url.pathname.startsWith("/api/")) return;

  const motDePasse = env.SITE_PASSWORD || "5437265";
  const attendu = await empreinte(motDePasse);
  const unMois = "Path=/; Max-Age=2592000; Secure; SameSite=Lax";

  // Lien d'invitation : ?invite=...
  const invite = url.searchParams.get("invite");
  if (invite && (await inviteValide(invite))) {
    url.searchParams.delete("invite");
    const h = new Headers({ location: url.pathname + url.search, "cache-control": "no-store" });
    h.append("set-cookie", `${COOKIE}=${attendu}; HttpOnly; ${unMois}`);
    h.append("set-cookie", `arenca_invite=${encodeURIComponent(invite.trim())}; HttpOnly; ${unMois}`);
    h.append("set-cookie", `arenca_invite_ok=1; ${unMois}`);
    return new Response(null, { status: 303, headers: h });
  }

  // Contenu de l'Espace membres
  if (url.pathname.startsWith("/membres/")) {
    if (await inviteValide(lireCookie(request, "arenca_invite"))) return;
    if (await membreConnecte(lireCookie(request, "arenca_membre"))) return;
    return new Response("Réservé aux membres de l'ARENCA", { status: 401, headers: { "cache-control": "no-store" } });
  }

  // Site encore fermé au public
  if (!SITE_FERME || (env.SITE_OUVERT || "").toLowerCase() === "oui") return;
  if (lireCookie(request, COOKIE) === attendu) return;

  if (request.method === "POST") {
    let mdp = "";
    try { mdp = String((await request.formData()).get("mdp") || "").trim(); } catch (e) { /* formulaire illisible */ }
    if (mdp && mdp === motDePasse) {
      return new Response(null, {
        status: 303,
        headers: {
          location: url.pathname + url.search,
          "set-cookie": `${COOKIE}=${attendu}; HttpOnly; ${unMois}`,
          "cache-control": "no-store",
        },
      });
    }
    return reponseFermee(true);
  }
  return reponseFermee(false);
}
