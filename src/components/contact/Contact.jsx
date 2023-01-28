import React from 'react';
import ContactForm from './Forms/ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  return (
    <div className="p-[5%] font-poppins">
      <div>
        {' '}
        <h1 className="pb-[1%] text-5xl sm:text-xl">SEND US YOUR REQUEST!</h1>
        <p className="pb-[1%] text-2xl sm:text-base text-slate-500">
          {`Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be
          happy to help!`}
        </p>
      </div>
      <div className="border-2 border-green-800 flex flex-row justify-between">
        <div className="border-2 border-red-600 sm:basis-1/2">
          {' '}
          <ContactForm />
        </div>
        <div className="border-2 border-red-600 sm:basis-1/4">
          <aside className="space-y-10">
            <img
              className="w-full sm:hidden"
              src={contact}
              alt="smiling woman sitting in front of a computer with headphones, man on the background talking with the phone"
            />
            <ContactPlace />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Contact;
