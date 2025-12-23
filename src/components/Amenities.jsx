import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Building2,
  Car,
  Shield,
  Zap,
  Droplet,
  Users,
  Wind,
  Flame,
  TreePine,
  Camera,
  Wifi,
  MapPin,
} from "lucide-react";
import images from "../assets/image";

const Amenities = () => {
  // Initialize AOS with infinite animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to repeat
      mirror: true, // Animate elements when scrolling past them
    });
  }, []);

  const amenities = [
    {
      icon: <Building2 className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Main Road Touch",
      description: "Prime location with direct main road access",
      bgImage: images.img3,
    },
    {
      icon: <Car className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Dedicated Parking",
      description: "Ample parking space for customers and staff",
      bgImage:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600",
    },
    {
      icon: <Shield className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "24x7 Security",
      description: "Round-the-clock security surveillance",
      bgImage:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600",
    },
    {
      icon: <Zap className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Power Backup",
      description: "Uninterrupted power supply backup",
      bgImage:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600",
    },
    {
      icon: <Droplet className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Water Supply",
      description: "24x7 water backup facility",
      bgImage:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600",
    },
    {
      icon: <Users className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "High Footfall",
      description: "Strategic location ensuring maximum visibility",
      bgImage:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600",
    },
    {
      icon: <Wind className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Proper Ventilation",
      description: "Well-ventilated spaces for comfort",
      bgImage: images.interior,
    },
    {
      icon: <Flame className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Fire Safety",
      description: "Complete fire safety systems installed",
      bgImage: images.firesafety,
    },

    {
      icon: <Wifi className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Internet Ready",
      description: "High-speed internet infrastructure",
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    },
    {
      icon: <MapPin className="w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Prime Location",
      description: "Easy connectivity to major landmarks",
      bgImage: images.img3,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 relative">
          <div
            className="absolute inset-0 -top-40 flex items-center justify-center pointer-events-none overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10 whitespace-nowrap">
              Premium Amenities
            </span>
          </div>
          <div className="relative z-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Premium Amenities
            </h2>
            <p
              className="text-base sm:text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              World-class facilities for your business
            </p>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={index * 100}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${amenity.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-blue-100 group-hover:bg-white/20 group-hover:backdrop-blur-sm text-blue-600 group-hover:text-white mb-4 lg:mb-6 rounded-full transition-all duration-500 group-hover:scale-110 border-2 border-transparent group-hover:border-white/30">
                  {amenity.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-white mb-2 lg:mb-3 transition-colors duration-500">
                  {amenity.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                  {amenity.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-blue-200/0 group-hover:border-white/40 transition-all duration-500 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
