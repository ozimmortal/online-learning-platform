import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
    </main>
  );
}