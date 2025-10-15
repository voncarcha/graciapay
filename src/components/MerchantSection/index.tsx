"use client";

import React from "react";
import dynamic from "next/dynamic";

const MerchantSlider = dynamic(() => import("./MerchantSlider"), {
  ssr: false,
});

const MerchantSection = () => {
  return (
    <section className="w-full relative pt-10 pb-[200px] overflow-hidden">
      <h2 className="text-4xl md:text-5xl px-4 mt-4 font-[900] text-center">
        What <span className="text-primary">Merchants</span> Say
      </h2>
      <div className="mt-10">
        <MerchantSlider />
      </div>
    </section>
  );
};

export default MerchantSection;
