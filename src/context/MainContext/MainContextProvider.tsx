import { useMemo, useState, type ReactNode } from "react";
import { MainContext } from "./useMainContext";
type MainContextProviderProps = {
  children: ReactNode;
};
export function MainContextProvider({ children }: MainContextProviderProps) {
  const [imageCanvasUrl, setCanvasImageUrl] = useState(
    "./src/assets/images/about-me.jpg",
  );
  // useMemo нужен, чтобы потребители контекста не перерендеривались,
  // когда реальное состояние контекста не изменилось, несмотря на перерендер провайдера.
  const value = useMemo(() => {
    return {
      imageCanvasUrl,
    };
  }, [imageCanvasUrl]);
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
