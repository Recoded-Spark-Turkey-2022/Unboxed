import React from 'react';
import TicketCard from './TicketCard';
// f

function Ticket() {
  return (
    <div className="flex-col-2 gap-40 px-40 pt-24 font-[Poppins]">
      <div className="flex-col pb-6">
        <h1 className="text-5xl mb-2">PURCHASE TICKETS</h1>
        <p className="text-3xl mb-2">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINMENTS!
        </p>
      </div>
      <div className="flex flex-col-3 gap-8">
        <TicketCard ticketNumber="5" ticketPrice="10" />
        <TicketCard ticketNumber="25" ticketPrice="40" />
        <TicketCard ticketNumber="50" ticketPrice="70" />
      </div>
    </div>
  );
}

export default Ticket;
