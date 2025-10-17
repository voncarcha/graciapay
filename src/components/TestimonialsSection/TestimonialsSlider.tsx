"use client";

import React from "react";
import Slider from "react-slick";
import { Quote } from "lucide-react";
import { TestimonialItem } from "@/types";
import { TESTIMONIAL_ITEMS } from "./constants";

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
const TestimonialsSlider: React.FC<{ testimonials?: TestimonialItem[] }> = ({
  testimonials,
}: {
  testimonials?: TestimonialItem[];
}) => {
  const items = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIAL_ITEMS;
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="px-2">
          <article className="border-secondary bg-dark-blue border rounded-2xl px-6 py-4 h-[310px] md:h-[280px] flex flex-col justify-between">
            <div className="">
              <Quote className="w-6 h-6 text-white mb-2" />
              <p className="text-sm md:text-md font-[400] text-white">
                {item.content}
              </p>
            </div>
            <div className="text-white mt-6 text-xs font-[700]">
              <span>— {item.name}</span>
              <span>, {item.position}</span>
            </div>
          </article>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
