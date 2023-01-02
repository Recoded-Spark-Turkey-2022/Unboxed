import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogs } from '../../data/blogArticles';
import previous from './leftsquare.svg';
import next from './rightsquare.svg';

function Carousel() {
  // this hook is used for make buttons work
  const [sliderRef, setSliderRef] = useState(null);

  // mapping blogs-- to make images interactive, button element is assigned
  const recentBlogs = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          {' '}
          <button type="button">
            <img src={blog.image} alt={blog.title} />
          </button>
        </Link>
      </div>
    );
  });

  // these settings come with the Slick library- controls styling of the Slider component
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
