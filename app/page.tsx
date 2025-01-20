import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Separator />
      <HeroSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ContactMe />
      <Separator />
      <Footer />

    </div>
  );
}
