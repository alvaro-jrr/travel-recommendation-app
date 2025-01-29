import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./features/home/home_page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
