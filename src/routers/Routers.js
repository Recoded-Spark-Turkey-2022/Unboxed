import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';

import Signup from '../pages/signup/Signup';
import SignupThanks from '../pages/signupThanks/SignupThanks';

import Thanks from '../pages/Thankyou/Thanks';
import Contact from '../pages/contact/Contact';


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup-thanks" element={<SignupThanks />} />
        <Route path="/Counsler" element={<Counsler />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routers;
