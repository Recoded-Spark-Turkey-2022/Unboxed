import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContactThanks() {
  const { t } = useTranslation();
  return (
    <div className="flex font-poppins mx-[6%] 768:px-28 pt-20  gap-16 425:h-middle px-10 mb-4 ">
      <div>
        <h1 className="flex-column my-[1%] flex-start text-5xl">
          {t('thankyou')}
        </h1>
        <span className="text-2xl leading-9 opacity-50">
          {t('contactThanks')}
        </span>
        <div>
          <Link to="/">
            <button
              className="text-xl w-[20%] h-16 mt-[2%] self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 sm:w-28"
              type="button"
            >
              {t('backToHome')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactThanks;
