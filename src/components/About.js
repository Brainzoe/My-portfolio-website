import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Icon for the download button

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
    Versatile and highly skilled professional with a strong background in Business Intelligence, Data Engineering, and Software Development. I specialize in transforming raw data into actionable insights, leveraging my expertise in statistical analysis, machine learning, and advanced data visualization techniques. With a robust foundation in full-stack development, I excel at building dynamic, user-friendly applications that enhance business operations and drive strategic decision-making.
</p>
<p className="mb-4">
    My experience includes creating data-driven reports and dashboards that facilitate informed decision-making, implementing scalable data pipelines, and developing web applications using modern frameworks such as React and Node.js. I have a proven track record of successfully managing projects from conception to completion, ensuring they meet both technical specifications and user needs.
</p>
<p className="mb-4">
    I am passionate about harnessing the power of technology to solve complex problems and deliver innovative solutions. I thrive in collaborative environments, constantly seeking to learn and adapt to new technologies and methodologies. My goal is to empower organizations by leveraging data and technology to achieve their strategic objectives.
</p>

        
        {/* Download CV Button */}
        <a
          href="/cv/John_Okechukwu_Igolo_CV.pdf"
          download="John_Okechukwu_Igolo_CV.pdf"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg inline-block hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default About;
