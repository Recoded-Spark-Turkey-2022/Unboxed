import React from 'react';
import googleIcon from './Google.svg';
import facebookIcon from './Facebook.svg';

const LoginButtons = ({googleLogin,facebookLogin}) => {
  return (
    <div data-testid="LoginButtons" className="flex flex-col items-center mt-6">
      <h2 className="w-full text-center border-b-2 border-cyan-400 mt-2.5 mb-5 leading-[0.1em]">
        <span className="px-2 bg-white">Or</span>
      </h2>
      <div className="flex gap-10">
        <button data-testid="googleButton" type='button' onClick={facebookLogin}><img src={facebookIcon} alt="Google Icon" /></button>
        <button type='button' onClick={googleLogin}><img  src={googleIcon} alt="Google Icon" /></button>
      </div>
    </div>
  );
};

export default LoginButtons;