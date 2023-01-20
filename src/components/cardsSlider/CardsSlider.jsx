import React from 'react';
import Card from '../card/Card';

const CardsSlider = () => {
  return (
    <div className="flex flex-row justify-center tablet:pb-10 laptop: pb-28">
      <div className="flex flex-col w-5/6 m-1 tablet:m-4">
        <div data-testid="blogImage">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default CardsSlider;
