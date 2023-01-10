import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className='mt-12'>
      <h2>This is a blog {id}</h2>
    </div>
  );
};

export default BlogDetails;
