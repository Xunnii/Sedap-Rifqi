import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    services: [
      'Delicious Food',
      'Parking Area',
      'Free Wifi',
      'Swimming Pool',
      'Spa Salon',
    ],
    quickLinks: [
      'About Us',
      'Popular Destination',
      'Awesome Rooms',
      'Our Services',
      'Pricing Plan',
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>

            <span id="logo-title" className="font-poppins-ExtraBold text-[48px]">
              Sedap{" "}
              <b id="logo-dot" className="text-hijau">
                .
              </b>
            </span>
            <p className="mb-8">
              Experience luxury and comfort in our carefully curated selection of world-class accommodations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-200">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-colors duration-200">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1" />
                <span>7 Green Lake Street Crawfordsville, IN 47933</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3" />
                <span>+1 800 123 456 789</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <span>Sedap@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p>
            Copyright © {new Date().getFullYear()} Sedap by wpOceans. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 