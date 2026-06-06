import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const BackToTop = () => {
    const scrollPosition = useScrollPosition();
    const isVisible = scrollPosition > 300;

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a 
            href="#" 
            onClick={scrollToTop}
            className={`fixed right-8 bottom-8 w-11 h-11 bg-primary text-white rounded flex items-center justify-center transition-all duration-500 z-[99] hover:bg-secondary ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
        >
            <i className="fa fa-arrow-up"></i>
        </a>
    );
};

export default BackToTop;
