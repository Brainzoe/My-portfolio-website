import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Icon for the download button

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
          Versatile and highly skilled professional with a strong background in Business Intelligence, Data Engineering, and Software Development...
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
