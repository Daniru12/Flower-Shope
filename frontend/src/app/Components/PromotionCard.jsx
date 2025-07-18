"use client";

import React from 'react';
import Image from 'next/image';

export const PromotionCard = () => {
  return (
    <div className="w-full px-4 py-8">
      {/* Grid layout with spacing between cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Left Card */}
        <div className="w-full h-full border-4 border-pink-400 rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col lg:flex-row bg-pink-100 h-full">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="bg-yellow-300 text-black font-semibold w-fit px-4 py-1 rounded-full text-sm mb-6">
                Limited Time
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-black">Fresh </span>
                <span className="text-pink-600">Flower</span>{' '}
                <span className="text-black">Deals 🌸</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Bloom into beauty with our best flower collections. Enjoy up to 50% off!
              </p>
              <button className="bg-white text-black w-fit px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
            {/* Right image */}
            <div className="lg:w-1/2 h-72 lg:h-auto relative">
              <Image
                src="/image1.png"
                alt="Fresh Flower"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full h-full border-4 border-pink-400 rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col lg:flex-row bg-pink-100 h-full">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="bg-yellow-300 text-black font-semibold w-fit px-4 py-1 rounded-full text-sm mb-6">
                Limited Time
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-black">Fresh </span>
                <span className="text-pink-600">Flower</span>{' '}
                <span className="text-black">Deals 🌸</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Bloom into beauty with our best flower collections. Enjoy up to 50% off!
              </p>
              <button className="bg-white text-black w-fit px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
            {/* Right image */}
            <div className="lg:w-1/2 h-72 lg:h-auto relative">
              <Image
                src="/image2.png"
                alt="Fresh Flower"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
