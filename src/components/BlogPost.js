import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Import react-markdown

const BlogPost = () => {
  const { id } = useParams();

  // Simulating blog post data (same as in Blog component)
  const [posts] = useState([
    {
      id: 1,
      title: 'Understanding Business Intelligence',
      date: 'September 10, 2024',
      content: `
**Business Intelligence (BI)** is a technology-driven process used by organizations to analyze data and deliver actionable insights for strategic decision-making. BI encompasses a range of tools, applications, and methodologies that enable businesses to collect data from internal systems and external sources, prepare it for analysis, and present findings that help managers make informed business decisions.

In 2024, BI has evolved with the integration of AI, machine learning, and advanced analytics, which have significantly enhanced data processing and predictive modeling. BI tools today allow real-time data analysis, dashboards, and reports that provide immediate insights into business performance. As businesses face an increasingly competitive environment, the demand for faster, more accurate decision-making is paramount, making BI a critical function.

Key components of BI include data mining, process analysis, performance benchmarking, and descriptive analytics. With the advent of cloud-based solutions, BI has become more accessible to small and medium-sized enterprises (SMEs), enabling them to leverage data-driven insights without the need for substantial IT infrastructure.

**Why BI Matters:**
- **Informed Decisions**: BI helps companies identify trends, track performance, and make decisions based on comprehensive data.
- **Improved Efficiency**: It enables organizations to optimize processes by identifying bottlenecks or inefficiencies.
- **Competitive Advantage**: Companies that invest in BI are able to anticipate market shifts and stay ahead of the competition by leveraging data effectively.
- **Customer Insights**: BI provides deeper insights into customer behaviors, allowing for more personalized marketing strategies and enhanced customer experiences.

**The Future of BI**: As BI technologies continue to evolve, we will see more integration with natural language processing (NLP), where users can interact with BI tools through simple queries. Moreover, self-service BI is becoming more popular, enabling non-technical users to generate their own reports and insights without relying on IT departments.
      `,
    },
    {
      id: 2,
      title: 'Full-Stack Development in 2024',
      date: 'August 25, 2024',
      content: `
Full-stack development refers to the practice of working on both the front-end (client side) and back-end (server side) of web applications. A full-stack developer is skilled in both areas, enabling them to build complete web solutions independently. In 2024, full-stack development remains one of the most in-demand skills in the tech industry, thanks to the growing demand for seamless, dynamic web applications.

Front-End Technologies: The front end involves everything the user interacts with in a web application. Key technologies include HTML, CSS, and JavaScript, alongside popular frameworks like React, Angular, and Vue.js. These tools help developers create responsive, user-friendly interfaces that work across devices and browsers. In 2024, front-end development has increasingly emphasized performance optimization and user experience (UX) design, with features like lazy loading, responsive grids, and interactive animations becoming the norm.

Back-End Technologies: The back end refers to the server-side components that process requests, manage databases, and handle business logic. Key technologies in the back end include programming languages like Node.js, Python, Ruby, and Java, as well as database systems like MySQL, PostgreSQL, and MongoDB. In 2024, the back end is being shaped by cloud computing and microservices architecture, where applications are divided into smaller, loosely coupled services. This shift makes full-stack developers responsible for managing APIs, serverless functions, and continuous integration/continuous delivery (CI/CD) pipelines.

Why Full-Stack Development is Crucial in 2024:

- **Versatility**: Full-stack developers have the ability to work across multiple domains, from user interfaces to databases and server-side logic. This makes them highly valuable in agile development environments where flexibility is key.
- **Efficient Development**: A single full-stack developer can manage both front-end and back-end tasks, reducing the need for multiple specialists and streamlining development processes.
- **Career Growth**: Full-stack developers are in high demand, and their expertise allows them to take on leadership roles such as tech leads or software architects.
- **Faster Prototyping**: Full-stack developers can create end-to-end prototypes quickly, allowing businesses to test ideas and features before committing to full development.

Current Trends in Full-Stack Development:

- **Jamstack Architecture**: Jamstack is gaining popularity as a modern web development architecture that decouples the front end from the back end. It leverages APIs and serverless functions to improve performance and scalability.
- **DevOps Integration**: Full-stack developers in 2024 are expected to be familiar with DevOps practices, enabling them to manage code deployment, CI/CD pipelines, and cloud infrastructure.
- **AI-Powered Development**: AI tools are increasingly used to assist in writing code, optimizing databases, and testing, making full-stack development more efficient.
      `,
    },
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
        <div className="mt-4">
          <ReactMarkdown>{post.content}</ReactMarkdown> {/* Render markdown content */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
