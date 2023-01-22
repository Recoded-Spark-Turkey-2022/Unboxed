import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import AddNewCard from '../pages/addNewCard/addNewCard';
import AddNewCardThankYou from '../pages/addNewCardThankYou/AddNewCardThankYou';
import Signup from '../pages/signup/Signup';
import SignupThanks from '../pages/signupThanks/SignupThanks';
import BlogDetails from '../features/blogs/BlogDetails';
import Thanks from '../pages/Thankyou/Thanks';
import ContactPage from '../pages/contact/ContactPage';
import ContactThanks from '../components/contact/ContactThanks';
import Team from '../pages/about/Team';
import Overview from '../pages/about/Overview';
import Careers from '../pages/about/Careers';

import BuyTickets from '../pages/buyTickets/BuyTickets';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="add-new-card" element={<AddNewCard />} />
        <Route path="add-new-card-thank-you" element={<AddNewCardThankYou />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup-thanks" element={<SignupThanks />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="/Counsler" element={<Counsler />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact-thank-you" element={<ContactThanks />} />
        <Route path="about/teams" element={<Team />} />
        <Route path="about/careers" element={<Careers />} />
        <Route path="about/overview" element={<Overview />} />
        <Route path="buy-ticket" element={<BuyTickets />} />
      </Routes>
    </div>
  );
};

export default Routers;
