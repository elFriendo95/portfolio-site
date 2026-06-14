import { createContext } from "react";
export type MainContextType = {
  imageCanvasUrl: string;
};

export const MainContext = createContext<null | MainContextType>(null);
import { useContext } from "react";
export function useMainContext (): MainContextType  {
  const context = useContext(MainContext);
  if (context === null) {
    throw new Error('useContext must be used within a ContextProvider');
  }
  return context;
};