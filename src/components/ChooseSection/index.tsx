import React from "react";
import Image from "next/image";
import { CheckIcon, X } from "lucide-react";

const ChooseSection = () => {
  return (
    <section className="w-full relative px-6 py-10">
      <article className="w-full max-w-[1280px] mx-auto">
        <h2 className="text-5xl mt-4 font-[900] text-center">
          Why Choose <span className="text-primary">GraciaPay</span>
        </h2>
        <p className="text-lg font-[400] mt-6 text-center">
          We serve a wide range of businesses:
        </p>
      </article>
      <ul className="mt-10 max-w-[1280px] mx-auto flex flex-col gap-4">
        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-4">
          <span className="text-lg text-white font-[400] flex-[0_0_40%]"></span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <Image src="/images/logo.png" alt="Logo" width={56} height={56} />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <span className="font-bold text-lg">Tradional Provides</span>
          </span>
        </li>
        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Regulated under BSP (Powered by: GraciaPay)
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
        </li>
        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            QRPH & e-wallet support
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Unified dashboard
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Onboarding in 72 hours
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Real-time transaction logs
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            End-to-end customer support
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Developer-friendly API
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </span>
        </li>

        <li className="flex items-center gap-2 bg-dark-blue rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-[400] flex-[0_0_40%]">
            Customization
          </p>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-[#ECD145]" />
          </span>
          <span className="flex-[0_0_30%] text-white flex items-center justify-center">
            <span className="text-md">Limited</span>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ChooseSection;
