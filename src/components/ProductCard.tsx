import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onProductClick 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => onProductClick(product)}
      />
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 
          className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-700"
          onClick={() => onProductClick(product)}
        >
          {product.name}
        </h3>
        <p className="mt-1 text-gray-500 text-sm">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};