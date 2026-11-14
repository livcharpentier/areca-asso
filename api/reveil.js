// Appelé automatiquement par Vercel (voir vercel.json) pour que le projet
// Supabase gratuit « arenca-membres » ne se mette pas en pause faute d'activité.
export default async function handler(req, res) {
  const url = "https://vdirtxbyxnmblbyfjduf.supabase.co";
  const cle = "sb_publishable_Syyjvg19IOYVaAXMtBG7zw_GAIsdojf";
  const resultats = [];
  for (const chemin of ["/auth/v1/settings", "/rest/v1/"]) {
    try {
      const r = await fetch(url + chemin, { headers: { apikey: cle } });
      resultats.push(`${chemin} ${r.status}`);
    } catch (e) {
      resultats.push(`${chemin} erreur`);
    }
  }
  res.status(200).send(resultats.join("\n"));
}
