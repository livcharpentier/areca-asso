import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Upload, Trash2, Plus, FileText, Loader2 } from "lucide-react";

type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  phone: string | null;
  bio: string | null;
  role: string | null;
  photo_url: string | null;
  cv_url: string | null;
  availability: string | null;
  experience_years: number | null;
};

type Film = {
  id?: string;
  user_id?: string;
  role_category: string;
  title: string;
  year: number | null;
  details: string | null;
  sort_order?: number;
  _isNew?: boolean;
};

type News = {
  id?: string;
  user_id?: string;
  title: string;
  content: string | null;
  published_at: string | null;
  _isNew?: boolean;
};

const MyProfilePage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [films, setFilms] = useState<Film[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingCV, setUploadingCV] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth");
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const [{ data: p }, { data: f }, { data: n }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
        supabase.from("filmography").select("*").eq("user_id", user.id).order("sort_order"),
        supabase.from("member_news").select("*").eq("user_id", user.id).order("published_at", { ascending: false }),
      ]);
      setProfile(p as Profile);
      setFilms((f as Film[]) || []);
      setNews((n as News[]) || []);
      setLoading(false);
    })();
  }, [user]);

  const updateProfileField = (k: keyof Profile, v: any) =>
    setProfile((prev) => (prev ? { ...prev, [k]: v } : prev));

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setUploadingPhoto(true);
    const ext = file.name.split(".").pop();
    const path = `${user.id}/photo-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("member-photos").upload(path, file, { upsert: true });
    if (error) {
      toast({ title: "Erreur upload", description: error.message, variant: "destructive" });
    } else {
      const { data } = supabase.storage.from("member-photos").getPublicUrl(path);
      updateProfileField("photo_url", data.publicUrl);
      toast({ title: "Photo téléchargée" });
    }
    setUploadingPhoto(false);
  };

  const handleCVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setUploadingCV(true);
    const ext = file.name.split(".").pop();
    const path = `${user.id}/cv-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("member-cvs").upload(path, file, { upsert: true });
    if (error) {
      toast({ title: "Erreur upload", description: error.message, variant: "destructive" });
    } else {
      const { data } = supabase.storage.from("member-cvs").getPublicUrl(path);
      updateProfileField("cv_url", data.publicUrl);
      toast({ title: "CV téléchargé" });
    }
    setUploadingCV(false);
  };

  const addFilm = () =>
    setFilms((prev) => [...prev, { role_category: "Responsable enfants", title: "", year: null, details: "", _isNew: true }]);
  const updateFilm = (i: number, k: keyof Film, v: any) =>
    setFilms((prev) => prev.map((f, idx) => (idx === i ? { ...f, [k]: v } : f)));
  const removeFilm = async (i: number) => {
    const f = films[i];
    if (f.id) await supabase.from("filmography").delete().eq("id", f.id);
    setFilms((prev) => prev.filter((_, idx) => idx !== i));
  };

  const addNews = () =>
    setNews((prev) => [
      { title: "", content: "", published_at: new Date().toISOString().slice(0, 10), _isNew: true },
      ...prev,
    ]);
  const updateNews = (i: number, k: keyof News, v: any) =>
    setNews((prev) => prev.map((n, idx) => (idx === i ? { ...n, [k]: v } : n)));
  const removeNews = async (i: number) => {
    const n = news[i];
    if (n.id) await supabase.from("member_news").delete().eq("id", n.id);
    setNews((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSave = async () => {
    if (!profile || !user) return;
    setSaving(true);
    const { error: pErr } = await supabase
      .from("profiles")
      .update({
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        bio: profile.bio,
        role: profile.role,
        photo_url: profile.photo_url,
        cv_url: profile.cv_url,
        availability: profile.availability,
        experience_years: profile.experience_years,
      })
      .eq("id", user.id);

    // Filmography upsert
    for (const f of films) {
      if (!f.title.trim()) continue;
      if (f.id) {
        await supabase.from("filmography").update({
          role_category: f.role_category, title: f.title, year: f.year, details: f.details,
        }).eq("id", f.id);
      } else {
        await supabase.from("filmography").insert({
          user_id: user.id, role_category: f.role_category, title: f.title, year: f.year, details: f.details,
        });
      }
    }

    // News upsert
    for (const n of news) {
      if (!n.title.trim()) continue;
      if (n.id) {
        await supabase.from("member_news").update({
          title: n.title, content: n.content, published_at: n.published_at,
        }).eq("id", n.id);
      } else {
        await supabase.from("member_news").insert({
          user_id: user.id, title: n.title, content: n.content, published_at: n.published_at,
        });
      }
    }

    setSaving(false);
    if (pErr) {
      toast({ title: "Erreur", description: pErr.message, variant: "destructive" });
    } else {
      toast({ title: "Profil enregistré" });
      // Refresh ids
      const [{ data: f }, { data: n }] = await Promise.all([
        supabase.from("filmography").select("*").eq("user_id", user.id).order("sort_order"),
        supabase.from("member_news").select("*").eq("user_id", user.id).order("published_at", { ascending: false }),
      ]);
      setFilms((f as Film[]) || []);
      setNews((n as News[]) || []);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent" /></div>
      </div>
    );
  }

  if (!profile) return null;

  const initials = `${profile.first_name?.[0] || ""}${profile.last_name?.[0] || ""}` || profile.email[0].toUpperCase();

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-40 pb-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Mon profil</h1>
            <Button onClick={handleSave} disabled={saving} className="bg-accent text-white">
              {saving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Enregistrement…</> : "Enregistrer"}
            </Button>
          </div>

          {/* Photo & infos */}
          <Card className="mb-6">
            <CardHeader><CardTitle>Photo & informations</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-32 !rounded-lg overflow-hidden ring-2 ring-accent/30">
                  <AvatarImage src={profile.photo_url || undefined} className="!aspect-[3/4] object-cover" />
                  <AvatarFallback className="!rounded-lg bg-accent/20 text-accent text-xl font-bold h-full w-full">{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <Label htmlFor="photo" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/40 hover:bg-accent/10 text-sm">
                    {uploadingPhoto ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    Changer la photo
                  </Label>
                  <input id="photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Prénom</Label>
                  <Input value={profile.first_name || ""} onChange={(e) => updateProfileField("first_name", e.target.value)} />
                </div>
                <div>
                  <Label>Nom</Label>
                  <Input value={profile.last_name || ""} onChange={(e) => updateProfileField("last_name", e.target.value)} />
                </div>
                <div>
                  <Label>Téléphone</Label>
                  <Input value={profile.phone || ""} onChange={(e) => updateProfileField("phone", e.target.value)} />
                </div>
                <div>
                  <Label>Rôle / fonction</Label>
                  <Input value={profile.role || ""} onChange={(e) => updateProfileField("role", e.target.value)} placeholder="Ex: Responsable enfants" />
                </div>
                <div>
                  <Label>Années d'expérience</Label>
                  <Input type="number" value={profile.experience_years ?? ""} onChange={(e) => updateProfileField("experience_years", e.target.value ? parseInt(e.target.value) : null)} />
                </div>
                <div>
                  <Label>Disponibilité</Label>
                  <Select value={profile.availability || "Disponible"} onValueChange={(v) => updateProfileField("availability", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Disponible">Disponible</SelectItem>
                      <SelectItem value="En tournage">En tournage</SelectItem>
                      <SelectItem value="Indisponible">Indisponible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Biographie</Label>
                <Textarea rows={5} value={profile.bio || ""} onChange={(e) => updateProfileField("bio", e.target.value)} />
              </div>
            </CardContent>
          </Card>

          {/* CV */}
          <Card className="mb-6">
            <CardHeader><CardTitle>CV (PDF)</CardTitle></CardHeader>
            <CardContent className="flex items-center gap-4">
              {profile.cv_url && (
                <a href={profile.cv_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                  <FileText className="w-4 h-4" /> Voir le CV actuel
                </a>
              )}
              <Label htmlFor="cv" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/40 hover:bg-accent/10 text-sm">
                {uploadingCV ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                {profile.cv_url ? "Remplacer le CV" : "Uploader un CV"}
              </Label>
              <input id="cv" type="file" accept="application/pdf" className="hidden" onChange={handleCVUpload} />
            </CardContent>
          </Card>

          {/* Filmographie */}
          <Card className="mb-6">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Filmographie</CardTitle>
              <Button variant="outline" size="sm" onClick={addFilm}><Plus className="w-4 h-4 mr-1" />Ajouter</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {films.length === 0 && <p className="text-sm text-muted-foreground">Aucun film. Cliquez sur "Ajouter".</p>}
              {films.map((f, i) => (
                <div key={f.id || i} className="border border-border rounded-lg p-4 space-y-3 bg-background">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input placeholder="Catégorie de rôle" value={f.role_category} onChange={(e) => updateFilm(i, "role_category", e.target.value)} />
                    <Input placeholder="Titre du film" value={f.title} onChange={(e) => updateFilm(i, "title", e.target.value)} />
                    <Input type="number" placeholder="Année" value={f.year ?? ""} onChange={(e) => updateFilm(i, "year", e.target.value ? parseInt(e.target.value) : null)} />
                  </div>
                  <Textarea placeholder="Détails (réalisateur, production…)" value={f.details || ""} onChange={(e) => updateFilm(i, "details", e.target.value)} />
                  <Button variant="ghost" size="sm" onClick={() => removeFilm(i)} className="text-destructive">
                    <Trash2 className="w-4 h-4 mr-1" />Supprimer
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Actualités */}
          <Card className="mb-6">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Mes actualités</CardTitle>
              <Button variant="outline" size="sm" onClick={addNews}><Plus className="w-4 h-4 mr-1" />Ajouter</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {news.length === 0 && <p className="text-sm text-muted-foreground">Aucune actualité.</p>}
              {news.map((n, i) => (
                <div key={n.id || i} className="border border-border rounded-lg p-4 space-y-3 bg-background">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input className="md:col-span-2" placeholder="Titre" value={n.title} onChange={(e) => updateNews(i, "title", e.target.value)} />
                    <Input type="date" value={n.published_at || ""} onChange={(e) => updateNews(i, "published_at", e.target.value)} />
                  </div>
                  <Textarea placeholder="Contenu" value={n.content || ""} onChange={(e) => updateNews(i, "content", e.target.value)} />
                  <Button variant="ghost" size="sm" onClick={() => removeNews(i)} className="text-destructive">
                    <Trash2 className="w-4 h-4 mr-1" />Supprimer
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={saving} size="lg" className="bg-accent text-white">
              {saving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Enregistrement…</> : "Enregistrer toutes les modifications"}
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyProfilePage;
