import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Subscribe from '../components/Subscribe';

const About = () => {
    return (
        <div>
            <Breadcrumb title="About Us" />
            
            {/* About Section */}
            <div className="container mx-auto px-4 py-24 about">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-5/12">
                        <div className="h-full border-[50px] border-y-transparent border-x-primary overflow-hidden">
                            <img src="/img/about-img.jpg" className="w-full h-full object-cover" alt="About" />
                        </div>
                    </div>
                    <div className="lg:w-7/12 py-5" style={{ background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(/img/about-img-1.png)' }}>
                        <h5 className="section-about-title pe-3 mb-4">About Us</h5>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-4">
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            <p className="mb-0 flex items-center"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-3 px-10 mt-2">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
