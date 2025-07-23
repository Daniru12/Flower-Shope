'use client';

import React, { useState, useEffect } from 'react';

const WhyShopPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      id: 1,
      title: "Eco-Friendly Delivery",
      description: "Carbon-neutral shipping with sustainable packaging materials sourced from recycled content",
      position: "top-left",
      icon: "🌱",
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      title: "Plant Care Support",
      description: "24/7 expert guidance with personalized care plans and real-time health monitoring",
      position: "top-right",
      icon: "🌿",
      color: "green",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: 3,
      title: "Quality Guarantee",
      description: "30-day satisfaction guarantee with free replacement for any unhealthy plants",
      position: "bottom-left",
      icon: "✨",
      color: "teal",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Sustainable Sourcing",
      description: "Ethically sourced from certified organic growers with fair trade partnerships",
      position: "bottom-right",
      icon: "🌍",
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: true
          }));
        }
      });
    }, observerOptions);

    window.addEventListener('mousemove', handleMouseMove);
    
    const mainSection = document.getElementById('main-section');
    if (mainSection) observer.observe(mainSection);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      emerald: {
        border: isActive ? 'border-emerald-400' : 'border-emerald-200',
        shadow: 'shadow-emerald-500/25',
        text: 'text-emerald-600',
        bg: 'bg-emerald-50'
      },
      green: {
        border: isActive ? 'border-green-400' : 'border-green-200',
        shadow: 'shadow-green-500/25',
        text: 'text-green-600',
        bg: 'bg-green-50'
      },
      teal: {
        border: isActive ? 'border-teal-400' : 'border-teal-200',
        shadow: 'shadow-teal-500/25',
        text: 'text-teal-600',
        bg: 'bg-teal-50'
      },
      cyan: {
        border: isActive ? 'border-cyan-400' : 'border-cyan-200',
        shadow: 'shadow-cyan-500/25',
        text: 'text-cyan-600',
        bg: 'bg-cyan-50'
      }
    };
    return colors[color];
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-200/20 to-emerald-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-r from-teal-100/10 to-cyan-100/10 blur-2xl animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Premium Header */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 mb-8 border rounded-full shadow-lg bg-white/60 backdrop-blur-sm border-white/20">
              <span className="text-sm font-medium text-emerald-600">🌿 Premium Plant Experience</span>
            </div>
            <h1 className="mb-6 text-5xl font-light tracking-tight text-gray-900 md:text-7xl">
              Why Choose
              <span className="block font-medium text-transparent bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 bg-clip-text">
                PinkNest
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
              Where nature meets innovation. Experience the future of plant care with our premium ecosystem.
            </p>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>

          {/* Main Content Grid */}
          <div 
            id="main-section"
            data-section="main"
            className="relative min-h-[700px]"
          >
            {/* Center Plant Image - Premium */}
            <div className={`flex justify-center items-center mb-16 lg:mb-0 transition-all duration-1000 delay-300 ${visibleSections.main ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div 
                className="relative cursor-pointer group"
                style={{
                  transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 transition-transform duration-700 scale-150 rounded-full bg-gradient-to-r from-pink-400/20 via-pink-400/20 to-pink-400/20 blur-2xl group-hover:scale-175"></div>
                
                {/* Main Plant Container */}
                <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] bg-white/80 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute w-2 h-2 delay-100 rounded-full top-1/4 left-1/4 bg-emerald-300 animate-bounce opacity-60"></div>
                    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-300 opacity-70"></div>
                    <div className="absolute w-1 h-1 delay-500 bg-teal-400 rounded-full opacity-50 bottom-1/3 left-1/3 animate-bounce"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-emerald-200 rounded-full animate-bounce delay-700 opacity-60"></div>
                  </div>
                  
                  {/* Plant Image */}
                  <div className="absolute overflow-hidden rounded-full inset-8">
                    <img 
                      src="https://i.postimg.cc/QMvM43CP/image.png"
                      alt="Beautiful houseplant"
                      className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110 filter group-hover:saturate-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback SVG Plant */}
                    <div className="items-center justify-center hidden w-full h-full bg-gradient-to-br from-pink-100 to-pink-100">
                      <svg viewBox="0 0 200 240" className="w-3/4 h-3/4 text-emerald-600" fill="currentColor">
                        <path d="M60 190 L140 190 L135 220 L65 220 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
                        <ellipse cx="100" cy="190" rx="40" ry="8" fill="#6366f1"/>
                        <line x1="95" y1="190" x2="90" y2="120" stroke="#059669" strokeWidth="6"/>
                        <line x1="100" y1="190" x2="100" y2="100" stroke="#059669" strokeWidth="6"/>
                        <line x1="105" y1="190" x2="110" y2="130" stroke="#059669" strokeWidth="6"/>
                        <g className="opacity-90">
                          <ellipse cx="70" cy="110" rx="15" ry="25" fill="#10b981" transform="rotate(-20 70 110)"/>
                          <ellipse cx="100" cy="90" rx="18" ry="30" fill="#10b981"/>
                          <ellipse cx="130" cy="120" rx="15" ry="25" fill="#10b981" transform="rotate(20 130 120)"/>
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/5 via-transparent to-green-500/5"></div>
                </div>
              </div>
            </div>

           {/* Benefits Positioned Around Plant - Desktop Only */}
<div className="hidden lg:block">
  {benefits.map((benefit, index) => {
    const colors = getColorClasses(benefit.color);
    const isVisible = visibleSections.main;

    // Updated closer positions
    const positions = {
      'top-left': 'absolute top-0 left-12 w-64',
      'top-right': 'absolute top-0 right-12 w-64',
      'bottom-left': 'absolute bottom-40 left-12 w-64',
      'bottom-right': 'absolute bottom-40 right-12 w-64'
    };

    const textAlign = benefit.position.includes('right') ? 'text-left' : 'text-right';

    return (
      <div
        key={benefit.id}
        className={`${positions[benefit.position]} transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          transitionDelay: `${(index + 1) * 300}ms`
        }}
      >
        <div className={`p-6 ${textAlign}`}>
          
          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            {benefit.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {benefit.description}
          </p>
        </div>
      </div>
    );
  })}
