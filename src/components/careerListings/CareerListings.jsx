import { t } from 'i18next';
import React from 'react';

const CareerListings = ({ title, description, position }) => {
  return (
    <div className="flex justify-between  border-b-2  border-[#272733] ">
      <div className="flex flex-col w-5/6">
        <p className="text-[#2DD3E3] text-2xl sm:text-lg ">{title}</p>
        <p className="text-[#424A4F] ">{description}</p>
      </div>
      <div className="flex flex-col w-1/6 ">
        <p className="text-[#2DD3E3] text-2xl sm:text-lg ">
          {t('Engineering')}
        </p>
        <p className="">{position}</p>
      </div>
    </div>
  );
};

export default CareerListings;
