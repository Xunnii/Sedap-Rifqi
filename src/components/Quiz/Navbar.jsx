import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Admin Dashboard', to: '/admin/dashboard' },
    { name: 'Rooms', to: '/admin/customer' },
    { name: 'Destination', to: '/admin/customer' },
    { name: 'Blog', to: '/admin/customer' },
    { name: 'Contact', to: '/admin/customer' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div id="sidebar-logo" className="flex flex-col">
              <span id="logo-title" className="font-poppins-ExtraBold text-[48px]">
                Sedap{" "}
                <b id="logo-dot" className="text-hijau">
                  .
                </b>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-hijau font-bold px-3 py-2 rounded-md text-sm"
                      : "text-gray-700 hover:text-hijau px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                className="bg-hijau text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-hijau focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-hijau font-bold block px-3 py-2 rounded-md text-base"
                    : "text-gray-700 hover:text-hijau block px-3 py-2 rounded-md text-base font-medium"
                }
                onClick={() => setIsOpen(false)} // tutup menu mobile saat klik menu
              >
                {item.name}
              </NavLink>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
