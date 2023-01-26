import React from 'react'
import frame from './Frame.svg'

const CounselorRequirements = () => {
  return (
    <div>
        <img className='laptop:relative laptop:float-right -z-10 laptop:top-24 laptop:mr-16 lg:flex lg:flex-col lg:mx-auto sm:mt-20 sm:w-2/3' src={frame} alt="illustration" />
      <div className=" font-poppins flex flex-col items-center">
        <div className=" flex flex-col items-center ml-10 my-10 w-3/4">
          <div className=" self-start">
            <h1 className="text-5xl uppercase mb-8 sm:text-4xl">Why work with Healing?</h1>
            <h3 className='text-xl font-semibold uppercase mb-2'>Reliable Income</h3>
            <p className="text-xl font-semibold text-black text-opacity-50">
              Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life&apos;s challenges. BetterHelp can be your main source of income (&quot;full time&quot;) or a supplement to your current work.
            </p>
            <h3 className='text-xl font-semibold uppercase mb-2 mt-6'>Focus on Counseling</h3>
            <p className='text-xl font-semibold text-black text-opacity-50'>
              No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!
            </p>
            <h3 className='text-xl font-semibold uppercase mb-2 mt-6'>Focus on Counseling</h3>
            <p className='text-xl font-semibold text-black text-opacity-50'>
              No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!
            </p>
            <h2 className='text-4xl font-semibold uppercase mb-4 mt-14'>Requirements</h2>
            <ul className='list-disc text-xl font-medium text-black space-y-3 ml-5'>
              <li>Licensed by a State Board to provide counseling</li>
              <li>Experience in counseling for adults, couples, and/or teens</li>
              <li>Excellent writing skills</li>
              <li>Reliable Internet connection</li>
              <li>Currently residing in the TR</li>
            </ul>
          </div>

          <div className="self-start mb-24">
            <button
              className="rounded text-xl px-7 py-3 relative top-8 sm:text-base font-medium shadow-md bg-[#2DD3E3] transition duration-250  hover:bg-cyan-500"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorRequirements;
