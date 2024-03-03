import styles from "./modal-overlay.module.css";

type ModalOverlayProps = {
  closeModal: () => void;
};

function ModalOverlay({closeModal}: ModalOverlayProps) {

  return (
    <div className={styles.overlay} onClick={closeModal}></div>  
  )
  
}

export default ModalOverlay;