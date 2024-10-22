// // src/components/Navbar.js
// import React from 'react';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#blog">Blog</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li className="mr-6">
            <HashLink smooth to="#home" className="text-white hover:text-gray-400">Home</HashLink>
          </li>
          <li className="mr-6">
            <HashLink smooth to="#about" className="text-white hover:text-gray-400">About</HashLink>
          </li>
          <li className="mr-6">
            <HashLink smooth to="#skills" className="text-white hover:text-gray-400">Skills</HashLink>
          </li>
          <li className="mr-6">
            <HashLink smooth to="#portfolio" className="text-white hover:text-gray-400">Portfolio</HashLink>
          </li>
          <li className="mr-6">
            <HashLink smooth to="#blog" className="text-white hover:text-gray-400">Blog</HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact" className="text-white hover:text-gray-400">Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
