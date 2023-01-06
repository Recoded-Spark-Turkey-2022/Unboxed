import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import BlogDetails from '../features/blogs/BlogDetails';
import Thanks from '../pages/Thankyou/Thanks';
import Contact from '../pages/contact/Contact';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="/Counsler" element={<Counsler />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routers;
