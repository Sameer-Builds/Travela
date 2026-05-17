import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const isSticky = scrollPosition > 45;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) => 
        `nav-item nav-link relative py-2 lg:py-10 px-4 transition-all duration-300 font-medium ${isActive ? 'active text-primary' : ''} ${isSticky ? 'text-dark' : 'text-white'} hover:text-primary`;

    return (
        <div className={`container-fluid relative p-0 ${isSticky ? 'fixed top-0 left-0 w-full z-[1000]' : ''}`}>
            <nav className={`navbar navbar-expand-lg navbar-light px-4 lg:px-12 py-0 transition-all duration-500 w-full flex items-center ${isSticky ? 'sticky-top bg-light shadow-sm' : 'bg-transparent border-b border-white/10 absolute top-0 left-0 z-[999]'}`}>
                <NavLink to="/" className="navbar-brand p-0 py-4 lg:py-0 flex items-center">
                    <h1 className={`m-0 text-4xl font-medium flex items-center ${isSticky ? 'text-primary' : 'text-white'}`}>
                        <i className={`fa fa-map-marker-alt me-2 ${isSticky ? 'text-primary' : 'text-white'}`}></i>Travela
                    </h1>
                </NavLink>
                
                <button 
                    className={`navbar-toggler lg:hidden border p-2 rounded ${isSticky ? 'text-primary border-primary' : 'text-white border-white'}`}
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="fa fa-bars text-xl"></span>
                </button>

                <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex lg:items-center lg:ml-auto w-full lg:w-auto mt-4 lg:mt-0 flex-col lg:flex-row items-center`}>
                    <div className="navbar-nav flex flex-col lg:flex-row lg:items-center ms-auto py-0">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                        <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    </div>
                    <a href="#" className="btn btn-primary rounded-pill py-2 px-6 ml-0 lg:ml-8 mt-4 lg:mt-0 inline-block">
                        Get Started
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
