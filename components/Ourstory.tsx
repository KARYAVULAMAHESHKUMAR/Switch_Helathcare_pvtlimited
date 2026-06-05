"use client";

import React from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

const OurStory = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-sm font-semibold mb-4">
            About Switch Healthcare
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Building Trust Through Healthcare Excellence
          </h1>

          <p className="max-w-4xl mx-auto text-lg lg:text-xl leading-8 opacity-90">
            Dedicated to delivering safe, effective, and affordable
            pharmaceutical solutions that improve lives across India.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#0F4C81] font-semibold uppercase">
              Our Journey
            </span>

            <h2 className="text-4xl font-bold text-[#0F4C81] mt-3 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              At SWITCH HEALTHCARE PVT. LTD., we believe quality healthcare
              should be accessible to everyone.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Founded with a vision to improve lives through trusted
              pharmaceutical solutions, we are committed to delivering
              high-quality, safe, and effective medicines across India.
            </p>

            <p className="text-gray-600 leading-8">
              Through innovation, quality assurance, and ethical business
              practices, we continue to strengthen healthcare outcomes and
              support medical professionals with reliable therapeutic solutions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#0F4C81]">
              Why Choose Us
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>✓ Quality Assured Pharmaceutical Products</li>
              <li>✓ Ethical & Transparent Business Practices</li>
              <li>✓ Affordable Healthcare Solutions</li>
              <li>✓ Strong Distribution Network</li>
              <li>✓ Customer-Centric Approach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#0F4C81] mb-5">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To become a trusted and respected pharmaceutical company known
                for quality, innovation, and patient care.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#0F4C81] mb-5">
                Our Mission
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• Deliver high-quality pharmaceutical products.</li>
                <li>• Support healthcare professionals.</li>
                <li>• Ensure affordability and accessibility.</li>
                <li>• Maintain ethics and compliance.</li>
                <li>• Contribute to a healthier society.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Our Core Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <ShieldCheck className="mx-auto text-[#0F4C81]" size={50} />
            <h4 className="font-bold text-xl mt-4 text-[#0F4C81]">Quality</h4>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <HeartHandshake className="mx-auto text-[#0F4C81]" size={50} />
            <h4 className="font-bold text-xl mt-4 text-[#0F4C81]">Trust</h4>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <Lightbulb className="mx-auto text-[#0F4C81]" size={50} />
            <h4 className="font-bold text-xl text-[#0F4C81] mt-4">Innovation</h4>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <Users className="mx-auto text-[#0F4C81]" size={50} />
            <h4 className="font-bold text-xl text-[#0F4C81] mt-4">Patient Care</h4>
          </div>
        </div>
      </div>

      {/* Founder Message */}
      <div className="bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Founder’s Message
          </h2>

          <p className="text-xl leading-10 italic">
            "At SWITCH Healthcare, our purpose is not only to provide medicines
            but to create a positive impact on people's lives. Every product we
            deliver reflects our commitment to quality, trust, and patient
            well-being."
          </p>

          <div className="mt-8 text-lg font-semibold">
            — Managing Director
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#6D56A6]">50+</h3>
              <p className="mt-2 text-gray-600">Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6D56A6]">100+</h3>
              <p className="mt-2 text-gray-600">Healthcare Partners</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6D56A6]">10+</h3>
              <p className="mt-2 text-gray-600">Therapeutic Solutions</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6D56A6]">100%</h3>
              <p className="mt-2 text-gray-600">Quality Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;