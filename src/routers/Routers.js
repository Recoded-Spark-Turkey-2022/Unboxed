import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="/Counsler" element={<Counsler />} />
      </Routes>
    </div>
  );
};

export default Routers;
