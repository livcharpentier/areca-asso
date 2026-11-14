import { Facebook, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => (
  <section className="py-10 px-4 bg-background">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#16213f] mb-2">Suivez l&apos;ARENCA</h2>
      <p className="text-muted-foreground mb-6">Cliquez sur une icône pour retrouver nos actualités.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=61596592014224"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl bg-[#1877F2] text-white px-7 py-4 text-lg font-semibold shadow-md transition-transform hover:scale-105"
        >
          <Facebook className="w-9 h-9" />
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/company/arenca-association-des-responsables-enfants-dans-le-cin%C3%A9ma-et-l-audiovisuel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl bg-[#0A66C2] text-white px-7 py-4 text-lg font-semibold shadow-md transition-transform hover:scale-105"
        >
          <Linkedin className="w-9 h-9" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/arenca.asso/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-full sm:w-auto justify-center rounded-2xl text-white px-7 py-4 text-lg font-semibold shadow-md transition-transform hover:scale-105"
          style={{ background: "linear-gradient(45deg, #f9ce34, #ee2a7b 50%, #6228d7)" }}
        >
          <Instagram className="w-9 h-9" />
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default SocialLinks;
