import React from 'react';
import TicketCard from './TicketCard';
// flex-col-2 gap-40 px-40 pt-24 font-[Poppins]

function Ticket() {
  return (
    <div
      data-testid="ticket-1"
      className="flex flex-row justify-center gap-4 border-pink-800 border-2"
    >
      <div className=" border-blue-500 border-2">
        <h1 className="text-5xl">PURCHASE TICKETS</h1>
        <p className="text-3xl">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINMENTS!
        </p>
        <div className="flex flex-row flex-wrap gap-8">
          <TicketCard ticketNumber="5" ticketPrice="10" />
          <TicketCard ticketNumber="25" ticketPrice="40" />
          <TicketCard ticketNumber="50" ticketPrice="70" />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
