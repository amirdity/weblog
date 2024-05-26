import React from "react";
import classes from "./Post.module.scss";
function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}/>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
