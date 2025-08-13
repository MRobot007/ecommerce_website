import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Your Style
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore our curated collection of premium products
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};