"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const PARTNER_ITEMS = [
  {
    name: "GCash",
    image: "/images/icon-gcash.png",
  },
  {
    name: "PayMaya",
    image: "/images/icon-maya.png",
  },
  {
    name: "GrabPay",
    image: "/images/icon-grab.png",
  },
  {
    name: "InstaPay",
    image: "/images/icon-instapay.png",
  },
  {
    name: "ShopeePay",
    image: "/images/icon-shopee.png",
  },
  {
    name: "GoTyme",
    image: "/images/icon-gotyme.png",
  },
  {
    name: "Komo",
    image: "/images/icon-komo.png",
  },
  {
    name: "OwnBank",
    image: "/images/icon-ownbank.png",
  },
  {
    name: "PesoNet",
    image: "/images/icon-pesonet.png",
  },
  {
    name: "Tonik",
    image: "/images/icon-tonik.png",
  },
  { name: "Vbank", image: "/images/icon-vbank.png" },
  { name: "QRPH", image: "/images/icon-qrph.png" },
];

const PaymentPartnerSection = () => {
  useEffect(() => {
    // Partner logos infinite scroll animation
    const initializePartnerAnimation = () => {
      const partnerTrack = document.getElementById('partnerLogosTrack');
      if (partnerTrack) {
        // Get the width of the first set of logos (half the total)
        const logoItems = partnerTrack.querySelectorAll('.partner-logo-item');
        const totalItems = logoItems.length;
        const halfItems = totalItems / 2;
        
        // Calculate the distance to scroll (width of half the logos)
        let scrollDistance = 0;
        for (let i = 0; i < halfItems; i++) {
          const element = logoItems[i] as HTMLElement;
          scrollDistance += element.offsetWidth + 60; // 40px is the gap
        }
        
        // Create infinite scroll animation
        gsap.to(partnerTrack, {
          x: -scrollDistance,
          duration: 30, // 30 seconds for one complete cycle
          ease: "none",
          repeat: -1, // Infinite repeat
          repeatDelay: 0
        });
      }
    };

    // Initialize partner animation with a delay to ensure DOM is ready
    setTimeout(initializePartnerAnimation, 500);
  }, []);

  return (
    <section className="w-full relative px-6 py-10 bg-dark-blue">
      <div className="max-w-[1280px] mx-auto overflow-hidden">
        <h3 className="text-md font-[700] tracking-widest uppercase text-white text-center mb-6">
          our payment partners
        </h3>
        <div className="overflow-hidden brand-container">
          <ul 
            id="partnerLogosTrack"
            className="flex items-center gap-15 w-max"
          >
            {/* First set of logos */}
            {PARTNER_ITEMS.map((item) => (
              <li key={`first-${item.name}`} className="partner-logo-item">
                <Image
                  src={item.image}
                  alt={item.name}
                  priority
                  width={80}
                  height={80}
                />
              </li>
            ))}
            {/* Duplicate set for seamless loop */}
            {PARTNER_ITEMS.map((item) => (
              <li key={`second-${item.name}`} className="partner-logo-item">
                <Image
                  src={item.image}
                  alt={item.name}
                  priority
                  width={80}
                  height={80}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentPartnerSection;
