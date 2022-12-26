import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import img from './LoginImg.svg';

const Login = () => {
  return (
    <div className="font-poppins mt-4">
      <h1 className="text-3xl font-semibold ml-20 sm:ml-0 sm:text-center">
        LOGIN
      </h1>
      <div className="flex justify-center gap-5 items-center sm:flex-col sm:items-center ">
        <LoginForm />
        <img className="w-5/12 sm:w-10/12" src={img} alt="login Img" />
      </div>
    </div>
  );
};

export default Login;