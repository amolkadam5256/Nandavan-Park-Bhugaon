import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ThemeProvider } from "../src/contexts/ThemeContext.jsx";
import { LanguageProvider } from "../src/contexts/LanguageContext.jsx"; // ← ADD THIS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider> {/* ← ADD LANGUAGE PROVIDER */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);