import React from 'react'
import {Redirect} from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';
import AccentButton from '../../UI/AccentButton/AccentButton';

import classes from './Modal.module.css';

const Modal = (props) => {


    return (
        props.show ? 
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={classes.Modal}>
{props.children}
<div className={classes.ModalClose}>
                        <AccentButton onClick={props.close}>ПРОДОЛЖИТЬ</AccentButton>
                    </div>
            </div>
        </React.Fragment>
        : null
    )
}

export default Modal
