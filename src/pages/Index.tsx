import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import PerformanceGraph from "@/components/sections/PerformanceGraph";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import WorkModelSection from "@/components/sections/WorkModelSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import RevenueImpact from "@/components/sections/RevenueImpact";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <PerformanceGraph />
      <PartnerMarquee />
      <WorkModelSection />
      <BenefitsSection />
      <RevenueImpact />
      <CaseStudiesSection />
      <AchievementsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
