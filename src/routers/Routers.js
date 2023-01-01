import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import Thanks from '../pages/Thankyou/Thanks';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routers;
