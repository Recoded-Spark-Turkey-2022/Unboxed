import { t } from 'i18next';
import React from 'react';

function ContactPlace() {
  return (
    <div className=" w-4/5 h-64 font-poppins rounded-[35px] text-2xl sm:text-base bg-[#eaf8f9]">
      <div className="p-[6%]">
        <h6 className="mb-[2%]">Find us at: </h6>
        <p className="leading-9 opacity-50">
          Nergiz {t('plaza')} <br />
          3rd {t('floor')} <br />
          Bakhtiyari {t('street')} 40m <br />
          Erbil, Iraq <br />
          44001
        </p>
      </div>
    </div>
  );
}

export default ContactPlace;
