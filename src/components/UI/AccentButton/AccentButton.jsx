import React from 'react'

import classes from './AccentButton.module.css';

const AccentButton = (props) => {
    return (
        <div className={classes.AccentButton} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default AccentButton
