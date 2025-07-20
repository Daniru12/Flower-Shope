'use client';

import { useState, useMemo } from 'react';
import { Heart } from 'lucide-react';

// Bouquet data
const bouquets = [
  {
    id: 1,
    name: "Birthday Surprise",
    price: "39.99",
    category: "Birthday",
    image: "/shop2.jpeg"
  },
  {
    id: 2,
    name: "Calming White Lily",
    price: "69.99",
    category: "Special Occasion",
    image: "/wedding.jpeg"
  },
  {
    id: 3,
    name: "Romantic Red Roses",
    price: "54.37",
    category: "Romance",
    image: "/romance.jpeg"
  },
  {
    id: 4,
    name: "Daisy Bridal Bouquet",
    price: "62.20",
    category: "Anniversary",
    image: "/shop1.jpeg"
  },
  {
    id: 5,
    name: "Pinky Tulip",
    price: "45.89",
    category: "Romance",
    image: "/tulip.jpg"
  },
  {
    id: 6,
    name: "Dahlia Bouquet",
    price: "58.99",
    category: "Special Occasion",
    image: "/special.jpeg"
  },
  {
    id: 7,
    name: "Sunflower Delight",
    price: "42.99",
    category: "Birthday",
    image: "/grad.jpeg"
  },
  {
    id: 8,
    name: "Elegant Orchid",
    price: "75.99",
    category: "Anniversary",
    image: "/basket.jpeg"
  },
  {
    id: 9,
    name: "Mixed Spring Flowers",
    price: "48.50",
    category: "Special Occasion",
    image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function BouquetWebsite() {
  const [activeFilter, setActiveFilter] = useState('All Bouquets');
  const [favorites, setFavorites] = useState(new Set());

  const filters = [
    'All Bouquets',
    'Romance', 
    'Birthday',
    'Anniversary',
    'Special Occasion'
  ];

  const filteredBouquets = useMemo(() => {
    if (activeFilter === 'All Bouquets') {
      return bouquets;
    }
    return bouquets.filter(bouquet => bouquet.category === activeFilter);
  }, [activeFilter]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const addToCart = (bouquet) => {
    console.log('Added to cart:', bouquet.name);
    // You could implement a toast notification here
  };

  // Bouquet Card Component
  const BouquetCard = ({ bouquet, isFavorite, onToggleFavorite, onAddToCart }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative">
          <img
            src={bouquet.image}
            alt={bouquet.name}
            className="w-full h-64 object-cover"
          />
          
          {/* Favorite Button */}
          <button
            onClick={onToggleFavorite}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Heart
              size={16}
              className={`transition-colors duration-200 ${
                isFavorite ? 'fill-pink-500 text-pink-500' : 'text-gray-400 hover:text-pink-500'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">{bouquet.name}</h3>
          <p className="text-pink-600 font-bold text-lg mb-2">${bouquet.price}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{bouquet.category}</span>
            <button
              onClick={onAddToCart}
              className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-600 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Our Bouquets</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our hand-crafted bouquets, designed with fresh flowers to bring joy to any occasion
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bouquet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}