import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-md transition-all duration-500">
    <div className='flex item-center justify-around gap-10 m-10 z-10'>
        <h1 className='text-[#135D8C] font-bold text-3xl'>Makalu Everest Hospital</h1>
         <ul className="flex gap-10 text-[#129DA8] font-medium pt-3">
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">Home</li>
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">About Us</li>
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">Departments</li>
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">Services</li>
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">Contact Us</li>
      <li className="cursor-pointer transition-all duration-300 hover:text-[#135D8C]">Blog</li>
    </ul>
    <button className='p-5 py-2 rounded-full border-2 border-[#135D8C] text-[#135D8C] hover:bg-[#135D8C] hover:text-white transition'>Book an Appointment</button>
    </div>
    </nav>
    </>
  )
}

export default Navbar