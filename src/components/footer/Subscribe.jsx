// import React from 'react';
import { useState } from 'react';
import { db } from '../../firebaseFile';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
      db.collection('newsletter').add('Thank you massage')({
        newsletter: email,
        // time: firestore.FieldValue.serverTimeSamp(),
      });
    } else {
      setError('Invalid email');
    }
  };

  return (
    <form className="Subscribe" data-testId="Subscribe" onSubmit={handleChange}>
      <input
        name="name"
        data-inputId="email-check"
        placeholder="Write your Email"
        type="email"
        value={email}
        onChange={handleChange}
      />

      <button
        type="submit"
        value="Submit"
        data-SendId="Send-SubscribeThanks"
        onChange={handleSubmit}
      >
        Send
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Subscribe;
