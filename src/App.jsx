import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // ← ADD THIS
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProjectOverview from "./components/ProjectOverview";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

const App = () => {
  const { isDark, toggleDarkMode } = useTheme(); // ← USE THEME HOOK

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Dark Mode Toggle - Fixed Position */}
      <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2">
        <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>

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
    </div>
  );
};

export default App;
