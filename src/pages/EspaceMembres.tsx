import { lazy, Suspense, useEffect, useState, Component, ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { membres, ecrireCookie, estInvite } from "@/lib/membres";

const ResponsablesPage = lazy(() => import("./ResponsablesPage"));

// Repérer un lien d'invitation ou de mot de passe oublié (avant que Supabase ne lise l'adresse)
const hashInitial = typeof window !== "undefined" ? window.location.hash : "";
const lienMotDePasse = /type=(invite|recovery)/.test(hashInitial);
const erreurLien = /error_description=([^&]+)/.exec(hashInitial);

class Garde extends Component<{ children: ReactNode; onErreur: () => void }, { erreur: boolean }> {
  state = { erreur: false };
  static getDerivedStateFromError() { return { erreur: true }; }
  componentDidCatch() { this.props.onErreur(); }
  render() { return this.state.erreur ? null : this.props.children; }
}

const champ = "w-full border border-[#16213f]/30 rounded-lg px-3 py-2.5 text-base bg-white focus:outline-none focus:border-[#16213f]";

const MotDePasse = ({ value, onChange, id, auto }: { value: string; onChange: (v: string) => void; id: string; auto: string }) => {
  const [voir, setVoir] = useState(false);
  return (
    <div className="flex gap-2">
      <input id={id} type={voir ? "text" : "password"} autoComplete={auto} className={champ} value={value} onChange={(e) => onChange(e.target.value)} required />
      <button type="button" onClick={() => setVoir(!voir)} className="shrink-0 px-3 rounded-lg border border-[#16213f]/30 text-sm text-[#16213f]">
        {voir ? "Masquer" : "Afficher"}
      </button>
    </div>
  );
};

const EspaceMembres = () => {
  const [pret, setPret] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [mode, setMode] = useState<"connexion" | "oubli" | "nouveau">(lienMotDePasse ? "nouveau" : "connexion");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [mdp2, setMdp2] = useState("");
  const [message, setMessage] = useState<string | null>(erreurLien ? "Ce lien n'est plus valable. Demandez-en un nouveau avec « Mot de passe oublié »." : null);
  const [envoi, setEnvoi] = useState(false);
  const [refus, setRefus] = useState(false);

  useEffect(() => {
    const { data } = membres.auth.onAuthStateChange((evt, s) => {
      ecrireCookie(s);
      setSession(s);
      if (evt === "PASSWORD_RECOVERY") setMode("nouveau");
    });
    membres.auth.getSession().then(({ data: { session: s } }) => {
      ecrireCookie(s);
      setSession(s);
      setPret(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const connexion = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoi(true); setMessage(null);
    const { error } = await membres.auth.signInWithPassword({ email: email.trim(), password: mdp });
    setEnvoi(false);
    if (error) setMessage("Adresse mail ou mot de passe incorrect.");
    else if (refus) window.location.reload();
  };

  const oubli = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoi(true); setMessage(null);
    await membres.auth.resetPasswordForEmail(email.trim(), { redirectTo: window.location.origin + "/responsables" });
    setEnvoi(false);
    setMessage("Si cette adresse correspond à un compte membre, un mail vient de vous être envoyé (pensez à regarder dans les indésirables).");
  };

  const nouveau = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mdp.length < 8) return setMessage("Le mot de passe doit faire au moins 8 caractères.");
    if (mdp !== mdp2) return setMessage("Les deux mots de passe ne sont pas identiques.");
    setEnvoi(true); setMessage(null);
    const { error } = await membres.auth.updateUser({ password: mdp });
    setEnvoi(false);
    if (error) return setMessage("Impossible d'enregistrer le mot de passe : le lien a peut-être expiré. Demandez-en un nouveau.");
    window.history.replaceState(null, "", "/responsables");
    setMdp(""); setMdp2(""); setMode("connexion");
  };

  const acces = !refus && mode !== "nouveau" && (session || estInvite());

  if (pret && acces) {
    return (
      <>
        <Garde onErreur={() => { setRefus(true); setSession(null); ecrireCookie(null); }}>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Chargement…</div>}>
            <ResponsablesPage membre={session?.user?.email ?? null} onDeconnexion={async () => { await membres.auth.signOut(); ecrireCookie(null); window.location.href = "/responsables"; }} />
          </Suspense>
        </Garde>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-28 pb-16 px-4 flex-1">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#16213f] text-center mb-2">Espace Membres</h1>
          <p className="text-center text-muted-foreground mb-8">Réservé aux adhérent·es de l&apos;ARENCA.</p>
          {!pret ? (
            <p className="text-center text-muted-foreground">Chargement…</p>
          ) : (
            <div className="bg-white border border-[#16213f]/20 rounded-xl p-6 shadow-sm">
              {mode === "connexion" && (
                <form onSubmit={connexion} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Adresse mail</label>
                    <input id="email" type="email" autoComplete="email" className={champ} value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label htmlFor="mdp" className="block text-sm font-semibold mb-1">Mot de passe</label>
                    <MotDePasse id="mdp" auto="current-password" value={mdp} onChange={setMdp} />
                  </div>
                  {message && <p className="text-sm text-[#b42318]">{message}</p>}
                  <Button type="submit" disabled={envoi} className="w-full bg-[#16213f] hover:bg-[#16213f]/90 text-white">{envoi ? "Connexion…" : "Se connecter"}</Button>
                  <button type="button" onClick={() => { setMode("oubli"); setMessage(null); }} className="block mx-auto text-sm text-accent underline">Mot de passe oublié ?</button>
                </form>
              )}
              {mode === "oubli" && (
                <form onSubmit={oubli} className="space-y-4">
                  <p className="text-sm">Indiquez votre adresse mail : vous recevrez un lien pour choisir un nouveau mot de passe.</p>
                  <div>
                    <label htmlFor="email2" className="block text-sm font-semibold mb-1">Adresse mail</label>
                    <input id="email2" type="email" autoComplete="email" className={champ} value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  {message && <p className="text-sm text-[#16213f]">{message}</p>}
                  <Button type="submit" disabled={envoi} className="w-full bg-[#16213f] hover:bg-[#16213f]/90 text-white">{envoi ? "Envoi…" : "Recevoir le lien"}</Button>
                  <button type="button" onClick={() => { setMode("connexion"); setMessage(null); }} className="block mx-auto text-sm text-accent underline">Retour à la connexion</button>
                </form>
              )}
              {mode === "nouveau" && (
                <form onSubmit={nouveau} className="space-y-4">
                  <p className="text-sm">Choisissez votre mot de passe (8 caractères minimum).</p>
                  <div>
                    <label htmlFor="n1" className="block text-sm font-semibold mb-1">Nouveau mot de passe</label>
                    <MotDePasse id="n1" auto="new-password" value={mdp} onChange={setMdp} />
                  </div>
                  <div>
                    <label htmlFor="n2" className="block text-sm font-semibold mb-1">Confirmez le mot de passe</label>
                    <MotDePasse id="n2" auto="new-password" value={mdp2} onChange={setMdp2} />
                  </div>
                  {message && <p className="text-sm text-[#b42318]">{message}</p>}
                  <Button type="submit" disabled={envoi} className="w-full bg-[#16213f] hover:bg-[#16213f]/90 text-white">{envoi ? "Enregistrement…" : "Enregistrer et entrer"}</Button>
                </form>
              )}
            </div>
          )}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Pas encore membre ? Voir le <a href="/metier?onglet=reglement" className="text-accent underline">règlement intérieur</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EspaceMembres;
