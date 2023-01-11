import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import Edit from '../pages/Profile-Edit/Profile-Edit';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="/Edit-Profile" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default Routers;
