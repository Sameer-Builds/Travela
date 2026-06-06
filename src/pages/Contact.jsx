import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Map from '../components/Map';

const Contact = () => {
    return (
        <div>
            <Breadcrumb title="Contact Us" />
            
            {/* Contact Section */}
            <div className="bg-light py-24 contact">
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-[900px] mx-auto text-center mb-12">
                        <h5 className="section-title px-3">Contact Us</h5>
                        <h1 className="text-4xl font-bold mb-4">Contact For Any Query</h1>
                        <p className="mb-0 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
                        <div className="lg:w-1/3 grid gap-6 w-full">
                            <div className="bg-white rounded p-10 text-center shadow-sm">
                                <i className="fa fa-map-marker-alt fa-3x text-primary mb-4"></i>
                                <h4 className="text-xl font-bold text-primary mb-2">Address</h4>
                                <p className="mb-0 text-gray-600">123 ranking Street, <br /> New York, USA</p>
                            </div>
                            <div className="bg-white rounded p-10 text-center shadow-sm">
                                <i className="fa fa-phone-alt fa-3x text-primary mb-4"></i>
                                <h4 className="text-xl font-bold text-primary mb-2">Mobile</h4>
                                <p className="mb-0 text-gray-600">+012 345 67890</p>
                            </div>
                            <div className="bg-white rounded p-10 text-center shadow-sm">
                                <i className="fa fa-envelope-open fa-3x text-primary mb-4"></i>
                                <h4 className="text-xl font-bold text-primary mb-2">Email</h4>
                                <p className="mb-0 text-gray-600">info@example.com</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 w-full">
                            <form className="grid gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" className="w-full p-4 rounded bg-white border-0 outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Your Name" />
                                    <input type="email" className="w-full p-4 rounded bg-white border-0 outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Your Email" />
                                </div>
                                <input type="text" className="w-full p-4 rounded bg-white border-0 outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Subject" />
                                <textarea className="w-full p-4 rounded bg-white border-0 outline-none focus:ring-1 focus:ring-primary h-[160px] shadow-sm" placeholder="Leave a message here"></textarea>
                                <button className="btn btn-primary rounded-pill py-3 w-full text-lg shadow-sm">Send Message</button>
                            </form>
                        </div>
                    </div>
                    {/* Map Integration */}
                    <Map height="450px" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
