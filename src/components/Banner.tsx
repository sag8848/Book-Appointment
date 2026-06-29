import React from 'react'
import BannerImage from '../assets/Banner.png'

const Banner = () => {
  return (
    
    <div className="min-h-screen bg-no-repeat bg-right bg-contain flex flex-col items-start justify-center gap-7  pl-9 pt-[140px]"
  style={{ backgroundImage: `url(${BannerImage})` }}>
        
           <h1 className='text-[#0E5A8F] text-6xl font-bold mt-8 ml-5'>
           Caring For Your<span className='text-[#0E9FAF]' ><br />Healthy Life</span> 
           </h1> 
           
           
           <p className='text-[#2C3E5C] text-lg ml-5'>
             Experience world-class care from professionals who put your well-being <br/>first.
           </p>
           
           <button className='ml-5 bg-[#0E5A8F] text-white px-6 py-3 rounded-md hover:bg-[#0E9FAF] transition duration-300'>
             Explore Services
           </button>
        
    </div>
  )
}

export default Banner