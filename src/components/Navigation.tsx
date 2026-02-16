import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, LogOut } from "lucide-react";
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
    { label: "FICHE MÉTIER", path: "/about" },
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Film reel SVG logo */}
            <svg width="48" height="48" viewBox="0 0 100 100" className="flex-shrink-0">
              {/* Film strips behind */}
              <rect x="5" y="35" width="30" height="18" rx="2" fill="hsl(15, 85%, 55%)" transform="rotate(-15, 20, 44)" />
              <rect x="10" y="38" width="25" height="12" rx="1" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(-15, 20, 44)" />
              <rect x="65" y="35" width="30" height="18" rx="2" fill="hsl(15, 85%, 55%)" transform="rotate(15, 80, 44)" />
              <rect x="70" y="38" width="25" height="12" rx="1" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(15, 80, 44)" />
              {/* Main reel circle */}
              <circle cx="50" cy="50" r="28" fill="hsl(0, 75%, 55%)" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="hsl(340, 70%, 50%)" strokeWidth="2" />
              {/* Outer dots */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <circle
                  key={angle}
                  cx={50 + 22 * Math.cos((angle * Math.PI) / 180)}
                  cy={50 + 22 * Math.sin((angle * Math.PI) / 180)}
                  r="2.5"
                  fill="white"
                />
              ))}
              {/* Inner holes */}
              <circle cx="50" cy="38" r="5" fill="white" />
              <circle cx="60" cy="50" r="5" fill="white" />
              <circle cx="50" cy="62" r="5" fill="white" />
              <circle cx="40" cy="50" r="5" fill="white" />
              {/* Center hole */}
              <circle cx="50" cy="50" r="4" fill="white" />
              <circle cx="50" cy="50" r="2.5" fill="hsl(0, 75%, 55%)" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-lucky text-blue-vibrant tracking-tight">
                ARECA
              </span>
              <span className="text-[8px] text-foreground/60 uppercase tracking-wider font-comic font-bold">
                Responsables Enfants Cinéma Audiovisuel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-4">
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
                <div className="flex gap-2 mt-4 pt-4 border-t border-foreground/20">
                  <Button 
                    onClick={handleAuthAction}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {user ? "Déconnexion" : "Connexion"}
                  </Button>
                  <Button variant="outline" className="border-foreground/30 text-foreground">
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
