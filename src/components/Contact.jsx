import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext"; // ← STEP 1: Import useTheme

const Contact = () => {
  const { isDark } = useTheme(); // ← STEP 2: Get theme state

  return (
    // STEP 3: Add dark mode to section background
    <section
      className="py-12 lg:py-20 
                      bg-gray-50 dark:bg-gray-950 
                      overflow-x-hidden 
                      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          {/* <div
            className="absolute inset-0 -top-40 flex items-center justify-center pointer-events-none"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span
              className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black 
                           text-gray-900/10 dark:text-white/10 
                           transition-colors"
            >
              Get In Touch
            </span>
          </div> */}
          <div className="relative z-10">
            {/* STEP 5: Add dark mode to heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold 
                       text-gray-900 dark:text-white 
                       mb-4 
                       transition-colors"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Get In Touch
            </h2>
            {/* STEP 6: Add dark mode to description */}
            <p
              className="text-base sm:text-lg 
                       text-gray-600 dark:text-gray-300 
                       max-w-2xl mx-auto 
                       transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We're here to help you find your perfect commercial space. Reach
              out to us anytime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Map Section */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="300">
            {/* Quick Location Stats - STEP 7: Add dark mode */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  place: "Chandni Chowk",
                  time: "10 mins",
                },
                {
                  place: "Kothrud",
                  time: "15 mins",
                },
                {
                  place: "Bavdhan",
                  time: "10 mins",
                },
                {
                  place: "Main Chowk",
                  time: "2 mins",
                },
                {
                  place: "Karve Nagar",
                  time: "20 mins",
                },
                {
                  place: "Hinjawadi Phase 3",
                  time: "25 mins",
                },
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 
                           p-3 shadow dark:shadow-gray-900/50 
                           text-center 
                           transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 50}
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">
                    {location.place}
                  </p>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors">
                    {location.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Container - STEP 8: Add dark mode to map container */}
            <div
              className="relative overflow-hidden shadow-2xl dark:shadow-gray-900/80 
                          h-96 lg:h-[500px] 
                          bg-gray-100 dark:bg-gray-800 
                          transition-colors duration-300"
            >
              {/* Loading Placeholder */}
              <div
                className="absolute inset-0 flex items-center justify-center 
                            bg-gray-100 dark:bg-gray-800 
                            transition-colors"
              >
                <div className="text-center">
                  <MapPin
                    className="w-12 h-12 text-blue-600 dark:text-blue-400 
                                   mx-auto mb-2 animate-pulse 
                                   transition-colors"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                    Loading map...
                  </p>
                </div>
              </div>

              {/* Top Bar with Location Info */}
              <div
                className="absolute top-0 left-0 right-0 
                            bg-gradient-to-b from-black/50 to-transparent 
                            p-4 z-10"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="bg-white dark:bg-gray-800 
                                px-4 py-2 shadow-lg 
                                transition-colors"
                  >
                    <p
                      className="text-xs font-semibold 
                                text-gray-700 dark:text-gray-200 
                                flex items-center 
                                transition-colors"
                    >
                      <MapPin
                        className="w-4 h-4 mr-2 
                                       text-blue-600 dark:text-blue-400 
                                       transition-colors"
                      />
                      Nandavan Park, Bhugaon, Pune
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/MgVCRSnEDoQCb4yS9?g_st=awb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 dark:bg-blue-500 
                             text-white px-4 py-2 text-sm font-semibold shadow-lg 
                             hover:bg-blue-700 dark:hover:bg-blue-600 
                             transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden sm:inline">
                      Open in Google Maps
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div
                className="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-black/50 to-transparent 
                            p-4 z-10"
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://www.google.com/maps/dir//18.4635,73.7443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 
                             text-blue-600 dark:text-blue-400 
                             px-4 py-2 text-sm font-semibold shadow-lg 
                             hover:bg-gray-50 dark:hover:bg-gray-700 
                             transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <span>Get Directions</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18.4635,73.7443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 dark:bg-green-500 
                             text-white px-4 py-2 text-sm font-semibold shadow-lg 
                             hover:bg-green-700 dark:hover:bg-green-600 
                             transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>View on Map</span>
                  </a>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "Nandavan Park Location",
                          text: "Check out Nandavan Park, Bhugaon, Pune",
                          url: "https://www.google.com/maps/dir//18.4635,73.7443",
                        });
                      }
                    }}
                    className="bg-blue-500 dark:bg-blue-600 
                             text-white px-4 py-2 text-sm font-semibold shadow-lg 
                             hover:bg-blue-600 dark:hover:bg-blue-700 
                             transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Share Location</span>
                  </button>
                </div>
              </div>

              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6181234567893!2d73.7443!3d18.4635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQ4LjYiTiA3M8KwNDQnMzkuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nandavan Park Location - Interactive Map"
                className="relative z-0"
              ></iframe>
            </div>

            {/* Address Info - STEP 9: Add dark mode */}
            <div
              className="bg-blue-50 dark:bg-gray-800 
                          border-l-4 border-blue-600 dark:border-blue-400 
                          p-4 
                          transition-colors duration-300"
            >
              <p
                className="text-sm font-semibold 
                          text-gray-800 dark:text-gray-200 
                          mb-1 
                          transition-colors"
              >
                📍 Exact Location
              </p>
              <p
                className="text-sm 
                          text-gray-700 dark:text-gray-300 
                          transition-colors"
              >
                Nandavan Park, Bhugaon, Pune - 411042, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Contact Info - STEP 10: Add dark mode */}
          <div
            className="bg-white dark:bg-gray-800 
                     shadow-lg dark:shadow-gray-900/50 
                     p-8 lg:p-10 
                     transition-colors duration-300"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <p
              className="text-gray-600 dark:text-gray-300 
                        text-sm lg:text-base mb-8 leading-relaxed 
                        transition-colors"
            >
              Discover premium commercial opportunities at Nandavan Park,
              Bhugaon. Our team is ready to assist you with site visits, pricing
              details, and investment guidance.
            </p>

            {/* Our Address */}
            <div
              className="flex items-start space-x-4 mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                className="bg-blue-600 dark:bg-blue-500 
                            p-3 flex-shrink-0 
                            transition-colors"
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold 
                             text-gray-900 dark:text-white 
                             mb-2 
                             transition-colors"
                >
                  Our Address
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 
                            text-sm lg:text-base leading-relaxed 
                            transition-colors"
                >
                  Nandavan Park, Bhugaon
                  <br />
                  Pune, Maharashtra 411042
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Contact */}
            <div
              className="flex items-start space-x-4 mb-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div
                className="bg-blue-600 dark:bg-blue-500 
                            p-3 flex-shrink-0 
                            transition-colors"
              >
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold 
                             text-gray-900 dark:text-white 
                             mb-2 
                             transition-colors"
                >
                  Contact
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 
                            text-sm lg:text-base 
                            transition-colors"
                >
                  <span className="block mb-1">
                    Mobile:{" "}
                    <a
                      href="tel:+919752971177"
                      className="text-blue-600 dark:text-blue-400 
                               hover:underline font-medium 
                               transition-colors"
                    >
                      +91 88305 67738
                    </a>
                  </span>
                  <span className="block">
                    Mail:{" "}
                    <a
                      href="mailto:sales@punedreamhomes.com"
                      className="text-blue-600 dark:text-blue-400 
                               hover:underline font-medium 
                               transition-colors"
                    >
                      sales@punedreamhomes.com
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div
                className="bg-blue-600 dark:bg-blue-500 
                            p-3 flex-shrink-0 
                            transition-colors"
              >
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold 
                             text-gray-900 dark:text-white 
                             mb-2 
                             transition-colors"
                >
                  Working Hours
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 
                            text-sm lg:text-base leading-relaxed 
                            transition-colors"
                >
                  Mon–Sat | 9:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - STEP 11: Keep background image, add dark overlay */}
        <div
          className="relative 
                   bg-gradient-to-r from-blue-600 to-blue-600 
                   p-8 lg:p-12 text-center text-white shadow-xl 
                   overflow-hidden"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          {/* Blur Overlay - Adapts to theme */}
          <div
            className="absolute inset-0 
                        bg-blue-900/60 dark:bg-gray-900/80 
                        backdrop-blur-sm 
                        transition-colors duration-300"
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Schedule a Site Visit
            </h3>

            <p
              className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 
                        text-blue-100 dark:text-gray-200 
                        max-w-3xl mx-auto 
                        transition-colors"
            >
              Contact us today to schedule your personal site visit and explore
              the opportunities at Nandavan Park.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918830567738"
                className="w-full sm:w-auto 
                         bg-white dark:bg-gray-800 
                         text-blue-600 dark:text-blue-400 
                         px-8 py-4 font-bold text-lg 
                         hover:bg-blue-50 dark:hover:bg-gray-700 
                         transition-all duration-300 transform hover:scale-105 
                         shadow-xl"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918830567738"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto 
                         bg-blue-500 dark:bg-blue-600 
                         text-white px-8 py-4 font-bold text-lg 
                         hover:bg-blue-400 dark:hover:bg-blue-500 
                         transition-all duration-300 transform hover:scale-105 
                         border-2 border-white dark:border-gray-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
