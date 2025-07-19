"use client";

import { Settings, Leaf, Users } from "lucide-react";
import Image from "next/image";

// ✅ Button Component
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-pink-400 hover:bg-pink-500 text-white border-2 border-white/20 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: "url('/romance.jpeg')",
  }}
>

          <div className="absolute inset-0 bg-pink-500/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-95">
            From a small corner shop to our beloved local institution, discover
            the passion behind our journey and commitment to our community.
          </p>
          <Button>Our Journey</Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/tulip.jpg" // Use local image here
                alt="Our founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-pink-600 font-semibold text-lg bg-pink-50 px-4 py-2 rounded-full">
                Blooming Since 2005
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              From humble beginnings to your beloved local institution
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a passion for nature's beauty,{" "}
                <span className="font-semibold text-pink-600"> Bloom & Wild</span>{" "}
                began as a small corner shop with a big dream.
              </p>

              <p>
                What started as a small venture has blossomed into a beloved local
                institution, known for our artisanal approach to floral design and
                commitment to sustainable practices. We're not just a flower shop
                — we're a part of your story, and we're honored to be part of your
                special moments and everyday celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-xl bg-white">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                  <Settings className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We craft our hearts into every arrangement, treating each creation
                  as a unique work of art and love.
                </p>
              </div>
            </div>

            {/* Sustainability */}
            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-xl bg-white">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with local growers and use eco-friendly practices to
                  reduce our environmental footprint.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-xl bg-white">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in nurturing relationships within our community and
                  constantly growing together for a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
