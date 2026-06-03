import React from "react";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Aceclofenac",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/aceclofenac.jpeg",
  },
  {
    name: "Caltrionix",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/caltrionix.jpeg",
  },
  {
    name: "Lysophen",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/lysophen.jpeg",
  },
  {
    name: "Lysophen-D",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/lysophen-d.jpeg",
  },
  {
    name: "Lysophen-LS",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/lysophen-ls.jpeg",
  },
  {
    name: "Met B9",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/met b9.jpeg",
  },
  {
    name: "Met-B9",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/Met-b9.jpeg",
  },
  {
    name: "Met B9 Syrup",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/Met b9 syrup.jpeg",
  },
  {
    name: "Met B9 XT",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/met b9 xt.jpeg",
  },
  {
    name: "Met B9 Xy Syrup",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/met b9 xy syrup.jpeg",
  },
  {
    name: "Resetod SP",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/resetod-sp.jpeg",
  },
  {
    name: "Switchvit Syrup",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/SWitchvitsyrup.jpeg",
  },
  {
    name: "UrocraVia",
    logo: "/switchhealthimages/logo.jpeg",
    product: "/switchhealthimages/urocraVia.jpeg",
  },
];

const ConsumerBrands = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] bg-clip-text text-transparent flex items-center gap-4">
  Consumer Healthcare Brands
  <ArrowRight size={50} className="hidden md:block text-[#1565C0]" />
</h2>

          <p className="text-gray-600 mt-4 text-lg">
            We care about your overall health
          </p>
        </div>

        {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border
        border-gray-100
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-3
        hover:scale-[1.03]
        transition-all
        duration-500
        cursor-pointer
      "
    >
      {/* Image */}
      <div className="relative h-[250px] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={brand.product}
          alt={brand.name}
          className="
            w-full
            h-full
            object-contain
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:rotate-1
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0F4C81]/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />
      </div>

      {/* Product Name */}
      <div className="p-5 border-t border-gray-100">
        <h3
          className="
            text-center
            font-bold
            text-lg
            text-[#2D216D]
            transition-all
            duration-300
            group-hover:text-[#0F4C81]
          "
        >
          {brand.name}
        </h3>

        <div
          className="
            w-0
            h-1
            mx-auto
            mt-3
            rounded-full
            bg-gradient-to-r
            from-[#0F4C81]
            to-[#26A69A]
            group-hover:w-16
            transition-all
            duration-500
          "
        />
      </div>
    </div>
  ))}
</div>
      </div>
     <br/>
      <hr/>
    </section>
  );
};

export default ConsumerBrands;
