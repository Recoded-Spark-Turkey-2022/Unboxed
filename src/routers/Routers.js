import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import SignupThanks from '../pages/signupThanks/SignupThanks';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup-thanks" element={<SignupThanks />} />
      </Routes>
    </div>
  );
};

export default Routers;
