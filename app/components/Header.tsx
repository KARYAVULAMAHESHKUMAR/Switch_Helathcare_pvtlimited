"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import switchlogo from "../../public/switchhealthimages/switchlogo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Our Story",
    "Our Products",
    "Business Areas",
    "Careers",
    "Contact Us",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        {/* Main Header */}
        <div className="flex items-center justify-between h-24 lg:h-28 xl:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-start">
            <Image
              src={switchlogo}
              alt="Switch Health"
              width={260}
              height={90}
              priority
              className="w-[150px] md:w-[150px] lg:w-[180px] xl:w-[220px] h-auto object-contain rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="/"
                className="
                  relative
                  text-lg
                  xl:text-xl
                  font-bold
                  tracking-wide
                  text-gray-800
                  transition-all
                  duration-300
                  hover:text-[#6D56A6]
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[3px]
                  after:w-0
                  after:bg-[#6D56A6]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* Gradient Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#6D56A6] via-[#A88ACD] to-[#6D56A6]" />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="/"
              onClick={() => setIsOpen(false)}
              className="
                block
                px-6
                py-5
                text-lg
                font-semibold
                text-gray-800
                border-b
                hover:bg-gray-50
              "
            >
              {item}
            </Link>
          ))}

          <div className="p-6">
            <Link
              href="/contact"
              className="
                block
                text-center
                w-full
                bg-[#6D56A6]
                text-white
                py-4
                rounded-full
                text-lg
                font-bold
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
