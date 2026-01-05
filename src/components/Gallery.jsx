import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import images from "../assets/image";
const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: images.CommercialProperty,
      alt: "Commercial Property Exterior",
    },
    {
      url: images.officeinterior,
      alt: "Shop Interior",
    },
    {
      url: images.img1,
      alt: "Building View",
    },
    {
      url: images.img3,
      alt: "Building View",
    },
    {
      url: images.img3,
      alt: "Commercial Complex",
    },
    {
      url: images.img4,
      alt: "Retail Space",
    },
    {
      url: images.img1,
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

  // Dynamic spanning pattern - Different for mobile and desktop
  const getSpanClasses = (idx) => {
    // Mobile patterns (simpler, 2 columns)
    const mobilePatterns = [
      "col-span-2 row-span-2", // Large
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-2", // Tall
      "col-span-1 row-span-2", // Small -> Tall (Fixed gap)
      "col-span-2 row-span-2", // Large
    ];

    // Desktop patterns (complex, 6 columns)
    const desktopPatterns = [
      "md:col-span-2 md:row-span-2", // Large square
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-2 md:row-span-1 lg:row-span-2", // Large square -> Rect (Fixed gap)
      "md:col-span-4 md:row-span-1", // Extra wide
    ];

    return `${mobilePatterns[idx % mobilePatterns.length]} ${
      desktopPatterns[idx % desktopPatterns.length]
    }`;
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative" data-aos="fade-up">
          <div className="absolute inset-0 -top-40 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black text-gray-900/10 dark:text-white/20 whitespace-nowrap">
              Project Gallery
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-white/80">
              Explore our premium commercial spaces
            </p>
          </div>
        </div>

        {/* Creative Masonry Grid - Fixed for Mobile */}
        <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`${getSpanClasses(
                index
              )} group relative overflow-hidden cursor-pointer rounded-md sm:rounded-lg shadow-md hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:z-10`}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
              />

              {/* Color Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/30 dark:from-blue-500/0 dark:via-purple-500/0 dark:to-pink-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base drop-shadow-lg line-clamp-1">
                    {image.alt}
                  </p>
                  <p className="text-white/90 text-[8px] sm:text-[10px] md:text-xs lg:text-sm mt-0.5 sm:mt-1 flex items-center gap-1">
                    <span className="inline-block w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"></span>
                    Click to expand
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/60 transition-all duration-300 rounded-tr-lg"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 dark:bg-black/98 flex items-center justify-center p-2 sm:p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 text-white p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </button>

          {/* Image Display */}
          <div className="max-w-6xl w-full px-8 sm:px-12 md:px-16">
            <img
              src={galleryImages[currentImageIndex].url}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-3 sm:mt-4">
              <p className="text-white text-xs sm:text-sm lg:text-base font-semibold">
                {galleryImages[currentImageIndex].alt}
              </p>
              <p className="text-white/60 dark:text-white/50 text-[10px] sm:text-xs lg:text-sm mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 text-white p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