</div>
</div>

          {/* Mobile Layout - Benefits Below Plant */}
          <div className="mt-16 space-y-8 lg:hidden">
            {benefits.map((benefit, index) => {
              const colors = getColorClasses(benefit.color);
              const isVisible = visibleSections.main;
              
              return (
                <div 
                  key={benefit.id}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl bg-gray-100 rounded-full">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Premium Call to Action */}
          <div className={`text-center mt-0 transition-all duration-1000 delay-1000 ${visibleSections.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block group">
              <div className="absolute transition duration-1000 rounded-full opacity-75 -inset-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse"></div>
              <button 
                className="relative flex items-center px-12 py-6 space-x-3 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-2xl bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 hover:from-pink-700 hover:via-pink-700 hover:to-pink-700 hover:shadow-pink-500/50 hover:scale-105 active:scale-95"
                onClick={() => {
                  const button = document.activeElement;
                  button.style.transform = 'scale(0.95)';
                  setTimeout(() => {
                    button.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                      button.style.transform = 'scale(1)';
                    }, 150);
                  }, 100);
                }}
              >
                <span>🌿</span>
                <span>Begin Your Plant Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </button>
            </div>
            <p className="mt-8 text-lg font-light text-gray-600">
              Join over <span className="font-semibold text-pink-600">50,000+</span> happy plant parents worldwide
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 border-2 border-white rounded-full shadow-lg bg-gradient-to-br from-pink-400 to-pink-500"></div>
                ))}
              </div>
              <span className="ml-4 text-sm text-gray-500">and growing every day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShopPage;