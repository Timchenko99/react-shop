import React from 'react'

import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
    return (
        <button className={classes.DrawerToggle} onClick={props.onClick}>
            <span className={classes.Toggler}></span>
        </button>
    )
}

export default DrawerToggle
