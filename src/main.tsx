import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OpenPopUpSupportProvider from "./Features/Home/Context/useOpenPopUpSupport.tsx";
import OpenPopUpTemplateProvider from "./Features/Templates/Context/useOpenPopUpTemplate.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenPopUpSupportProvider>
      <OpenPopUpTemplateProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </OpenPopUpTemplateProvider>
    </OpenPopUpSupportProvider>
  </StrictMode>
);
