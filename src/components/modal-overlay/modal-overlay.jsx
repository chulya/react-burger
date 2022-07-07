import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyles from "./modal-overlay.module.css";

const ModalOverlay = ({ onClick }) => {
  return <div className={modalOverlayStyles.container} onClick={onClick} />;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;