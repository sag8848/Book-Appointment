import { useState } from "react";
import { FaUserMd, FaCalendarAlt } from "react-icons/fa";

type DoctorProps = {
  image: string;
  name: string;
  department: string;
  degree: string;
  experience: string;
  time: string;
  description: string;
};

const DoctorCard = ({
  image,
  name,
  department,
  degree,
  experience,
  time,
  description,
}: DoctorProps) => {
  const [showMore, setShowMore] = useState(false);

  
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center">

      {/* Doctor Image */}
      <img
        src={image}
        alt={name}
        className="w-48 h-48 mx-auto rounded-full border-4 border-blue-100 object-cover"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold text-[#135D8C] mt-2">
        {name}
      </h2>

      {/* Department */}
      <p className="text-cyan-600 text-lg">
        {department}
      </p>

      {/* Degree */}
      <p className="text-cyan-600 text-lg">
        {degree}
      </p>

      {/* Experience */}
      <div className="flex justify-center items-center gap-3 mt-1 text-gray-700">
        <FaUserMd className="text-[#135D8C]" />
        <span>{experience}</span>
      </div>

      {/* Time */}
      <div className="flex justify-center items-center gap-3  text-gray-700">
        <FaCalendarAlt className="text-[#135D8C]" />
        <span>{time}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-8">
        {showMore ? description : description.slice(0, 65) + "..."}
      </p>

      {/* See More / See Less */}
      <button
        onClick={() => setShowMore(!showMore)}
        className=" text-cyan-600 hover:text-[#135D8C] font-semibold cursor-pointer transition-colors duration-300"
      >
        {showMore ? "See Less" : "See More"}
      </button>

      {/* Button */}
      <button
        className="w-full mt-4 bg-[#135D8C] text-white py-4 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-[#2F55D4] hover:shadow-xl hover:-translate-y-1 active:scale-95"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;


// import { FaUserMd, FaCalendarAlt } from "react-icons/fa";

// type DoctorProps = {
//   image: string;
//   name: string;
//   department: string;
//   degree: string;
//   experience: string;
//   time: string;
// };

// const DoctorCard = ({
//   image,
//   name,
//   department,
//   degree,
//   experience,
//   time,
// }: DoctorProps) => {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center">
//       <img
//         src={image}
//         alt={name}
//         className="w-48 h-48 mx-auto rounded-full border-4 border-blue-100 object-cover"
//       />

//       <h2 className="text-4xl font-bold text-[#135D8C] mt-8">
//         {name}
//       </h2>

//       <p className="text-cyan-600 text-2xl mt-2">
//         {department}
//       </p>

//       <p className="text-cyan-600 mt-4 text-lg">
//         {degree}
//       </p>

//       <div className="flex justify-center items-center gap-3 mt-8 text-gray-700">
//         <FaUserMd className="text-[#135D8C]" />
//         <span>{experience}</span>
//       </div>

//       <div className="flex justify-center items-center gap-3 mt-4 text-gray-700">
//         <FaCalendarAlt className="text-[#135D8C]" />
//         <span>{time}</span>
//       </div>

//       <button
//         className="w-full mt-8 bg-[#135D8C] text-white py-4 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-[#2F55D4] hover:shadow-xl hover:-translate-y-1 active:scale-95"
//       >
//         Book Appointment
//       </button>
//     </div>
//   );
// };

// export default DoctorCard;

// import React from 'react'
// import { FaUserMd, FaCalendarAlt } from "react-icons/fa";

// type DoctorProps = {
//   image: string;
//   name: string;
//   department: string;
//   degree: string;
//   experience: string;
//   time: string;
// }


// const DoctorCard = ({
//   image, 
//   name,
//   department,
//   degree,
//   experience, 
//   time,
// }:DoctorProps) => {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center">
//       <img src={image} alt={name} className="w-48 h-48 mx-auto rounded-full border-4 border-blue-100 object-cover" />

//       <h2 className="text-4xl font-bold text-[#135D8C] mt-8">{name}</h2>

//       <p className="text-cyan-600 text-2xl mt-2">{department}</p>

//       <p className="text-cyan-600 mt-4 text-lg">{degree}</p>

//       <div className="flex justify-center items-center gap-3 mt-8 text-gray-700">
//         <FaUserMd className="text-[#135D8C]" />
//         <span>{experience}</span>
//       </div>

//       <div className="flex justify-center items-center gap-3 mt-4 text-gray-700">
//         <FaCalendarAlt className="text-[#135D8C]" />
//         <span>{time}</span>
//       </div>
//     </div>
//   )
// }

// export default DoctorCard