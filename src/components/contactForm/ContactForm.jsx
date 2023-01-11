import React from 'react';
import ContactThanks from './ContactThanks';
import ContactPlace from './ContactPlace';

function ContactForm() {
  return (
    <div>
      <h1 className="flex-column flex-start text-5xl">SEND US YOUR REQUEST!</h1>
      <span>
        Do you have a question, concern, idea, feedback, or problem? If you need
        assistance, please fill out the form below and we &apos d be happy to
        help!
      </span>
      <ContactThanks />
      <ContactPlace />
    </div>
  );
}

export default ContactForm;
