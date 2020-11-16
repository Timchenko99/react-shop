import React from 'react'

import classes from './SizeButton.module.css';

const SizeButton = (props) => {
    return (
        <div className={classes.SizeButton}>
            <input id={props.id} type="radio" value={props.value} name={props.name} checked={props.selectedOption === props.value} onChange={props.onChange}/>
            <label htmlFor={props.id}>{props.children}</label>
        </div>
    )
}

export default SizeButton
