import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogArticles';

function RecommendBlog({ clippedId }) {
  // when the new component is rendered, the top of the page will be seen
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // recommendations with next two id
  const recommends = blogs
    .filter((blog) => blog.id !== clippedId)
    .slice(0, 2)
    .map((blog) => (
      <div key={blog.id}>
        <Link to={`/blogs/:${blog.id}`}>
          <button type="button" onClick={handleClick}>
            <img
              className="w-screen"
              src={blog.image}
              alt={blog.imageDescription}
            />
          </button>
        </Link>
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
