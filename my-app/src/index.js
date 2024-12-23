import React from "react";  // Add this import
import "../src/App.css";
import "../src/global.css";

// import "../styleguide.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementHomepageBox } from "./screens/ElementHomepageBox";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementHomepageBox />
  </StrictMode>,
);
