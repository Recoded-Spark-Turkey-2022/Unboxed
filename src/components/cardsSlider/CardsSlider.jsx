import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import previous from '../carousel/leftsquare.svg';
import next from '../carousel/rightsquare.svg';
import Cards from '../cards/Cards';

const CardsSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-row justify-center tablet:pb-10 laptop: pb-28">
      <div className="self-center">
        <button onClick={sliderRef?.slickPrev} type="button">
          <img src={previous} alt="previous button" />
        </button>
      </div>

      <div className="flex flex-col w-5/6 m-1 tablet:m-4">
        <div data-testid="blogImage">
          <Slider ref={setSliderRef} {...settings}>
            {Cards}
          </Slider>
        </div>
      </div>
      <div className="self-center">
        <button onClick={sliderRef?.slickNext} type="button">
          <img src={next} alt="next button" />
        </button>
      </div>
    </div>
  );
};
export default CardsSlider;
