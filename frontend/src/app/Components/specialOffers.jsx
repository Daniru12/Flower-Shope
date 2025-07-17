"use client";

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const SpecialOfferCard = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-8">
      <div className="w-full max-w-7xl mx-auto rounded-2xl border border-blue-400 overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row bg-pink-200 w-full">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <div className="bg-yellow-300 text-black font-semibold w-fit px-4 py-1 rounded-full text-sm mb-6">
              Special Offers
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-black">Get</span>{' '}
                 <span className="text-pink-600">50%</span>{' '}
                    <span className="text-black">Off Discount</span>
            </h2>
            <button className="bg-white text-black w-fit px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Get Now
              <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2 h-72 lg:h-auto">
            <img
              src="/vase.jpeg" // ✅ Place your image in /public folder and update this path
              alt="Pink peonies in a white vase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dots pagination */}
        <div className="flex justify-center gap-2 py-3 bg-white">
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-pink-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
