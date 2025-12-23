import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate relative">
          <div className="absolute inset-0 -top-30 flex items-center justify-center pointer-events-none">
            <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10">
              Get In Touch
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you find your perfect commercial space. Reach
              out to us anytime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Map */}
          <div className="space-y-4">
            {/* Quick Location Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white p-3 shadow text-center">
                <p className="text-xs text-gray-500 mb-1">Chandni Chowk</p>
                <p className="text-sm font-bold text-blue-600">10 mins</p>
              </div>
              <div className="bg-white p-3 shadow text-center">
                <p className="text-xs text-gray-500 mb-1">Kothrud</p>
                <p className="text-sm font-bold text-blue-600">15 mins</p>
              </div>
              <div className="bg-white p-3 shadow text-center">
                <p className="text-xs text-gray-500 mb-1">Bavdhan</p>
                <p className="text-sm font-bold text-blue-600">10 mins</p>
              </div>
              <div className="bg-white p-3 shadow text-center">
                <p className="text-xs text-gray-500 mb-1">Main Chowk</p>
                <p className="text-sm font-bold text-blue-600">2 mins</p>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative overflow-hidden shadow-2xl h-96 lg:h-[500px] bg-gray-100">
              {/* Loading Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2 animate-pulse" />
                  <p className="text-sm text-gray-500">Loading map...</p>
                </div>
              </div>

              {/* Top Bar with Location Info */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="bg-white px-4 py-2 shadow-lg">
                    <p className="text-xs font-semibold text-gray-700 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      Nandavan Park, Bhugaon, Pune
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//18.4635,73.7443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 z-10">
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://www.google.com/maps/dir//18.4635,73.7443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-4 py-2 text-sm font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2"
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
                    className="bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2"
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
                    className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2"
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

            {/* Address Info */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                📍 Exact Location
              </p>
              <p className="text-sm text-gray-700">
                Nandavan Park, Bhugaon, Pune - 411042, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white  shadow-lg p-8 lg:p-10 scroll-animate">
            <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
              Discover premium commercial opportunities at Nandavan Park,
              Bhugaon. Our team is ready to assist you with site visits, pricing
              details, and investment guidance.
            </p>

            {/* Our Address */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-600 p-3  flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Our Address
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  Nandavan Park, Bhugaon
                  <br />
                  Pune, Maharashtra 411042
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-600 p-3 flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  <span className="block mb-1">
                    Mobile:{" "}
                    <a
                      href="tel:+919752971177"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      +91 88305 67738
                    </a>
                  </span>
                  <span className="block">
                    Mail:{""}
                    <a
                      href="mailto:sales@punedreamhomes.com"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      sales@punedreamhomes.com
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Working Hours
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  Mon–Sat | 9:30 AM – 6:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-600  p-8 lg:p-12 text-center text-white shadow-xl scroll-animate">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Schedule a Site Visit
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today to schedule your personal site visit and explore
            the opportunities at Nandavan Park.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918830567738"
              className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4  font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918830567738"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-500 text-white px-8 py-4  font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 border-2 border-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
