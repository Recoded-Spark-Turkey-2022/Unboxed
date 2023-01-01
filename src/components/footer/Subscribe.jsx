// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebaseFile';

function Subscribe() {
  const [Email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(Email)) {
      await addDoc(collection(db, 'newsletter'), {
        email: Email,
        timestamp: new Date(),
      });
      navigate('/Thankyou');
    } else {
      setError('Invalid email');
    }
  };

  return (
    <form
      className="ml-20  w-[15.2rem] h-[2.5rem]  flex  border-2 border-[#718096]  rounded box-border  flex-center  "
      data-testId="Subscribe"
      onSubmit={handleChange}
    >
      <input
        className="  w-[15rem] h-[2.25rem] border flex border-hidden   rounded-sm box-border text-[#718096] text-md "
        name="name"
        data-inputId="email-check"
        placeholder="Write your Email"
        type="email"
        value={Email}
        onChange={handleChange}
      />

      <button
        className="  bg-[#2DD3E3] hover:bg-[#27B2C4] h-[2.27rem] w-[6rem] max-w-[8rem]  border-l-2  rounded-sm-x-2 rounded-r-sm box-border   border-[#718096]  color-[#718096]   "
        type="submit"
        value="Submit"
        data-SendId="Send-SubscribeThanks"
        onSubmit={handleSubmit}
      >
        <RiSendPlaneFill className="flex-auto m-2" />
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Subscribe;
