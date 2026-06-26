import React from 'react'
import Navbar from './components/Navbar'
import Doctors from "./components/Doctors";
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar />
    <main className="pt-28">
    <Doctors />
    </main>
    <Footer />
    </>
  )
}

export default App