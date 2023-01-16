import React from 'react';
import Counsler from '../../components/Counsler/Counsler';
import HeroSec from '../../components/hmpgHeroSection/HeroSection';
import Ticket from '../../components/ticket/Ticket';

const Homepage = () => {
  return (
    <div>
      <Ticket />
      <Counsler />
      <HeroSec />
    </div>
  );
};

export default Homepage;
