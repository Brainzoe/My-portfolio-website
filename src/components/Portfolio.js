import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-16 bg-white text-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">
                    <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                    Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Admin Dashboard */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Admin Dashboard</h3>
                        <p className="mt-2">Developed a responsive admin dashboard using Tailwind CSS, React, and Express for efficient management of user data and analytics.</p>
                    </div>
                    {/* Business Intelligence Report */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Business Intelligence Report</h3>
                        <p className="mt-2">Created dynamic data-driven reports using Power BI and SQL, providing critical business insights that improved decision-making processes.</p>
                    </div>
                    {/* Survival Analysis Project */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Survival Analysis for PLWHA</h3>
                        <p className="mt-2">Performed statistical survival analysis to estimate life expectancy for patients living with HIV/AIDS after initiating ART, using advanced modeling techniques.</p>
                    </div>
                    {/* PDF to Image Conversion App */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">PDF to Image Conversion App</h3>
                        <p className="mt-2">Built a standalone Python application to convert PDF documents to image files, streamlining integration into Power BI for improved report visualization.</p>
                    </div>
                    {/* Transaction Monitoring Dashboard */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Transaction Monitoring Dashboard</h3>
                        <p className="mt-2">Developed a real-time monitoring system for Stanbic IBTC Bank to track daily transactions, detect failed transactions, and identify revenue leakages.</p>
                    </div>
                    {/* Full-Stack Movie Mania App */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Movie Mania Web App</h3>
                        <p className="mt-2">Designed and deployed a full-stack web application allowing users to explore movies, search favorites, and manage personalized watchlists using external APIs.</p>
                    </div>
                    {/* Fuel Station Queuing Model */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Fuel Station Queuing Prediction Model</h3>
                        <p className="mt-2">Built a machine learning model that predicts arrival and service rates at fuel stations, optimizing staffing requirements using reinforcement learning techniques.</p>
                    </div>
                    {/* Azure Virtual Machine Deployment */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Azure Virtual Machine Deployment</h3>
                        <p className="mt-2">Deployed a virtual machine and web server using Microsoft Azure and Spring Framework, ensuring high availability and performance for enterprise-grade applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
