"use client";
import React from 'react';
import Image from 'next/image';
import { Sparkles, Gift, ArrowRight, Clock } from 'lucide-react';

export const PromotionCard = () => {
  const promotions = [
    {
      id: 1,
      badge: "Limited Time",
      badgeIcon: Clock,
      title: { 
        part1: "Fresh ", 
        highlight: "Flower", 
        part2: " Deals", 
        emoji: "🌸" 
      },
      description: "Bloom into beauty with our best flower collections. Enjoy up to 50% off!",
      discount: "Up to 50% OFF",
      image: "/image1.png",
      alt: "Fresh Flower Collection",
      gradient: "from-pink-400 via-rose-300 to-pink-200",
      accentColor: "pink"
    },
    {
      id: 2,
      badge: "Special Offer",
      badgeIcon: Gift,
      title: { 
        part1: "Premium ", 
        highlight: "Bouquet", 
        part2: " Sale", 
        emoji: "💐" 
      },
      description: "Discover our exclusive premium collection with handpicked flowers and elegant designs!",
      discount: "Buy 2 Get 1 Free",
      image: "/image2.png",
      alt: "Premium Bouquet Collection",
      gradient: "from-purple-400 via-pink-300 to-rose-200",
      accentColor: "purple"
    }
  ];

  const PromotionCardItem = ({ promotion, index }) => (
    <div className="relative w-full h-full group">
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${promotion.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 scale-105`}></div>
      
      <div className="relative w-full h-full border-4 border-white/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm">
        <div className={`flex flex-col lg:flex-row bg-gradient-to-br ${promotion.gradient} h-full relative overflow-hidden`}>
          {/* Floating decorative elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-15">
            <Sparkles className="w-4 h-4 text-white delay-700 animate-pulse" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-10">
            <Sparkles className="w-5 h-5 text-white delay-300 animate-pulse" />
          </div>

          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-center flex-1 p-8 lg:p-12">
            {/* Enhanced Badge */}
            <div className="flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold text-black transition-all duration-300 border-2 rounded-full shadow-lg bg-gradient-to-r from-yellow-300 to-yellow-400 w-fit hover:shadow-xl hover:scale-105 border-yellow-500/30">
              <promotion.badgeIcon size={16} className="animate-pulse" />
              {promotion.badge}
            </div>

            {/* Enhanced Title */}
            <h2 className="mb-4 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              <span className="text-white drop-shadow-lg">{promotion.title.part1}</span>
              <span className={`text-${promotion.accentColor === 'pink' ? 'pink' : 'purple'}-800 drop-shadow-lg`}>
                {promotion.title.highlight}
              </span>
              <span className="text-white drop-shadow-lg">{promotion.title.part2}</span>
              <span className="inline-block ml-2 text-4xl animate-bounce">
                {promotion.title.emoji}
              </span>
            </h2>

            {/* Discount Badge */}
            <div className="px-4 py-2 mb-6 text-lg font-bold text-white bg-red-500 border-2 border-red-400 rounded-full shadow-lg w-fit animate-pulse">
              {promotion.discount}
            </div>

            {/* Description */}
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-800 drop-shadow-sm">
              {promotion.description}
            </p>

            {/* Enhanced Button */}
            <button className="flex items-center gap-3 px-8 py-4 text-lg font-bold text-black transition-all duration-300 bg-white border-2 rounded-full shadow-xl group/btn w-fit hover:bg-gray-50 hover:shadow-2xl hover:scale-105 border-white/30 backdrop-blur-sm">
              <span>Shop Now</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              
              {/* Button glow effect */}
              <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-white/20 group-hover/btn:opacity-100 blur-sm"></div>
            </button>
          </div>

          {/* Enhanced Right image section */}
          <div className="relative overflow-hidden lg:w-1/2 h-72 lg:h-auto">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
            
            {/* Image with enhanced effects */}
            <div className="relative h-full transition-transform duration-700 group-hover:scale-110">
              <Image
                src={promotion.image}
                alt={promotion.alt}
                fill
                className="object-contain p-6 transition-all duration-500 drop-shadow-2xl group-hover:drop-shadow-3xl"
                priority
              />
            </div>

            {/* Floating elements around image */}
            <div className="absolute w-3 h-3 rounded-full top-1/4 left-4 bg-white/60 animate-ping"></div>
            <div className="absolute w-2 h-2 delay-500 rounded-full bottom-1/3 right-6 bg-yellow-300/80 animate-ping"></div>
            <div className="absolute w-4 h-4 delay-1000 rounded-full top-2/3 left-8 bg-pink-300/70 animate-pulse"></div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-tl-3xl"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full px-4 py-12 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-pink-200/20 blur-2xl animate-pulse"></div>
      <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-32 right-20 bg-purple-200/20 blur-2xl animate-pulse"></div>
      <div className="absolute w-24 h-24 delay-500 rounded-full top-1/2 left-1/4 bg-rose-300/30 blur-xl animate-bounce"></div>

      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="inline-block mb-4">
          <span className="px-6 py-3 text-lg font-semibold text-pink-600 border border-pink-100 rounded-full shadow-lg bg-white/80 backdrop-blur-sm">
            🎉 Special Promotions
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600">
          Exclusive Deals
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-1 bg-pink-500 rounded-full"></div>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Enhanced Grid layout */}
      <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
        {promotions.map((promotion, index) => (
          <PromotionCardItem 
            key={promotion.id} 
            promotion={promotion} 
            index={index} 
          />
        ))}
      </div>

      {/* Bottom decorative section */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 border rounded-full shadow-lg bg-white/60 backdrop-blur-sm border-white/30">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-pink-400 border-2 border-white rounded-full"></div>
            <div className="w-8 h-8 border-2 border-white rounded-full bg-rose-400"></div>
            <div className="w-8 h-8 bg-purple-400 border-2 border-white rounded-full"></div>
          </div>
          <span className="font-medium text-gray-700">Limited time offers - Dont miss out!</span>
        </div>
      </div>
    </div>
  );
};