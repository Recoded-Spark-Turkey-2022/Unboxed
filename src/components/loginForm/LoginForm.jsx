import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import LoginButtons from '../google&facebook/LoginButtons';
import { credentialsSigninHandler } from '../../features/user/userSlice';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const user = useSelector((state) => state.user);
  const { error } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const navigation = () => {
    navigate('/');
  };

  const handleLogin = () => {
    dispatch(
      credentialsSigninHandler({
        email: loginInfo.email,
        password: loginInfo.password,
        navigation,
      })
    );
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
          className={`${styles.input} ${error ? 'border-red-300' : 'null'}`}
          data-testid="emailInput"
          type="text"
          placeholder="Your Email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <input
          className={`${styles.input} ${error ? 'border-red-300' : 'null'}`}
          data-testid="passwordInput"
          type="password"
          placeholder="Your Password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        {error ? (
          <p data-testid="loginError" className=" text-red-400 -my-4">
            Invalid email or password
          </p>
        ) : null}
        <div className="flex gap-5 w-full justify-center">
          <button
            data-testid="loginButton"
            className={`${styles.loginButton}`}
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className={`${styles.signupButton}`} type="button">
            <NavLink to="/signup">Signup</NavLink>
          </button>
        </div>
      </form>
      <LoginButtons />
    </div>
  );
};

export default LoginForm;
