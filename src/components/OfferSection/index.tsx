"use client";

import React, { useEffect } from "react";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";
import { OfferItem } from "@/types";
import Markdown from "@/components/ui/Markdown";
import { OFFER_ITEMS } from "./constants";

const OfferSection = ({
  title = "Title for the Offer Section",
  offers = [],
}: {
  offers?: OfferItem[];
  title?: string;
}) => {
  useEffect(() => {
    const cleanupHead = createStaggerAnimation(".offer-animate-head", {
      staggerAmount: 0.2,
      delay: 500,
    });
    const cleanupItems = createStaggerAnimation(".offer-animate-item", {
      staggerAmount: 0.6,
      duration: 0.8,
      delay: 800,
    });

    const clearRefresh = refreshScrollTriggersDelayed(800);
    return () => {
      cleanupHead();
      cleanupItems();
      clearRefresh();
    };
  }, []);

  const items = offers && offers.length > 0 ? offers : OFFER_ITEMS;

  return (
    <section
      className="w-full relative px-4 md:pt-[100px] md:pb-[100px] pt-[50px] pb-[50px] flex items-center max-md:mb-[100px]"
      id="payment-gateway"
    >
      <article className="w-full max-w-[1280px] mx-auto">
        <h2 className="offer-animate-head text-4xl md:text-5xl mb-10 mt-4 font-[900] text-center">
          {title}
        </h2>
        <div className="w-full relative z-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => {
              const isLastItem = index === OFFER_ITEMS.length - 1;
              const isOddCount = OFFER_ITEMS.length % 2 !== 0;
              const shouldSpanFullWidth = isLastItem && isOddCount;

              return (
                <li
                  key={item.title}
                  className={`offer-animate-item border-dark-blue border-2 rounded-2xl p-6 ${
                    shouldSpanFullWidth ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-2xl text-primary font-[700] mb-4">
                    {item.title}
                  </h3>
                  <Markdown content={item.content ?? ""} />
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default OfferSection;
