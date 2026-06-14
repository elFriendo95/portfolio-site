import { useCallback, useMemo, useState, type ReactNode } from "react";
import { ModalContext } from "./useModalContext";
type ModalContextProviderProps = {
  children: ReactNode;
};

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const value = useMemo(
    () => ({
      isModalOpen,
      openModal,
      closeModal,
    }),
    [isModalOpen, openModal, closeModal],
  );
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
