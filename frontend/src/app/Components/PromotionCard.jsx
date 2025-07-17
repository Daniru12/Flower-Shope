import React from 'react';

export const PromotionCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative bg-pink-100 rounded-xl p-6 flex items-center overflow-hidden">
      <div className="z-10 flex-1">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4 max-w-[200px]">{description}</p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-full text-sm">
          shop now
        </button>
      </div>
      <div className="absolute right-0 h-full">
        <img src={imageUrl} alt="" className="h-full object-contain" />
      </div>
    </div>
  );
};