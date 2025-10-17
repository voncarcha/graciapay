import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icons";
import Button from "../ui/Button";
import Markdown from "../ui/Markdown";

const FooterSection = ({
  content = "Content for the Footer Section",
  contactEmail = "info@graciapay.com",
  contactPhone = "+63917-xxx-xxxx",
  facebookLink = "/#",
  youtubeLink = "/#",
  instagramLink = "/#",
  twitterLink = "/#",
}: {
  content?: string;
  contactEmail?: string;
  contactPhone?: string;
  facebookLink?: string;
  youtubeLink?: string;
  instagramLink?: string;
  twitterLink?: string;
}) => {
  return (
    <section className="w-full relative px-4 py-20 bg-dark-blue">
      <footer className="flex max-w-[1280px] bg-dark-blue mx-auto gap-10 xl:gap-20 justify-between flex-col lg:flex-row">
        <div className="flex-[0_0_50%]">
          <h3 className="text-2xl font-[900] text-white">GraciaPay</h3>
          <div className="mt-6 text-white text-sm font-[400]">
            <Markdown content={content} />
          </div>
        </div>
        <div className="flex-auto">
          <h3 className="text-2xl font-[900] text-white">Subscribe</h3>
          <form className="mt-6 flex gap-4">
            <div className="relative max-w-[320px] w-full rounded-full bg-white">
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
          <div className="mt-4 flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-white" />
              <Link
                href={`mailto:${contactEmail}`}
                className="text-white hover:underline"
              >
                {contactEmail}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-white" />
              <Link
                href={`tel:${contactPhone}`}
                className="text-white hover:underline"
              >
                {contactPhone}
              </Link>
            </div>
          </div>

          <div className="mt-4 flex gap-4 items-center">
            {facebookLink && <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>}
            {instagramLink && <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>}
            {twitterLink && <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>}
            {youtubeLink && <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>}
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
