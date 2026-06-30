// import DoctorCard from "./DoctorCard";
// import SearchBar from "./SearchBar";

// import doctor1 from "../assets/Doctor1.jpeg";

// const doctors = [
//   {
//     id: 1,
//     image: doctor1,
//     name: "Dr. Yagya Raj Kharel",
//     department: "Orthopedic",
//     degree: "MBBS (BPKIHS), MS (NAMS)",
//     experience: "15+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
//   {
//     id: 2,
//     image: doctor1,
//     name: "Dr. Sanjiv Kumar Thakur",
//     department: "ENT Surgery",
//     degree: "MBBS, MS (ENT Surgeon)",
//     experience: "10+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
//   {
//     id: 3,
//     image: doctor1,
//     name: "Dr. Dinesh Neupane",
//     department: "Internal Medicine",
//     degree: "MBBS, MD",
//     experience: "12+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
// ];

// const Doctors = () => {
//   return (
//     <section className="bg-gray-50 py-60">

//       <h1 className="text-5xl font-bold text-center text-[#135D8C]">
//         Find Your Doctor
//       </h1>

//       <p className="text-center text-gray-600 mt-4">
//         Book an appointment with our expert doctors
//       </p>

//       <SearchBar />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

//         {doctors.map((doctor) => (
//           <DoctorCard
//              key={doctor.id}
//             image={doctor.image}
//             name={doctor.name}
//             department={doctor.department}
//             degree={doctor.degree}
//             experience={doctor.experience}
//             time={doctor.time}
//           />
//         ))}

//       </div>

//     </section>
//   );
// };

// export default Doctors;



// import DoctorCard from "./DoctorCard";
// import SearchBar from "./SearchBar";

// import doctor1 from "../assets/Doctor1.jpeg";

// const doctors = [
//   {
//     id: 1,
//     image: doctor1,
//     name: "Dr. Yagya Raj Kharel",
//     department: "Orthopedic",
//     degree: "MBBS (BPKIHS), MS (NAMS)",
//     experience: "15+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
//   {
//     id: 2,
//     image: doctor1,
//     name: "Dr. Sanjiv Kumar Thakur",
//     department: "ENT Surgery",
//     degree: "MBBS, MS (ENT Surgeon)",
//     experience: "10+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
//   {
//     id: 3,
//     image: doctor1,
//     name: "Dr. Dinesh Neupane",
//     department: "Internal Medicine",
//     degree: "MBBS, MD",
//     experience: "12+ Years Experience",
//     time: "10:00 AM - 5:00 PM",
//   },
// ];

// const Doctors = () => {
//   return (
//     <section className="bg-gray-50 py-60">
//       <h1 className="text-5xl font-bold text-center text-[#135D8C]">
//         Find Your Doctor
//       </h1>

//       <p className="text-center text-gray-600 mt-4">
//         Book an appointment with our expert doctors
//       </p>

//       <SearchBar />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
//         {doctors.map((doctor) => (
//           <DoctorCard
//             key={doctor.id}
//             image={doctor.image}
//             name={doctor.name}
//             department={doctor.department}
//             degree={doctor.degree}
//             experience={doctor.experience}
//             time={doctor.time}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Doctors;


import DoctorCard from "./DoctorCard";
import SearchBar from "./SearchBar";

import doctor1 from "../assets/Doctor1.jpeg";

import React from 'react'


const doctors = [
  {
    id:1,
    image: doctor1,
    name: "Dr. Yagya Raj Kharel",
    department: "Orthopedic",
    degree: "MBBS (BPKIHS), MS (NAMS)",
    experience: "15+ Years Experience",
    time: "10:00 AM - 5:00 PM",
    description: "Dr. Yagya Raj Kharel is a highly skilled orthopedic surgeon with over 15 years of experience in treating musculoskeletal disorders. He specializes in joint replacement and sports injuries."
  },
  {
    id:2,
    image: doctor1,
    name: "Dr. Sanjiv Kumar Thakur",
    department: "ENT Surgery",
    degree: "MBBS, MS (ENT Surgeon)",
    experience: "10+ Years Experience",
    time: "10:00 AM - 5:00 PM",
    description: "Dr. Sanjiv Kumar Thakur is an experienced ENT surgeon with a decade of expertise in treating ear, nose, and throat conditions. He is known for his compassionate care and advanced surgical techniques."
  },
  {
    id:3,
    image: doctor1,
    name: "Dr. Dinesh Neupane",
    department: "Internal Medicine",
    degree: "MBBS, MD",
    experience: "12+ Years Experience",
    time: "10:00 AM - 5:00 PM",
    description: "Dr. Dinesh Neupane is a dedicated internal medicine specialist with over 12 years of experience in diagnosing and managing complex medical conditions. He is committed to providing personalized care to his patients."
  },
];

const Doctors = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-10">
      <h1 className="text-5xl font-bold text-center text-[#135D8C]">
        Find Your Doctor
      </h1>
      <p className="text-center text-gray-600 mt-4">
        Book an appointment with our expert doctors
      </p>
      <SearchBar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {doctors.map((doctor)=> (
          <DoctorCard
            key={doctor.id}
            image={doctor.image}
            name={doctor.name}
            department={doctor.department}
            degree={doctor.degree}
            experience={doctor.experience}
            time={doctor.time}
            description={doctor.description}
          />
        
        ))}

    </div>
    </section>
  )
}

export default Doctors;