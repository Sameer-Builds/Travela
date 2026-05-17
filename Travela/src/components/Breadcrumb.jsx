import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, activePage }) => {
    return (
        <div className="container-fluid bg-breadcrumb py-36">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-white text-5xl lg:text-7xl font-bold mb-4">{title}</h3>
                <ol className="flex justify-center items-center space-x-2 text-white">
                    <li className="breadcrumb-item"><Link to="/" className="text-secondary hover:text-white">Home</Link></li>
                    <li className="text-white/50">/</li>
                    <li className="breadcrumb-item"><a href="#" className="text-secondary hover:text-white">Pages</a></li>
                    <li className="text-white/50">/</li>
                    <li className="breadcrumb-item active text-white">{activePage}</li>
                </ol>    
            </div>
        </div>
    );
};

export default Breadcrumb;
