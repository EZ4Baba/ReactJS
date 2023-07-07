import ReactDOM from "react-dom";
import "./Modal.css";
function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onClose}>
      {props.children}
    </div>
  );
}
function ModalOverlay(props) {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
}
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
}
export default Modal;
