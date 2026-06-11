import { createContext, useState, type ReactNode } from "react";
export type ContextType = {
  imageIndex: number;
  increaseIndex: () => void;
  decreaseIndex: () => void;
  images: string[];
  imageCanvasUrl: string;
};
type ContextProviderProps = {
  children: ReactNode;
};
export const Context = createContext<null | ContextType>(null);
export function ContextProvider({ children }: ContextProviderProps) {
  const [imageCanvasUrl, setCanvasImageUrl] = useState(
    "./src/assets/images/about-me.jpg",
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(() => [
    "./src/assets/images/P0.png",
    "./src/assets/images/P1.png",
    "./src/assets/images/P2.png",
  ]);
  const increaseIndex = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };
  const decreaseIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(images.length - 1);
    }
  };
  return (
    <Context.Provider
      value={{
        imageIndex,
        increaseIndex,
        decreaseIndex,
        images,
        imageCanvasUrl,
      }}
    >
      {children}
    </Context.Provider>
  );
}
