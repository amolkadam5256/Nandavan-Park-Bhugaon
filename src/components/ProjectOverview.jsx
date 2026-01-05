// AOS moved to App.jsx
import React from "react";
import { MapPin } from "lucide-react";

const ProjectOverview = () => {
  const features = [
    { label: "Shop Sizes", value: "217 - 341 sq.ft." },
    { label: "Property Type", value: "Commercial Shops" },
    { label: "Status", value: "Ready to Move" },
    { label: "Location", value: "Bhugaon, Pune" },
    { label: "RERA Number", value: "A061262500523" },
    { label: "Starting Price", value: "₹52.00 Lakhs" },
  ];

  const landmarks = [
    { name: "Bhugaon Main Chowk", distance: "2 mins" },
    { name: "Chandni Chowk", distance: "10 mins" },
    { name: "Bavdhan", distance: "10 mins" },
    { name: "Kothrud", distance: "15 mins" },
    { name: "Karve Nagar", distance: "20 mins" },
    { name: "Hinjawadi Phase 3", distance: "25 mins" },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16 relative" data-aos="fade-up">
          {/* <div className="absolute inset-0 -top-50 flex items-center justify-center pointer-events-none">
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10 dark:text-white/20">
              Project Overview
            </span>
          </div> */}

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto">
              Nandavan Park brings you thoughtfully designed commercial shops in
              Bhugaon, a location that connects you with prime Pune suburbs.
              Perfect for retail, food joints, clinics, and offices seeking high
              footfall and easy access.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                bg-white dark:bg-white/10
                p-6 lg:p-8
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                border border-gray-100 dark:border-white/10
                transform hover:-translate-y-2
              "
            >
              <div className="text-sm lg:text-base text-gray-600 dark:text-white/70 mb-2">
                {feature.label}
              </div>
              <div className="text-xl lg:text-2xl font-bold text-blue-600">
                {feature.value}
              </div>
            </div>
          ))}
        </div>

        {/* Nearby Landmarks */}
        <div
          className="bg-blue-50 dark:bg-white/5 p-6 lg:p-12  rounded-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 text-center">
            Nearby Landmarks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 100}
                className="
                  bg-white dark:bg-white/10
                  p-4 lg:p-6
                  text-center
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  transform hover:scale-105
                "
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900 dark:text-white mb-2">
                  {landmark.name}
                </div>
                <div className="text-blue-600 font-semibold">
                  {landmark.distance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
