import React from "react";
import Image from "next/image";
import Button from "../Button";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full hero-bg hero-section">
      <div className="relative max-w-[1280px] mx-auto pt-[200px] lg:pt-[300px] pb-[150px] lg:pb-[200px]">
        <article className="w-full max-w-[750px] px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-[900] leading-[1.1] text-shadow-lg">
            One platform. Every payment. Everywhere.
          </h1>
          <p className="text-white text-lg md:text-xl font-[400] leading-[1.5] mt-6 max-w-[600px] text-shadow-lg">
            GraciaPay is the official merchant payment platform under GraciaPay,
            a BSP-regulated financial institution in the Philippines.
          </p>
          <Button
            variant="large"
            className="mt-6 w-[250px] shadow-lg"
            href="#about"
          >
            Get Started
          </Button>
        </article>
        <picture className="block absolute bottom-0 right-0 max-lg:hidden">
          <source srcSet="/images/img-hero.webp" type="image/webp" />
          <Image
            src="/images/img-hero.png"
            alt="Hero image"
            width={554}
            height={670}
            sizes="100vw"
            priority
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
