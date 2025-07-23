"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Review() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Absolutely stunning arrangements!", author: "Sarah M." },
    { text: "Fresh flowers delivered perfectly", author: "James L." },
    { text: "Best florist in the city!", author: "Emma R." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/basket.jpeg')",
          filter: "blur(4px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay for slight darkening */}
      <div className="absolute inset-0 bg-white/20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="flex justify-center">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-white/40 shadow-2xl w-full lg:w-2/3">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-black mb-3">What Our Customers Say</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="relative h-28 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 text-center ${
                    index === currentTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg text-black/80 italic mb-2 px-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-pink-800 font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-pink-600 w-6" : "bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Flower Varieties" },
            { number: "24/7", label: "Customer Support" },
            { number: "99%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-md"
            >
              <div className="text-3xl font-bold text-pink-800 mb-2">{stat.number}</div>
              <div className="text-black/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
