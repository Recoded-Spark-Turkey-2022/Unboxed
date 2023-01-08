import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import AddNewCard from '../pages/addNewCard/addNewCard';
import AddNewCardThankYou from '../pages/addNewCardThankYou/AddNewCardThankYou';
import Thanks from '../pages/Thankyou/Thanks';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="add-new-card" element={<AddNewCard />} />
        <Route path="add-new-card-thank-you" element={<AddNewCardThankYou />} />
        <Route path="/Counsler" element={<Counsler />} />
      </Routes>
    </div>
  );
};

export default Routers;
