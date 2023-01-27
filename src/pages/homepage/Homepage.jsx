import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Counsler from '../../components/hmpgCounsler/Counsler';
import HeroSec from '../../components/hmpgHeroSection/HeroSection';
import YellowSec from '../../components/hmpgYellowSection/YellowSection';
import Ticket from '../../components/ticket/Ticket';
import Comm from '../../components/hmpgCommunication/Comm';

const Homepage = () => {
  return (
    <div>
      <HeroSec className="border-2 border-red-900" />
      <YellowSec className="border-3 border-red-900" />
      <Comm />
      <Carousel />
      <Ticket />
      <Counsler />
    </div>
  );
};

export default Homepage;
