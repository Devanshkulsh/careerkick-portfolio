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
import ThoughtLeadership from "@/components/sections/ThoughtLeadership";
import SmoothManagementSection from "@/components/sections/SmoothManagementSection";
import ValueAddedServices from "@/components/sections/ValueAddedServices";
import AdmissionProcessSection from "@/components/sections/AdmissionProcessSection";
import PromoteCollege from "@/components/sections/PromoteCollege";
import SuccessStories from "@/components/sections/SuccessStories";
import ClientGraph from "@/components/sections/ClientGraph";

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
      <ThoughtLeadership />
      <PromoteCollege />
      <SmoothManagementSection />
      {/* <ValueAddedServices /> */}
      {/* <TeamsSection /> */}
      <AdmissionProcessSection />
      <SuccessStories />
      <ClientGraph />
      <FooterSection />
    </div>
  );
};

export default Index;
