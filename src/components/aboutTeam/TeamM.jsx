import React from 'react';
import nadim from './TeamMembersPP/nadim.jpg';
import esra from './TeamMembersPP/esra.jpg';
import hadi from './TeamMembersPP/hadi.jpg';
import pelin from './TeamMembersPP/pelin.jpg';
import ysf from './TeamMembersPP/ysf.jpg';


const TeamM = () => {
  return (
    <div className=" font-poppins flex flex-col items-center ">
      <div className=" flex flex-col items-center my-10 w-3/4">
        <div className=" self-start ml-8">
          <h1 className=" font-normal text-5xl sm:text-3xl">WE ARE HEALING, NICE TO MEET YOU!</h1>
          <p className="text-3xl sm:text-xl leading-10 mt-24 sm:mt-16 text-gray-700">Meet the Team!</p>
        </div>
      </div>

      <div className="mt-6 mb-10 mx-8 flex flex-wrap justify-evenly gap-8 items-center">
        <div className='inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-20 bg-[#EAF8F9] rounded-3xl'>
          <img className='w-full rounded-tl-3xl rounded-tr-3xl' src={nadim} alt="brain" />
          <div className='w-full h-1.5 bg-[#6BD24D]'/>
          <p className='text-xl mt-2 leading-relaxed text-center text-gray-700'>Nadim Absi</p>
          <p className='text-base leading-normal text-center text-gray-700 mt-8'>Front-End WEB Developer</p>
        </div>
        <div className='inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-20 bg-[#EAF8F9] rounded-3xl'>
          <img className='w-full rounded-tl-3xl rounded-tr-3xl' src={esra} alt="bridge" />
          <div className='w-full h-1.5 bg-[#6BD24D]'/>
          <p className='text-xl mt-2 leading-relaxed text-center text-gray-700'>Esra Akbulat</p>
          <p className='text-base leading-normal text-center text-gray-700 mt-8'>Front-End WEB Developer</p>
        </div>
        <div className='inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-20 bg-[#EAF8F9] rounded-3xl'>
          <img className='w-full rounded-tl-3xl rounded-tr-3xl' src={hadi} alt="savior" />
          <div className='w-full h-1.5 bg-[#6BD24D]'/>
          <p className='text-xl mt-2 leading-relaxed text-center text-gray-700'>Hadi Maleh</p>
          <p className='text-base leading-normal text-center text-gray-700 mt-8'>Front-End WEB Developer</p>
        </div>
        <div className='inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-20 bg-[#EAF8F9] rounded-3xl'>
          <img className='w-full rounded-tl-3xl rounded-tr-3xl' src={pelin} alt="funnyclumsy" />
          <div className='w-full h-1.5 bg-[#6BD24D]'/>
          <p className='text-xl mt-2 leading-relaxed text-center text-gray-700'>Pelin Karakoca</p>
          <p className='text-base leading-normal text-center text-gray-700 mt-8'>Front-End WEB Developer</p>
        </div>
        <div className='inline-flex flex-col items-center justify-end w-44 pt-0.5 pb-20 bg-[#EAF8F9] rounded-3xl'>
          <img className='w-full rounded-tl-3xl rounded-tr-3xl' src={ysf} alt="trouble" />
          <div className='w-full h-1.5 bg-[#6BD24D]'/>
          <p className='text-xl mt-2 leading-relaxed text-center text-gray-700'>Yusuf Dumlu</p>
          <p className='text-base leading-normal text-center text-gray-700 mt-8 '>Front-End WEB Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamM;
