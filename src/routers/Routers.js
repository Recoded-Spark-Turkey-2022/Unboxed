import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ticket from '../components/ticket/Ticket';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
};

export default Routers;
