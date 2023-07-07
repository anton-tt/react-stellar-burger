import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import styles from "./modal-base.module.css";
import PropTypes from "prop-types";

function ModalBase({ closeModal, children }) {

  const modalRoot = document.getElementById("react-modals");
    
  useEffect(() => {
    const handleEscClose = (event) => {
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
      <div className={`pt-30 pr-25 pb-30 pl-25 ${styles.modal}`}>
        <button className={styles.button} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>  
        <div>{children}</div>      
      </div> 
      <ModalOverlay closeModal={closeModal} />     
    </>, 
    modalRoot);      

}
    
  ModalBase.propTypes = { 
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  }
  
  export default ModalBase;