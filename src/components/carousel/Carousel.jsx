import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogs } from '../../data/blogArticle';
import previous from './leftsquare.svg';
import next from './rightsquare.svg';

function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const handleClick = () => {
    console.log('Clicked');
  };

  const recentBlogs = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <button onClick={handleClick} type="button">
          <img src={blog.image} alt={blog.title} />
        </button>
      </div>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <button onClick={sliderRef?.slickPrev} type="button">
        <img src={previous} alt="previous button" />
      </button>

      <Slider ref={setSliderRef} {...settings}>
        {recentBlogs}
      </Slider>
      <button onClick={sliderRef?.slickNext} type="button">
        <img src={next} alt="next button" />
      </button>
    </div>
  );
}

export default Carousel;
