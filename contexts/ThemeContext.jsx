import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  const value = {
    isDark,
    toggleDarkMode,
    theme: isDark ? "dark" : "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
