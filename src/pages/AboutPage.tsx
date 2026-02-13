import Navigation from "@/components/Navigation";
import About from "@/components/About";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <ChildSupervisorRole />
      <Footer />
    </div>
  );
};

export default AboutPage;