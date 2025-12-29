import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../assets/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const useVideo = true;

   const highlights = [
    { value: "217-341", label: "Sq.ft. Shops" },
    { value: "3,928", label: "Sq.ft. Office Space" },
    { value: "₹52L+", label: "Starting Price" },
    { value: "Highway", label: "Touch Property" },
    { value: "High ROI", label: "Prime Location" },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={images.bgVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-blue-900/70 to-blue-600/50
                dark:from-black/80 dark:to-blue-950/60
              "
            ></div>
          </>
        ) : (
          <>
            <img
              src={images.bg}
              alt="Commercial Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 dark:from-black/90 dark:to-blue-950/70"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Badge */}
        <div
          className="
            inline-block
            bg-white/70 dark:bg-white/20
            backdrop-blur-sm
            text-gray-900 dark:text-white
            px-4 py-2
            text-xs sm:text-sm
            font-semibold
            mb-6
            animate-pulse
          "
          data-aos="fade-down"
        >
          READY TO MOVE | COMMERCIAL PROPERTY
        </div>

        {/* Project Name - New Addition */}
        <h1
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-extrabold
            text-yellow-400
            mb-4
            tracking-wide
            drop-shadow-lg
          "
          data-aos="fade-up"
        >
          Nandavan Park Bhugaon
        </h1>

        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            text-gray-900 dark:text-white
            mb-4 lg:mb-6
            leading-tight
          "
          data-aos="fade-up"
        >
          Your Next Business
          <br />
          <span className="text-yellow-400">Address</span>
        </h2>

        {/* Subtitle */}
        <p
          className="
            text-sm sm:text-xl lg:text-xl
            text-gray-100 dark:text-white/90
            mb-4
            max-w-3xl
            mx-auto
          "
          data-aos="fade-up"
        >
          Prime Commercial Spaces Crafted for Ambitious Brands
        </p>

        {/* Description */}
        <p
          className="
            text-base sm:text-sm
            text-gray-100 dark:text-white/80
            mb-8 lg:mb-12
            max-w-2xl
            mx-auto
          "
          data-aos="fade-up"
        >
          A Business Address That Attracts Success in Bhugaon, Pune
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8 lg:mb-12 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="
                bg-white dark:bg-white/10
                backdrop-blur-md
                p-4 lg:p-6
                border border-white/20
                hover:bg-white/90 dark:hover:bg-white/20
                transition-all duration-300
                transform hover:scale-105
              "
              data-aos="zoom-in"
              data-aos-delay={500 + index * 50}
            >
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                {item.value}
              </div>
              <div className="text-xs lg:text-sm text-gray-700 dark:text-white/90">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+918830567738"
            className="
              w-full sm:w-auto
              bg-yellow-400
              text-blue-900
              px-8 py-4
              font-bold text-lg
              hover:bg-yellow-300
              transition-all duration-300
              transform hover:scale-105
              shadow-xl
            "
          >
            Call: +91 88305 67738
          </a>

          <a
            href="https://wa.me/918830567738"
            className="
              w-full sm:w-auto
              bg-white dark:bg-white/20
              backdrop-blur-md
              text-gray-900 dark:text-white
              px-8 py-4
              font-bold text-lg
              border-2 border-white
              hover:bg-white
              hover:text-blue-900
              transition-all duration-300
              transform hover:scale-105
            "
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;