"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";

const OFFER_ITEMS = [
  {
    title: "Unified Merchant Dashboard",
    items: [
      "Manage all your digital payment transactions from a single interface — with real-time insights, reports, and downloadables.",
    ],
  },
  {
    title: "All-in-One Payment Acceptance",
    items: [
      "QRPH (Universal QR Code)",
      "InstaPay & PESONet for bank transfers",
      "Debit/Credit Card acceptance (via GraciaPay’s POS or online gateway)",
      "Wallets & ePayments: GCash, Maya, GrabPay, ShopeePay",
      "Over-the-counter integration (optional)",
    ],
  },
  {
    title: "Fast, BSP-Regulated Settlements",
    items: [
      "All payments are settled to your designated bank account via Gracia, typically by the next banking day, with full compliance to local regulations.",
    ],
  },
  {
    title: "Full-Service Support",
    items: [
      "GraciaPay provides end-to-end services including:",
      "Merchant onboarding",
      "Transaction dispute management",
      "Customer service",
      "Technical assistance",
      "Risk & fraud monitoring",
    ],
  },
  {
    title: "Developer Tools & Plugins",
    items: [
      "Access a suite of REST APIs and plug-and-play integrations for:",
      "POS systems",
      "eCommerce platforms",
      "Mobile apps",
    ],
  },
];

const OfferSection = () => {
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
  return (
    <section className="w-full relative px-4 md:pt-[100px] md:pb-[100px] pt-[50px] pb-[50px] flex items-center max-md:mb-[100px]" id="payment-gateway">
      <article className="w-full max-w-[1280px] mx-auto">
        <h2 className="offer-animate-head text-4xl md:text-5xl mb-10 mt-4 font-[900] text-center">
          What We <span className="text-primary">Offer</span>
        </h2>
        <div className="w-full relative z-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFER_ITEMS.map((item, index) => {
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
                  <h3 className="text-2xl text-primary font-[700]">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 mt-2">
                    {item.items?.map((item) => (
                      <li
                        key={item}
                        className="text-md font-[400] list-disc list-outside ml-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
