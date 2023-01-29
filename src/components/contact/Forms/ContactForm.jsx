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
  // formData contains the returning object for the entered inputs. && I just added console log for eslint error, will delete it later
  /* eslint-disable */
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      option: choosenOption,
      name: enteredName,
      mail: enteredMail,
      details: enteredDetails,
    };
    formData;
    setEnteredName('');
    setEnteredMail('');
    setEnteredDetails('');
    navigate('/contact-thank-you');
  };
  /* eslint-enable */

  return (
    <form
      className="flex-col space-y-[8%] "
      data-testid="contactForm"
      onSubmit={submitHandler}
    >
      <div>
        <h1 className="m-[3%] text-2xl sm:text-xs sm:font-bold font-medium leading-9">
          Type of contact
        </h1>
      </div>
      <div className="flex-col space-y-[3%] text-xl sm:text-xs font-normal">
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
      <div className="flex-col text-xl sm:text-xs justify-between">
        <label className="drop-shadow-lg" htmlFor="Full Name">
          Full Name:
          <br />
          <input
            className=" w-11/12 h-14 rounded-md pt-[1%]"
            type="text"
            value={enteredName}
            placeholder="Enter your full name here..."
            onChange={nameHandler}
          />
        </label>
        <br />
        <label className="drop-shadow-lg" htmlFor="E-mail">
          E-mail:
          <br />
          <input
            className=" w-11/12 h-14 rounded-md "
            type="text"
            value={enteredMail}
            placeholder="Enter your email address here..."
            onChange={mailHandler}
          />
        </label>
        <br />
        <label className="drop-shadow-lg" htmlFor="Details">
          Details:
          <br />
          <textarea
            className=" w-11/12 h-20
 rounded-md"
            value={enteredDetails}
            placeholder="Enter your details here..."
            onChange={detailsHandler}
          />
        </label>
      </div>
      <div className="pt-[2%]">
        <button
          type="submit"
          className="text-xl sm:text-sm w-6/12 h-16 sm:h-12 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
