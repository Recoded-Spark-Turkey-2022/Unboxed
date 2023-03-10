import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardsSlider from '../../components/cardsSlider/CardsSlider';

const PaymentMethods = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="font-poppins pl-20 pr-20 w-full flex flex-col justify-between pb-24 lg:pl-4 lg:pr-4 max:h-middle pt-10">
      <div className="font-normal not-italic pl-16  mb-24 lg:pl-0 lg:mb-10">
        <p className=" text-5xl text-black  uppercase leading-[75px] lg:text-3xl lg:mt-4">
          {t('savedCards')}
        </p>
        <p className=" text-2xl leading-9 text-justify text-lightBlack lg:text-xl">
          {t('paymentMethodsText')}
        </p>
      </div>

      <CardsSlider />
      <button
        className="tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2  text-center tablet:leading-9 text-black uppercase text-2xl mt-8"
        type="button"
        onClick={() => navigate('/add-new-card')}
      >
        {t('addCard')} +
      </button>
    </div>
  );
};
export default PaymentMethods;
