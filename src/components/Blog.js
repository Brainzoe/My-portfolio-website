// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNewspaper } from '@fortawesome/free-solid-svg-icons'; // Blog icon

// const blogPosts = [
//     {
//         title: 'The Power of Data: How Business Intelligence Transforms Companies',
//         date: 'September 15, 2024',
//         content:
//             'In today’s fast-paced business world, data is a powerful tool. Business Intelligence (BI) enables companies to make better decisions, improve efficiency, and uncover new opportunities. This post explores how BI impacts business operations and future trends.',
//     },
//     {
//         title: 'Mastering Full-Stack Development in 2024',
//         date: 'August 30, 2024',
//         content:
//             'With the rise of modern frameworks like React and Express, full-stack development has never been more exciting. In this blog, I will take you through the skills needed and how to master full-stack development in 2024.',
//     },
//     {
//         title: 'Why Every Business Needs a Data Strategy',
//         date: 'July 20, 2024',
//         content:
//             'As more businesses digitize their operations, having a data strategy becomes crucial for success. From data collection to analysis, this blog post delves into why businesses must prioritize their data strategy.',
//     },
// ];

// const Blog = () => {
//     return (
//         <section id="blog" className="py-16 bg-white text-gray-900">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold mb-6">
//                     <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
//                     Blog
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {blogPosts.map((post, index) => (
//                         <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                             <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
//                             <p className="text-sm text-gray-600">{post.date}</p>
//                             <p className="mt-4 text-gray-700">{post.content}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Blog;

// src/components/Blog.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'; // Blog icon

const Blog = () => {
  // Simulating blog post data
  const [posts] = useState([
    {
      id: 1,
      title: 'Understanding Business Intelligence',
      date: 'September 10, 2024',
      excerpt: 'Learn the basics of Business Intelligence and how it helps organizations...',
      content: 'Business Intelligence (BI) is the process of analyzing data and presenting actionable information...'
    },
    {
      id: 2,
      title: 'Full-Stack Development in 2024',
      date: 'August 25, 2024',
      excerpt: 'A comprehensive guide to full-stack development and the key technologies...',
      content: 'Full-stack development is the practice of working with both front-end and back-end technologies...'
    }
  ]);

  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p className="mt-4">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-blue-600 mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
