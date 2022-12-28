import React from 'react';
import { Link } from 'react-router-dom';

function TicketCard({ ticketNumber, ticketPrice }) {
  return (
    <div className=" flex flex-col h-80 w-80 border-2 border-solid border-[#FBFBFB] shadow-xl rounded-md align-start text-center">
      <h1 className="text-5xl">{ticketNumber} TICKETS</h1>
      <span className="text-3xl text-[#0000008a]">{ticketPrice}$</span>{' '}
      <Link to="/#">
        {' '}
        <button
          className="h-16 w-48 mb-16 self-center rounded-md bg-[#2DD3E3] text-2xl text-center leading-9 text-black "
          type="button"
          href="www.google.com"
        >
          PURCHASE
        </button>
      </Link>
    </div>
  );
}

export default TicketCard;
