"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";
import Markdown from "@/components/ui/Markdown";

const AboutSection = ({
  title = "Title for the About Section",
  content = "Content for the About Section, make sure to edit this in the CMS",
}: {
  title?: string;
  content: string;
}) => {
  useEffect(() => {
    const cleanup = createStaggerAnimation(".about-animate", {
      staggerAmount: 0.4,
      delay: 400,
    });
    const clearRefresh = refreshScrollTriggersDelayed(800);
    return () => {
      cleanup();
      clearRefresh();
    };
  }, []);

  return (
    <section
      className="w-full relative px-6 py-10 flex items-center"
      id="about"
    >
      <article className="w-full max-w-[1280px] mx-auto flex items-center justify-end lg:flex-row flex-col lg:gap-0 gap-6">
        <picture className="about-animate block">
          <source srcSet="/images/bg-about.webp" type="image/webp" />
          <Image
            src="/images/bg-about.png"
            alt="About Section Background"
            width={375}
            height={358}
            sizes="100vw"
          />
        </picture>
        <div className="lg:max-w-[60%] max-w-full relative z-10 text-center lg:text-left">
          <h2 className="about-animate text-4xl md:text-5xl font-[900] ">
            {title}
          </h2>
          <div className="about-animate mt-6">
            <Markdown content={content} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
