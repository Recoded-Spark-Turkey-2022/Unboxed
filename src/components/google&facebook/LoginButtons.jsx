import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../../firebaseFile';
import googleIcon from './Google.svg';
import facebookIcon from './Facebook.svg';

const LoginButtons = ({ setNewError }) => {
  // Register with Google function
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((re) => {
      setDoc(doc(db, 'patients', re.user.uid), { email: re.user.email })
        .catch((error) => setNewError(error.message))
        .finally((error) => setNewError(error.message));
    });
  };

  // Register with Facebook function
  const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then((re) => {
      setDoc(doc(db, 'patients', re.user.uid), { email: re.user.email })
        .catch((error) => setNewError(error.message))
        .finally((error) => setNewError(error.message));
    });
  };
  return (
    <div data-testid="LoginButtons" className="flex flex-col items-center mt-6">
      <h2 className="w-full text-center border-b-2 border-cyan-400 mt-2.5 mb-5 leading-[0.1em]">
        <span className="px-2 bg-white">Or</span>
      </h2>
      <div className="flex gap-10">
        <button
          data-testid="googleButton"
          type="button"
          onClick={signInFacebook}
        >
          <img src={facebookIcon} alt="Google Icon" />
        </button>
        <button type="button" onClick={signInGoogle}>
          <img src={googleIcon} alt="Google Icon" />
        </button>
      </div>
    </div>
  );
};

export default LoginButtons;
