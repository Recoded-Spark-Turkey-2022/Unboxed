import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CardsSlider from '../../components/cardsSlider/CardsSlider';

const BuyTickets = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="font-poppins pl-32 pr-32 w-full flex flex-col justify-between ">
      <div className="font-normal not-italic pl-16 ">
        <p className=" text-5xl text-black  uppercase leading-[75px] ">
          select card
        </p>
        <p className=" text-2xl leading-9 text-justify text-lightBlack">
          Please select the card you want to buy the tickets with
        </p>
      </div>

      <CardsSlider setSelected={setSelected} selected={selected} />
      <div className="font-normal text-4xl not-italic capitalize">
        Click confirm to use the selected card to purchase 5 tickets for 10$
      </div>
      <button
        className="tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2  text-center tablet:leading-9 text-black uppercase text-2xl"
        type="button"
        onClick={() => selected && navigate('/buy-tiket-thanks')}
      >
        confirm purchase
      </button>
    </div>
  );
};
export default BuyTickets;
