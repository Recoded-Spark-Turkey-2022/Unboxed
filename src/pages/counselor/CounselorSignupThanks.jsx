import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CounselorSignupThanks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-20 mt-12 gap-5 sm:mx-0 sm:items-center">
      <div className="text-5xl">{t('thankyou')}</div>
      <div className="text-2xl sm:text-lg sm:text-center">
        {t('therapistThanks')}
      </div>
      <button
        className="rounded text-xl w-64 py-2 mb-3 sm:text-base font-medium shadow-md bg-cyan-400"
        type="submit"
        onClick={() => {
          navigate('/');
        }}
      >
        {t('backToHome')}
      </button>
    </div>
  );
};

export default CounselorSignupThanks;
