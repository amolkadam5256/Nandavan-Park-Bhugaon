import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "./contexts/ThemeContext";
import { useLanguage } from "./contexts/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const { isDark, toggleDarkMode } = useTheme();
  const { language } = useLanguage(); // available for future use

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Dark Mode Toggle */}
      <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 transform">
        <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Sections */}
      <Hero />
      <ProjectOverview />
      <Gallery />
      <Amenities />
      <WhyChoose />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918830567738"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 animate-pulse"
        style={{ backgroundColor: "#25D366" }}
      >
        <FaWhatsapp className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </a>
    </div>
  );
};

export default App;
