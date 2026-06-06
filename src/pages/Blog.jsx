import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Blog = () => {
    return (
        <div>
            <Breadcrumb title="Our Blog" />
            
            {/* Blog Section */}
            <div className="py-24 blog">
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-[900px] mx-auto text-center mb-12">
                        <h5 className="section-title px-3">Our Blog</h5>
                        <h1 className="text-4xl font-bold mb-4">Popular Travel Blogs</h1>
                        <p className="mb-0 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="blog-item group p-0 border rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl bg-white">
                                <div className="blog-img relative overflow-hidden">
                                    <div className="blog-img-inner overflow-hidden">
                                        <img className="w-full transition-transform duration-500 group-hover:scale-110" src={`/img/blog-${item}.jpg`} alt="Blog" />
                                        <div className="blog-icon absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                            <a href="#" className="flex items-center justify-center text-white"><i className="fas fa-link fa-2x"></i></a>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full flex items-center bg-[#13357B]/80 text-white border-y">
                                        <small className="flex-1 text-center border-e py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                        <a href="#" className="flex-1 text-center border-e py-2 text-white hover:text-primary transition-colors"><i className="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                        <a href="#" className="flex-1 text-center py-2 text-white hover:text-primary transition-colors"><i className="fa fa-comments text-primary me-2"></i>1K</a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="mb-3 text-sm text-gray-500">Posted By: Royal Hamblin</p>
                                    <a href="#" className="h4 block text-xl font-bold mb-3 hover:text-primary transition-colors">Adventures Trip</a>
                                    <p className="mb-4 text-gray-600">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-6">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
