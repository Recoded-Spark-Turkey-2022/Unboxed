import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardsSlider from '../../components/cardsSlider/CardsSlider';
import { buyTicket, currentUserHandler } from '../../features/user/userSlice';
import { auth } from '../../firebaseFile';

const BuyTickets = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = () => {
    navigate('/buy-ticket-thank-you');
  };
  const location = useLocation();
  const params = location.state;
  const [ticket, setTicket] = useState('');
  useEffect(() => {
    setTicket(params?.ticket);
  }, []);
  const handleNavigate = async() => {
    if (selected) {
     await dispatch(
        buyTicket({
          ticket,
          navigation,
        })
      );
      dispatch(currentUserHandler(auth.currentUser.uid))
    }
  };
  return (
    <div className="font-poppins pl-20 pr-20 w-full flex flex-col justify-between mb-24 lg:pl-4 lg:pr-4">
      <div className="font-normal not-italic pl-16  mb-24 lg:pl-0 lg:mb-10">
        <p className=" text-5xl text-black  uppercase leading-[75px] lg:text-3xl lg:mt-4">
          select card
        </p>
        <p className=" text-2xl leading-9 text-justify text-lightBlack lg:text-xl">
          Please select the card you want to buy the tickets with
        </p>
      </div>

      <CardsSlider setSelected={setSelected} selected={selected} />
      <div className="font-normal text-4xl not-italic capitalize lg:text-2xl lg:mb-10 mb-4">
        Click confirm to use the selected card to purchase {params?.ticket}{' '}
        tickets for {params?.price}$
      </div>
      {selected && (
        <div className="font-normal text-2xl not-italic capitalize lg:text-2xl lg:mb-10">
          You selected a card
        </div>
      )}
      <button
        className="tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2  text-center tablet:leading-9 text-black uppercase text-2xl mt-8"
        type="button"
        onClick={handleNavigate}
      >
        confirm purchase
      </button>
    </div>
  );
};
export default BuyTickets;
