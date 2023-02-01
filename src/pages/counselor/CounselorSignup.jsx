import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { counselorsSignupHandler } from '../../features/user/userSlice';

const CounselorSignup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    city: '',
    license: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const navigation = () => {
    navigate('/CounselorSignupThanks');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      counselorsSignupHandler({
        name: signupInfo.name,
        city: signupInfo.city,
        email: signupInfo.email,
        password: signupInfo.password,
        license: signupInfo.license,
        navigation,
      })
    );
  };

  return (
    <div className="font-poppins max:h-middle pb-20 pt-16 mt-6">
      <form className="flex flex-col ml-10 sm:ml-0 sm:items-center">
        <h1 className="text-3xl font-semibold mb-5">{t('createAccount')}</h1>
        <div className="mb-7">
          <p className=" opacity-50">{t('fullname')}</p>
          <input
            className="w-1/4 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="text"
            name="name"
            required
            value={signupInfo.name}
            onChange={handleChange}
          />
          <p className=" opacity-50">{t('email')}</p>
          <input
            className="w-1/4 h-1/5 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="text"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            title={t('must1')}
            value={signupInfo.email}
            onChange={handleChange}
          />
          <p className=" opacity-50">{t('city')}</p>
          <input
            className="w-1/4 h-1/5 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="text"
            name="city"
            required
            value={signupInfo.city}
            onChange={handleChange}
          />
          <p className=" opacity-50">{t('License number')}</p>
          <input
            className="w-1/4 h-1/5 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="text"
            name="license"
            required
            value={signupInfo.license}
            onChange={handleChange}
          />
          <p className=" opacity-50">{t('password')}</p>
          <input
            className="w-1/4 h-1/5 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
            title={t('must2')}
            value={signupInfo.password}
            onChange={handleChange}
          />
          <p className=" opacity-50">{t('confirmPassword')}</p>
          <input
            className="w-1/4 h-1/5 border-2 border-gray-200 rounded text-lg mb-3 sm:w-full"
            type="password"
            name="confirmPassword"
            pattern={signupInfo.password}
            title={t('must3')}
            required
            value={signupInfo.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          {' '}
          <button
            className="rounded text-xl px-7 py-2 mb-3 relative sm:text-base font-medium shadow-md bg-cyan-400"
            type="submit"
            onClick={
              signupInfo.password === signupInfo.confirmPassword
                ? handleRegister
                : null
            }
          >
            {t('create')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CounselorSignup;
