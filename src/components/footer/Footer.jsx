import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <div
      data-testid="FooterTest"
      className="grid  grid-flow-row  md:grid-flow-col  lg:grid-flow-col   sm:p-2 md:py-2 md:px-8  bg-[#FEE89E]  space-x-3 md:space-x-6 sm:w-auto sm:flex sm:flex-col sm:text-xl sm:space-x-0 max:h-sixteen  w-full"
    >
      <div>
        <h3 className="pb-2  laptop:ml-20 text-3xl font-normal sm:ml-0 sm:text-xl ">
          Subscribe
        </h3>
        <p className="pb-2 laptop:ml-20 text-[#718096] font-normal sm:ml-0 ">
          We will never to spam you or share your email
        </p>
        <Subscribe className="laptop:ml-20 sm:ml-0" />
      </div>
      <div className="sm:text-center">
        <div className="pb-2  mt-8  md:ml-20  xl:ml-36  text-[#718096] text-xl inline-flex  space-x-3 md:space-x-6 sm:ml-0 sm:text-sm sm:mt-2 ">
          <a href="/" src="Ho me">
            Home
          </a>
          <a href="Blogs"> Blogs </a>
          <a href="About" alt="About">
            About
          </a>
          <a href="Contacts" alt="Contacts">
            Contacts{' '}
          </a>
        </div>

        <div className=" ml-40 md:ml-44  xl:ml-48 flex space-x-4 md:space-x-8  sm:flex sm:justify-center sm:ml-0 ">
          <BsTwitter style={{ fontSize: '25px' }} />
          <BsInstagram style={{ fontSize: '25px' }} />
          <BsFacebook style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
