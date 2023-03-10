import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

function TicketCard({ ticketNumber, ticketPrice }) {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate('/buy-ticket', { state: { ticket: item, price: ticketPrice } });
  };
  return (
    <div className="flex-col-4   tablet:w-80 tablet:h-80 w-40 h-40 pt-6 tablet:pt-16 tablet:space-y-4 space-y-2 tablet:mt-4  shadow-2xl rounded-lg align-start text-center">
      <div>
        <h1 className="text-2xl tablet:text-5xl ">
          {ticketNumber} {t('Tickets')}
        </h1>
      </div>
      <div>
        <span className="text-xl tablet:text-3xl text-[#0000008a]">
          {ticketPrice}$
        </span>
      </div>
      <div>
        <button
          onClick={() =>
            firestoreObject ? handleNavigate(ticketNumber) : navigate('/login')
          }
          className="uppercase tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2 tablet:text-2xl text-center tablet:leading-9 text-black "
          type="button"
        >
          {t('Purchase')}
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
