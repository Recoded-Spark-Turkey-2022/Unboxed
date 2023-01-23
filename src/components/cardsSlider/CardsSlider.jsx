/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Cards from '../cards/Cards';
import left from './next 1.svg';
import right from './next 2.svg';

const CardsSlider = ({ setSelected, selected }) => {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const handlePrev = () => {
    setStart((prev) =>
      prev + 3 < firestoreObject?.cards?.length ? prev + 1 : prev
    );
    setEnd((prev) => (prev < firestoreObject?.cards?.length ? prev + 1 : prev));
  };
  const handleNext = () => {
    setStart((prev) => (prev === 0 ? prev : prev - 1));
    setEnd((prev) => (prev - 3 === 0 ? prev : prev - 1));
  };
  return (
    <div className="flex justify-between">
      <img src={right} alt="next" onClick={handleNext} />
      <Cards
        start={start}
        end={end}
        setSelected={setSelected}
        selected={selected}
        cards={firestoreObject?.cards}
      />
      <img src={left} alt="prev" onClick={handlePrev} />
    </div>
  );
};
export default CardsSlider;
