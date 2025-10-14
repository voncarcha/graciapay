import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icons";

const FooterSection = () => {
  return (
    <section className="w-full relative px-6 py-20 bg-dark-blue">
      <footer className="flex max-w-[1280px] bg-dark-blue mx-auto gap-20 justify-between">
        <div className="flex-[0_0_50%]">
          <h3 className="text-2xl font-[900] text-white">GraciaPay</h3>
          <ul className="flex flex-col items-center gap-4 mt-6">
            <li className="text-sm text-white font-[400] list-disc list-outside ml-4">
              GraciaPay is the dedicated merchant payment platform of GraciaPay,
              a 100% Filipino-owned financial institution with a legacy of
              community-focused service since 1984. As a subsidiary of Vigan
              Banco Rural Incorporada (VBRI), GraciaPay is committed to
              empowering businesses across the Philippines with secure,
              efficient, and accessible digital payment solutions.
            </li>
            <li className="text-sm text-white font-[400] list-disc list-outside ml-4">
              Built on GraciaPay’s robust infrastructure, GraciaPay offers a
              comprehensive suite of payment services, including QR Ph,
              InstaPay, and PESONet, ensuring seamless transactions for
              merchants and their customers. Our platform is designed with
              top-tier security measures, including end-to-end encryption and
              compliance with PCI DSS standards, reflecting GraciaPay’s
              dedication to safeguarding your finances and personal information.
            </li>
            <li className="text-sm text-white font-[400] list-disc list-outside ml-4">
              At GraciaPay, we understand the challenges faced by businesses in
              today’s digital landscape. That’s why we provide a fully
              functional and secure dashboard, 24/7 customer support, and
              innovative features like payment links and recurring billing, all
              tailored to meet the unique needs of Filipino entrepreneurs.
            </li>
            <li className="text-sm text-white font-[400] list-disc list-outside ml-4">
              Our mission aligns with GraciaPay’s commitment to making banking
              efficient and enjoyable. We strive to eliminate the frustrations
              often associated with traditional banking by ensuring that our
              systems and processes run smoothly, with minimal errors and
              waiting times.
            </li>
            <li className="text-sm text-white font-[400] list-disc list-outside ml-4">
              Join us in transforming the way businesses handle payments. With
              GraciaPay, you’re not just adopting a payment solution; you’re
              becoming part of a movement towards a more inclusive and
              responsive financial ecosystem.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-[900] text-white">Subscribe</h3>
          <form className="mt-6 flex gap-4">
            <div className="relative w-[320px] rounded-full bg-white">
              <MailIcon className="w-5 h-5 absolute top-1/2 left-4 -translate-y-1/2 text-dark-blue" />
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="w-full pl-[45px] h-[44px]"
              />
            </div>
            <Button type="submit" className="w-[150px]">
              Subscribe
            </Button>
          </form>

          <h3 className="text-2xl font-[900] text-white mt-10">Contact Us</h3>
          <div className="mt-4 flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-white" />
              <Link
                href="mailto:info@graciapay.com"
                className="text-white hover:underline"
              >
                info@graciapay.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-white" />
              <Link
                href="tel:+63917xxxxxxx"
                className="text-white hover:underline"
              >
                +63917-xxx-xxxx
              </Link>
            </div>
          </div>

          <div className="mt-4 flex gap-4 items-center">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
          </div>

          <article className="mt-10 bg-primary p-6 rounded-lg">
            <h4 className="text-white font-[900] text-lg">
              Powered by GraciaPay. Regulated by BSP.
            </h4>
            <div className="flex gap-2 mt-4">
              <figure className="flex-[0_0_48px]">
                <Image
                  src="/images/bsp-logo.png"
                  alt="Logo"
                  width={48}
                  height={47}
                />
              </figure>
              <p className="text-white font-[400] text-xs">
                GraciaPay is operated by GraciaPay, a financial institution
                regulated by the Bangko Sentral ng Pilipinas (BSP). We comply
                with BSP Circulars on electronic payments, AMLA regulations, and
                the Data Privacy Act (RA 10173).
              </p>
            </div>
          </article>
        </div>
      </footer>
      <div className="text-center text-white text-md mt-6 pt-6 border-t border-[rgba(255,255,255,0.2)] max-w-[1280px] mx-auto">
        Copyright © 2025 GraciaPay. All rights reserved.
      </div>
    </section>
  );
};

export default FooterSection;
