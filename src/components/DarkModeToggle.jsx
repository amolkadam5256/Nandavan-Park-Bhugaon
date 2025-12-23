import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ isDark, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                 text-gray-800 dark:text-yellow-400 p-3 rounded-l-full shadow-lg 
                 transition-all duration-300 focus:outline-none focus:ring-2 
                 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeToggle;
