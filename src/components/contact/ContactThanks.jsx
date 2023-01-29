import React from 'react';
import { Link } from 'react-router-dom';

function ContactThanks() {
  return (
    <div className="flex font-poppins mx-[6%] 768:px-28 pt-20  gap-16 425:h-middle px-10 mb-4 ">
      <div>
        <h1 className="flex-column pb-[2%] flex-start text-5xl sm:text-xl">
          THANK YOU!
        </h1>
        <span className="text-2xl sm:text-sm leading-9 sm:leading-3 text-slate-500 sm:text-slate-600">
          Your request has been sent, a member of the support team will get in
          contact with you through the email you provided as soon as possible.
        </span>
        <div className="pt-[2%]">
          <Link to="/">
            <button
              className="text-xl sm:text-xs w-1/4 h-14 sm:h-10 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 "
              type="button"
            >
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactThanks;
