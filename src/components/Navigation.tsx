import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, LogOut, Globe, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

type NavItem = {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
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

  const navItems: NavItem[] = [
    { label: "CÔTÉ PRODUCTION", path: "/production" },
    { label: "CÔTÉ PARENTS", path: "/parents" },
    {
      label: "CÔTÉ RESPONSABLES ENFANTS",
      path: "#",
      children: [
        { label: "Compte Rendu Journalier", path: "/compte-rendu" },
        { label: "Réglementations Informations", path: "/minors-employment" },
        { label: "VHSS", path: "/vhss" },
      ],
    },
    { label: "FICHE MÉTIER", path: "/about" },
    { label: "MEMBRES", path: "/members" },
    
    { label: "FORMATIONS", path: "/formations" },
    { label: "ACTUALITÉS", path: "/news" },
    { label: "SOURCES ET DOCUMENTATION", path: "/documents" },
    { label: "FAQ", path: "/faq" },
    { label: "CONTACT", path: "/contact" },
  ];

  const isActiveParent = (item: NavItem) => {
    if (item.children) {
      return item.children.some((child) => location.pathname === child.path);
    }
    return location.pathname === item.path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-sky flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-lucky text-accent tracking-tight">
                  ARECA
                </span>
                <span className="text-[8px] text-primary-foreground/70 uppercase tracking-wider font-comic font-bold">
                  Responsables Enfants Cinéma Audiovisuel
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`text-[11px] uppercase tracking-wider font-medium transition-all pb-1 border-b-2 flex items-center gap-1 ${
                      isActiveParent(item)
                        ? "text-accent border-accent"
                        : "text-primary-foreground/90 hover:text-accent border-transparent hover:border-accent/50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-black/95 border border-accent/20 rounded-lg shadow-xl py-2 min-w-[260px] backdrop-blur-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                            location.pathname === child.path
                              ? "text-accent bg-accent/10"
                              : "text-primary-foreground/90 hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[11px] uppercase tracking-wider font-medium transition-all pb-1 border-b-2 flex items-center gap-1 ${
                    location.pathname === item.path
                      ? "text-accent border-accent"
                      : "text-primary-foreground/90 hover:text-accent border-transparent hover:border-accent/50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-primary-foreground/20">
              <Button
                onClick={handleAuthAction}
                className={user 
                  ? "bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-white text-xs px-3 h-8"
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
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary border-accent/20">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="text-sm uppercase tracking-wider font-medium text-accent py-2">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-accent/30">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className={`text-sm uppercase tracking-wider font-medium transition-colors py-1.5 text-left ${
                              location.pathname === child.path
                                ? "text-accent"
                                : "text-primary-foreground hover:text-accent"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )
                )}
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
