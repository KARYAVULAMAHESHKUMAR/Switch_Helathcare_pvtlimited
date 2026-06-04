import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  BadgeCheck,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#0F4C81] font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mt-2">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] text-white p-10">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={32} />
                <h3 className="text-3xl font-bold">
                  SWITCH HEALTH CARE PVT LTD
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1" />
                  <p className="leading-relaxed">
                    H.No. 9-141/1, Ground Floor, Street-3,
                    <br />
                    Maruthi Nagar, Medipally,
                    <br />
                    Medchal-Malkajgiri,
                    <br />
                    Telangana - 500098
                  </p>
                </div>

                <div className="flex gap-4">
                  <Phone />
                  <p>+91 96424 80074</p>
                </div>

                <div className="flex gap-4">
                  <Mail />
                  <p>info@switchhealthcare.com</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-10">
              <h4 className="text-2xl font-bold text-gray-800 mb-8">
                Company Information
              </h4>

              <div className="space-y-5">
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-600">
                    GSTIN / UIN
                  </span>
                  <span className="font-medium">
                    36ABMCS6015K1ZZ
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-600">
                    State
                  </span>
                  <span className="font-medium">
                    Telangana (Code: 36)
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-600">
                    Drug License
                  </span>
                  <span className="font-medium">
                    20B/TG/MDL/2024-126833
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-600">
                    Drug License
                  </span>
                  <span className="font-medium">
                    21B/TG/MDL/2024-126833
                  </span>
                </div>
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <BadgeCheck className="text-green-600" />
                <p className="text-green-700 font-medium">
                  Registered & Licensed Healthcare Company
                </p>
              </div>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;