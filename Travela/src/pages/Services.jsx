import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Subscribe from '../components/Subscribe';

const Services = () => {
    return (
        <div>
            <Breadcrumb title="Our Services" />
            
            {/* Services Section */}
            <div className="bg-light py-24 service">
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-[900px] mx-auto text-center mb-12">
                        <h5 className="section-title px-3">Services</h5>
                        <h1 className="text-4xl font-bold">Our Services</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Right aligned icons (Left side) */}
                        <div className="grid gap-6">
                            {[
                                { title: "WorldWide Tours", icon: "fa-globe" },
                                { title: "Hotel Reservation", icon: "fa-hotel" },
                                { title: "Travel Guides", icon: "fa-user" },
                                { title: "Event Management", icon: "fa-cog" }
                            ].map((item, i) => (
                                <div key={i} className="service-content-inner flex items-center pe-0 group hover:bg-primary transition-all duration-500 cursor-pointer shadow-sm">
                                    <div className="text-end flex-grow">
                                        <h5 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">{item.title}</h5>
                                        <p className="mb-0 transition-colors group-hover:text-white">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium.</p>
                                    </div>
                                    <div className="p-10 flex-shrink-0 bg-white group-hover:bg-primary transition-all duration-500 rounded-full ml-4 shadow-inner">
                                        <i className={`fa ${item.icon} fa-4x text-primary transition-colors group-hover:text-white`}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Left aligned icons (Right side) */}
                        <div className="grid gap-6">
                            {[
                                { title: "WorldWide Tours", icon: "fa-globe" },
                                { title: "Hotel Reservation", icon: "fa-hotel" },
                                { title: "Travel Guides", icon: "fa-user" },
                                { title: "Event Management", icon: "fa-cog" }
                            ].map((item, i) => (
                                <div key={i} className="service-content-inner flex items-center ps-0 group hover:bg-primary transition-all duration-500 cursor-pointer shadow-sm">
                                    <div className="p-10 flex-shrink-0 bg-white group-hover:bg-primary transition-all duration-500 rounded-full mr-4 shadow-inner">
                                        <i className={`fa ${item.icon} fa-4x text-primary transition-colors group-hover:text-white`}></i>
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">{item.title}</h5>
                                        <p className="mb-0 transition-colors group-hover:text-white">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="btn btn-primary rounded-pill py-3 px-10">Service More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
