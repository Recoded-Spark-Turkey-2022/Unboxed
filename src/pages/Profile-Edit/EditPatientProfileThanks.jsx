import React from 'react'
import { useNavigate } from 'react-router-dom';

const EditPatientProfileThanks = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-20 mt-12 gap-5 sm:mx-0 sm:items-center">
      <div className="text-5xl">THANK YOU!</div>
      <div className="text-2xl sm:text-lg sm:text-center">
      Request submitted, you will soon receive an email confirming your changes after they are reviewed.
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
  )
}

export default EditPatientProfileThanks