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
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/basket.jpeg')",
          filter: "blur(4px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay for slight darkening */}
      <div className="absolute inset-0 z-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        {/* Testimonials */}
        <div className="flex justify-center">
          <div className="w-full p-10 border shadow-2xl bg-white/60 backdrop-blur-md rounded-3xl border-white/40 lg:w-2/3">
            <div className="mb-6 text-center">
              <h3 className="mb-3 text-3xl font-bold text-black">What Our Customers Say</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden h-28">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 text-center ${
                    index === currentTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="px-4 mb-2 text-lg italic text-black/80">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-pink-800">- {testimonial.author}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
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
        <div className="grid grid-cols-2 gap-8 mt-20 md:grid-cols-4">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Flower Varieties" },
            { number: "24/7", label: "Customer Support" },
            { number: "99%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center border shadow-md bg-white/60 backdrop-blur-sm rounded-2xl border-white/40"
            >
              <div className="mb-2 text-3xl font-bold text-pink-800">{stat.number}</div>
              <div className="font-medium text-black/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
