"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "Our Story",
      path: "/ourstory",
    },
    {
      label: "Our Products",
      path: "/brands",
    },
    // {
    //   label: "Business Areas",
    //   path: "/businessareas",
    // },
    {
      label: "Board Of Directors",
      path: "/boardmembers",
    },
    {
      label: "Contact Us",
      path: "/contactus",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-24 lg:h-28 xl:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/switchhealthimages/image.png"
              alt="Switch Health"
              width={220}
              height={90}
              priority
              className="h-auto object-contain "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="
                  relative
                  text-lg
                  xl:text-xl
                  font-bold
                  tracking-wide
                  text-[#0F4C81]
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
                {item.label}
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

      {/* Accent Bar */}
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
              key={item.label}
              href={item.path}
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
              {item.label}
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
                hover:bg-[#5c4790]
                transition-colors
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