"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";
import Button from "../Button";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const cleanupHeading = createStaggerAnimation(".hero-section h1", {
      delay: 150,
      duration: 0.8,
    });

    const cleanupParagraphs = createStaggerAnimation(".hero-section p", {
      delay: 200,
      duration: 0.8,
      staggerAmount: 0.2,
    });

    const cleanupButton = createStaggerAnimation(".hero-section button", {
      delay: 250,
      duration: 0.3,
      staggerAmount: 0.1,
    });

    const cleanupImage = createStaggerAnimation(
      ".hero-section .hero-img-animate",
      { delay: 300, duration: 0.8, staggerAmount: 0.4 }
    );

    const clearRefresh = refreshScrollTriggersDelayed(800);
    return () => {
      cleanupHeading();
      cleanupParagraphs();
      cleanupButton();
      cleanupImage();
      clearRefresh();
    };
  }, []);

  return (
    <section className="w-full hero-bg hero-section">
      <div className="relative max-w-[1280px] mx-auto pt-[200px] lg:pt-[300px] pb-[150px] lg:pb-[200px]">
        <article className="w-full max-w-[750px] px-4 relative z-10">
          <h1 className="hero-animate text-4xl md:text-7xl font-[900] leading-[1.1]">
            <span className="text-primary">One platform.</span>
            <br /> Every payment. <br />
            Everywhere.
          </h1>
          <p className="text-white hero-animate text-lg md:text-xl font-[400] leading-[1.5] mt-6 max-w-[600px]">
            GraciaPay is the official merchant payment platform under GraciaPay,
            a BSP-regulated financial institution in the Philippines.
          </p>
          <Button
            variant="large"
            className="hero-animate mt-6 w-[250px]"
            onClick={() => {
              window.location.href = "#about";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.href = "#about";
              }
            }}
          >
            Get Started
          </Button>
        </article>
        <picture className="hero-img-animate block absolute bottom-0 right-0 max-lg:hidden">
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
