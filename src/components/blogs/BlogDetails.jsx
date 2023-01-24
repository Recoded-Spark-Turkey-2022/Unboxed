import React from 'react';
import { useParams } from 'react-router-dom';
import Subscribe from '../footer/Subscribe';
import RecommendBlog from './RecommendBlog';
import { blogs } from '../../data/blogArticles';

const BlogDetails = () => {
  const { id } = useParams();

  const findBlog = blogs.filter((blog) => blog.id === id.slice(1));
  const renderBlog = findBlog.map((blog) => (
    <div key={id} className="flex-col justify-center items-start space-y-[3%] ">
      {' '}
      <img
        className="rounded-xl w-full pt-[8%]"
        src={blog.mainImage}
        alt={blog.imageDescription}
      />
      <h1 className="text-5xl pt-[4%] sm:text-2xl">{blog.mainTitle}</h1>
      <p>{blog.summary}</p>
      <h2 className="text-3xl sm:text-lg">{blog.subtitle}</h2>
      <p>{blog.article}</p>
    </div>
  ));

  return (
    <div className="font-poppins uppercase text-xl sm:text-sm leading-8 font-light space-y-[3%]">
      {renderBlog}
      <div className="space-y-[0.5%] ">
        <h2 className="text-3xl sm:text-lg">Sign Up For The Healing Blog</h2>
        <p>A weekly, ad-free Blog that helps you stay in the know.</p>
        <Subscribe />
      </div>
      <div>
        {' '}
        <RecommendBlog id={id} />
      </div>
    </div>
  );
};

export default BlogDetails;
