"use client";

import React from "react";
import Slider from "react-slick";

const MERCHANT_ITEMS = [
  {
    id: 1,
    description:
      "“Onboarded in just two days, we instantly gained unified access to QRPH, GCash, and direct bank transfers through a single, integrated payment interface.”",
    name: "Dong A",
    position: "Restaurant Owner",
  },
  {
    id: 2,
    description:
      "“We were fully onboarded in two days. QRPH, GCash, and bank transfers — all in one screen.”",
    name: "Zoe",
    position: "Coffee Shop Owner",
  },
  {
    id: 3,
    description:
      "“GraciaPayPay’s responsive support and seamless integration with local banks and GCash make it a standout.”",
    name: "Alyssa Manalo",
    position: "PinoyDeals",
  },
  {
    id: 4,
    description:
      "“Onboarded in just two days, we instantly gained unified access to QRPH, GCash, and direct bank transfers through a single, integrated payment interfaceGraciaPayPay is a fast, reliable way to accept payments from banks and e-wallets nationwide.”",
    name: "Maria De Guzman",
    position: "RestaurTechDirect PH",
  },
  {
    id: 5,
    description:
      "“GraciaPayPay helped us organize payments and speed up settlements. Perfect for growing brands.”",
    name: "Tina M",
    position: "Restaurant Owner",
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "160px",
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerPadding: "120px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
      },
    },
  ],
};

const MerchantSection = () => {
  return (
    <section className="w-full relative pt-10 pb-[200px] overflow-hidden">
      <h2 className="text-4xl md:text-5xl px-4 mt-4 font-[900] text-center">
        What <span className="text-primary">Merchants</span> Say
      </h2>
      <div className="mt-10">
        <Slider {...settings}>
          {MERCHANT_ITEMS.map((item) => (
            <div key={item.id} className="px-2">
              <article className="border-secondary bg-dark-blue border rounded-2xl px-6 py-4 h-[220px] flex flex-col justify-between">
                <p className="text-sm font-[400] text-white">{item.description}</p>
                <div className="flex items-center text-white gap-2 mt-6 text-xs font-[400]">
                  <span>— {item.name},</span>
                  <span>{item.position}</span>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MerchantSection;
