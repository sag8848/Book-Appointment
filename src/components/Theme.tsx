import React from 'react'
import {useState} from 'react'
const Theme = () => {

    const [dark, setDark] = useState(false);
  return (
    <div 
    style={{
        background : dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: '100vh'
    }}
    >
        <button onClick={() => setDark(!dark)}>Change Theme</button>

    </div>
  )
}

export default Theme