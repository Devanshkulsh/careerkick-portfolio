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
import { DataShow } from "@/components/sections/DataShow";
import CTASection from "@/components/sections/CTASection";
import SocialPresence from "@/components/sections/SocialPresence";
import TeamsSection from "@/components/sections/TeamsSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
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
      <DataShow/>
      <ContactSection />
      <CTASection />
      <SocialPresence />
      <TeamsSection />
    </div>
  );
};

export default Index;
