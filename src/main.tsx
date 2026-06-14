import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { MainContextProvider } from "./context/MainContext/MainContextProvider.tsx";
import { ModalContextProvider } from "./context/ModalContext/ModalContextProvider.tsx";
import { CarouselContextProvider } from "./context/CarouselContext/CarouselContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainContextProvider>
      <ModalContextProvider>
        <CarouselContextProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </CarouselContextProvider>
      </ModalContextProvider>
    </MainContextProvider>
  </BrowserRouter>,
);
