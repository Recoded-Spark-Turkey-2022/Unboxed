import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Counsler from '../../components/Counsler/Counsler';
import HeroSec from '../../components/hmpgHeroSection/HeroSection';
import YellowSec from '../../components/hmpgYellowSection/YellowSection';
import Ticket from '../../components/ticket/Ticket';
import Comm from '../../components/hmpgCommunication/Comm';

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <Ticket />
      <Counsler />
    </div>
  );
};

export default Homepage;
