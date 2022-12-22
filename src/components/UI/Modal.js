import { Fragment } from "react";
import classes from './modal.module.css';
import { createPortal }  from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.hideCard}></div>
}

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

export default function Modal(props) {


    return(
        <Fragment>
            {createPortal(<Backdrop hideCard={props.hideCard}/>, portalElement)}
            {createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalElement)}
        </Fragment>
    )
}