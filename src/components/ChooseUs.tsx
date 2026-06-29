import React from "react";
import WhyChooseCard from "./WhyChooseCard";

import {
  FaAmbulance,
  FaHospital,
  FaMoneyBill,
  FaHandshake,
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: FaAmbulance,
    title: "24/7 Emergency & Trauma Care",
    description:
      "Our emergency and trauma unit is available 24/7 with dedicated doctors and nurses.",
  },
  {
    id: 2,
    icon: FaUserDoctor,
    title: "Highly Experienced Doctors & Surgeons",
    description:
      "Our hospital is home to highly skilled doctors and surgeons with years of experience.",
  },
  {
    id: 3,
    icon: FaHospital,
    title: "Modern Diagnostic & Surgical Facilities",
    description:
      "We use advanced diagnostic tools and state-of-the-art surgical facilities.",
  },
  {
    id: 4,
    icon: FaHandshake,
    title: "Patient-Centric Approach",
    description:
      "Every patient is treated with care, respect, and personalized attention.",
  },
  {
    id: 5,
    icon: FaMoneyBill,
    title: "Affordable & Transparent Healthcare",
    description:
      "Quality healthcare should be accessible to everyone with transparent billing.",
    active: true,
  },
];

const ChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-center text-[#135D8C] mb-16">
        Why Choose Us
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <WhyChooseCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            active={feature.active}
          />
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;