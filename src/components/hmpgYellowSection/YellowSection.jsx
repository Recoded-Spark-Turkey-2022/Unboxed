import React from 'react';
import therapistpp from './therapistpp.svg';

const YellowSec = () => {
  return (
    <div data-testid="YellowSec" className="m-auto mb-1 pt-16 pr-72 flex flex-col px-2 tablet:justify-center font-poppins bg-[#FEE89E]">
      <p className="text-5xl uppercase pb-12 pl-16">
        Professional, licensed, and vetted therapists that you can trust
      </p>
      <img className="px-[3rem]" src={therapistpp} alt="therapistpp" />
      <p className="p-[2rem] pl-16 text-xl font-light text-black">
        {`Tap into the world's largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.`}
      </p>
      <button
        type="button"
        className="p-[3rem] m-12 text-md md:text-lg ml-16 mr-96 max-w-lg lg:px-6 rounded-md transition duration-250 flex items-center justify-center h-full px-2 py-3 bg-[#2DD3E3] hover:bg-cyan-500"
      >
        <p className="flex-1 h-full text-2xl text-center uppercase text-ellipsis overflow-hidden">
          book an appointment
        </p>
      </button>
    </div>
  );
};
export default YellowSec;
