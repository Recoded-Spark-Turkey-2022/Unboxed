import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import frame from './Frame.svg';

const CounselorRequirements = () => {
  const { t } = useTranslation();
  return (
    <div>
      <img
        className="laptop:relative laptop:float-right -z-10 laptop:top-24 laptop:mr-16 lg:flex lg:flex-col lg:mx-auto sm:mt-20 sm:w-2/3"
        src={frame}
        alt="illustration"
      />
      <div className=" font-poppins flex flex-col items-center">
        <div className=" flex flex-col items-center ml-10 my-10 w-3/4">
          <div className=" self-start">
            <h1 className="text-5xl uppercase mb-8 sm:text-4xl">
              {t('requaritmentsTitle')}
            </h1>
            <h3 className="text-xl font-semibold uppercase mb-2">
              {t('ReliableIncome')}
            </h3>
            <p className="text-xl font-semibold text-black text-opacity-50">
              {t('ReliableIncomeText')}
            </p>
            <h3 className="text-xl font-semibold uppercase mb-2 mt-6">
              {t('focus')}
            </h3>
            <p className="text-xl font-semibold text-black text-opacity-50">
              {t('focusText')}
            </p>
            <h3 className="text-xl font-semibold uppercase mb-2 mt-6">
              {t('focus')}
            </h3>
            <p className="text-xl font-semibold text-black text-opacity-50">
              {t('focusText')}
            </p>
            <h2 className="text-4xl font-semibold uppercase mb-4 mt-14">
              {t('Requirements')}
            </h2>
            <ul className="list-disc text-xl font-medium text-black space-y-3 ml-5">
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>{t('li3')}</li>
              <li>{t('li4')}</li>
              <li>{t('li5')}</li>
            </ul>
          </div>

          <div className="self-start mb-24">
            <button
              className="rounded text-xl px-7 py-3 relative top-8 sm:text-base font-medium shadow-md bg-[#2DD3E3] transition duration-250  hover:bg-cyan-500"
              type="button"
            >
              <NavLink to="/CounselorSignup">{t('GetStarted')}</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorRequirements;
