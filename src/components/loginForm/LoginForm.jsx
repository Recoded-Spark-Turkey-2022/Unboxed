import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginButtons from '../google&facebook/LoginButtons';
import { auth } from '../../firebaseFile';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [errorFinder, setErrorFinder] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );
    } catch (error) {
      setErrorFinder(error);
    }
  };

  const styles = {
    form: 'flex flex-col gap-8 shadow-xl h-60 justify-center items-center',
    input: 'w-3/4 h-1/5 border-2 border-gray-200 p-2',
    loginButton:
      'w-1/4 h-8 rounded text-lg sm:text-base font-medium shadow-md bg-cyan-400',
    signupButton:
      'w-1/4 h-8 rounded text-lg sm:text-base font-medium shadow-md border-2 border-cyan-400 text-cyan-400',
  };

  return (
    <div data-testid="loginForm" className="w-1/3 sm:w-10/12">
      <form className={`${styles.form}`}>
        <input
          className={`${styles.input} ${
            errorFinder ? 'border-red-300' : 'null'
          }`}
          type="text"
          placeholder="Your Email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <input
          className={`${styles.input} ${
            errorFinder ? 'border-red-300' : 'null'
          }`}
          type="password"
          placeholder="Your Password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        {errorFinder ? (
          <p className=" text-red-400 -my-4">Invalid email or password</p>
        ) : null}
        <div className="flex gap-5 w-full justify-center">
          <button
            className={`${styles.loginButton}`}
            type="button"
            onClick={login}
          >
            Login
          </button>
          <button className={`${styles.signupButton}`} type="button">
            Signup
          </button>
        </div>
      </form>
      <LoginButtons />
    </div>
  );
};

export default LoginForm;
