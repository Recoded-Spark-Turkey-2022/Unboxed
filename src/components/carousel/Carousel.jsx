import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogs } from '../../data/blogArticles';
import previous from './leftsquare.svg';
import next from './rightsquare.svg';

function Carousel() {
  const { t } = useTranslation();
  // this hook is used for make buttons work
  const [sliderRef, setSliderRef] = useState(null);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // mapping blogs-- to make images interactive, button element is assigned
  const recentBlogs = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <Link to={`/blogs/:${blog.id}`}>
          {' '}
          <button className="mx-1" type="button" onClick={handleClick}>
            <img src={blog.image} alt={blog.title} />
          </button>
        </Link>
      </div>
    );
  });

  // these settings come with the Slick library- controls styling of the Slider component
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
    <div className="flex flex-col justify-center bg-[#EAF8F9] font-poppins ">
      <h1 className="text-xl font-semibold tablet:text-5xl tablet: py-2 laptop:pl-28 laptop:py-16">
        {t('recend')}
      </h1>
      <div className="flex flex-row justify-center tablet:pb-10 laptop: pb-28">
        <div className="self-center">
          <button onClick={sliderRef?.slickPrev} type="button">
            <img src={previous} alt="previous button" />
          </button>
        </div>

        <div className="flex flex-col w-5/6 m-1 tablet:m-4">
          <div data-testid="blogImage">
            <Slider ref={setSliderRef} {...settings}>
              {recentBlogs}
            </Slider>
          </div>
        </div>
        <div className="self-center">
          <button onClick={sliderRef?.slickNext} type="button">
            <img src={next} alt="next button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
