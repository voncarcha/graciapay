import React from "react";
import Image from "next/image";

const RequirementSection = () => {
  return (
    <section className="w-full relative px-6 py-10">
      <h2 className="text-5xl mt-4 font-[900] text-center">
        Requirements
      </h2>
      <figure className="w-full max-w-[1280px] mx-auto flex justify-center items-center mt-[-200px]">
        <Image
          src="/images/bg-requirements.png"
          alt="Requirement Section Background"
          width={1147}
          height={934}
          sizes="100vw"
        />
      </figure>
    </section>
  );
};

export default RequirementSection;
