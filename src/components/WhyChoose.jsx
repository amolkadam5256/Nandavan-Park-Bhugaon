import React from "react";
import { CheckCircle, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChoose = () => {
  useScrollAnimation();
  const reasons = [
    "Prime location in Bhugaon with excellent connectivity",
    "High footfall zone ensuring maximum business visibility",
    "Ready to move commercial property",
    "Highway touch property with easy accessibility",
    "Ideal for retail stores, cafes, clinics, and offices",
    "Quality construction with modern amenities",
    "Close proximity to Chandni Chowk, Kothrud, and Bavdhan",
    "RERA registered project ensuring legal compliance",
  ];

  const perfectFor = [
    "Retail Stores",
    "Cafes & Restaurants",
    "Medical Clinics",
    "Corporate Offices",
    "Coaching Classes",
    "Gymnasium & Fitness Centers",
  ];

  return (
    <section className="py-12 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Nandavan Park?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 bg-white  p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 scroll-animate scroll-animate-delay-${
                (index % 4) + 1
              }`}
            >
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-sm lg:text-base text-gray-700">{reason}</p>
            </div>
          ))}
        </div>

        {/* Perfect For Section */}
        <div className="bg-white  p-6 lg:p-12 shadow-xl mb-8 lg:mb-12 scroll-animate">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            Perfect For
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            {perfectFor.map((business, index) => (
              <div
                key={index}
                className="bg-blue-50  p-4 lg:p-6 text-center hover:bg-blue-100 transition-colors duration-300"
              >
                <p className="text-sm lg:text-base font-semibold text-gray-900">
                  {business}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RERA Badge */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-8 lg:p-16 text-center text-white shadow-2xl scroll-animate overflow-hidden">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200')",
            }}
          ></div>

          {/* Decorative Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
              <img
                src="src\assets\rera.png" // change path as needed
                alt="Security"
                className="w-full h-full lg:w-full lg:h-full rounded-full object-contain"
              />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 drop-shadow-lg">
              RERA Registered
            </h3>

            <div className="inline-block bg-white/20 backdrop-blur-md  px-6 py-3 mb-4 border border-white/30">
              <p className="text-sm lg:text-sm font-semibold tracking-wide">
                MahaRERA No: A061262500523
              </p>
            </div>

            <p className="text-base lg:text-sm text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Your trust is our foundation. This project is registered under
              MahaRERA, ensuring complete transparency, legal compliance, and
              timely delivery.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
