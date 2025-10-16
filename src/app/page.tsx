import TopNavigation from "@/components/TopNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import WhoCanUseSection from "@/components/WhoCanUseSection";
import RequirementSection from "@/components/RequirementSection";
import MerchantSection from "@/components/MerchantSection";
import ChooseSection from "@/components/ChooseSection";
import GovSection from "@/components/GovSection";
import FooterSection from "@/components/FooterSection";
import PaymentPartnerSection from "@/components/PaymentPartnerSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <TopNavigation />
      <HeroSection />
      <AboutSection />
      <PaymentPartnerSection />
      <OfferSection />
      <WhoCanUseSection />
      <RequirementSection />
      <ChooseSection />
      <MerchantSection />
      <GovSection />
      <FooterSection />
    </main>
  );
}
