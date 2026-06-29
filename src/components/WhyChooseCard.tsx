import React from "react";
import type { IconType } from "react-icons";

type WhyChooseCardProps = {
  icon: IconType;
  title: string;
  description: string;
  active?: boolean;
};

const WhyChooseCard = ({
  icon: Icon,
  title,
  description,
  active = false,
}: WhyChooseCardProps) => {
  return (
    <div
      className="rounded-3xl shadow-lg p-10 text-center transition-all
    duration-300 hover:bg-[#135D8C] hover:text-white hover:-translate-y-3 
    hover:z-10 hover:shadow-[0_20px_50px_rgba(19,93,140,0.35)]
      "
    >
      <div
        className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-8
        ${
          active
            ? "bg-white text-[#135D8C]"
            : "bg-cyan-100 text-[#135D8C]"
        }`}
      >
        <Icon className="text-5xl" />
      </div>

      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <p className="text-lg leading-9">{description}</p>
    </div>
  );
};

export default WhyChooseCard;