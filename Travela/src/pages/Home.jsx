import React, { useState, useEffect } from 'react';
import Map from '../components/Map';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: "/img/carousel-2.jpg",
            title: "Explore The World",
            heading: "Let's The World Together!",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img: "/img/carousel-1.jpg",
            title: "Explore The World",
            heading: "Find Your Perfect Tour At Travel",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img: "/img/carousel-3.jpg",
            title: "Explore The World",
            heading: "You Like To Go?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="overflow-x-hidden">
            {/* Carousel */}
            <div className="carousel-header overflow-hidden">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`carousel-item-transition ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img src={slide.img} className="w-full h-full object-cover" alt="Carousel" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center pt-[60px]">
                            <div className="max-w-[900px] px-3">
                                <h4 className="text-white uppercase font-bold tracking-[3px] mb-4">{slide.title}</h4>
                                <h1 className="text-white text-5xl lg:text-[100px] leading-tight font-bold mb-4 drop-shadow-lg">{slide.heading}</h1>
                                <p className="text-white text-xl mb-10">{slide.text}</p>
                                <div className="flex justify-center">
                                    <a href="#" className="btn btn-primary btn-hover-bg rounded-pill py-3 px-12 text-lg text-white">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Indicators */}
                <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-4 h-4 rounded-full border-2 border-white transition-all ${i === currentSlide ? 'bg-primary' : 'bg-transparent'}`}
                        />
                    ))}
                </div>

                <button 
                    onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded bg-primary text-white hover:bg-dark transition-colors"
                >
                    <i className="fa fa-angle-left text-2xl"></i>
                </button>
                <button 
                    onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded bg-primary text-white hover:bg-dark transition-colors"
                >
                    <i className="fa fa-angle-right text-2xl"></i>
                </button>
            </div>

            {/* Search Bar - High Fidelity Multi-Field */}
            <div className="container mx-auto px-4 search-bar">
                <div className="bg-[#13357B]/80 rounded-full p-4 lg:p-6 shadow-lg max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        <div className="flex-1 w-full relative">
                            <input 
                                className="w-full py-4 px-8 rounded-full outline-none text-dark border-0" 
                                type="text" 
                                placeholder="Destination" 
                            />
                        </div>
                        <div className="flex-1 w-full relative">
                            <input 
                                className="w-full py-4 px-8 rounded-full outline-none text-dark border-0" 
                                type="date" 
                                placeholder="Select Date" 
                            />
                        </div>
                        <div className="flex-1 w-full relative">
                            <select className="w-full py-4 px-8 rounded-full outline-none text-dark border-0 appearance-none bg-white">
                                <option value="">Persons</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-auto">
                            <button className="btn btn-primary rounded-pill py-4 px-12 w-full font-bold">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-4 pb-24 items-center relative z-10 about">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-5/12">
                        <div className="h-full border-[50px] border-y-transparent border-x-[#13357B] overflow-hidden">
                            <img src="/img/about-img.jpg" className="w-full h-full object-cover" alt="About" />
                        </div>
                    </div>
                    <div className="lg:w-7/12 py-5" style={{ background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(/img/about-img-1.png)' }}>
                        <h5 className="section-about-title pe-3 mb-4">About Us</h5>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                        <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-4">
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            <p className="mb-0 flex items-center text-gray-600"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-3 px-10 mt-2">Read More</a>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-light py-24 service">
                <div className="container mx-auto px-4">
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

            {/* Blog Section */}
            <div className="py-24 blog">
                <div className="container mx-auto px-4">
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

            {/* Contact Section Preview (Simple version for home) */}
            <div className="bg-light py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-[900px] mx-auto text-center mb-12">
                        <h5 className="section-title px-3">Contact Us</h5>
                        <h1 className="text-4xl font-bold">Contact For Any Query</h1>
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
                            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
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

export default Home;
