import { createContext, useContext } from "react";
 type CarouselContextType = {
  imageIndex: number;
  increaseIndex: () => void;
  decreaseIndex: () => void;
  images: string[];
};
export const CarouselContext = createContext<CarouselContextType | null>(null);
export function useCarouselContext (): CarouselContextType  {
  const context = useContext(CarouselContext);
  if (context === null) {
    throw new Error('useCarouselContext must be used within a CarouselContextProvider');
  }
  return context;
};