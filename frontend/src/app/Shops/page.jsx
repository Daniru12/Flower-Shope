'use client';

import { useState, useMemo } from 'react';
import { Heart, ShoppingCart, Star, Sparkles } from 'lucide-react';

const bouquets = [
  { id: 1, name: "Birthday Surprise", price: "39.99", category: "Birthday", image: "/shop2.jpeg", rating: 4.8 },
  { id: 2, name: "Calming White Lily", price: "69.99", category: "Special Occasion", image: "/wedding.jpeg", rating: 4.9 },
  { id: 3, name: "Romantic Red Roses", price: "54.37", category: "Romance", image: "/romance.jpeg", rating: 5.0 },
  { id: 4, name: "Daisy Bridal Bouquet", price: "62.20", category: "Anniversary", image: "/shop1.jpeg", rating: 4.7 },
  { id: 5, name: "Pinky Tulip", price: "45.89", category: "Romance", image: "/tulip.jpg", rating: 4.6 },
  { id: 6, name: "Dahlia Bouquet", price: "58.99", category: "Special Occasion", image: "/special.jpeg", rating: 4.8 },
  { id: 7, name: "Sunflower Delight", price: "42.99", category: "Birthday", image: "/grad.jpeg", rating: 4.5 },
  { id: 8, name: "Elegant Orchid", price: "75.99", category: "Anniversary", image: "/basket.jpeg", rating: 4.9 },
  { id: 9, name: "Mixed Spring Flowers", price: "48.50", category: "Special Occasion", image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.4 }
];

export default function BouquetWebsite() {
  const [activeFilter, setActiveFilter] = useState('All Bouquets');
  const [favorites, setFavorites] = useState(new Set());
  const [addedToCart, setAddedToCart] = useState(new Set());

  const filters = ['All Bouquets', 'Romance', 'Birthday', 'Anniversary', 'Special Occasion'];

  const filteredBouquets = useMemo(() => {
    return activeFilter === 'All Bouquets'
      ? bouquets
      : bouquets.filter(bouquet => bouquet.category === activeFilter);
  }, [activeFilter]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
      return newFavorites;
    });
  };

  const addToCart = (bouquet) => {
    console.log('Added to cart:', bouquet.name);
    setAddedToCart(prev => new Set([...prev, bouquet.id]));
    // Reset the animation state after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => {
        const newSet = new Set(prev);
        newSet.delete(bouquet.id);
        return newSet;
      });
    }, 2000);
  };

  const BouquetCard = ({ bouquet, isFavorite, onToggleFavorite, onAddToCart }) => {
    const isAddedToCart = addedToCart.has(bouquet.id);
    
    return (
      <div className="overflow-hidden transition-all duration-500 transform border shadow-lg group bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-pink-200/50 hover:-translate-y-2 hover:scale-105 border-white/50">
        <div className="relative overflow-hidden">
          <img
            src={bouquet.image}
            alt={bouquet.name}
            className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:opacity-100"></div>
          
          {/* Heart button with enhanced styling */}
          <button
            onClick={onToggleFavorite}
            className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full shadow-lg top-4 right-4 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:scale-110 border-white/50"
          >
            <Heart
              size={18}
              className={`transition-all duration-300 ${
                isFavorite 
                  ? 'fill-pink-500 text-pink-500 scale-110' 
                  : 'text-gray-400 hover:text-pink-500 hover:scale-110'
              }`}
            />
          </button>

          {/* Rating badge */}
          <div className="absolute flex items-center gap-1 px-3 py-1 border rounded-full shadow-lg top-4 left-4 bg-white/90 backdrop-blur-sm border-white/50">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{bouquet.rating}</span>
          </div>

          {/* Sparkle effect on hover */}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <Sparkles className="absolute top-6 left-6 text-white/60 animate-pulse" size={16} />
            <Sparkles className="absolute delay-300 bottom-8 right-8 text-white/60 animate-pulse" size={12} />
            <Sparkles className="absolute delay-700 top-1/2 left-1/3 text-white/40 animate-pulse" size={10} />
          </div>
        </div>

        <div className="relative p-6">
          {/* Content */}
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-pink-600">
              {bouquet.name}
            </h3>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xl font-bold text-pink-600">${bouquet.price}</p>
              <span className="px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded-full">
                {bouquet.category}
              </span>
            </div>
          </div>

          {/* Enhanced Add to Cart Button */}
          <button
            onClick={onAddToCart}
            className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
              isAddedToCart
                ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-200/50 hover:scale-105'
            }`}
          >
            {isAddedToCart ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  Added to Cart!
                </div>
              </>
            ) : (
              <>
                <ShoppingCart size={16} className="group-hover:animate-bounce" />
                Add to Cart
              </>
            )}
            
            {/* Ripple effect */}
            <div className="absolute inset-0 transition-transform duration-500 scale-0 opacity-0 bg-white/20 rounded-xl group-hover:scale-100 group-hover:opacity-100"></div>
          </button>

          {/* Decorative bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-pink-300 to-transparent group-hover:opacity-100"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-pink-200/20 blur-xl animate-pulse"></div>
      <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-32 right-20 bg-purple-200/20 blur-xl animate-pulse"></div>
      <div className="absolute w-24 h-24 delay-500 rounded-full top-1/3 right-1/4 bg-rose-300/30 blur-lg animate-bounce"></div>
      
      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 py-12">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 text-lg font-semibold text-pink-600 border border-pink-100 rounded-full shadow-lg bg-white/80 backdrop-blur-sm">
              ✨ Fresh & Handcrafted
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600">
            Our Bouquets
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-1 bg-pink-500 rounded-full"></div>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
          </div>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Explore our hand-crafted bouquets, designed with fresh flowers to bring joy to any occasion
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-200/50 border-pink-500 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 hover:scale-105 border-white/50 hover:border-pink-200'
              }`}
            >
              <span className="relative z-10">{filter}</span>
              {activeFilter === filter && (
                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-8 text-center">
          <p className="inline-block px-4 py-2 text-gray-600 border rounded-full bg-white/60 backdrop-blur-sm border-white/30">
            Showing {filteredBouquets.length} beautiful bouquet{filteredBouquets.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Enhanced Bouquet Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBouquets.map((bouquet) => (
            <BouquetCard
              key={bouquet.id}
              bouquet={bouquet}
              isFavorite={favorites.has(bouquet.id)}
              onToggleFavorite={() => toggleFavorite(bouquet.id)}
              onAddToCart={() => addToCart(bouquet)}
            />
          ))}
        </div>

        {/* Decorative bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 border rounded-full shadow-lg bg-white/60 backdrop-blur-sm border-white/30">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-pink-400 border-2 border-white rounded-full"></div>
              <div className="w-8 h-8 border-2 border-white rounded-full bg-rose-400"></div>
              <div className="w-8 h-8 bg-purple-400 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-medium text-gray-700">Crafted with love, delivered with care</span>
          </div>
        </div>
      </div>
    </div>
  );
}