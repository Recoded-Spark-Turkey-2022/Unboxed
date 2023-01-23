import React from 'react';
import { useParams } from 'react-router-dom';
import Subscribe from '../footer/Subscribe';
import RecommendBlog from './RecommendBlog';
import { blogs } from '../../data/blogArticles';

const BlogDetails = () => {
  const { id } = useParams();

  const findBlog = blogs.filter((blog) => blog.id === id.slice(1));
  const renderBlog = findBlog.map((blog) => (
    <div
      key={id}
      className="flex-col justify-center items-start border-2 border-red-500"
    >
      <img
        className="rounded-xl"
        src={blog.image}
        alt={blog.imageDescription}
      />
      <h1 className="">{blog.mainTitle}</h1>
      <p>{blog.summary}</p>
      <h2>{blog.subtitle}</h2>
      <p>{blog.article}</p>
    </div>
  ));

  return (
    <div>
      {renderBlog}
      <Subscribe />
      <RecommendBlog id={id} />
    </div>
  );
};

export default BlogDetails;
