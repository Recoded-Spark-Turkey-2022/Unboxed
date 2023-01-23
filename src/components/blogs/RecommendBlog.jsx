import React from 'react';
import { blogs } from '../../data/blogArticles';

function RecommendBlog({ id }) {
  const recommends = blogs
    .filter((blog) => blog.id !== id)
    .slice(1, 3)
    .map((blog) => (
      <div key={id}>
        <img src={blog.image} alt={blog.imageDescription} />
      </div>
    ));
  return (
    <div>
      <h1>Recommended For You</h1>
      {recommends}
    </div>
  );
}

export default RecommendBlog;
