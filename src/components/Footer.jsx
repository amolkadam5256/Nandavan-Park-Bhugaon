import React from "react";
import { useTheme } from "../../contexts/ThemeContext"; // ← STEP 1: Import useTheme

const Footer = () => {
  const { isDark } = useTheme(); // ← STEP 2: Get theme state

  return (
    // STEP 3: Add dark mode classes to footer
    <footer
      className="bg-[var(--color-primary)] dark:bg-gray-950 
                     py-2 
                     text-white dark:text-gray-200 
                     border-t border-transparent dark:border-gray-800
                     transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="text-center">
          {/* STEP 4: Copyright text with dark mode */}
          <p
            className="text-xs lg:text-sm mb-2 
                      text-white dark:text-gray-200 
                      transition-colors"
          >
            Copyright © 2025. All Rights Reserved Pune Dream Homes
          </p>

          {/* STEP 5: RERA number with dark mode opacity */}
          <p
            className="text-xs lg:text-sm 
                      opacity-75 dark:opacity-60 
                      text-white dark:text-gray-200 
                      transition-colors"
          >
            MahaRERA Registration No: A061262500523
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
