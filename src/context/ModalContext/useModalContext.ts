import { createContext, useContext } from "react";
 type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
export const ModalContext = createContext<ModalContextType | null>(null);
export function useModalContext (): ModalContextType  {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};