import React from 'react';

const Topbar = () => {
  return (
    <div className="container-fluid bg-primary px-4 lg:px-12 hidden lg:block">
      <div className="flex h-11 items-center justify-between">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center space-x-2">
            <a className="btn btn-sm btn-outline-light rounded-full w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-primary transition-all" href="">
              <i className="fab fa-twitter font-normal text-xs"></i>
            </a>
            <a className="btn btn-sm btn-outline-light rounded-full w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-primary transition-all" href="">
              <i className="fab fa-facebook-f font-normal text-xs"></i>
            </a>
            <a className="btn btn-sm btn-outline-light rounded-full w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-primary transition-all" href="">
              <i className="fab fa-linkedin-in font-normal text-xs"></i>
            </a>
            <a className="btn btn-sm btn-outline-light rounded-full w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-primary transition-all" href="">
              <i className="fab fa-instagram font-normal text-xs"></i>
            </a>
            <a className="btn btn-sm btn-outline-light rounded-full w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-primary transition-all" href="">
              <i className="fab fa-youtube font-normal text-xs"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div className="inline-flex items-center space-x-4">
            <a href="#" className="text-white text-sm flex items-center"><i className="fa fa-user mr-2"></i>Register</a>
            <a href="#" className="text-white text-sm flex items-center"><i className="fa fa-sign-in-alt mr-2"></i>Login</a>
            <div className="relative group">
              <a href="#" className="text-white text-sm flex items-center cursor-pointer">
                <i className="fa fa-home mr-2"></i> My Dashboard
              </a>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded shadow-lg overflow-hidden hidden group-hover:block z-[1000]">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"><i className="fas fa-user-alt mr-2"></i> My Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"><i className="fas fa-comment-alt mr-2"></i> Inbox</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"><i className="fas fa-bell mr-2"></i> Notifications</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"><i className="fas fa-cog mr-2"></i> Account Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"><i className="fas fa-power-off mr-2"></i> Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
