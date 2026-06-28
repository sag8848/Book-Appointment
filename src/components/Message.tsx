import React from 'react'
import {useState} from "react";
const Message = () => {

    const [text, setText] =useState("Hello");
    
    const changeText = () =>{
        setText (text === "Hello" ? "Welcome" : "Hello")
    }
  return (
    <div className='m-5 p-4'>
<h1 className='text-2xl'>{text}</h1>
<button onClick={changeText} className='bg-emerald-600 w-[150px] text-white cursor-pointer p-3 rounded-[10px] hover:bg-emerald-700'> CLick</button>
    </div>
  )
}

export default Message