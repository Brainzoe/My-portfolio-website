import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode, faDatabase, faServer, faProjectDiagram, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faChartLine} className="text-blue-500" />
            <span>Business Intelligence: Power BI, Tableau, SQL</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCode} className="text-green-500" />
            <span>Programming: Python, JavaScript, React, Express</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDatabase} className="text-purple-500" />
            <span>Web Development: HTML, CSS, Tailwind, Node.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faServer} className="text-red-500" />
            <span>Linux System Administration</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-yellow-500" />
            <span>Data Analysis & Visualization</span>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLightbulb} className="text-orange-500" />
            <span>Leadership & Strategic Thinking</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
