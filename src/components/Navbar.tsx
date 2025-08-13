import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">StyleStore</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Shop</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact</a>
            </div>
            
            <div className="flex items-center ml-4 space-x-4">
              <button className="text-gray-700 hover:text-gray-900 p-2">
                <Search className="h-6 w-6" />
              </button>
              <button 
                onClick={onCartClick}
                className="text-gray-700 hover:text-gray-900 relative p-2"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <Search className="h-6 w-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="text-gray-700 hover:text-gray-900 relative p-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2">Shop</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};