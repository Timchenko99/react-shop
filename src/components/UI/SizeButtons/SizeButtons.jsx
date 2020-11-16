
import classes from './SizeButtons.module.css';

import SizeButton from './SizeButton/SizeButton';

import React from 'react'


const SizeButtons = (props) => {
    return (
            <div className={classes.SizeButtons}>
                {props.sizes.map(size => { 
                    return <SizeButton 
                    key={""+props.id+"-"+size} 
                    id={""+props.id+"-"+size} 
                    name={props.id} 
                    value={props.size} 
                    selectedOption={props.slectedOption} 
                    onChange={props.handleOptionChange}> {size} </SizeButton>
                    })}
            </div>

    )
}

export default SizeButtons


