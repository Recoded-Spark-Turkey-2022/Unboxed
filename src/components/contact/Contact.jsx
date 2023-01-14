import React from 'react';
// import ContactThanks from './ContactThanks';
import ContactForm from './ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  return (
    <div>
      <h1 className="text-5xl">SEND US YOUR REQUEST!</h1>
      <text>
        Do you have a question, concern, idea, feedback, or problem? If you need
        assistance, please fill out the form below and we &apos d be happy to
        help!
      </text>
      <div className="flex-row border-2">
        <div className="border-2 border-red-600 h-52 w-52">
          {' '}
          <ContactForm />
        </div>
        <div>
          <aside>
            <img
              src={contact}
              alt="smiling woman sitting in front of a computer with headphones, man on the background talking with the phone"
            ></img>
            <ContactPlace />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Contact;
