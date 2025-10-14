import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const TopNavigation = () => {
  return (
    <section className="w-full px-6 fixed top-0 left-0 right-0 z-50">
      <nav className="mt-4 px-4 max-w-[1280px] mx-auto bg-glass rounded-full">
        <div className="h-[80px] flex items-center justify-between gap-4 max-w-[1240px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={46} height={46} />
            <span className="text-2xl font-[900] bg-gradient-to-t from-[#9d0000] to-[#0037af] bg-clip-text text-transparent">
              GraciaPay
            </span>
          </Link>
          <aside className="flex items-center gap-4">
            <div className="flex items-center gap-6 mr-10">
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
        </div>
      </nav>
    </section>
  );
};

export default TopNavigation;
