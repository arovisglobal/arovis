'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">Logo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">
              About Us
            </a>
            <a href="#services" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-gray-900 transition-colors font-medium">
              Contact Us
            </a>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all font-medium">
              We're Hiring
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 border-t border-purple-300">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-800 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="#about" className="block text-gray-800 hover:text-gray-900 font-medium">
              About Us
            </a>
            <a href="#services" className="block text-gray-800 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="#contact" className="block text-gray-800 hover:text-gray-900 font-medium">
              Contact Us
            </a>
            <button className="w-full bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 font-medium">
              We're Hiring
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
