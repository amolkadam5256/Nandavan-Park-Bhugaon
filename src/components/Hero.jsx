import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../assets/image";

const Hero = () => {
  // Initialize AOS with infinite animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to repeat
      mirror: true, // Animate elements when scrolling past them
    });
  }, []);

  // Toggle between image and video
  const useVideo = true;

  const highlights = [
    { value: "144-340", label: "Sq.ft. Shops" },
    { value: "₹39L+", label: "Starting Price" },
    { value: "Highway", label: "Touch Property" },
    { value: "High ROI", label: "Prime Location" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-0 lg:mt-0">
      {/* Background - Image or Video */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          // Video Background
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={images.bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
          </>
        ) : (
          // Image Background with Overlay
          <>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
              alt="Commercial Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 text-center">
        <div
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-xs sm:text-sm font-semibold mb-6 animate-pulse"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          READY TO MOVE | COMMERCIAL PROPERTY
        </div>

        <h1
          className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your Next Business
          <br />
          <span className="text-yellow-400">Address</span>
        </h1>

        <p
          className="text-sm sm:text-xl lg:text-xl text-white/90 mb-4 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Prime Commercial Spaces Crafted for Ambitious Brands
        </p>

        <p
          className="text-base sm:text-sm text-white/80 mb-8 lg:mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A Business Address That Attracts Success in Bhugaon, Pune
        </p>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={500 + index * 100}
            >
              <div className="text-2xl lg:text-2xl font-bold text-yellow-400 mb-2">
                {item.value}
              </div>
              <div className="text-xs lg:text-sm text-white/90">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="000"
        >
          <a
            href="tel:+918830567738"
            className="w-full sm:w-auto bg-yellow-400 text-blue-900 px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Call: +91 88305 67738
          </a>
          <a
            href="https://wa.me/918830567738"
            className="w-full sm:w-auto bg-white/20 backdrop-blur-md text-white px-8 py-4 font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
