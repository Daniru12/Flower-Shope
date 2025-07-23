"use client";

import Image from 'next/image';
import React, { useState } from 'react';

// Icon components
const IconChevronLeft = () => <span className="text-lg">←</span>;
const IconChevronRight = () => <span className="text-lg">→</span>;
const IconHeart = () => <span className="text-lg">♥</span>;
const IconStar = () => <span className="text-lg">★</span>;
const IconMapPin = () => <span className="text-lg">📍</span>;
const IconPhone = () => <span className="text-lg">📞</span>;
const IconMail = () => <span className="text-lg">✉</span>;
const IconArrowRight = () => <span className="text-lg">→</span>;
const IconSparkles = () => <span className="text-lg">✨</span>;

const Advertise = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [showAdOverlay, setShowAdOverlay] = useState(true);

  const advertisements = [
    {
      id: 1,
      title: "Unique Flowers Like Your Unique Personality",
      subtitle: "Premium Wedding Bouquets",
      description: "Transform your special day with stunning arrangements and charming styling. Each flower is crafted to reflect your individuality.",
      image: "/shop1.jpeg",
      price: "Starting from $89",
      rating: 4.9,
      category: "Wedding Flowers",
      color: "from-pink-100 to-rose-200"
    },
    {
      id: 2,
      title: "Elegant Bridal Flower Boques",
      subtitle: "Capture Your Perfect Moments",
      description: "Professional wedding photography that tells your love story. Every shot crafted with artistic vision and attention to detail.",
      image: "/wedding.jpeg",
      price: "Packages from $1,200",
      rating: 4.8,
      category: "Photography",
      color: "from-blue-100 to-indigo-200"
    },
    {
      id: 3,
      title: "Luxury Wedding Hall Arrangement decorations",
      subtitle: "Dreamy Locations Await",
      description: "Discover breathtaking venues that provide the perfect backdrop for your special day. From gardens to ballrooms.",
      image: "/romance.jpeg",
      price: "From $2,500/day",
      rating: 4.7,
      category: "Hall Arrangement",
      color: "from-emerald-100 to-teal-200"
    },
    {
      id: 4,
      title: "Artisan Wedding Hall rrangement",
      subtitle: "Sweet Perfection",
      description: "Custom wedding cakes designed to complement your celebration. Each creation is a masterpiece of flavor and beauty.",
      image: "/shop2.jpeg",
      price: "From $150",
      rating: 4.9,
      category: "Capturing",
      color: "from-amber-100 to-orange-200"
    }
  ];

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);
  };

  const current = advertisements[currentAd];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">

      
      {/* Advertisement Overlay */}
      {showAdOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md transition-all duration-300 transform shadow-2xl bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl animate-pulse hover:animate-none">
            <button
              onClick={() => setShowAdOverlay(false)}
              className="absolute z-10 flex items-center justify-center w-8 h-8 transition-all duration-200 rounded-full shadow-lg top-4 right-4 bg-white/90 hover:bg-white hover:scale-110"
            >
              <span className="text-lg font-bold text-gray-600">×</span>
            </button>

            <div className="relative overflow-hidden rounded-t-3xl">
              <Image
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=250&fit=crop"
                alt="Unique Flowers"
                className="object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="p-6">
              <div className="mb-4 text-center">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  Unique Flowers Like Your Unique Personality
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Transform your special day with stunning arrangements and charming styling. Each flower is crafted to reflect your individuality.
                </p>
              </div>

              <div className="flex justify-center mb-6 space-x-6 text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <IconStar />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <IconMapPin />
                  <span>Colombo</span>
                </div>
              </div>

              <div className="mb-6 text-center">
                <span className="text-2xl font-bold text-pink-600">Starting from $89</span>
              </div>

              <div className="space-y-3">
                <button className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl hover:shadow-lg hover:scale-105">
                  <IconHeart />
                  <span>Get Your Quote Now</span>
                </button>
                <button className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-pink-600 transition-all duration-300 bg-white border border-pink-200 rounded-2xl hover:bg-pink-50">
                  <IconPhone />
                  <span>Call: +94 11 234 5678</span>
                </button>
              </div>

              <p className="mt-4 text-xs text-center text-gray-500">
                Premium wedding flowers • Free consultation • Same day delivery
              </p>
            </div>
          </div>
        </div>
      )}

      
      {/* Main Content */}
      <main className="px-6 py-12 mx-auto max-w-7xl">
        <div className={`bg-gradient-to-br ${current.color} rounded-3xl overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.02] transition-transform duration-500`}>
          <div className="flex flex-col lg:flex-row">
            <div className="relative overflow-hidden lg:w-1/2">
              <Image
                src={current.image}
                alt={current.title}
                className="object-cover w-full transition-transform duration-700 h-80 lg:h-full hover:scale-110"
              />
              <div className="absolute px-3 py-1 text-sm font-semibold text-gray-800 rounded-full top-4 left-4 bg-white/90 backdrop-blur-sm">
                {current.category}
              </div>
              <div className="absolute flex items-center px-3 py-1 space-x-1 rounded-full top-4 right-4 bg-white/90 backdrop-blur-sm">
                <IconStar />
                <span className="text-sm font-semibold text-gray-800">{current.rating}</span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <div className="mb-6">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-800 lg:text-5xl">
                  {current.title}
                </h1>
                <h2 className="mb-4 text-xl font-medium text-gray-600">
                  {current.subtitle}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  {current.description}
                </p>
                <div className="mb-8 text-3xl font-bold text-gray-800">
                  {current.price}
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8 sm:flex-row">
                <button className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl hover:shadow-xl hover:scale-105">
                  <IconHeart />
                  <span>Get Quote</span>
                </button>
                <button className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-gray-800 transition-all duration-300 transform border border-gray-200 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105">
                  <IconPhone />
                  <span>Contact Now</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <IconMapPin />
                  <span className="text-sm">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <IconMail />
                  <span className="text-sm">info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevAd}
            className="flex items-center px-6 py-3 space-x-2 text-gray-700 transition-all duration-300 transform border border-gray-200 rounded-full bg-white/80 backdrop-blur-sm hover:shadow-lg hover:scale-105"
          >
            <IconChevronLeft />
            <span className="font-medium">Previous</span>
          </button>

          <div className="flex space-x-3">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextAd}
            className="flex items-center px-6 py-3 space-x-2 text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:scale-105"
          >
            <span className="font-medium">Next</span>
            <IconChevronRight />
          </button>
        </div>

        <section className="mb-12">
          <h3 className="mb-8 text-3xl font-bold text-center text-gray-800">
            More Wedding Services
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advertisements.filter((_, index) => index !== currentAd).slice(0, 3).map((ad) => (
              <div
                key={ad.id}
                className={`bg-gradient-to-br ${ad.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                onClick={() => setCurrentAd(advertisements.findIndex(a => a.id === ad.id))}
              >
                <Image
                  src={ad.image}
                  alt={ad.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-sm font-semibold text-gray-600 rounded-full bg-white/70">
                      {ad.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <IconStar />
                      <span className="text-sm font-semibold text-gray-700">{ad.rating}</span>
                    </div>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-800 line-clamp-2">
                    {ad.title}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {ad.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-800">{ad.price}</span>
                    <IconArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="p-12 text-center text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 rounded-3xl">
          <h3 className="mb-4 text-4xl font-bold">Ready to Make Your Day Special?</h3>
          <p className="mb-8 text-xl opacity-90">
            Browse hundreds more wedding vendors and services
          </p>
          <div className="space-y-4">
            <button className="px-12 py-4 text-lg font-bold text-gray-800 transition-all duration-300 transform bg-white rounded-full hover:shadow-xl hover:scale-105">
              Explore All Advertisements
            </button>
            <button 
              onClick={() => setShowAdOverlay(true)}
              className="block px-8 py-3 mx-auto text-lg font-bold text-white transition-all duration-300 transform bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-gray-800 hover:scale-105"
            >
              Show Featured Ad Again
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Advertise;