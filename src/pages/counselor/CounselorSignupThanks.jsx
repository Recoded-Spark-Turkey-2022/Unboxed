import React from 'react';
import { useNavigate } from 'react-router-dom';

const CounselorSignupThanks = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-20 mt-4 pt-12 gap-5 sm:mx-0 sm:items-center 768:px-28  425:h-middle px-10 sm:my-10">
      <div className="text-5xl">THANK YOU!</div>
      <div className="text-2xl sm:text-lg sm:text-center">
        Thank you for your interest in working with Healing, we have recieved
        your application. You will receive an email guiding you for the next
        steps soon after your information is reviewed.
      </div>
      <button
        className="rounded text-xl w-64 py-2 mb-3 sm:text-base font-medium shadow-md bg-cyan-400"
        type="submit"
        onClick={() => {
          navigate('/');
        }}
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default CounselorSignupThanks;
