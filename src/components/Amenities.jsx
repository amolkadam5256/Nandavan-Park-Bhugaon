import React from "react";
import { Building2, Car, Shield, Zap, Droplet, Users } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Amenities = () => {
  useScrollAnimation();
  const amenities = [
    {
      icon: <Building2 className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Main Road Touch",
      description: "Prime location with direct main road access",
    },
    {
      icon: <Car className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Dedicated Parking",
      description: "Ample parking space for customers and staff",
    },
    {
      icon: <Shield className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "24x7 Security",
      description: "Round-the-clock security surveillance",
    },
    {
      icon: <Zap className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Power Backup",
      description: "Uninterrupted power supply backup",
    },
    {
      icon: <Droplet className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Water Supply",
      description: "24x7 water backup facility",
    },
    {
      icon: <Users className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "High Footfall",
      description: "Strategic location ensuring maximum visibility",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 scroll-animate relative">
          <div className="absolute inset-0 -top-30 flex items-center justify-center pointer-events-none">
            <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10">
              Premium Amenities
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              World-class facilities for your business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`bg-white  p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100 scroll-animate scroll-animate-delay-${
                (index % 4) + 1
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-blue-100  text-blue-600 mb-4 lg:mb-6 rounded-full">
                {amenity.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                {amenity.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
