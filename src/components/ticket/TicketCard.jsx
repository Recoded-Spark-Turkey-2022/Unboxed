import React from 'react';
import { Link } from 'react-router-dom';

function TicketCard({ ticketNumber, ticketPrice }) {
  return (
    <div className="flex-col-4 sm:w-80 sm:h-80 w-40 h-40 pt-6 sm:pt-16 sm:space-y-4 space-y-2 sm:mt-4  shadow-2xl rounded-lg align-start text-center">
      <div>
        <h1 className="text-2xl sm:text-5xl ">{ticketNumber} TICKETS</h1>
      </div>
      <div>
        <span className="text-xl sm:text-3xl text-[#0000008a]">
          {ticketPrice}$
        </span>
      </div>{' '}
      <div>
        <Link to="/#">
          {' '}
          <button
            className="sm:h-16 sm:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2 sm:text-2xl text-center sm:leading-9 text-black "
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
