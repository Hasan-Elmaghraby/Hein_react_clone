import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./shared/services/queryClient";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "@/shared/services/i18n/config.ts";
import "react-toastify/dist/ReactToastify.css";
import "./theme/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
