import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logoAreca from "@/assets/logo-areca.png";
import heroCameras from "@/assets/hero-cameras.jpg";

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
    { label: "FICHE MÉTIER", path: "/about" },
    { label: "CHARTE", path: "/charte" },
    { label: "MEMBRES", path: "/members" },
    { label: "ESPACE INFORMATIONS", path: "/production" },
    { label: "ESPACE FAMILLE", path: "/parents" },
    { label: "ESPACE MEMBRE", path: "/responsables" },
    { label: "FORMATIONS", path: "/formations" },
    
    { label: "SOURCES ET DOCUMENTATION", path: "/documents" },
    { label: "FAQ", path: "/faq" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border/20">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo avec fond caméras */}
          <div className="relative h-16 w-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] overflow-hidden flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroCameras})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            </div>
            <Link to="/" className="relative z-10 flex items-center gap-3 group h-full px-3 sm:px-5">
              <img
                src={logoAreca}
                alt="ARECA - Responsables Enfants dans le Cinéma et l'Audiovisuel"
                className="h-12 sm:h-14 w-auto flex-shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-2xl sm:text-3xl font-black tracking-widest text-white font-sans">
                  ARECA
                </span>
                <span className="text-[6px] sm:text-[7px] text-white/80 uppercase tracking-wider font-comic font-bold leading-tight max-w-[140px] sm:max-w-[180px]">
                  Responsables Enfants dans le Cinéma et l'Audiovisuel
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-8 xl:ml-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-wider font-black transition-all pb-1 border-b-2 flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "text-accent border-accent"
                    : "text-foreground hover:text-accent border-transparent hover:border-accent/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-foreground/20">
              {user && (
                <Button
                  onClick={() => navigate("/mon-profil")}
                  className="bg-transparent border border-accent/40 text-accent hover:bg-accent hover:text-white text-xs px-3 h-8"
                >
                  <UserCircle className="w-3.5 h-3.5 mr-1.5" /> Mon profil
                </Button>
              )}
              <Button
                onClick={handleAuthAction}
                className={user 
                  ? "bg-transparent border border-foreground/30 text-foreground hover:bg-accent hover:text-white text-xs px-3 h-8"
                  : "bg-accent text-white hover:bg-accent/90 text-xs px-4 h-8 font-semibold"
                }
              >
                {user ? (
                  <><LogOut className="w-3.5 h-3.5 mr-1.5" /> Déconnexion</>
                ) : (
                  <><LogIn className="w-3.5 h-3.5 mr-1.5" /> Connexion</>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-accent/20">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase tracking-wider font-medium transition-colors py-2 text-left ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-foreground/20">
                  {user && (
                    <Button
                      onClick={() => { setOpen(false); navigate("/mon-profil"); }}
                      variant="outline"
                      className="border-accent/40 text-accent"
                    >
                      <UserCircle className="w-4 h-4 mr-2" /> Mon profil
                    </Button>
                  )}
                  <Button 
                    onClick={handleAuthAction}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {user ? "Déconnexion" : "Connexion"}
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
