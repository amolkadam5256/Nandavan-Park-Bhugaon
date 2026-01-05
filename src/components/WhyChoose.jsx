// AOS moved to App.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import images from "../assets/image";

const WhyChoose = () => {
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
    <section className="py-12 lg:py-20 bg-blue-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Nandavan Park?
          </h2>
        </div>

        {/* Reasons - Glass effect in dark mode */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className="flex items-start space-x-4 
                       bg-white dark:bg-white/5 
                       dark:backdrop-blur-xl 
                       dark:border-white/10
                       p-4 lg:p-6 
                       shadow-md hover:shadow-xl 
                       dark:shadow-gray-900/50 dark:hover:shadow-blue-500/20
                       transition-all duration-300 
                       border border-gray-100 dark:border-white/10
                       hover:dark:bg-white/10 hover:dark:backdrop-blur-2xl
                       rounded-lg"
            >
              <CheckCircle className="w-6 h-6 text-[var(--color-primary)] dark:text-blue-400 flex-shrink-0 mt-1" />
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Perfect For - Glass effect in dark mode */}
        <div
          className="bg-white dark:bg-white/5 
                   dark:backdrop-blur-xl 
                   dark:border dark:border-white/10
                   p-6 lg:p-12 
                   shadow-xl dark:shadow-gray-900/50
                   mb-8 lg:mb-12 
                   transition-all duration-300
                   rounded-lg"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 lg:mb-8">
            Perfect For
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            {perfectFor.map((business, index) => (
              <div
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className="bg-blue-50 dark:bg-white/5 
                         dark:backdrop-blur-lg
                         dark:border dark:border-white/10
                         p-4 lg:p-6 
                         text-center 
                         hover:bg-blue-100 dark:hover:bg-white/10 
                         dark:hover:backdrop-blur-xl
                         transition-all duration-300
                         rounded-lg
                         hover:scale-105 hover:shadow-lg dark:hover:shadow-blue-500/20"
              >
                <p className="text-sm lg:text-base font-semibold text-gray-900 dark:text-gray-200">
                  {business}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RERA Section - Enhanced glass effect */}
        <div
          className="relative 
                   bg-blue-900/70 dark:bg-white/5
                   dark:backdrop-blur-2xl
                   backdrop-blur-md 
                   p-8 lg:p-16 
                   text-center text-white 
                   shadow-2xl dark:shadow-blue-500/10
                   overflow-hidden
                   border dark:border-white/10
                   rounded-xl"
          data-aos="fade-up"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-10 dark:opacity-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${images.img3})` }}
          ></div>

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-5 dark:opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
            }}
          ></div>

          {/* Animated gradient overlay for extra depth in dark mode */}
          <div
            className="absolute inset-0 
                        bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 
                        dark:from-blue-400/5 dark:via-transparent dark:to-purple-400/5
                        animate-pulse
                        opacity-0 dark:opacity-100"
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <div
              className="inline-flex items-center justify-center 
                          w-20 h-20 lg:w-24 lg:h-24 
                          bg-white/10 dark:bg-white/10
                          dark:backdrop-blur-xl
                          rounded-full mb-6 
                          border-2 border-white/30 dark:border-white/20
                          hover:scale-110 transition-transform duration-300"
            >
              <img
                src={images.rera}
                alt="RERA"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 
                         dark:text-white dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              RERA Registered
            </h3>

            <div
              className="inline-block 
                          bg-white/20 dark:bg-white/10
                          dark:backdrop-blur-lg
                          px-6 py-3 mb-4 
                          border border-white/30 dark:border-white/20
                          rounded-lg
                          hover:bg-white/30 dark:hover:bg-white/20
                          transition-all duration-300"
            >
              <p className="text-sm font-semibold tracking-wide">
                MahaRERA No: A061262500523
              </p>
            </div>

            <p
              className="text-base lg:text-sm 
                        text-blue-50 dark:text-gray-300 
                        max-w-2xl mx-auto
                        dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Your trust is our foundation. This project is registered under
              MahaRERA, ensuring complete transparency, legal compliance, and
              timely delivery.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Verified", "Compliant", "Transparent"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 
                            bg-white/10 dark:bg-white/5
                            dark:backdrop-blur-lg
                            px-4 py-2 rounded-full
                            border border-white/20 dark:border-white/10
                            hover:bg-white/20 dark:hover:bg-white/10
                            transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
