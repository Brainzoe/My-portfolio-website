import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // Importing a laptop icon

const Home = ({ image }) => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-5xl font-bold">
    <FontAwesomeIcon icon={faLaptopCode} className="mr-3" />
    Empowering Business with Data-Driven Solutions & Full-Stack Development
</h1>

            <p className="mt-4 text-lg">Bridging data and development to deliver impactful solutions.</p>
            <img src={image} alt="My Portfolio" className="mt-6 rounded-lg shadow-lg max-w-xs" /> {/* Adjust max-w as needed */}
            <div className="mt-6">
                <a href="#portfolio" className="px-8 py-3 bg-blue-600 rounded-lg">View My Work</a>
                <a href="#contact" className="ml-4 px-8 py-3 bg-gray-700 rounded-lg">Let's Connect</a>
            </div>
        </section>
    );
};

export default Home;
