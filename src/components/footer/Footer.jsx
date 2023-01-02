import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <div
      data-testid="FooterTest"
      className="grid  grid-flow-row  md:grid-flow-col  lg:grid-flow-col h-auto py-10 sm:p-6 md:py-10 md:px-8 left-0  absolute  right-0 bottom-0 bg-[#FEE89E]  space-x-3 md:space-x-6"
    >
      <div className="">
        <h3 className="pb-4 mt-10 ml-20 text-3xl font-normal ">Subscribe</h3>
        <p className="pb-6 ml-20 text-[#718096] font-normal  ">
          We will never to spam you or share your email
        </p>
        <Subscribe className="pb-10 ml-20 " />
      </div>
      <div className="   ">
        <div className="pb-5   mt-24  sm: ml-24 md:ml-24  xl:ml-36    text-[#718096] text-xl inline-flex  space-x-3 md:space-x-6">
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

        <div className=" ml-40 md:ml-44  xl:ml-48 flex space-x-4 md:space-x-8    ">
          <BsTwitter style={{ fontSize: '25px' }} />
          <BsInstagram style={{ fontSize: '25px' }} />
          <BsFacebook style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
