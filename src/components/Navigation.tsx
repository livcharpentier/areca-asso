import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Film, Users, FileText, Briefcase, Wrench, Link as LinkIcon, Mail, LogIn } from "lucide-react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "L'Association", href: "#association", icon: Film },
    { label: "Membres", href: "#membres", icon: Users },
    { label: "Conventions", href: "#conventions", icon: FileText },
    { label: "Projets", href: "#projets", icon: Briefcase },
    { label: "Outils", href: "#outils", icon: Wrench },
    { label: "Liens", href: "#liens", icon: LinkIcon },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Film className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-foreground">AFCJA</span>
              <span className="text-xs text-accent">Coordinateurs Jeunesse Audiovisuel</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className="text-primary-foreground hover:text-accent hover:bg-primary/50 transition-colors"
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <Button variant="default" className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90">
              <LogIn className="w-4 h-4 mr-2" />
              Connexion
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary border-accent/20">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.href}
                      variant="ghost"
                      asChild
                      className="justify-start text-primary-foreground hover:text-accent hover:bg-primary/50"
                      onClick={() => setOpen(false)}
                    >
                      <a href={item.href} className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </a>
                    </Button>
                  );
                })}
                <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
