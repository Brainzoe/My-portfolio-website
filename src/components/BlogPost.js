import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const BlogPost = () => {
  const { id } = useParams();

  // Simulating blog post data (same as in Blog component)
  const [posts] = useState([
    {
      id: 1,
      title: 'Understanding Business Intelligence',
      date: 'September 10, 2024',
      content: 'Business Intelligence (BI) is the process of analyzing data and presenting actionable information...'
    },
    {
      id: 2,
      title: 'Full-Stack Development in 2024',
      date: 'August 25, 2024',
      content: 'Full-stack development is the practice of working with both front-end and back-end technologies...'
    }
  ]);

  const post = posts.find((post) => post.id === parseInt(id)); // Convert id to integer

  if (!post) {
    return <div>Post not found!</div>; // Handle not found case
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-600">{post.date}</p>
        <p className="mt-4">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

