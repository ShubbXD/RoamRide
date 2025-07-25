import React, { useState } from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor bg-light">
      <Link to="/">
        <img src={assets.logo} alt="logo" className='h-16 md:h-20 lg:h-25' />
      </Link>
      {/* Hamburger icon for mobile */}
      <button
        className="lg:hidden ml-auto"
        onClick={() => setOpen(true)}
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex flex-row items-center gap-8 bg-white px-8 py-2 rounded-lg shadow border border-borderColor">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="font-medium text-gray-700 hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
          <div className='flex items-center text-sm gap-2 border border-borderColor px-3 py-1 rounded-full max-w-56 bg-white'>
            <input
              type="text"
              className="w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search Products"
            />
            <img src={assets.search_icon} alt="search" className="w-5 h-5" />
          </div>
          <div className='flex items-center gap-6'>
            <button onClick={() => navigate('/owner')} className="cursor-pointer">DashBoard</button>
            <button onClick={() => setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg">Login</button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-8 py-6 gap-6 lg:hidden transition-all">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={assets.logo} alt="logo" className='h-8' />
            </Link>
            <button className="cursor-pointer" aria-label="Close menu" onClick={() => setOpen(false)}>
              <img src={assets.close_icon} alt="close" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="font-medium text-gray-700 hover:text-primary transition text-lg"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { navigate('/owner'); setOpen(false); }}
              className="cursor-pointer text-left text-gray-700 hover:text-primary transition text-lg"
            >
              DashBoard
            </button>
            <button
              onClick={() => { setShowLogin(true); setOpen(false); }}
              className="cursor-pointer px-8 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg w-fit mt-2"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;