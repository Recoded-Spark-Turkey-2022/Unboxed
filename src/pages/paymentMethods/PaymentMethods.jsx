import { useNavigate } from 'react-router-dom';
import CardsSlider from '../../components/cardsSlider/CardsSlider';

const PaymentMethods = () => {
  const navigate = useNavigate();
  return (
    <div className="font-poppins pl-32 pr-32 w-full flex flex-col justify-between ">
      <div className="font-normal not-italic pl-16 ">
        <p className=" text-5xl text-black  uppercase leading-[75px] ">
          Your saved cards
        </p>
        <p className=" text-2xl leading-9 text-justify text-lightBlack">
          We only support cards as a payment method at the moment!
        </p>
      </div>

      <CardsSlider />
      <button
        className="tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2  text-center tablet:leading-9 text-black uppercase text-2xl"
        type="button"
        onClick={() => navigate('/add-new-card')}
      >
        add new card +
      </button>
    </div>
  );
};
export default PaymentMethods;
