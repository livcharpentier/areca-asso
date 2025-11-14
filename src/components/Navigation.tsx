import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, LogOut, Globe } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
    } else {
      navigate("/auth");
    }
  };

  const navItems = [
    { label: "RÉGLEMENTATION", path: "/minors-employment" },
    { label: "DOSSIER ENFANTS", path: "/calendrier" },
    { label: "MEMBRES", path: "/members" },
    { label: "VHSS", path: "/vhss" },
    { label: "SALAIRES", path: "/resources" },
    { label: "FORMATIONS", path: "/formations" },
    { label: "ACTUALITÉS", path: "/news" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo AFCJA coloré */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-sky flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-lucky text-accent tracking-tight">
                  AFCJA
                </span>
                <span className="text-[8px] text-primary-foreground/70 uppercase tracking-wider font-comic font-bold">
                  Coordinateurs Jeunesse Audiovisuel
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] uppercase tracking-wider font-medium transition-all pb-1 border-b-2 ${
                  location.pathname === item.path
                    ? "text-accent border-accent"
                    : "text-primary-foreground/90 hover:text-accent border-transparent hover:border-accent/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-primary-foreground/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleAuthAction}
                className="w-8 h-8 text-primary-foreground hover:text-accent"
                title={user ? "Déconnexion" : "Connexion"}
              >
                {user ? <LogOut className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-primary-foreground hover:text-accent"
              >
                <Globe className="w-4 h-4" />
              </Button>
            </div>
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
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase tracking-wider font-medium transition-colors py-2 text-left ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-primary-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-4 pt-4 border-t border-primary-foreground/20">
                  <Button 
                    onClick={handleAuthAction}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {user ? "Déconnexion" : "Connexion"}
                  </Button>
                  <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                    FR
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
