import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal-base.module.css";

type ModalBaseProps = {
  closeModal: () => void;
  children: ReactNode;
};

function ModalBase({ closeModal, children }: ModalBaseProps) {

  const modalRoot = document.getElementById("react-modals") as HTMLElement;
    
  useEffect(() => {
    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keyup', handleEscClose);
    return () => {
      document.removeEventListener('keyup', handleEscClose)
    }
  });

  return createPortal(
    <>  
      <div className={`pr-25 pb-30 pl-25 ${styles.modal}`}>
        <button className={styles.button} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>  
        <div>{children}</div>      
      </div> 
      <ModalOverlay closeModal={closeModal} />     
    </>, 
    modalRoot);      

}
  
export default ModalBase;