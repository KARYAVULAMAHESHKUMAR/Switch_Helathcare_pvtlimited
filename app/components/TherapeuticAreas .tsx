import React from "react";
import { ArrowRight } from "lucide-react";

const therapeuticAreas = [
  {
    title: "Obstetrics & Gynaecology",
    image: "/Theraputrics/Obstetrics & Gynaecology.jpeg",
  },
  {
    title: "Paediatrics",
    image: "/Theraputrics/Paediatrics.jpeg",
  },
  {
    title: "Pain & Inflammation Management",
    image: "/Theraputrics/Pain & Inflammation Management.jpeg",
  },
];

const TherapeuticAreas = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] py-16 lg:py-24">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-br-[150px] bg-white/10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-t-full bg-white/5" />
      <div className="absolute top-0 right-0 w-[250px] h-full bg-white/5 skew-x-[-10deg]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="flex items-center gap-4 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Therapeutic Areas
            <ArrowRight size={40} />
          </h2>

          <p className="text-lg md:text-xl leading-8 text-white/90 max-w-5xl">
            Switch Healthcare Pvt. Ltd. is committed to delivering
            high-quality healthcare solutions through innovation, integrity,
            and excellence. With a growing portfolio of healthcare products,
            we focus on improving patient well-being and supporting healthcare
            professionals with reliable, effective, and trusted solutions.
            Our dedication to quality and continuous improvement drives us to
            create a healthier future for communities across the country.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapeuticAreas.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-[#0F4C81] font-bold text-base">
                  {item.title}
                </h3>

                <ArrowRight
                  size={18}
                  className="
                    text-[#0F4C81]
                    group-hover:translate-x-2
                    transition-transform
                    duration-300
                  "
                />
              </div>
            </div>
          ))}

          {/* Many More Card */}
          <div
            className="
              rounded-2xl
              border
              border-white/30
              bg-gradient-to-br
              from-[#0F4C81]
              via-[#1565C0]
              to-[#26A69A]
              flex
              items-center
              justify-center
              min-h-[280px]
              text-white
              font-bold
              text-xl
              hover:scale-105
              hover:shadow-2xl
              transition-all
              duration-500
              cursor-pointer
            "
          >
            <div className="text-center">
              <p>Many More</p>
              <ArrowRight className="mx-auto mt-3" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreas;