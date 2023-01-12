import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Counsler from '../../components/Counsler/Counsler';
import YellowSec from '../../components/hmpgYellowSection/YellowSection';
import Ticket from '../../components/ticket/Ticket';

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <Ticket />
      <Counsler />
      <YellowSec />
    </div>
  );
};

export default Homepage;
