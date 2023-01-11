import React from 'react';
import { Link } from 'react-router-dom';

function ContactThanks() {
  return (
    <div className="flex pl-20 font-poppins border-2 space-x-20 border-red-700">
      <div>
        <h1 className="flex-column flex-start text-5xl">THANK YOU!</h1>
        <span>
          Your request has been sent, a member of the support team will get in
          contact with you through the email you provided as soon as possible.
        </span>
        <div>
          <Link to="/">
            <button type="button">BACK TO HOME</button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactThanks;
