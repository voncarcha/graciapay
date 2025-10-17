"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";
import { TestimonialItem } from "@/types";

const TestimonialsSlider = dynamic(() => import("./TestimonialsSlider"), {
  ssr: false,
});

const TestimonialsSection = ({
  title = "Title for the Testimonials Section",
  testimonials = [],
}: {
  testimonials?: TestimonialItem[];
  title?: string;
}) => {
  useEffect(() => {
    const cleanupH2 = createStaggerAnimation(".merchant-section h2", {
      delay: 150,
      duration: 0.8,
    });

    const cleanupRefresh = refreshScrollTriggersDelayed(600);

    return () => {
      cleanupH2();
      cleanupRefresh();
    };
  }, []);

  return (
    <section className="w-full relative pt-10 pb-[200px] overflow-hidden merchant-section">
      <h2 className="text-4xl md:text-5xl px-4 mt-4 font-[900] text-center">
        {title}
      </h2>
      <div className="mt-10">
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
