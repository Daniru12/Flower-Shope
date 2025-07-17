"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-pink-900 shadow-lg bg-[linear-gradient(to_right,_white_15%,_#CF0B63_50%,_#5a0429)]">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2 transition-colors duration-300 hover:opacity-80">
          <img
            src="/logof.png" 
            alt="Flower Shop Logo"
            className="object-contain w-24 h-auto" 
          />
        </Link>
      </div>

      <nav className="flex space-x-8">
        <Link 
          href="/" 
          className="relative px-3 py-2 font-medium transition-all duration-300 hover:text-pink-700 hover:scale-105 group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/shop" 
          className="relative px-3 py-2 font-medium transition-all duration-300 hover:text-pink-700 hover:scale-105 group"
        >
          Shop
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/about" 
          className="relative px-3 py-2 font-medium transition-all duration-300 hover:text-pink-700 hover:scale-105 group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/contact" 
          className="relative px-3 py-2 font-medium transition-all duration-300 hover:text-pink-700 hover:scale-105 group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-64 py-2 pl-4 pr-10 placeholder-pink-600 transition-all duration-300 border-2 border-pink-200 rounded-full outline-none bg-white/80 focus:border-pink-500 focus:bg-white"
        />
        <Search className="absolute w-5 h-5 text-pink-600 pointer-events-none right-3" />
      </div>
    </header>
  );
}
