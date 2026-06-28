import React from 'react'
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1 className='ml-10 mt-5 text-2xl'>{count}</h1>

        <button className='bg-emerald-600 text-white, border - rounded-2xl p-3 ml-5 text-white cursor-pointer' onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter