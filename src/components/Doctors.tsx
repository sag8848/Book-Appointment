import DoctorCard from "./DoctorCard";
import SearchBar from "./SearchBar";

import doctor1 from "../assets/Doctor1.jpeg";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Yagya Raj Kharel",
    department: "Orthopedic",
    degree: "MBBS (BPKIHS), MS (NAMS)",
    experience: "15+ Years Experience",
    time: "10:00 AM - 5:00 PM",
  },
  {
    id: 2,
    image: doctor1,
    name: "Dr. Sanjiv Kumar Thakur",
    department: "ENT Surgery",
    degree: "MBBS, MS (ENT Surgeon)",
    experience: "10+ Years Experience",
    time: "10:00 AM - 5:00 PM",
  },
  {
    id: 3,
    image: doctor1,
    name: "Dr. Dinesh Neupane",
    department: "Internal Medicine",
    degree: "MBBS, MD",
    experience: "12+ Years Experience",
    time: "10:00 AM - 5:00 PM",
  },
];

const Doctors = () => {
  return (
    <section className="bg-gray-50 py-20">

      <h1 className="text-5xl font-bold text-center text-[#135D8C]">
        Find Your Doctor
      </h1>

      <p className="text-center text-gray-600 mt-4">
        Book an appointment with our expert doctors
      </p>

      <SearchBar />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {doctors.map((doctor) => (
          <DoctorCard
             key={doctor.id}
            image={doctor.image}
            name={doctor.name}
            department={doctor.department}
            degree={doctor.degree}
            experience={doctor.experience}
            time={doctor.time}
          />
        ))}

      </div>

    </section>
  );
};

export default Doctors;