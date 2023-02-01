/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './Forms/ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="p-[5%] font-poppins max:h-middle">
      <div>
        {' '}
        <h1 className="pb-[1%] text-5xl sm:text-xl">SEND US YOUR REQUEST!</h1>
        <p className="pb-[1%] text-2xl sm:text-base text-slate-500">
          {`Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be
          happy to help!`}
        </p>
      </div>
      <div className="flex flex-row sm:flex-col">
        <div className="basis-1/2 self-center">
          {' '}
          <ContactForm />
        </div>
        <div className="basis-1/2 sm:basis-1/4 px-[6%] sm:text-center">
          <aside className="space-y-10 ">
            <img
              className="w-full"
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
