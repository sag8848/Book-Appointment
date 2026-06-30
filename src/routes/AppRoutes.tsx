import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Aboutus from '../pages/AboutUs';
import Department from '../pages/Department';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Doctors from '../components/Doctors';
import PageNotFound from '../pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="departments" element={<Department />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/appointment" element={<Doctors />} />
          <Route path="*" element={<PageNotFound />} />
               
        </Route>
      </Routes>
       
  )
  
}

export default AppRoutes