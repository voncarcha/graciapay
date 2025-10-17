"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TextAlignJustify, X } from "lucide-react";
import Button from "../ui/Button";

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < prevScrollYRef.current;
      const nearTop = currentY < 10;
      setShowNav(isScrollingUp || nearTop);
      prevScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <section
      className={`w-full px-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav || isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`${
          isOpen ? "bg-[rgba(255,255,255,0.95)]" : "bg-white"
        } shadow-md mt-4 px-4 max-w-[1280px] mx-auto rounded-[40px]`}
      >
        <div className="h-[80px] flex items-center justify-between gap-4 max-w-[1240px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-text.png"
              alt="Logo"
              width={200}
              height={56}
              priority
            />
          </Link>
          <aside className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-4 xl:gap-6 xl:mr-6">
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              <Link
                href="/#payment-gateway"
                className="text-primary hover:underline"
              >
                Payment Gateway
              </Link>
              <Link href="/" className="text-primary hover:underline">
                Merchant Form
              </Link>
              <a
                href="https://apidoc.graciapay.com/"
                className="text-primary hover:underline"
              >
                API Reference
              </a>
            </div>
            <Button
              variant="outlined"
              className="w-[120px]"
              onClick={() =>
                window.open("https://merchants.graciapay.com", "_blank")
              }
            >
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
              <Link
                href="/"
                className="text-primary text-lg hover:underline"
                onClick={handleCloseMenu}
              >
                Home
              </Link>
              <Link
                href="/#payment-gateway"
                className="text-primary text-lg hover:underline"
                onClick={handleCloseMenu}
              >
                Payment Gateway
              </Link>
              <Link
                href="/"
                className="text-primary text-lg hover:underline"
                onClick={handleCloseMenu}
              >
                Merchant Form
              </Link>
              <a
                href="https://apidoc.graciapay.com/"
                className="text-primary text-lg hover:underline"
                onClick={handleCloseMenu}
              >
                API Reference
              </a>
              <Button
                variant="outlined"
                className="w-[120px]"
                onClick={() =>
                  window.open("https://merchants.graciapay.com", "_blank")
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open("https://merchants.graciapay.com", "_blank");
                    handleCloseMenu();
                  }
                }}
              >
                Login
              </Button>
              <Button
                className="w-[120px]"
                onClick={handleCloseMenu}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCloseMenu();
                  }
                }}
              >
                Register
              </Button>
            </div>
          </aside>
        )}
      </nav>
    </section>
  );
};

export default TopNavigation;
