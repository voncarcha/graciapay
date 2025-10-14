import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[800px] mt-[100px] flex items-center justify-center">
      <article className="w-full max-w-[750px] mx-auto text-center mt-[-100px]">
        <h1 className="text-5xl font-[900] leading-[1.2]">
          <span className="text-primary">One platform.</span> Every payment.
          Everywhere.
        </h1>
        <p className="text-lg font-[400] leading-[1.5] mt-6">
          GraciaPay is the official merchant payment platform under GraciaPay, a
          BSP-regulated financial institution in the Philippines.
        </p>
      </article>
    </section>
  );
};

export default HeroSection;
