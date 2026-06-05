import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-[#0F4C81] via-[#1565C0] to-[#26A69A] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Section */}
          <div className="lg:col-span-2">
            <div className="relative border border-[#9E8BD8] p-8 bg-[#1b1449]/30">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#9E8BD8]" />

              <h2 className="text-2xl font-semibold mb-8">
                Switch Health Care Pvt Ltd.
              </h2>

              <p className="mb-8">
                <span className="font-semibold mr-2">GSTIN/UIN</span>
                36ABMCS6015K1ZZ
              </p>

              <div className="flex items-start gap-4 mb-8">
                <FaLocationDot className="mt-1 text-xl shrink-0" />
                <p className="leading-7">
                  H.No. 9-141/1, Ground Floor, Street-3,
                  <br />
                  Maruthi Nagar, Medipally,
                  <br />
                  Medchal-Malkajgiri,
                  <br />
                  Hyderabad - 500098,
                  <br />
                  Telangana, India
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <FaPhone />
                <p>+91 9642480074,+91 8885665580</p>
              </div>

              {/* <div className="flex items-center gap-4">
                <span className="font-semibold">DL No:</span>
                <p>20B/TG/MDL/2024-126833, 21B/TG/MDL/2024-126833</p>
              </div> */}
            </div>

            {/* Social Icons */}
            <div className="flex gap-8 mt-10 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <FaFacebookF className="text-[#1877F2] text-2xl" />
              </div>

              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <FaLinkedinIn className="text-[#0A66C2] text-2xl" />
              </div>

              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <FaXTwitter className="text-black text-2xl" />
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Our Story</h3>

            <ul className="space-y-5 text-gray-300">
              <li>Overview</li>
              <li>Switch Group</li>
              <li>Board of Directors</li>
              <li>Core Values</li>
              <li>Milestones</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Our Products</h3>

            <ul className="space-y-5 text-gray-300">
              <li>Overview</li>
              <li>MET B9 TAB</li>
              <li>MET B9 LC TAB</li>
              <li>MET B9 SYR</li>
              <li>RESETOD TH TAB</li>
              <li>RESETOD SP TAB</li>
              <li>LYSOPHEN LS SYR</li>
              <li>LYSOPHEN D SYR</li>
              <li>LYSOPHEN LS JR SYR</li>
              <li>CALTRIONIX TAB</li>
              <li>UROCRAVIA TAB</li>
              <li>MET B9 XT TAB</li>
              <li>MET B9 XT SYR</li>
              <li>SWITCHVIT SYR</li>
            </ul>
          </div>
          {/* Manufacturing */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Manufacturing</h3>

            <ul className="space-y-5 text-gray-300">
              <li>Overview</li>
              <li>Telangana</li>
              <li>Hyderabd</li>
              <li>Secundrabad</li>
              <li>Patancheruvu</li>
            </ul>
          </div>

          {/* Beyond Business */}
          {/* <div>
            <h3 className="text-3xl font-semibold mb-8">
              Beyond Business
            </h3>

            <ul className="space-y-5 text-gray-300">
              <li>Our Philosophy</li>
              <li>Community Healthcare</li>
              <li>Education & Knowledge Enhancement</li>
              <li>Arts, Culture & Wellbeing</li>
              <li>Ecology</li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0F4C81] py-5">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-center items-center">
    <p className="text-sm text-center">
      Switch Healthcare Pvt Ltd. © Copyright 2026. All rights reserved.
    </p>
  </div>
</div>
    </footer>
  );
};

export default Footer;
