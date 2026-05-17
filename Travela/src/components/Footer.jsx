import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid footer py-24 bg-dark text-white">
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col space-y-4 footer-item">
                        <h4 className="mb-4 text-white text-xl font-bold">Get In Touch</h4>
                        <a href="" className="flex items-center text-white hover:text-primary"><i className="fas fa-home me-2"></i> 123 Street, New York, USA</a>
                        <a href="" className="flex items-center text-white hover:text-primary"><i className="fas fa-envelope me-2"></i> info@example.com</a>
                        <a href="" className="flex items-center text-white hover:text-primary"><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                        <a href="" className="mb-3 flex items-center text-white hover:text-primary"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                        <div className="flex items-center">
                            <i className="fas fa-share fa-2x text-white me-2"></i>
                            <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 footer-item">
                        <h4 className="mb-4 text-white text-xl font-bold">Company</h4>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> About</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Careers</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Blog</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Press</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Magazine</a>
                    </div>
                    <div className="flex flex-col space-y-2 footer-item">
                        <h4 className="mb-4 text-white text-xl font-bold">Support</h4>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Contact</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Legal Notice</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Sitemap</a>
                        <a href="" className="flex items-center"><i className="fas fa-angle-right me-2"></i> Cookie policy</a>
                    </div>
                    <div className="footer-item">
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <select className="bg-dark border border-white/20 p-3 rounded outline-none text-sm">
                                <option value="1">Arabic</option>
                                <option value="2">German</option>
                                <option value="3">Greek</option>
                                <option value="4" selected>English</option>
                            </select>
                            <select className="bg-dark border border-white/20 p-3 rounded outline-none text-sm">
                                <option value="1" selected>USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                                <option value="4">GBP</option>
                            </select>
                        </div>
                        <h4 className="text-white mb-3 text-lg font-bold">Payments</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="text-white hover:text-primary"><i className="fab fa-cc-amex fa-2x"></i></a>
                            <a href="#" className="text-white hover:text-primary"><i className="fab fa-cc-visa fa-2x"></i></a>
                            <a href="#" className="text-white hover:text-primary"><i className="fas fa-credit-card fa-2x"></i></a>
                            <a href="#" className="text-white hover:text-primary"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                            <a href="#" className="text-white hover:text-primary"><i className="fab fa-cc-paypal fa-2x"></i></a>
                            <a href="#" className="text-white hover:text-primary"><i className="fab fa-cc-discover fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
