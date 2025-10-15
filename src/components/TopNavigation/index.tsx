"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { TextAlignJustify, X } from "lucide-react";

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full px-4 fixed top-0 left-0 right-0 z-50">
      <nav className={`${isOpen ? "bg-[rgba(255,255,255,0.95)]" : "bg-glass"} mt-4 px-4 max-w-[1280px] mx-auto rounded-[40px]`}>
        <div className="h-[80px] flex items-center justify-between gap-4 max-w-[1240px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-text.png"
              alt="Logo"
              width={200}
              height={56}
            />
          </Link>
          <aside className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-4 xl:gap-6 xl:mr-6">
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              <Link href="/" className="text-primary hover:underline">
                Merchant Form
              </Link>
              <Link href="/" className="text-primary hover:underline">
                Payment Gateway
              </Link>
              <Link href="/" className="text-primary hover:underline">
                API Reference
              </Link>
            </div>
            <Button variant="outlined" className="w-[120px]">
              Login
            </Button>
            <Button className="w-[120px]">Register</Button>
          </aside>
          {!isOpen ? (
            <button
              className="block lg:hidden mr-4"
              onClick={() => setIsOpen(true)}
            >
              <TextAlignJustify className="text-primary w-[32px] h-[32px]" />
            </button>
          ) : (
            <button
              className="block lg:hidden mr-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="text-primary w-[32px] h-[32px]" />
            </button>
          )}
        </div>
        {isOpen && (
          <aside className="py-4 px-4 h-auto block lg:hidden">
            <div className="flex flex-col items-center gap-4 mb-[40px]">
              <Link href="/" className="text-primary text-lg hover:underline">
                Home
              </Link>
              <Link href="/" className="text-primary text-lg hover:underline">
                Merchant Form
              </Link>
              <Link href="/" className="text-primary text-lg hover:underline">
                Payment Gateway
              </Link>
              <Link href="/" className="text-primary text-lg hover:underline">
                API Reference
              </Link>
              <Button variant="outlined" className="w-[120px]">
                Login
              </Button>
              <Button className="w-[120px]">Register</Button>
            </div>
          </aside>
        )}
      </nav>
    </section>
  );
};

export default TopNavigation;
