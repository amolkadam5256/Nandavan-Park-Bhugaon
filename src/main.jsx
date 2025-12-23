import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ThemeProvider } from "../contexts/ThemeContext.jsx"; // ← ADD THIS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {" "}
      {/* ← WRAP APP WITH PROVIDER */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
