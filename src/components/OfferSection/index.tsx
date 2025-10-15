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
    <section className="w-full relative px-4 py-10 flex items-center my-[200px] max-md:mb-[100px]">
      <article className="w-full max-w-[1280px] mx-auto flex lg:flex-row flex-col justify-center gap-6">
        <div className="flex-1">
          <h2 className="offer-animate-head text-4xl md:text-5xl mt-4 font-[900] text-center">
            What We <span className="text-primary">Offer</span>
          </h2>
          <picture className="offer-animate-head block mt-4 mx-auto lg:max-w-full max-w-[420px]">
            <source srcSet="/images/bg-offer.webp" type="image/webp" />
            <Image
              src="/images/bg-offer.png"
              alt="Offer Section Background"
              width={1092}
              height={1092}
              sizes="100vw"
            />
          </picture>
        </div>
        <div className="lg:max-w-[60%] max-w-full relative z-10">
          <ul className="space-y-6">
            {OFFER_ITEMS.map((item) => (
              <li
                key={item.title}
                className="offer-animate-item border-secondary border rounded-2xl p-6 bg-dark-blue"
              >
                <h3 className="text-2xl text-white font-[700]">{item.title}</h3>
                <ul className="space-y-2 mt-2">
                  {item.items?.map((item) => (
                    <li
                      key={item}
                      className="text-md font-[400] list-disc list-outside ml-4 text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default OfferSection;
