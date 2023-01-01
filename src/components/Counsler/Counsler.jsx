import React from 'react';
import { useNavigate } from 'react-router-dom';

const Counsler = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/counselor');
  }

  return (
    <div className="absolute w-full h-full flex items-center justify-center py-4 md:py-8  ">
      <div className="inline-flex flex-col space-y-3.5 items-center justify-start px-12 py-7 bg-white shadow border rounded-md border-gray-50">
        <p
          className="text-5xl text-center uppercase"
          style={{ width: 1020, height: 51.43 }}
        >
          Are you a counselor?
        </p>
        <p
          className="text-xl font-light text-center text-black text-opacity-90 lowercase"
          style={{ width: 1020, height: 102.86 }}
        >
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, we’ll take care of the client
          referrals and billing details!
        </p>
        <div className="w-48 h-1/4">
          <div className="flex items-center justify-center flex-1 h-full px-6 py-3 bg-cyan-600 hover: bg-cyan- rounded-md">
            <button
              type="button"
              onClick={handleClick}
              className="flex-1 h-full text-2xl text-center uppercase"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counsler;
