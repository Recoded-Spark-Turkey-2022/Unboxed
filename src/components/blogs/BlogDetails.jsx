import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Subscribe from '../footer/Subscribe';
import RecommendBlog from './RecommendBlog';
import { blogs } from '../../data/blogArticles';

const BlogDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const clippedId = id[1];

  const findBlog = blogs
    .filter((blog) => {
      return blog.id === clippedId;
    })
    .map((blog) => (
      <div
        key={id}
        className="flex-col justify-center items-start space-y-[3%] "
      >
        <img
          className="rounded-xl w-full pt-[8%]"
          src={blog.mainImage}
          alt={blog.imageDescription}
        />
        <h1 className="text-5xl pt-[4%] sm:text-2xl">
          {t(`${blog.mainTitle}`)}
        </h1>
        <p>{t(`${blog.summary}`)}</p>
        <h2 className="text-3xl sm:text-lg">{t(`${blog.subtitle}`)}</h2>
        <p>{t(`${blog.article}`)}</p>
      </div>
    ));

  return (
    <div className="font-poppins uppercase text-xl sm:text-sm leading-8 font-light space-y-[3%] px-[12%]">
      {findBlog}
      <div className="space-y-[0.5%] ">
        <h2 className="text-3xl sm:text-lg">{t('signUpForBlog')}</h2>
        <p>{t('adFree')}</p>
        <Subscribe />
      </div>
      <div>
        {' '}
        <RecommendBlog
          data-testid="recommendBlog"
          id={id}
          clippedId={clippedId}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
