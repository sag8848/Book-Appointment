import React from 'react'
import {useState} from "react";

const TwoCounter = () => {
    const [increase, setIncrease] = useState(0);
  return (
    <>
    <div>
        <h1 className='ml-10 mt-5 text-2xl'>{increase}</h1>

        <button className='bg-emerald-600 text-white, border - rounded-2xl p-3 ml-5 text-white cursor-pointer' 
        onClick={()=> setIncrease(increase + 1)}>Increase</button>
    
        <button className='bg-emerald-600 text-white, border - rounded-2xl p-3 ml-5 text-white cursor-pointer ' 
        onClick={()=> setIncrease(increase - 1)}>Decrease</button>
    </div>

    </>
  )
}

export default TwoCounter