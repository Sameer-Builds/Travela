import React from 'react';

const Subscribe = () => {
    return (
        <div className="container-fluid subscribe py-24 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h5 className="subscribe-title px-1 relative">Subscribe</h5>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-bold">Our Newsletter</h1>
                    <p className="text-white mb-10 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <input 
                            className="w-full py-4 px-8 rounded-full border-primary border outline-none text-dark" 
                            type="text" 
                            placeholder="Your email" 
                        />
                        <button 
                            type="button" 
                            className="btn btn-primary absolute top-1.5 right-1.5 py-2.5 px-8 rounded-full"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
