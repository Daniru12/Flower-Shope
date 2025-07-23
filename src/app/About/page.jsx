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
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage: "url('/romance.jpeg')",
  }}
>

          <div className="absolute inset-0 bg-pink-500/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Our Story
          </h1>
          <p className="mb-8 text-xl leading-relaxed md:text-2xl opacity-95">
            From a small corner shop to our beloved local institution, discover
            the passion behind our journey and commitment to our community.
          </p>
          <Button>Our Journey</Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
            <div className="absolute w-24 h-24 bg-pink-200 rounded-full -bottom-4 -right-4 opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 text-lg font-semibold text-pink-600 rounded-full bg-pink-50">
                Blooming Since 2005
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              From humble beginnings to your beloved local institution
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
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

      {/* Enhanced Values Section */}
      <section className="relative py-24 overflow-hidden bg-pink-100">
        {/* Background decorative elements */}
        <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-pink-200/30 blur-xl animate-pulse"></div>
        <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-20 right-20 bg-purple-200/30 blur-xl animate-pulse"></div>
        <div className="absolute w-20 h-20 delay-500 rounded-full top-1/2 left-1/3 bg-rose-300/40 blur-lg animate-bounce"></div>
        
        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 text-lg font-semibold text-pink-600 border border-pink-100 rounded-full shadow-lg bg-white/80 backdrop-blur-sm">
                What We Stand For
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Our Values
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-pink-500 rounded-full"></div>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
            </div>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
              These core principles guide everything we do, from the flowers we select to the relationships we build
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Mission Card - Enhanced */}
            <div className="relative group">
              <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl blur-xl group-hover:opacity-20"></div>
              <div className="relative p-8 text-center transition-all duration-500 border bg-white/80 backdrop-blur-sm border-white/50 rounded-2xl hover:shadow-2xl hover:shadow-pink-200/50 hover:-translate-y-3 hover:scale-105">
                <div className="relative mb-8">
                  <div className="absolute inset-0 transition-all duration-300 rounded-full bg-pink-400/20 blur-md group-hover:blur-lg"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-pink-100 to-pink-200 group-hover:from-pink-200 group-hover:to-pink-300">
                    <Settings className="w-10 h-10 text-pink-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-700">
                  Mission
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  We craft our hearts into every arrangement, treating each creation
                  as a unique work of art and love.
                </p>
                <div className="w-full h-1 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-transparent via-pink-300 to-transparent group-hover:opacity-100"></div>
              </div>
            </div>

            {/* Sustainability Card - Enhanced */}
            <div className="relative group">
              <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl blur-xl group-hover:opacity-20"></div>
              <div className="relative p-8 text-center transition-all duration-500 border bg-white/80 backdrop-blur-sm border-white/50 rounded-2xl hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-3 hover:scale-105">
                <div className="relative mb-8">
                  <div className="absolute inset-0 transition-all duration-300 rounded-full bg-green-400/20 blur-md group-hover:blur-lg"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-green-100 to-emerald-200 group-hover:from-green-200 group-hover:to-emerald-300">
                    <Leaf className="w-10 h-10 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                </div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-700">
                  Sustainability
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  We partner with local growers and use eco-friendly practices to
                  reduce our environmental footprint.
                </p>
                <div className="w-full h-1 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-transparent via-green-300 to-transparent group-hover:opacity-100"></div>
              </div>
            </div>

            {/* Community Card - Enhanced */}
            <div className="relative group">
  <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-xl group-hover:opacity-20"></div>
  <div className="relative p-8 text-center transition-all duration-500 border bg-white/80 backdrop-blur-sm border-white/50 rounded-2xl hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-3 hover:scale-105">
    
    <div className="relative mb-8">
      <div className="absolute inset-0 transition-all duration-300 rounded-full bg-purple-400/20 blur-md group-hover:blur-lg"></div>
      <div className="relative flex items-center justify-center w-20 h-20 mx-auto transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300">
        <Users className="w-10 h-10 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
      </div>
    </div>

    <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-700">
      Community
    </h3>

    <p className="mb-6 text-lg leading-relaxed text-gray-600">
      We believe in nurturing relationships within our community and
      constantly growing together for a positive impact.
    </p>

    <div className="w-full h-1 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:opacity-100"></div>
  </div>
</div>

          </div>

          {/* Additional decorative bottom section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 border rounded-full shadow-lg bg-white/60 backdrop-blur-sm border-white/30">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-pink-400 border-2 border-white rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 border-2 border-white rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-medium text-gray-700">Values that bloom with purpose</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}