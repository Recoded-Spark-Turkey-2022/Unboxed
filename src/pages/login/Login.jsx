import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/loginForm/LoginForm';
import img from './LoginImg.svg';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="font-poppins pt-12 pb-12 768:h-middle sm:pt-24 mt-4">
      <h1 className="text-3xl font-semibold ml-20 sm:ml-0 sm:text-center">
        {t('login2')}
      </h1>
      <div className="flex justify-center gap-5 items-center sm:flex-col sm:items-center ">
        <LoginForm />
        <img className="w-5/12 sm:w-10/12" src={img} alt="login Img" />
      </div>
    </div>
  );
};

export default Login;
