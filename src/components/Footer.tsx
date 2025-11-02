import { Link } from "react-router-dom";
import { Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    association: [
      { label: "Présentation", href: "#association" },
      { label: "Charte AFCJA", href: "#charte" },
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
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Social */}
          <div>
            <Link to="/" className="flex flex-col leading-none mb-4">
              <span className="text-3xl font-bold text-accent tracking-tight lowercase italic">
                afcja
              </span>
              <span className="text-[8px] text-primary-foreground/70 uppercase tracking-widest mt-1">
                Association Française des
              </span>
              <span className="text-[8px] text-primary-foreground/70 uppercase tracking-widest -mt-0.5">
                Coordinateurs Jeunesse Audiovisuel
              </span>
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
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
              href="mailto:contact@afcja.fr"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6"
            >
              <Mail className="w-4 h-4" />
              contact@afcja.fr
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
            © {currentYear} AFCJA - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
