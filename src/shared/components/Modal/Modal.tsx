import type { ReactNode } from "react";
import { useModalContext } from "../../../context/ModalContext/useModalContext";
import "./Modal.css";
type ModalProps = { content: ReactNode | null };
export function Modal({ content }: ModalProps) {
  const { isModalOpen, closeModal } = useModalContext();
  if (!isModalOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="btn btn-secondary" id="close-btn" onClick={closeModal}>
          x
        </span>
        {content}
      </div>
    </div>
  );
}
