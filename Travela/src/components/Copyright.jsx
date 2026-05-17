import React from 'react';

const Copyright = () => {
    return (
        <div className="container-fluid bg-gray-950 text-gray-400 py-4 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                    <div className="md:text-right">
                        <i className="fas fa-copyright mr-2"></i>
                        <a className="text-white hover:text-primary" href="#">Your Site Name</a>, All right reserved.
                    </div>
                    <div>
                        Designed By <a className="text-white hover:text-primary" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
