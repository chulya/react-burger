import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";

const modalsContainer = document.querySelector("#react-modals");

export const Modal = ({ onCloseEsc, onCloseClick, children }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onCloseEsc);

    return () => {
      document.removeEventListener("keydown", onCloseEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={modalStyles.box}>
        <button type="button" className={modalStyles.button}>
          <CloseIcon type="primary" onClick={onCloseClick} />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={onCloseClick} />
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  onCloseEsc: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
