'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Heart, Star } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add success feedback
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="relative px-6 py-16 overflow-hidden text-white" style={{background: 'linear-gradient(to right, #722849, #42003A)'}}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-20 h-20 bg-white rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-16 h-16 delay-1000 bg-white rounded-full top-32 right-20 animate-pulse"></div>
        <div className="absolute w-12 h-12 delay-500 bg-white rounded-full bottom-20 left-1/3 animate-pulse"></div>
        <div className="absolute w-8 h-8 delay-700 bg-white rounded-full bottom-40 right-10 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="flex items-center mb-2 text-2xl font-bold">
                <Heart className="w-6 h-6 mr-2 text-pink-300" />
                The Bloom Room
              </h3>
              <p className="text-sm leading-relaxed text-pink-100">
                Creating beautiful moments with fresh flowers and heartfelt arrangements.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 transition-colors duration-300 group hover:text-pink-200">
                <div className="p-2 transition-colors duration-300 rounded-full bg-white/20 group-hover:bg-white/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Malabe, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3 transition-colors duration-300 group hover:text-purple-200">
                <div className="p-2 transition-colors duration-300 rounded-full bg-white/20 group-hover:bg-white/30">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+94 704836789</span>
              </div>
              <div className="flex items-center space-x-3 transition-colors duration-300 group hover:text-purple-200">
                <div className="p-2 transition-colors duration-300 rounded-full bg-white/20 group-hover:bg-white/30">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">flowers@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-pink-100">SHOP</h3>
            <ul className="space-y-4">
              {['Romance', 'Birthday', 'Anniversary', 'Graduation', 'Special Occasion'].map((item, index) => (
                <li key={index} className="transition-all duration-300 transform hover:translate-x-2">
                  <a href="#" className="flex items-center space-x-2 text-pink-200 transition-colors duration-300 hover:text-white group">
                    <Star className="w-3 h-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-pink-100">EXPLORE</h3>
            <ul className="space-y-4">
              {['About us', 'Contact us', 'Privacy Policy', 'Terms and Conditions'].map((item, index) => (
                <li key={index} className="transition-all duration-300 transform hover:translate-x-2">
                  <a href="#" className="flex items-center space-x-2 text-pink-200 transition-colors duration-300 hover:text-white group">
                    <Star className="w-3 h-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-pink-100">STAY CONNECTED</h3>
            <p className="mb-6 text-sm leading-relaxed text-pink-200">
              Subscribe to receive our latest flower arrangements and special offers
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-300 shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 hover:shadow-lg hover:scale-105 group"
              >
                <span>Subscribe</span>
                <Send className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
            </div>
            
            {/* Social media icons placeholder */}
            <div className="flex mt-6 space-x-4">
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 hover:scale-110">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 hover:scale-110">
                <span className="text-xs font-bold">ig</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 hover:scale-110">
                <span className="text-xs font-bold">tw</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-pink-200">
              © 2025 FlowerShop. All rights reserved. Made with love in Sri Lanka.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pink-200 transition-colors duration-300 hover:text-white">
                Delivery Info
              </a>
              <a href="#" className="text-purple-200 transition-colors duration-300 hover:text-white">
                Returns
              </a>
              <a href="#" className="text-purple-200 transition-colors duration-300 hover:text-white">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}