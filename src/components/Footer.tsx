import logo from "../assets/logo.png";

import {
  FaChevronRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F5A8A] text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Hospital Info */}

        <div>
          <img
            src={logo}
            alt="logo"
            className="w-40 h-40 object-contain bg-white p-2"
          />

          <h2 className="text-2xl font-bold mt-8">
            Makalu Everest Hospital
          </h2>

          <p className="mt-6 text-lg leading-8">
            Committed to Compassionate Care and Lifelong Wellness.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h2 className="text-3xl font-bold mb-8">
            Quick Links
          </h2>

          <ul className="space-y-5">

            <li className="flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer">
              <FaChevronRight />
              Home
            </li>

            <li className="flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer">
              <FaChevronRight />
              About Us
            </li>

            <li className="flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer">
              <FaChevronRight />
              Services
            </li>

            <li className="flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer">
              <FaChevronRight />
              Contact Us
            </li>

            <li className="flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer">
              <FaChevronRight />
              Blogs
            </li>

          </ul>
        </div>

        {/* Services */}

        <div>
          <h2 className="text-3xl font-bold mb-8">
            Services
          </h2>

          <ul className="space-y-5">

            <li className="flex items-center gap-3">
              <FaChevronRight />
              Outpatient & Inpatient Care
            </li>

            <li className="flex items-center gap-3">
              <FaChevronRight />
              Diagnostic Services
            </li>

            <li className="flex items-center gap-3">
              <FaChevronRight />
              Pharmacy
            </li>

            <li className="flex items-center gap-3">
              <FaChevronRight />
              Ambulance Services
            </li>

            <li className="flex items-center gap-3">
              <FaChevronRight />
              Vaccination & Immunization
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>

          <h2 className="text-3xl font-bold mb-8">
            Contact Us
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope />
              info@makaluhospital.com
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              970-2048048
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt />
              Rangeli Road, Biratnagar, Nepal
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/30">

        <div className="max-w-7xl mx-auto py-8 text-center">

          <p>
            © 2026 Makalu Everest Hospital. All rights reserved.
          </p>

          <p className="mt-2">
            Designed and developed by <span className="font-bold">Youth IT</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;