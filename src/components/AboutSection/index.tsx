import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full relative px-6 py-10 h-[800px] flex items-center">
      <article className="w-full max-w-[1280px] mx-auto flex justify-end">
        <picture className="absolute top-[50%] translate-y-[-50%] left-[-100px]">
          <Image
            src="/images/bg-about.png"
            alt="About Section Background"
            width={1092}
            height={1092}
            sizes="100vw"
          />
        </picture>
        <div className="max-w-[780px] relative z-10">
          <h2 className="text-5xl font-[900]">
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
