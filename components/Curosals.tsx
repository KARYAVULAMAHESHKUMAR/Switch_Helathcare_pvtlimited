"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const members = [
  {
    id: 1,
    name: "Board Member",
    designation: "Executive Director",
    image: "/curosals/company.png",
  },
  {
    id: 2,
    name: "Board Member",
    designation: "Independent Director",
    image: "/curosals/Medicine2.png",
  },
  {
    id: 3,
    name: "Board Member",
    designation: "Director",
    image: "/curosals/Medicine3.png",
  },
  {
    id: 4,
    name: "Board Member",
    designation: "Director",
    image: "/curosals/Medicine4.png",
  },
  {
    id: 5,
    name: "Board Member",
    designation: "Director",
    image: "/curosals/Medicine5.png",
  },
];

const Curosals = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="w-full mx-auto">
        <div
          className="
            relative
            w-full
            overflow-hidden
            shadow-xl
            h-[220px]
            sm:h-[350px]
            md:h-[500px]
            lg:h-[700px]
            xl:h-[900px]
          "
        >
          <Image
            src={members[current].image}
            alt={members[current].name}
            fill
            priority
            className="object-cover transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white">
            {/* Uncomment if needed */}
            {/* <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">
              {members[current].name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg mt-1">
              {members[current].designation}
            </p> */}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 px-4">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-6 sm:w-8 h-2 sm:h-3 bg-blue-600"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curosals;