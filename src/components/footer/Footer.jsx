import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Subscribe from './Subscribe';


const Footer = () => {
  return (
    <div data-testId="Footer">
      <h3 className="H3">Subscribe</h3>
      <p>We will never to spam you or share your email</p>
      <Subscribe />
      <a href="/" src="Home">
        Home
      </a>
      <a href="Blogs"> Blogs </a>
      <a href="About" alt="About">
        About
      </a>
      <a href="Contacts" alt="Contacts">
        Contacts{' '}
      </a>
    
      <div>
        <BsTwitter />
        <BsInstagram />
        <BsFacebook />
      </div>
    </div>
  );
};

export default Footer;
