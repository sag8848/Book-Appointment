import React from "react";
import DN from "../assets/DN.png";

const AboutMakaluEverest = () => {
  return (
    
      <div className="max-w-7xl mx-auto px-6 flex  lg:flex-row items-center gap-14 py-20">

        {/* Left Image */}
        <div className="flex-1.2">
          <img
            src={DN}
            alt="Doctor and Nurse"
            className="w-full h-[550px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-[#0E5A8F] text-4xl font-bold">
            About <span className="text-[#0E9FAF]">Makalu Everest Hospital</span>
          </h3>

          <h2 className="text-2xl font-bold text-[#2e466e] mt-6 leading-tight">
            Your Smile & Happiness Is Our Mission
          </h2>

          <p className="mt-8 text-small text-gray-600 leading-9">
            Makalu Everest Hospital is a leading multi-specialty hospital in
            Biratnagar, Nepal.
            <br />
            Our mission is to offer world-class medical care with compassion
            and integrity.
            <br />
            Established with the vision of bridging the gap in quality
            healthcare, we have been serving patients with advanced treatments
            and patient-friendly services.
          </p>

          <button className="mt-10 bg-[#0E9FAF] hover:bg-[#0E5A8F] text-white px-8 py-3 rounded-[15px] transition">
            Explore More
          </button>
        </div>

      </div>
    
  );
};

export default AboutMakaluEverest;