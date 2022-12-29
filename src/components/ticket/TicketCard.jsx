import React from 'react';
import { Link } from 'react-router-dom';

function TicketCard({ ticketNumber, ticketPrice }) {
  return (
    <div className="flex-col-3 w-80 h-80 pt-16 space-y-4 shadow-xl rounded-lg align-start text-center">
      <div>
        <h1 className="text-5xl">{ticketNumber} TICKETS</h1>
      </div>
      <div>
        <span className="text-3xl text-[#0000008a]">{ticketPrice}$</span>
      </div>{' '}
      <div>
        <Link to="/#">
          {' '}
          <button
            className="w-52 h-16 self-center rounded-md bg-[#2DD3E3] text-2xl text-center leading-9 text-black "
            type="button"
          >
            PURCHASE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TicketCard;
