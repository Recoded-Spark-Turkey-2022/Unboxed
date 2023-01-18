import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const [choosenOption, setChoosenOption] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredDetails, setEnteredDetails] = useState('');

  const navigate = useNavigate();

  const radioHandler = (event) => {
    setChoosenOption(event.target.value);
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mailHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const detailsHandler = (event) => {
    setEnteredDetails(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      option: choosenOption,
      name: enteredName,
      mail: enteredMail,
      details: enteredDetails,
    };
    setEnteredName('');
    setEnteredMail('');
    setEnteredDetails('');
    navigate('/contact-thank-you');
  };

  return (
    <form data-testid="contactForm" onSubmit={submitHandler}>
      <div className="text-xl">
        <input
          type="radio"
          name={choosenOption}
          value="question about the service"
          onChange={radioHandler}
        />
        {' I have a question about the service.'}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="registered client-need support"
          onChange={radioHandler}
        />
        {` I'm a registered client and I need support.`}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="counselor-join"
          onChange={radioHandler}
        />
        {` I'm a counselor interested in joining.`}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="registered counselor-need support"
          onChange={radioHandler}
        />
        {` I'm a registered counselor and I need support.`}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="business-related inquiry"
          onChange={radioHandler}
        />
        {` I have a business-related inquiry.`}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="for organization"
          onChange={radioHandler}
        />
        {` I'm interested in Healing Online for my organization.`}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="billing question"
          onChange={radioHandler}
        />
        {` I have a billing related question.`}
      </div>
      <div>
        <label className="font-poppins" htmlFor="Full Name">
          Full Name:
          <br />
          <input
            type="text"
            value={enteredName}
            placeholder="Enter your full name here..."
            onChange={nameHandler}
          />
        </label>
        <br />
        <label htmlFor="E-mail">
          E-mail:
          <br />
          <input
            type="text"
            value={enteredMail}
            placeholder="Enter your email address here..."
            onChange={mailHandler}
          />
        </label>
        <br />
        <label htmlFor="Details">
          Details:
          <br />
          <textarea
            value={enteredDetails}
            placeholder="Enter your details here..."
            onChange={detailsHandler}
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="text-xl w-[20%] h-16 mt-[2%] self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
