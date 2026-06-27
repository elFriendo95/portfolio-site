import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { MainContextProvider } from "./context/MainContext/MainContextProvider.tsx";
import { ModalContextProvider } from "./context/ModalContext/ModalContextProvider.tsx";
import { CarouselContextProvider } from "./context/CarouselContext/CarouselContextProvider.tsx";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <MainContextProvider>
        <ModalContextProvider>
          <CarouselContextProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </CarouselContextProvider>
        </ModalContextProvider>
      </MainContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>,
);
