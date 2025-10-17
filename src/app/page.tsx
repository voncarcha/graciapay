import TopNavigation from "@/components/TopNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import ServicesSection from "@/components/ServicesSection";
import RequirementSection from "@/components/RequirementSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import StepsSection from "@/components/StepsSection";
import FooterSection from "@/components/FooterSection";
import PaymentPartnerSection from "@/components/PaymentPartnerSection";

async function getHomepageData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}/home-page`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const { data } = await res.json();

    return data;
  } catch {
    return null;
  }
}

async function getTestimonialsData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}/testimonials`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const { data } = await res.json();

    return data;
  } catch {
    return null;
  }
}

async function getOffersData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}/offers`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const { data } = await res.json();

    return data;
  } catch {
    return null;
  }
}

export default async function Home() {
  const {
    hero_heading,
    hero_subheading,
    hero_button_text,
    hero_button_link,
    about_heading,
    about_content,
    offer_heading,
    services_heading,
    services_subheading,
    services_text,
    requirements_heading,
    comparison_heading,
    comparison_subheading,
    testimonial_heading,
    steps_heading,
    step_1,
    step_2,
    step_3,
    footer_content,
    contact_email,
    contact_phone,
    facebook_link,
    youtube_link,
    instagram_link,
    twitter_link,
  } = await getHomepageData();

  const testimonials = await getTestimonialsData();
  const offers = await getOffersData();

  return (
    <main className="min-h-screen w-full">
      <TopNavigation />
      <HeroSection
        title={hero_heading}
        description={hero_subheading}
        buttonText={hero_button_text}
        buttonLink={hero_button_link}
      />
      <AboutSection title={about_heading} content={about_content} />
      <PaymentPartnerSection />
      <OfferSection title={offer_heading} offers={offers || []} />
      <ServicesSection
        title={services_heading}
        description={services_subheading}
        content={services_text}
      />
      <RequirementSection title={requirements_heading} />
      <ComparisonSection
        title={comparison_heading}
        description={comparison_subheading}
      />
      <TestimonialsSection
        title={testimonial_heading}
        testimonials={testimonials || []}
      />
      <StepsSection
        title={steps_heading}
        step1={step_1}
        step2={step_2}
        step3={step_3}
      />
      <FooterSection
        content={footer_content}
        contactEmail={contact_email}
        contactPhone={contact_phone}
        facebookLink={facebook_link}
        youtubeLink={youtube_link}
        instagramLink={instagram_link}
        twitterLink={twitter_link}
      />
    </main>
  );
}
