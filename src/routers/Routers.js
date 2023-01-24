import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CounselorRequirements from '../pages/counselor/CounselorRequirements';
import CounselorSignup from '../pages/counselor/CounselorSignup';
import CounselorSignupThanks from '../pages/counselor/CounselorSignupThanks';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
// import Edit from '../pages/Profile-Edit/Profile-Edit';
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
import CounselorEditInfo from '../pages/counselor/CounselorEditInfo';
import EditPatientProfile from '../pages/Profile-Edit/EditPatientProfile';
import EditPatientProfileThanks from '../pages/Profile-Edit/EditPatientProfileThanks';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/Thankyou" element={<Thanks />} />
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="/Edit-Profile" element={<Edit />} /> */}
        <Route path="editPatientProfile" element={<EditPatientProfile />} />
        <Route path="editPatientProfileThanks" element={<EditPatientProfileThanks />} />
        <Route path="add-new-card" element={<AddNewCard />} />
        <Route path="add-new-card-thank-you" element={<AddNewCardThankYou />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup-thanks" element={<SignupThanks />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="counselorRequirements" element={<CounselorRequirements />} />
        <Route path="CounselorSignup" element={<CounselorSignup />} />
        <Route path="CounselorEditInfo" element={<CounselorEditInfo />} />
        <Route path="CounselorSignupThanks" element={<CounselorSignupThanks />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact-thank-you" element={<ContactThanks />} />
        <Route path="about/teams" element={<Team />} />
        <Route path="about/careers" element={<Careers />} />
        <Route path="about/overview" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default Routers;
