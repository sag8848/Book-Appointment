import React from 'react'
import Navbar from './components/Navbar'
import Doctors from "./components/Doctors";
import Footer from './components/Footer';
import Counter from './components/Counter';
import TwoCounter from './components/TwoCounter';
import Message from './components/Message';
import Theme from './components/Theme';

const App = () => {
  return (
    <>
    {/* <Navbar />
    
    <Doctors />
    
    <Footer /> */}

    <Counter />
    < TwoCounter />
    <Message />
    <Theme />

    </>
  )
}

export default App
