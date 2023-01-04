import React from 'react';
import TicketCard from './TicketCard';

function Ticket() {
  return (
    <div className=" p-[4rem] flex flex-row px-2 tablet:justify-center font-poppins">
      <div className="tablet:space-y-4">
        <h1 className="text-2xl font-medium tablet:font-normal tablet:text-5xl ">
          PURCHASE TICKETS
        </h1>
        <p className="text-xl font-medium mb-2 tablet:mb-0 tablet:font-normal tablet:text-3xl">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINMENTS!
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6 tablet:gap-8">
          <TicketCard ticketNumber="5" ticketPrice="10" />
          <TicketCard ticketNumber="25" ticketPrice="40" />
          <TicketCard ticketNumber="50" ticketPrice="70" />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
