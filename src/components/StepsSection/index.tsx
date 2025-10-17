"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";

const StepsSection = ({
  title = "Title for the Steps Section",
  step1 = "Step 1 for the Steps Section",
  step2 = "Step 2 for the Steps Section",
  step3 = "Step 3 for the Steps Section",
}: {
  title?: string;
  step1?: string;
  step2?: string;
  step3?: string;
}) => {
  useEffect(() => {
    const cleanupPicture = createStaggerAnimation(".gov-section picture", {
      delay: 120,
      duration: 0.9,
    });

    const cleanupH2 = createStaggerAnimation(".gov-section h2", {
      delay: 200,
      duration: 0.8,
    });

    const cleanupLis = createStaggerAnimation(".gov-section li", {
      delay: 280,
      duration: 0.8,
      staggerAmount: 0.6,
    });

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
              {title}
            </h2>
            <ul className="mt-6 md:mt-12 flex flex-col gap-4">
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 1
                </span>
                <p className="flex-1">{step1}</p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 2
                </span>
                <p className="flex-1">{step2}</p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex-[0_0_82px] text-center block">
                  STEP 3
                </span>
                <p>{step3}</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
