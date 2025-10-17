"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  createStaggerAnimation,
  refreshScrollTriggersDelayed,
} from "@/lib/gsap";
import Markdown from "../ui/Markdown";

const WHO_CAN_USE_ITEMS = [
  {
    title: "Retail Shops and Market Vendors",
    image: "/images/thumb-can-use-1.jpg",
  },
  {
    title: "Restaurants, cafés, and food stalls",
    image: "/images/thumb-can-use-2.jpg",
  },
  {
    title: "Service providers and freelancers",
    image: "/images/thumb-can-use-3.jpg",
  },
  {
    title: "Franchise businesses and cooperatives",
    image: "/images/thumb-can-use-4.jpg",
  },
  {
    title: "Online stores and delivery services",
    image: "/images/thumb-can-use-5.jpg",
  },
];

const ServicesSection = ({
  title = "Title for the Services Section",
  description = "Description for the Services Section",
  content = "Content for the Services Section",
}: {
  title?: string;
  description?: string;
  content?: string;
}) => {
  useEffect(() => {
    const cleanupHeading = createStaggerAnimation(".who-can-use-section h2", {
      delay: 150,
      duration: 0.8,
    });

    const cleanupParagraphs = createStaggerAnimation(".who-can-use-section p", {
      delay: 200,
      duration: 0.8,
      staggerAmount: 0.2,
    });

    const cleanupListItems = createStaggerAnimation(".who-can-use-section li", {
      delay: 250,
      duration: 0.8,
      staggerAmount: 0.6,
    });

    const cleanupRefresh = refreshScrollTriggersDelayed(600);

    return () => {
      cleanupHeading();
      cleanupParagraphs();
      cleanupListItems();
      cleanupRefresh();
    };
  }, []);

  return (
    <section className="who-can-use-section" id="services">
      <article className="w-full max-w-[1280px] mx-auto text-center mb-[150px]">
        <h2 className="text-4xl md:text-5xl font-[900]">{title}</h2>
        <p className="text-lg font-[400] mt-6">{description}</p>
      </article>
      <div className="w-full h-auto lg:h-[300px] bg-dark-blue">
        <ul className="flex items-center gap-4 mx-auto justify-center relative top-[-100px] px-6 flex-wrap lg:flex-nowrap">
          {WHO_CAN_USE_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-2 w-[260px] h-[260px] bg-primary p-4"
            >
              <figure className="block">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={230}
                  height={160}
                />
                <figcaption className="text-lg text-white text-center mt-2 font-[500]">
                  {item.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="text-lg font-[400] mt-[-50px] text-center text-white lg:pb-0 pb-10 px-6 flex items-center justify-center">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
