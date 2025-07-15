import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OpenPopUpSupportProvider from "./Features/Home/Context/useOpenPopUpSupport.tsx";
import OpenPopUpTemplateProvider from "./Features/Templates/Context/useOpenPopUpTemplate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenPopUpSupportProvider>
      <OpenPopUpTemplateProvider>
        <App />
      </OpenPopUpTemplateProvider>
    </OpenPopUpSupportProvider>
  </StrictMode>
);
