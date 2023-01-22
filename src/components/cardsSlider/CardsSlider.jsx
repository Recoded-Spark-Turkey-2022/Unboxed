/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Cards from '../cards/Cards';
import left from './next 1.svg';
import right from './next 2.svg';

const CardsSlider = ({ setSelected, selected }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const handleNext = () => {
    setEnd((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStart((prev) => prev - 1);
  };
  return (
    <div className="flex justify-between">
      <img src={right} alt="next" onClick={handleNext} />
      <Cards
        start={start}
        end={end}
        setSelected={setSelected}
        selected={selected}
      />
      <img src={left} alt="prev" onClick={handlePrev} />
    </div>
  );
};
export default CardsSlider;
