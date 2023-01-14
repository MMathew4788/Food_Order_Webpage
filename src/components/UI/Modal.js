import { Fragment } from "react";
import * as ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.onClose}
  className="fixed top-0 left-0 w-full h-full z-20 bg-black"/>;
};

const ModalOverLay = (props) => {
  return (
    <div className="fixed top-40 left-0 right-0 m-auto w-96 bg-slate-300 p-4 rounded-2xl z-30">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
