import ReactDOM from "react-dom";
import "./Modal.css";
import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
const ModalOverlays = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("ovelays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        PortalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
