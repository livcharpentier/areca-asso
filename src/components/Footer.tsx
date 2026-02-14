import { Link } from "react-router-dom";
import { Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    association: [
      { label: "Présentation", href: "#association" },
      { label: "Charte ARECA", href: "#charte" },
      { label: "Devenir membre", href: "#devenir-membre" },
      { label: "Organigramme", href: "#organigramme" },
      { label: "Faire un don", href: "#don" },
    ],
    ressources: [
      { label: "Conventions collectives", href: "#conventions" },
      { label: "Boîte à outils", href: "#outils" },
      { label: "Calendriers", href: "#calendriers" },
      { label: "Liens utiles", href: "#liens" },
    ],
    legal: [
      { label: "Mentions légales", href: "#mentions" },
      { label: "Politique de confidentialité", href: "#confidentialite" },
      { label: "CGU", href: "#cgu" },
      { label: "Plan du site", href: "#plan" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Social */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-sky flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-lucky text-accent tracking-tight">
                  ARECA
                </span>
                <span className="text-[7px] text-primary-foreground/70 uppercase tracking-wider font-comic font-bold">
                  Responsables Enfants Cinéma Audiovisuel
                </span>
              </div>
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4 text-primary-foreground hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-blue-sky flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-4 h-4 text-primary-foreground hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-4 h-4 text-primary-foreground hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-blue-vibrant flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4 text-primary-foreground hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-festive flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-4 h-4 text-primary-foreground hover:text-white" />
              </a>
            </div>
          </div>

          {/* L'Association */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              L'Association
            </h3>
            <ul className="space-y-2">
              {links.association.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              Ressources
            </h3>
            <ul className="space-y-2">
              {links.ressources.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              Contact
            </h3>
            <a 
              href="mailto:contact@areca.fr"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6"
            >
              <Mail className="w-4 h-4" />
              contact@areca.fr
            </a>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-xs text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/60 text-center">
            © {currentYear} ARECA - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
