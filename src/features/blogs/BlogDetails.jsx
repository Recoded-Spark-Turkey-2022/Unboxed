import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../../data/blogArticles';

const BlogDetails = () => {
  const { id } = useParams();

  const renderBlog = blogs.filter((blog) => blog.id === id);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default BlogDetails;
