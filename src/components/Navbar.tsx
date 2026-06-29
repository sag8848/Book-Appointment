import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-md transition-all duration-500">
    <div className='flex item-center justify-around gap-10 m-10 z-10'>
        <h1 className='text-[#135D8C] font-bold text-3xl'>Makalu Everest Hospital</h1>
         <ul className="flex gap-10 text-[#129DA8] font-medium pt-3">
  <li>
    <Link
      to="/"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      to="/departments"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      Departments
    </Link>
  </li>

  <li>
    <Link
      to="/services"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      Services
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      Contact Us
    </Link>
  </li>

  <li>
    <Link
      to="/blog"
      className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]"
    >
      Blog
    </Link>
  </li>
</ul>
    
    <button className='p-5 py-2 rounded-full border-2 border-[#135D8C] text-[#135D8C] hover:bg-[#135D8C] hover:text-white transition'>Book an Appointment</button>
    </div>
    </nav>
    </>
  )
}

export default Navbar