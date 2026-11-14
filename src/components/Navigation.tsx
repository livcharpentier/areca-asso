import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut } from "lucide-react";
import { membres, ecrireCookie } from "@/lib/membres";
import logoArenca from "@/assets/logo-arenca.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [membre, setMembre] = useState<string | null>(null);

  useEffect(() => {
    membres.auth.getSession().then(({ data: { session } }) => setMembre(session?.user?.email ?? null));
    const { data } = membres.auth.onAuthStateChange((_e, session) => setMembre(session?.user?.email ?? null));
    return () => data.subscription.unsubscribe();
  }, []);

  const deconnexion = async () => {
    await membres.auth.signOut();
    ecrireCookie(null);
    window.location.href = "/responsables";
  };

  const navItems = [
    { label: "PRÉSENTATION", path: "/metier" },
    { label: "RÉGLEMENTATION", path: "/production" },
    { label: "LES MEMBRES", path: "/members" },
    { label: "ESPACE PARENTS", path: "/parents" },
    { label: "ESPACE MEMBRE", path: "/responsables" },
    { label: "FORMATIONS", path: "/formations" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-black/10 bg-[#f5f0e8]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between lg:justify-start min-h-16 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoArenca}
              alt="ARENCA - Responsables Enfants dans le Cinéma et l'Audiovisuel"
              className="h-12 sm:h-14 w-auto flex-shrink-0"
            />
            <div className="flex flex-col leading-tight text-[#16213f]">
              <span
                className="text-2xl sm:text-3xl leading-[1.6] pt-1"
                style={{ fontFamily: "'Playwrite FR Trad', cursive", WebkitTextStroke: "0.6px #16213f" }}
              >
                Arenca
              </span>
              <span className="text-[6px] sm:text-[7px] uppercase tracking-widest font-sans font-semibold leading-tight max-w-[140px] sm:max-w-[180px]">
                Association des Responsables Enfants dans le Cinéma et l'Audiovisuel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap items-center justify-start gap-x-5 gap-y-2 ml-10 xl:ml-14">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] 2xl:text-sm uppercase tracking-wider 2xl:tracking-widest font-black transition-all pb-1 border-b-2 flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "text-[#16213f] border-[#ee7d2b]"
                    : "text-[#16213f] hover:text-[#ee7d2b] border-transparent hover:border-[#ee7d2b]/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {membre && (
              <Button
                onClick={deconnexion}
                title={"Se déconnecter (" + membre + ")"}
                aria-label="Se déconnecter"
                className="bg-transparent border border-[#16213f]/40 text-[#16213f] hover:bg-[#ee7d2b] hover:border-[#ee7d2b] hover:text-white text-xs px-2 h-8"
              >
                <LogOut className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#f5f0e8] border-accent/20">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-base uppercase tracking-wider font-medium transition-colors py-2 text-left ${
                      location.pathname === item.path
                        ? "text-[#ee7d2b] font-bold"
                        : "text-[#16213f] hover:text-[#ee7d2b]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {membre && (
                  <div className="mt-4 pt-4 border-t border-foreground/20">
                    <p className="text-xs text-muted-foreground mb-2 break-all">Connecté·e : {membre}</p>
                    <Button
                      onClick={() => { setOpen(false); deconnexion(); }}
                      className="w-full bg-transparent border border-[#16213f]/40 text-[#16213f] hover:bg-[#ee7d2b] hover:text-white"
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Se déconnecter
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
