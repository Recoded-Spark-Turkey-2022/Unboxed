import { t } from 'i18next';
import React from 'react';
import therapistpp from './therapistpp.svg';

const YellowSec = () => {
  return (
    <div
      data-testid="YellowSec"
      className="mb-1 pt-16 flex flex-col px-1 font-poppins bg-[#FEE89E]"
    >
      <p className="tablet:text-5xl text-3xl pt-[2rem] xl:pr-96 xl:mr-48 tablet:ml-36 tablet:pl-4 tablet:pr-2 tablet:mr-24 md:ml-12 md:pl-4 md:pr-36 sm:ml-4 sm:pl-2 sm:pr-12 uppercase">
        {t('yellowTitle')}
      </p>
      <p className="tablet-text-5xl text-4xl pt-[2rem] xl:pr-96 xl:mr-48 tablet:ml-36 tablet:pl-4 tablet:pr-2 tablet:mr-24 md:ml-12 md:pl-4 md:pr-36 sm:ml-4 sm:pl-2 sm:pr-12 uppercase">
        {t('yellowTitle2')}
      </p>
      <img
        className="pt-4 w-3/5  xl:ml-56 xl:pl-16 xl:pr-96 md:pl-12 tablet:ml-36 sm:ml-4 sm:pl-2 sm:pr-12 min-w-300px min-h-200px "
        src={therapistpp}
        alt="therapistpp"
      />
      <p className="pt-[2rem] xl:pr-96 xl:mr-48 tablet:ml-36 tablet:pl-4 tablet:pr-2 tablet:mr-24 md:ml-12 md:pl-4 md:pr-36 sm:ml-4 sm:pl-2 sm:pr-12 text-xl font-light text-black">
        {t('yellowText')}
      </p>
      <button
        type="button"
        className="p-[2rem] sm:ml-10 m-8 mb-16 text-md md:text-lg ml-44 mr-96 max-w-lg min-w-fit rounded-md transition duration-250 flex items-center justify-center h-full px-2 py-3 bg-[#2DD3E3] hover:bg-cyan-500"
      >
        <p className="flex-1 h-full text-2xl text-center uppercase text-ellipsis overflow-hidden">
          {t('bookAppointmet')}
        </p>
      </button>
    </div>
  );
};
export default YellowSec;
