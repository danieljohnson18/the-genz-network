import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import FeaturedContent from "@/components/FeaturedContent";
import ProgramsSection from "@/components/ProgramsSection";
import PriorityAreas from "@/components/PriorityAreas";
import ImpactStats from "@/components/ImpactStats";
import NewsStories from "@/components/NewsStories";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MissionStatement />
      <FeaturedContent />
      <ProgramsSection />
      <PriorityAreas />
      <ImpactStats />
      <NewsStories />
      <FounderSection />
      <Footer />
    </main>
  );
}
