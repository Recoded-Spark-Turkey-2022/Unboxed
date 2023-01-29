import React from 'react';
import { useTranslation } from 'react-i18next';
import FounderPP from './HadiMaleh.jpg';

const HealingInfo = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="AboutUs" className="font-poppins">
      <div className="bg-white laptop:mx-48 mb-20 tablet:mx-24 sm:mx-12">
        <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl uppercase mt-20">
          {t('healing')}
        </h1>
        <p className="laptop:text-2xl tablet:text-xl sm:text-lg mt-3 font-light leading-relaxed text-black text-opacity-50">
          {t('cool')}
        </p>
        <p className="laptop:text-xl tablet:text-lg sm:text-base mt-12">
          {t('healingText')}
        </p>
      </div>
      <div className="bg-[#EAF8F9] flex flex-row sm:flex-col items-center w-full ">
        <img
          className="rounded-md tablet:my-8 laptop:ml-48 mr-12 tablet:ml-16 sm:ml-12 tablet:w-1/2 sm:w-3/4 sm:mt-8"
          src={FounderPP}
          alt="FounderPP"
        />
        <div className="text-[#424A4F] flex flex-col sm:mx-12 tablet:my-16 sm:my-12">
          <h1 className="laptop:text-5xl tablet:text-4xl sm:text-3xl mb-8 laptop:mr-52 tablet:mr-24">
            {t('founding')}
          </h1>
          <p className="laptop:text-xl tablet:text-lg sm:text-base laptop:mr-52 tablet:mr-24">
            {t('foundingText')}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HealingInfo;
