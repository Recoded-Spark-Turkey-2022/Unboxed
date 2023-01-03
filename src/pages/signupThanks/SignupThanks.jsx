import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SignupThanks = () => {
  const [navigate, setNavigate] = useState(false);

  return (
    <div
      data-testid="signupThanks"
      className="flex flex-col mx-20 mt-12 gap-5 sm:mx-5"
    >
      <div className="text-5xl">THANK YOU!</div>
      <div className="text-2xl sm:text-lg">
        Your Sign Up request has been received, you will soon receive a
        confirmation email. Please follow the steps in the email to complete and
        activate your account.
      </div>
      <button
        className="w-1/6 h-14 bg-[#2DD3E3] sm:w-1/3"
        type="submit"
        onClick={() => {
          setNavigate(true);
        }}
      >
        BACK TO HOME
      </button>
      {navigate && <Navigate to="/" />}
    </div>
  );
};
export default SignupThanks;
