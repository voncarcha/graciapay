"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { createStaggerAnimation, refreshScrollTriggersDelayed } from "@/lib/gsap";

const GovSection = () => {
  useEffect(() => {
    const cleanupPicture = createStaggerAnimation(
      ".gov-section picture",
      { delay: 120, duration: 0.9 }
    );

    const cleanupH2 = createStaggerAnimation(
      ".gov-section h2",
      { delay: 200, duration: 0.8 }
    );

    const cleanupLis = createStaggerAnimation(
      ".gov-section li",
      { delay: 280, duration: 0.8, staggerAmount: 0.6 }
    );

    const cleanupRefresh = refreshScrollTriggersDelayed(600);

    return () => {
      cleanupPicture();
      cleanupH2();
      cleanupLis();
      cleanupRefresh();
    };
  }, []);

  return (
    <section className="w-full relative px-4 gov-section">
      <div className="rounded-3xl w-full relative px-4 py-10 md:p-10 mb-[100px] md:mb-[150px] max-w-[1280px] mx-auto bg-dark-blue">
        <div className="flex items-start lg:items-center justify-center gap-6 xl:gap-[100px] flex-col lg:flex-row">
          <picture className="relative block mt-[-80px] lg:ml-0 ml-[-20px]">
            <source srcSet="/images/gov.webp" type="image/webp" />
            <Image
              src="/images/gov.png"
              alt="Gov Thumbnail"
              width={438}
              height={530}
            />
          </picture>
          <article className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.4]">
              Start Accepting
              <br />
              Digital Payments
            </h2>
            <ul className="mt-6 md:mt-12 flex flex-col gap-4">
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 1
                </span>
                <p className="flex-1">
                  Complete the [Merchant Application Form]
                </p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 2
                </span>
                <p className="flex-1">Submit your required documents</p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 3
                </span>
                <p>
                  Activate your merchant dashboard and go live within 1–3
                  business days
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GovSection;
