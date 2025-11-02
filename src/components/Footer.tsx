import { Link } from "react-router-dom";
import { Film, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    association: [
      { label: "Présentation", href: "#association" },
      { label: "Charte AFCJA", href: "#charte" },
      { label: "Devenir membre", href: "#devenir-membre" },
      { label: "Organigramme", href: "#organigramme" },
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">AFCJA</span>
                <span className="text-xs text-accent">Association Professionnelle</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Fédérer les coordinateurs jeunesse de l'audiovisuel français et valoriser notre métier depuis 2010.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* L'Association */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">L'Association</h3>
            <ul className="space-y-2">
              {footerLinks.association.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:contact@afcja.fr" 
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@afcja.fr
              </a>
            </div>
            <h4 className="font-semibold mb-3">Informations légales</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} AFCJA - Tous droits réservés</p>
            <p>
              Site conçu avec ❤️ pour les professionnels de l'audiovisuel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
