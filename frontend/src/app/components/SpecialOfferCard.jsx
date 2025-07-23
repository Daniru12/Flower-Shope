"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Star, Sparkles } from 'lucide-react';

export const EnhancedSpecialOfferSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Special Offers",
      title: { part1: "Get", highlight: "50%", part2: "Off Discount" },
      description: "Limited time offer on premium flower arrangements",
      buttonText: "Get Now",
      image: "/contactimg.png",
      alt: "Pink peonies in white vase",
      bgGradient: "from-pink-100 via-pink-50 to-rose-100",
      accentColor: "pink"
    },
    {
      id: 2,
      badge: "Limited Time",
      title: { part1: "Save", highlight: "40%", part2: "On Premium" },
      description: "Exclusive deals on our finest collections",
      buttonText: "Shop Now",
      image: "/special1.png",
      alt: "Beautiful flower arrangement",
      bgGradient: "from-purple-100 via-purple-50 to-indigo-100",
      accentColor: "purple"
    },
    {
      id: 3,
      badge: "Flash Sale",
      title: { part1: "Up to", highlight: "70%", part2: "Off Everything" },
      description: "Don't miss out on these incredible savings",
      buttonText: "Explore",
      image: "/special3.png",
      alt: "Elegant roses bouquet",
      bgGradient: "from-blue-100 via-blue-50 to-cyan-100",
      accentColor: "blue"
    },
    {
      id: 4,
      badge: "New Collection",
      title: { part1: "Fresh", highlight: "30%", part2: "Spring Deals" },
      description: "Discover our latest seasonal arrangements",
      buttonText: "Discover",
      image: "/image.png",
      alt: "Spring flower collection",
      bgGradient: "from-green-100 via-green-50 to-emerald-100",
      accentColor: "green"
    },
    {
      id: 5,
      badge: "Weekend Deal",
      title: { part1: "Buy 2", highlight: "Get 1", part2: "Free Today" },
      description: "Perfect for gifting or treating yourself",
      buttonText: "Order Now",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
      alt: "Mixed flower bouquet",
      bgGradient: "from-yellow-100 via-yellow-50 to-orange-100",
      accentColor: "yellow"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentSlide]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 2.5; // 100 / 40 = 2.5 (4000ms / 100ms updates)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  const currentSlideData = slides[currentSlide];
  const accentColors = {
    pink: 'text-pink-600 bg-pink-500',
    purple: 'text-purple-600 bg-purple-500',
    blue: 'text-blue-600 bg-blue-500',
    green: 'text-green-600 bg-green-500',
    yellow: 'text-yellow-600 bg-yellow-500'
  };

  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-20">
      <div className="relative w-full mx-auto overflow-hidden shadow-2xl max-w-7xl rounded-3xl group">
        {/* Background with glassmorphism effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute z-20 p-3 text-gray-700 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-xl opacity-0 left-4 top-1/2 bg-white/90 hover:bg-white hover:scale-110 group-hover:opacity-100 backdrop-blur-sm disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute z-20 p-3 text-gray-700 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-xl opacity-0 right-4 top-1/2 bg-white/90 hover:bg-white hover:scale-110 group-hover:opacity-100 backdrop-blur-sm disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={toggleAutoPlay}
          className="absolute z-20 p-2 text-gray-700 transition-all duration-300 rounded-full shadow-lg opacity-0 top-4 right-4 bg-white/90 hover:bg-white hover:scale-110 group-hover:opacity-100 backdrop-blur-sm"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {/* Slide Content */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <div className={`flex flex-col lg:flex-row bg-gradient-to-br ${slide.bgGradient} w-full min-h-[500px] relative`}>
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-10 animate-pulse">
                    <Sparkles className="text-yellow-400 opacity-60" size={24} />
                  </div>
                  <div className="absolute bottom-10 right-10 animate-bounce">
                    <Star className="text-yellow-400 opacity-40" size={20} />
                  </div>

                  {/* Left content */}
                  <div className="relative z-10 flex flex-col justify-center flex-1 p-8 lg:p-16">
                    <div className="flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-gray-800 bg-yellow-300 rounded-full shadow-lg w-fit animate-pulse">
                      <Star size={14} />
                      {slide.badge}
                    </div>
                    
                    <h2 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                      <span className="text-gray-800 drop-shadow-sm">{slide.title.part1}</span>{' '}
                      <span className={`inline-block ${accentColors[slide.accentColor].split(' ')[0]} animate-pulse transform hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                        {slide.title.highlight}
                      </span>{' '}
                      <span className="text-gray-800 drop-shadow-sm">{slide.title.part2}</span>
                    </h2>
                    
                    <p className="max-w-md mb-8 text-lg font-medium text-gray-600">
                      {slide.description}
                    </p>
                    
                    <button className="flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 transform rounded-full shadow-xl w-fit hover:shadow-2xl hover:scale-105 active:scale-95 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                      {slide.buttonText}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Right image */}
                  <div className="relative overflow-hidden lg:w-1/2 h-80 lg:h-auto">
                    <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="object-cover w-full h-full transition-all duration-700 hover:scale-110 filter brightness-105 contrast-105"
                      loading={index === currentSlide ? "eager" : "lazy"}
                    />
                    {/* Floating elements */}
                    <div className="absolute p-2 rounded-full top-4 right-4 bg-white/20 backdrop-blur-sm">
                      <Sparkles className="text-white" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Dots pagination */}
        <div className="flex justify-center gap-3 py-6 bg-white/80 backdrop-blur-sm">
          {slides.map((slide, index) => (
            <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-4 w-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? `${accentColors[slide.accentColor].split(' ')[1]} scale-125 shadow-lg` 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-current rounded-full animate-ping opacity-30"></div>
            )}
          </button>
          ))}
        </div>

        {/* Enhanced Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
          <div 
            className={`h-full transition-all duration-100 ease-linear ${accentColors[currentSlideData.accentColor].split(' ')[1]} shadow-sm`}
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          />
        </div>

        {/* Slide counter */}
        <div className="absolute z-20 px-3 py-1 text-sm font-semibold text-gray-700 rounded-full shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EnhancedSpecialOfferSlider;