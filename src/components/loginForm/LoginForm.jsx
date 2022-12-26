import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginButtons from '../google&facebook/LoginButtons';
import { auth } from '../../firebaseFile';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [errorFinder, setErrorFinder] = useState("");

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
      console.log(logger);
    } catch (error) {
      setErrorFinder(error.message);
    }
  };

  return (
    <div data-testid="loginForm" className="w-1/3 sm:w-10/12">
      <form className="flex flex-col gap-8 shadow-xl h-60 justify-center items-center ">
        <input
          className="w-3/4 h-1/5 border-2 border-gray-200 p-2"
          type="text"
          placeholder="Your Email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <input
          className="w-3/4 h-1/5 border-2 border-gray-200 p-2 tracking-wider"
          type="password"
          placeholder="Your Password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <div className="flex gap-5 w-full justify-center">
          <button
            className="w-1/4 h-8 rounded text-lg sm:text-base font-medium shadow-md bg-cyan-400"
            type="button"
            onClick={login}
          >
            Login
          </button>
          <button
            className="w-1/4 h-8 rounded text-lg sm:text-base font-medium shadow-md border-2 border-cyan-400 text-cyan-400"
            type="button"
          >
            Signup
          </button>
        </div>
      </form>
      <LoginButtons />
      {errorFinder}
    </div>
  );
};

export default LoginForm;
