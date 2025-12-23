import React from "react";
import Snowfall from "react-snowfall";
import { useTheme } from "../../contexts/ThemeContext"; // Import useTheme

const SnowfallComponent = () => {
  const { isDark } = useTheme(); // Get current theme

  return (
    <Snowfall
      color={isDark ? "#ffffff" : "#ffffff"} // White in dark mode, red-600 in light mode
      snowflakeCount={200}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
};

export default SnowfallComponent;
