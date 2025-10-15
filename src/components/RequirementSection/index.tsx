import React from "react";
import Image from "next/image";

const RequirementSection = () => {
  return (
    <section className="w-full relative px-6 py-10">
      <h2 className="text-4xl md:text-5xl mt-10 font-[900] text-center">Requirements</h2>
      <picture className="w-full max-w-[1280px] mx-auto block justify-center items-center mt-0 lg:mt-[-100px]">
        <source srcSet="/images/bg-requirements.webp" type="image/webp" />
        <Image
          src="/images/bg-requirements.png"
          alt="Requirement Section Background"
          width={1147}
          height={934}
          sizes="100vw"
        />
      </picture>
    </section>
  );
};

export default RequirementSection;
