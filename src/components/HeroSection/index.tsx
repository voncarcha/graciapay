import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

type HeroSectionProps = {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "This is the title",
  description = "This is the description, please edit this in the CMS",
  buttonText = "Button Text",
  buttonLink,
}) => {
  return (
    <section className="w-full hero-bg hero-section">
      <div className="relative max-w-[1280px] mx-auto h-[600px] md:h-[700px] xl:h-[900px] flex items-center">
        <article className="w-full max-w-[750px] px-4 relative z-10 mt-[50px]">
          <h1 className="text-4xl md:text-5xl font-[900] leading-[1.1] text-shadow-lg">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl font-[400] leading-[1.5] mt-6 max-w-[600px] text-shadow-lg">
            {description}
          </p>
          <Button
            variant="large"
            className="mt-6 w-[250px] shadow-lg"
            href={buttonLink ?? "#about"}
          >
            {buttonText}
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
