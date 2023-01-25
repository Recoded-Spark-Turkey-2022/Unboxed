import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../../data/blogArticles';

function RecommendBlog({ id }) {
  const navigate = useNavigate();

  const recommends = blogs
    .filter((blog) => blog.id !== id.slice(1))
    .slice(0, 2)
    .map((blog) => (
      <div key={blog.id}>
        <button type="button" onClick={() => navigate(`/blogs/:${blog.id}`)}>
          <img
            className="w-screen"
            src={blog.image}
            alt={blog.imageDescription}
          />
        </button>
      </div>
    ));
  return (
    <div className="py-[5%] text-3xl sm:text-lg">
      <h1 className="py-[3%]">Recommended For You</h1>
      <div className="flex space-x-[2%] pb-[3%]">{recommends}</div>
    </div>
  );
}

export default RecommendBlog;
