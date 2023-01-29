import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './Forms/ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="m-[5%] font-poppins">
      <div>
        {' '}
        <h1 className="pb-[1%] text-5xl sm:text-xl">{t('contackTitle')}</h1>
        <p className="pb-[1%] text-2xl sm:text-base opacity-50">
          {t('contactText')}
        </p>
      </div>
      <div className="flex space-x-24">
        <div>
          {' '}
          <ContactForm />
        </div>
        <div className=" w-[38%] ">
          <aside className="space-y-16">
            <img
              className="w-4/5 sm:hidden"
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
