"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const SpecialOfferSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      badge: "Special Offers",
      title: { part1: "Get", highlight: "50%", part2: "Off Discount" },
      buttonText: "Get Now",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      alt: "Pink peonies in white vase",
      bgColor: "bg-pink-200"
    },
    {
      id: 2,
      badge: "Limited Time",
      title: { part1: "Save", highlight: "40%", part2: "On Premium" },
      buttonText: "Shop Now",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      alt: "Beautiful flower arrangement",
      bgColor: "bg-purple-200"
    },
    {
      id: 3,
      badge: "Flash Sale",
      title: { part1: "Up to", highlight: "70%", part2: "Off Everything" },
      buttonText: "Explore",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=400&fit=crop",
      alt: "Elegant roses bouquet",
      bgColor: "bg-blue-200"
    },
    {
      id: 4,
      badge: "New Collection",
      title: { part1: "Fresh", highlight: "30%", part2: "Spring Deals" },
      buttonText: "Discover",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      alt: "Spring flower collection",
      bgColor: "bg-green-200"
    },
    {
      id: 5,
      badge: "Weekend Deal",
      title: { part1: "Buy 2", highlight: "Get 1", part2: "Free Today" },
      buttonText: "Order Now",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
      alt: "Mixed flower bouquet",
      bgColor: "bg-yellow-200"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-20">
      <div 
        className="relative w-full mx-auto overflow-hidden border border-blue-400 shadow-lg max-w-7xl rounded-2xl group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute z-10 p-3 text-gray-800 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-lg opacity-0 left-4 top-1/2 bg-white/80 hover:bg-white group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute z-10 p-3 text-gray-800 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-lg opacity-0 right-4 top-1/2 bg-white/80 hover:bg-white group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Content */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <div className={`flex flex-col lg:flex-row ${slide.bgColor} w-full`}>
                  {/* Left content */}
                  <div className="flex flex-col justify-center flex-1 p-8 lg:p-12">
                    <div className="px-4 py-1 mb-6 text-sm font-semibold text-black bg-yellow-300 rounded-full w-fit animate-pulse">
                      {slide.badge}
                    </div>
                    <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                      <span className="text-black">{slide.title.part1}</span>{' '}
                      <span className="inline-block text-pink-600 animate-bounce">{slide.title.highlight}</span>{' '}
                      <span className="text-black">{slide.title.part2}</span>
                    </h2>
                    <button className="flex items-center gap-2 px-6 py-3 font-medium text-black transition-all duration-300 bg-white rounded-full shadow-md w-fit hover:bg-gray-100 hover:scale-105">
                      {slide.buttonText}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Right image */}
                  <div className="relative overflow-hidden lg:w-1/2 h-72 lg:h-auto">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      loading={index === currentSlide ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots pagination */}
        <div className="flex justify-center gap-2 py-4 bg-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <div 
            className="h-full transition-all duration-100 ease-linear bg-pink-500"
            style={{ 
              width: isAutoPlaying ? '100%' : '0%',
              animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SpecialOfferSlider;