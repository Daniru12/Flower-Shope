// Header.js
'use client';

import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import Link from 'next/link'; // Assuming you are using Next.js for routing

export default function Header({ favoritesCount = 0, cartItemsCount = 0, onCartClick }) { // Accept onCartClick prop
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shops" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed z-50 w-full text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #722849 0%, #5a1e3a 50%, #42003A 100%)'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-12 h-12 bg-white rounded-full top-2 left-20 animate-pulse"></div>
        <div className="absolute w-8 h-8 delay-1000 bg-white rounded-full top-6 right-32 animate-pulse"></div>
        <div className="absolute w-6 h-6 delay-500 bg-white rounded-full bottom-2 left-1/3 animate-pulse"></div>
      </div>

      <div className="relative flex items-center justify-between p-4 lg:px-8">
        <div className="z-10 flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 transition-all duration-300 hover:scale-105 group">
            <div className="relative">
              <img
                src="/logo.png" 
                alt="Flower Shop Logo"
                className="object-contain w-20 h-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <div className="absolute transition-opacity duration-300 rounded-full opacity-0 -inset-2 bg-white/20 group-hover:opacity-100 blur-sm"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-pink-100">The Bloom Room</h1>
              <p className="text-xs text-pink-200">Beautiful Moments</p>
            </div>
          </Link>
        </div>

        <nav className="z-10 items-center hidden space-x-8 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative px-4 py-2 font-medium text-pink-100 transition-all duration-300 hover:text-white hover:scale-105 group"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 transition-transform duration-300 ease-out scale-0 rounded-lg bg-white/20 group-hover:scale-100"></div>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        <div className="z-10 flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search flowers..."
                className="w-64 py-3 pl-4 pr-12 text-gray-800 placeholder-gray-500 transition-all duration-300 border-2 border-transparent rounded-full outline-none bg-white/90 backdrop-blur-sm focus:border-pink-300 focus:bg-white focus:shadow-lg"
              />
              <div className="absolute transform -translate-y-1/2 right-3 top-1/2">
                <Search className={`w-5 h-5 transition-colors duration-300 ${isSearchFocused ? 'text-pink-600' : 'text-gray-500'}`} />
              </div>
              {searchValue && (
                <button
                  onClick={() => setSearchValue("")}
                  className="absolute text-gray-400 transform -translate-y-1/2 right-10 top-1/2 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Cart Button - Updated to call onCartClick */}
            <button
              onClick={onCartClick} // Use the passed function
              className="relative p-3 transition-all duration-300 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 group"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-5 h-5 transition-colors duration-300 group-hover:text-pink-300" />
              {cartItemsCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-500 rounded-full -top-2 -right-2">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 transition-all duration-300 rounded-full lg:hidden bg-white/20 hover:bg-white/30"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#722849] to-[#42003A] shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-6 space-y-4">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search flowers..."
              className="w-full py-3 pl-4 pr-10 text-gray-800 placeholder-gray-500 rounded-full outline-none bg-white/90 backdrop-blur-sm focus:bg-white"
            />
            <Search className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 right-3 top-1/2" />
          </div>

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-3 text-pink-100 transition-colors duration-300 rounded-lg hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500"></div>
    </header>
  );
}
