import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      alt: "Commercial Property Exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      alt: "Shop Interior",
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      alt: "Building View",
    },

    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      alt: "Building View",
    },
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      alt: "Commercial Complex",
    },
    {
      url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
      alt: "Retail Space",
    },
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      alt: "Modern Office Space",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Dynamic spanning pattern for creative layout
  const getSpanClasses = (idx) => {
    const patterns = [
      "col-span-2 row-span-2", // Large square
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-2", // Wide
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-2", // Large square
      "col-span-4 row-span-1", // Tall
    ];
    return patterns[idx % patterns.length];
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in relative">
          <div className="absolute inset-0 -top-30 flex items-center justify-center pointer-events-none">
            <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10">
              Project Gallery
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Explore our premium commercial spaces
            </p>
          </div>
        </div>

        {/* Creative Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${getSpanClasses(
                index
              )} group relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:z-10`}
              onClick={() => openLightbox(index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
              />

              {/* Color Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-xs sm:text-sm md:text-base drop-shadow-lg">
                    {image.alt}
                  </p>
                  <p className="text-white/90 text-[10px] sm:text-xs md:text-sm mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                    Click to expand
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/60 transition-all duration-300 rounded-tr-lg"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10" />
          </button>

          {/* Image Display */}
          <div className="max-w-6xl w-full">
            <img
              src={galleryImages[currentImageIndex].url}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-sm lg:text-base font-semibold">
                {galleryImages[currentImageIndex].alt}
              </p>
              <p className="text-white/60 text-xs lg:text-sm mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10" />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
