import React from "react";
import Image from "next/image";
import { appendSegmentCacheKeyPart } from "next/dist/shared/lib/segment-cache/segment-value-encoding";

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
  return (
    <section className="w-full relative px-6 py-10 flex items-center my-[200px]">
      <article className="w-full max-w-[1280px] mx-auto flex justify-center gap-6">
        <div className="flex-1">
          <h2 className="text-5xl mt-4 font-[900] text-center">
            What We <span className="text-primary">Offer</span>
          </h2>
          <Image
            src="/images/bg-offer.png"
            alt="Offer Section Background"
            width={1092}
            height={1092}
            sizes="100vw"
          />
        </div>
        <div className="max-w-[720px] relative z-10">
          <ul className="space-y-6">
            {OFFER_ITEMS.map((item) => (
              <li
                key={item.title}
                className="border-secondary border rounded-2xl p-6 bg-dark-blue"
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
