import React from "react";
import Image from "next/image";

const GovSection = () => {
  return (
    <section className="w-full relative px-6">
      <div className="rounded-3xl w-full relative p-10 mb-[150px] max-w-[1280px] mx-auto bg-dark-blue">
        <div className="flex items-center justify-center gap-[100px]">
          <figure className="relative block mt-[-80px]">
            <Image
              src="/images/gov.png"
              alt="Gov Thumbnail"
              width={438}
              height={530}
            />
          </figure>
          <article className="flex-1 text-white">
            <h2 className="text-5xl font-bold leading-[1.4]">
              Start Accepting
              <br />
              Digital Payments
            </h2>
            <ul className="mt-12 flex flex-col gap-4">
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  STEP 1
                </span>
                <p>Complete the [Merchant Application Form]</p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  STEP 2
                </span>
                <p>Submit your required documents</p>
              </li>
              <li className="flex gap-6 items-center">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  STEP 3
                </span>
                <p>
                  Activate your merchant dashboard and go live within 1–3
                  business days
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GovSection;
