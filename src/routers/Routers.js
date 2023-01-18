import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counsler from '../components/Counsler/Counsler';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import AddNewCard from '../pages/addNewCard/addNewCard';
import AddNewCardThankYou from '../pages/addNewCardThankYou/AddNewCardThankYou';
// import Signup from '../pages/signup/Signup';
// import SignupThanks from '../pages/signupThanks/SignupThanks';
import BlogDetails from '../features/blogs/BlogDetails';
import Thanks from '../pages/Thankyou/Thanks';
import Contact from '../pages/contact/Contact';
import ContactThanks from '../components/contact/ContactThanks';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="add-new-card" element={<AddNewCard />} />
        <Route path="add-new-card-thank-you" element={<AddNewCardThankYou />} />
        {/* <Route path="signup" element={<Signup />} />
        <Route path="signup-thanks" element={<SignupThanks />} /> */}
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="/Counsler" element={<Counsler />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact-thank-you" element={<ContactThanks />} />
      </Routes>
    </div>
  );
};

export default Routers;
