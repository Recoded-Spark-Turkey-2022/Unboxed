import React from 'react';

const Careers = () => {
  return (
    <div className=" font-poppins flex flex-col items-center ">
      <div className=" flex flex-col items-center my-10 w-9/12">
        <div className=" self-start">
          <h1 className=" font-normal text-4xl mb-1">CAREERS AT HEALING</h1>
          <p className="opacity-50 text-xl">
            Be a part of making people feel better.
          </p>
        </div>

        <p className=" text-[#424A4F] w-full text-lg my-24 text-justify ">
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we`re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
        </p>

        <div className="self-start">
          <p className=" text-[#424A4F] text-lg">What role will you play?</p>
          <button
            className="rounded text-xl px-7 py-3 relative top-8 sm:text-base font-medium shadow-md bg-cyan-400"
            type="button"
          >
            See our open list
          </button>
        </div>
      </div>

      <div className=" bg-[#FEE89E] mt-24 mb-10 flex flex-col items-center">
        <div className="flex flex-col w-9/12 py-3">
          <h1 className="text-[#424A4F] text-4xl mb-1">
            OUR HIRING PHILOSOPHY
          </h1>
          <p className="text-[#424A4F] text-lg text-justify ">
            To build the very best SEO tools, we need a workforce that reflects
            the diversity of our communities and customers. We want Online
            Therapy to be a place where everyone feels welcome and engaged, bar
            none. It`s our mission and promise to interview a diverse and
            representative slate of candidates before making an offer for our
            open roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
