import React from 'react';
import Counsler from '../../components/Counsler/Counsler';
import Ticket from '../../components/ticket/Ticket';
import Comm from '../../components/hmpgCommunication/Comm';

const Homepage = () => {
  return (
    <div>
      <Ticket />
      <Counsler />
      <Comm />
    </div>
  );
};

export default Homepage;
