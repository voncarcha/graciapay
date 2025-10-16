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

async function getHeroData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}/hero-section`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const { data } = await res.json();

    return {
      title: data?.title,
      description: data?.description,
    };
  } catch {
    return null;
  }
}

export default async function Home() {
  const hero = await getHeroData();

  return (
    <main className="min-h-screen w-full">
      <TopNavigation />
      <HeroSection title={hero?.title} description={hero?.description} />
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
