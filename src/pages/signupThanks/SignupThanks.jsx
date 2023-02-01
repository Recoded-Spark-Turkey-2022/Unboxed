import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignupThanks = () => {
  const { t } = useTranslation();
  const [navigate, setNavigate] = useState(false);
  // flex flex-col mx-20 mt-12 gap-5 sm:mx-5
  return (
    <div
      data-testid="signupThanks"
      className=" 768:px-28 pt-20 flex flex-col gap-16 425:h-middle px-10 mb-4"
    >
      <div className="text-5xl">{t('thankyou')}</div>
      <div className="text-2xl sm:text-lg">{t('signupThanks')}</div>
      <button
        className="w-1/6 h-14 bg-[#2DD3E3] sm:w-1/3"
        type="submit"
        onClick={() => {
          setNavigate(true);
        }}
      >
        {t('backToHome')}
      </button>
      {navigate && <Navigate to="/" />}
    </div>
  );
};
export default SignupThanks;
