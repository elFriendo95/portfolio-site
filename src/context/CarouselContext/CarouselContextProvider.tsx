import { useCallback, useMemo, useState, type ReactNode } from "react";
import { CarouselContext } from "./useCarouselContext";
type CarouselContextProviderProps = {
  children: ReactNode;
};
export function CarouselContextProvider({
  children,
}: CarouselContextProviderProps) {
  const [images, setImages] = useState(() => {
    return [
      "./src/assets/images/P0.png",
      "./src/assets/images/P1.png",
      "./src/assets/images/P2.png",
    ];
  });
  const [imageIndex, setImageIndex] = useState(0);
  const increaseIndex = useCallback(() => {
    setImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);
  const decreaseIndex = useCallback(() => {
    setImageIndex((prev) => (prev - 1) % images.length);
  }, [images.length]);
  const value = useMemo(() => {
    return {
      imageIndex,
      increaseIndex,
      decreaseIndex,
      images,
    };
  }, [imageIndex, increaseIndex, decreaseIndex, images]);
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
