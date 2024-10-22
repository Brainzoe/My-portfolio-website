import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to handle navigation
  const handleNavigation = (hash) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate back to the homepage
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Add a slight delay to allow for navigation
    } else {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}
        >
          <li className="mr-6">
            <a
              href="#home"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#home')}
            >
              Home
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#about"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#about')}
            >
              About
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#skills"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#skills')}
            >
              Skills
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#portfolio"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#blog"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#blog')}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white hover:text-gray-400 py-2"
              onClick={() => handleNavigation('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
