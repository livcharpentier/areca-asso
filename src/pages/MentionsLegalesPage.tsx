import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bloc = ({ titre, children }: { titre: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-[#16213f] mb-3">{titre}</h2>
    <div className="space-y-2 text-foreground leading-relaxed">{children}</div>
  </section>
);

const MentionsLegalesPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="pt-28 pb-16 px-4 flex-1">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16213f] mb-10">Mentions légales</h1>

        <Bloc titre="Éditeur du site">
          <p>
            ARENCA — Association des Responsables Enfants dans le Cinéma et l&apos;Audiovisuel<br />
            Association loi 1901, déclarée à la préfecture de police de Paris<br />
            RNA : W751286608
          </p>
          <p>
            Siège social : c/o CST, 9 rue Baudoin, 75013 Paris<br />
            Contact : <a href="mailto:contact@arenca.fr" className="text-accent underline">contact@arenca.fr</a>
          </p>
        </Bloc>

        <Bloc titre="Directrice de la publication">
          <p>Liv Charpentier, secrétaire de l&apos;association.</p>
        </Bloc>

        <Bloc titre="Hébergement">
          <p>
            Site hébergé par Vercel Inc.<br />
            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">vercel.com</a>
          </p>
          <p>
            Nom de domaine et messagerie : OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
          </p>
          <p>
            Comptes de l&apos;Espace membres : Supabase Inc., serveurs situés dans l&apos;Union européenne.
          </p>
        </Bloc>

        <Bloc titre="Données personnelles">
          <p>
            L&apos;ARENCA ne collecte que les données nécessaires : l&apos;adresse mail des membres pour l&apos;accès
            à l&apos;Espace membres, et les informations que vous nous transmettez en nous écrivant.
          </p>
          <p>
            Ces données servent uniquement au fonctionnement de l&apos;association. Elles ne sont ni vendues, ni cédées
            à des tiers, et sont supprimées lorsqu&apos;elles ne sont plus utiles (par exemple lorsqu&apos;un membre
            quitte l&apos;association).
          </p>
          <p>
            Conformément au Règlement général sur la protection des données (RGPD), vous pouvez demander à consulter,
            corriger ou supprimer vos données en écrivant à{" "}
            <a href="mailto:contact@arenca.fr" className="text-accent underline">contact@arenca.fr</a>. Vous pouvez
            aussi adresser une réclamation à la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent underline">cnil.fr</a>).
          </p>
        </Bloc>

        <Bloc titre="Cookies">
          <p>
            Le site n&apos;utilise ni publicité ni outil de mesure d&apos;audience. Seuls des cookies techniques
            sont déposés pour permettre la connexion à l&apos;Espace membres ; ils ne nécessitent pas de consentement.
          </p>
        </Bloc>

        <Bloc titre="Propriété intellectuelle">
          <p>
            Les textes, le logo et les documents de l&apos;ARENCA (charte, règlement intérieur, outils) sont la
            propriété de l&apos;association. Toute reproduction doit mentionner l&apos;ARENCA. Les affiches de films
            présentées dans les profils des membres restent la propriété de leurs ayants droit.
          </p>
        </Bloc>
      </div>
    </main>
    <Footer />
  </div>
);

export default MentionsLegalesPage;
