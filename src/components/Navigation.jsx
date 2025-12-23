import React, { useState } from "react";
import { Phone, Shield, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Nandavan Park Logo"
              className="w-16 h-16 lg:w-32 lg:h-32 object-contain"
            />
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex flex-col items-start space-y-1">
            {/* Phone Number */}
            <a
              href="tel:+919752971177"
              className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">+91 97529 71177</span>
            </a>

            {/* RERA Number */}
            <div className="text-black hover:text-gray-600 text-sm">
              <span className="font-semibold">MAHA RERA NO: A061262500523</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-700 to-blue-800 border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {/* Phone Number */}
            <a
              href="tel:+919752971177"
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base font-semibold">+91 97529 71177</span>
            </a>

            {/* RERA Number - Mobile */}
            <div className="text-white text-sm">
              <span className="font-semibold">MAHA RERA NO: A061262500523</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
