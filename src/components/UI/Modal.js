import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';

//receives onClick to close modal. 
const Backdrop = props => {
    return (
        <div onClick={props.onClick}className={classes.backdrop}></div>
    );
};

const Popup = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalDestination = document.getElementById("portal_destination");

//receives onBackdropClick handler
const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick}/>, portalDestination)}
            {ReactDOM.createPortal(<Popup>{props.children}</Popup>, portalDestination)}
        </>
    );
};

export default Modal;