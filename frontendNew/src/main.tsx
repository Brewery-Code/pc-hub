import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./locales/i18n.ts";
import App from "./App.tsx";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
