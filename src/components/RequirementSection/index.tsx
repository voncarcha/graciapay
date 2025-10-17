"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { createStaggerAnimation, refreshScrollTriggersDelayed } from "@/lib/gsap";

const RequirementSection = ({ title = "Title for the Requirement Section" }: { title?: string }) => {
  useEffect(() => {
    const cleanupH2 = createStaggerAnimation(
      ".requirement-section h2",
      { delay: 150, duration: 0.8 }
    );

    const cleanupPicture = createStaggerAnimation(
      ".requirement-section picture",
      { delay: 250, duration: 0.9 }
    );

    const cleanupRefresh = refreshScrollTriggersDelayed(600);

    return () => {
      cleanupH2();
      cleanupPicture();
      cleanupRefresh();
    };
  }, []);

  return (
    <section className="w-full relative px-6 py-10 requirement-section" id="requirements">
      <h2 className="text-4xl md:text-5xl mt-10 font-[900] text-center">{title}</h2>
      <picture className="w-full max-w-[1280px] mx-auto block justify-center items-center mt-0 lg:mt-[-100px]">
        <source srcSet="/images/bg-requirements.webp" type="image/webp" />
        <Image
          src="/images/bg-requirements.png"
          alt="Requirement Section Background"
          width={1147}
          height={934}
          sizes="100vw"
        />
      </picture>
    </section>
  );
};

export default RequirementSection;
