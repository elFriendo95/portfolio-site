import {type ContextType,Context } from "./ContextProvider";
import { useContext } from "react";
export function useMainContext (): ContextType  {
  const context = useContext(Context);
  if (context === null) {
    throw new Error('useContext must be used within a ContextProvider');
  }
  return context;
};