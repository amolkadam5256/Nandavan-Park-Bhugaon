import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProjectOverview from "./components/ProjectOverview";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Project Overview */}
      <ProjectOverview />

      {/* Gallery Section */}
      <Gallery />

      {/* Amenities Section */}
      <Amenities />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919752971177"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-2xl z-50 transition-transform duration-300 hover:scale-110 rounded-full animate-pulse"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white" />
      </a>

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --color-primary: #2262B2;
          --color-primary-dark-1: #1B4F91;
          --color-primary-dark-2: #153E72;
          --color-primary-light-1: #4D82C6;
          --color-primary-light-2: #7FA6D9;
          --color-primary-lightest: #D6E4F5;
          --color-neutral: #979DA6;
          --color-dark: #0A0A0A;
          --color-white: #FFFFFF;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 0;
        }

        * {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Scroll Animation Styles */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }

        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }

        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }

        .scroll-animate-delay-4 {
          transition-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default App;
