import { Fragment } from "react";
import * as ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.onClose}
  className="fixed top-0 left-0 w-full h-full z-20 bg-black opacity-50"/>;
};

const ModalOverLay = (props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 m-auto h-fit w-96 items-center justify-center bg-neutral p-4 rounded-2xl z-30">
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
