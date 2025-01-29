// Supports weights 100-900
import "@fontsource-variable/dm-sans";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HomePage } from "./modules/home/pages/home-page";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
