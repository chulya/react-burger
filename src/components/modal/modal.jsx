import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";

const Modal = ({ onCloseEsc, closePopup, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", onCloseEsc);

    return () => {
      document.removeEventListener("keydown", onCloseEsc);
    };
  }, []);

  return createPortal(
    <>
      <div className={modalStyles.container}>
        <button type="button" className={modalStyles.button}>
          <CloseIcon type="primary" onClick={closePopup} />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={closePopup} />
    </>, 
    document.getElementById("react-modals")
  );
};

Modal.propTypes = {
  onCloseEsc: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};


export default Modal;