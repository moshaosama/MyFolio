import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OpenPopUpSupportProvider from "./Features/Home/Context/useOpenPopUpSupport.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenPopUpSupportProvider>
      <App />
    </OpenPopUpSupportProvider>
  </StrictMode>
);
