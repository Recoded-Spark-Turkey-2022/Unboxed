import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseFile';

function ContactForm() {
  const { t } = useTranslation();
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

  const submitHandler = async (event) => {
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

    await addDoc(collection(db, 'contactUs'), {
      formData,
    });
  };
  /* eslint-enable */

  return (
    <form
      className="flex-col space-y-[4%] "
      data-testid="contactForm"
      onSubmit={submitHandler}
    >
      <div>
        <h1 className="m-[3%] text-2xl sm:text-base font-medium leading-9">
          {t('typeof')}
        </h1>
      </div>
      <div className="flex-col space-y-[3%] text-xl sm:text-sm font-normal">
        <input
          type="radio"
          name={choosenOption}
          value="question about the service"
          onChange={radioHandler}
        />
        {t('contact1')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="registered client-need support"
          onChange={radioHandler}
        />
        {t('contact2')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="counselor-join"
          onChange={radioHandler}
        />
        {t('contact3')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="registered counselor-need support"
          onChange={radioHandler}
        />
        {t('contact4')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="business-related inquiry"
          onChange={radioHandler}
        />
        {t('contact5')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="for organization"
          onChange={radioHandler}
        />
        {t('contact6')}
        <br />
        <input
          type="radio"
          name={choosenOption}
          value="billing question"
          onChange={radioHandler}
        />
        {t('contact7')}
      </div>
      <div className="flex-col gap-4 space-y-4 text-xl">
        <label className="drop-shadow-lg" htmlFor="Full Name">
          {t('fullname')}
          <br />
          <input
            className=" w-11/12"
            type="text"
            value={enteredName}
            placeholder={t('fullnameText')}
            onChange={nameHandler}
          />
        </label>
        <br />
        <label className="drop-shadow-lg" htmlFor="E-mail">
          {t('email')}:
          <br />
          <input
            className=" w-11/12"
            type="text"
            value={enteredMail}
            placeholder={t('emailText')}
            onChange={mailHandler}
          />
        </label>
        <br />
        <label className="drop-shadow-lg" htmlFor="Details">
          {t('details')}
          <br />
          <textarea
            className=" w-11/12 h-16"
            value={enteredDetails}
            placeholder={t('detailsText')}
            onChange={detailsHandler}
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="text-xl w-6/12 h-16 mt-[2%] self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
