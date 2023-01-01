import React from 'react';
import TicketCard from './TicketCard';
// <div className=" flex flex-col sm:justify-start pb-2"></div>
function Ticket() {
  return (
    <div className="flex flex-row px-2 sm:justify-center font-poppins">
      <div className="sm:space-y-4">
        <h1 className="text-2xl font-medium sm:font-normal sm:text-5xl ">
          PURCHASE TICKETS
        </h1>
        <p className="text-xl font-medium mb-2 sm:mb-0 sm:font-normal sm:text-3xl">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINMENTS!
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8">
          <TicketCard ticketNumber="5" ticketPrice="10" />
          <TicketCard ticketNumber="25" ticketPrice="40" />
          <TicketCard ticketNumber="50" ticketPrice="70" />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
