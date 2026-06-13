import { useMainContext } from "../../context/useMainContext";
import "./Modal.css";
export function Modal() {
  const { closeModal } = useMainContext();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="btn btn-secondary" id="close-btn" onClick={closeModal}>
          x
        </span>
      </div>
    </div>
  );
}
