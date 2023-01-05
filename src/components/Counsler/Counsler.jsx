import React from 'react';
import { useNavigate } from 'react-router-dom';

const Counsler = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/counselor');
  }

  return (
    <div
      data-testid="counselor"
      className="  flex justify-center font-poppins sm:w-[70%] md:w-[70%] lg:w-[70%] card self-center sm:ml-[1rem] md:ml-[10rem] lg:ml-[4rem]  "
    >
      <div className=" px-12 py-7   bg-white shadow border rounded-md  border-gray-50">
        <p className=" text-5xl text-center uppercase">Are you a counselor?</p>
        <p className="pt-[5%] pb-[6%] text-md font-poppins font-lights text-center  text-black text-opacity-90 lowercase">
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, we’ll take care of the client
          referrals and billing details!
        </p>
        <div className=" flex justify-center">
          <div className=" object-center  font-poppins  h-full  lg:py-[0.7rem]  lg:px-[1rem]  md:py-[0.7rem]  md:px-[1rem] sm:p-[0.5rem] bg-cyan-400 hover:bg-cyan-600 rounded-md">
            <button
              type="button"
              onClick={handleClick}
              className=" flex-initial  h-full text-md  text-center uppercase"
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
