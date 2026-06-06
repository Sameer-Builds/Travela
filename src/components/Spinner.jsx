import React, { useEffect, useState } from 'react';

const Spinner = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="spinner" className={show ? 'show' : ''}>
            <div className="spinner-border text-primary w-12 h-12" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
