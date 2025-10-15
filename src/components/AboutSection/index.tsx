import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full relative px-6 py-10 h-[800px] flex items-center">
      <article className="w-full max-w-[1280px] mx-auto flex items-center justify-end lg:flex-row flex-col lg:gap-0 gap-6">
        <picture className="block">
          <source srcSet="/images/bg-about.webp" type="image/webp" />
          <Image
            src="/images/bg-about.png"
            alt="About Section Background"
            width={500}
            height={477}
            sizes="100vw"
          />
        </picture>
        <div className="lg:max-w-[60%] max-w-full relative z-10 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-[900]">
            About <span className="text-primary">GraciaPay</span>
          </h2>
          <p className="text-lg font-[400] mt-6">
            GraciaPay is a next-generation digital payment solution powered by
            GraciaPay — a licensed and BSP-supervised financial institution in
            the Philippines. We help merchants accept digital payments securely
            and efficiently, using regulated channels that work across banks,
            wallets, and QR systems.
          </p>
          <p className="text-lg font-[400] mt-6 mb-6">
            Whether you’re running a startup, retail chain, food stall, or
            online business — GraciaPay enables fast onboarding, real-time
            monitoring, and BSP-compliant settlements in one easy-to-use
            platform.
          </p>
          {/* <Image
            src="/images/img-about-text.png"
            alt="About Section Image"
            width={188}
            height={30}
          /> */}
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
