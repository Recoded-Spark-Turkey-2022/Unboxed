import React from 'react';
import TicketCard from './TicketCard';

function Ticket() {
  return (
    <div className="flex flex-col mx-10 border-2 border-blue">
      <div>
        <h1 className="text-5xl">PURCHASE TICKETS</h1>
        <p className="text-3xl">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINMENTS!
        </p>
      </div>
      <div className="flex flex-col-3">
        <TicketCard ticketNumber="5" ticketPrice="10" />
        <TicketCard ticketNumber="25" ticketPrice="40" />
        <TicketCard ticketNumber="50" ticketPrice="70" />
      </div>
    </div>
  );
}

export default Ticket;
