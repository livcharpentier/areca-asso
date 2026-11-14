import { createClient, Session } from "@supabase/supabase-js";

// Comptes des membres ARENCA (projet Supabase « arenca-membres » de Liv).
// URL et clé publishable : faites pour être publiques.
export const MEMBRES_URL = "https://vdirtxbyxnmblbyfjduf.supabase.co";
export const MEMBRES_CLE = "sb_publishable_Syyjvg19IOYVaAXMtBG7zw_GAIsdojf";

export const membres = createClient(MEMBRES_URL, MEMBRES_CLE, {
  auth: { storageKey: "arenca-membres", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

// Le jeton est recopié dans un cookie pour que le serveur n'envoie
// le contenu de l'Espace membres qu'aux personnes connectées.
export const ecrireCookie = (session: Session | null) => {
  if (session?.access_token) {
    const max = Math.max(60, (session.expires_at ?? 0) - Math.floor(Date.now() / 1000));
    document.cookie = `arenca_membre=${session.access_token}; Path=/; Max-Age=${max}; Secure; SameSite=Lax`;
  } else {
    document.cookie = "arenca_membre=; Path=/; Max-Age=0; Secure; SameSite=Lax";
  }
};

export const estInvite = () => /(?:^|; )arenca_invite_ok=1/.test(document.cookie);
