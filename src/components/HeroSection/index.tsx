"use client";

import React, { useEffect } from "react";
import { createStaggerAnimation, refreshScrollTriggersDelayed } from "@/lib/gsap";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const cleanup = createStaggerAnimation(".hero-animate", {
      staggerAmount: 0.3,
      delay: 300,
    });
    const clearRefresh = refreshScrollTriggersDelayed(800);
    return () => {
      cleanup();
      clearRefresh();
    };
  }, []);

  return (
    <section className="h-[500px] lg:h-[800px] mt-[100px] flex items-center justify-center">
      <article className="w-full max-w-[750px] mx-auto text-center mt-[-100px] px-4">
        <h1 className="hero-animate text-4xl md:text-5xl font-[900] leading-[1.2]">
          <span className="text-primary">One platform.</span> Every payment.
          Everywhere.
        </h1>
        <p className="hero-animate text-lg font-[400] leading-[1.5] mt-6">
          GraciaPay is the official merchant payment platform under GraciaPay, a
          BSP-regulated financial institution in the Philippines.
        </p>
      </article>
    </section>
  );
};

export default HeroSection;
