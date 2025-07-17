"use client";
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 animate-pulse"></div>
      
      {/* Floating petals animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        {/* Enhanced search bar at top right */}
        
        
        <div className="flex flex-col mt-16">
          {/* Enhanced FLOWER text with smooth animations */}
          <div className="relative flex justify-center w-full">
            <div className={`text-7xl md:text-9xl lg:text-[10rem]
 font-bold tracking-widest bg-gradient-to-br from-[#CF0B63] via-[#5a0429] to-black bg-clip-text text-transparent flex items-center justify-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">F</span>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">L</span>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">O</span>
              {/* Enhanced flower image as O with hover effect */}
              <div className="mx-2 hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                <img
                  src="/flower.png"
                  alt="White tulip flower"
                  className="h-24 md:h-40 hover:rotate-12 transition-transform duration-500"
                />
              </div>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">W</span>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">E</span>
              <span className="mx-2 hover:scale-110 transition-transform duration-300 cursor-default">R</span>
            </div>
          </div>

          {/* Enhanced content section with animations */}
          <div className="flex justify-end mt-4">
            <div className={`w-full md:w-1/3 text-left transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="border-t border-black w-32 mb-4 transform origin-left transition-all duration-700 delay-700"></div>
              <p className="text-black text-lg mb-6 leading-relaxed">
                Welcome to <span className="font-semibold text-pink-800">Bloom Haven</span> – where fresh, hand-picked flowers meet
                elegant design. Explore our stunning bouquets, seasonal
                arrangements and special offers.
              </p>
              <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 transform active:scale-95 border-2 border-transparent hover:border-pink-300">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* New feature indicators */}
          <div className={`flex justify-center mt-8 space-x-8 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center space-x-2 text-black/70">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-black/70">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-sm font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2 text-black/70">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-pink-400/30 rounded-tl-lg"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-pink-400/30 rounded-br-lg"></div>
    </div>
  );
}