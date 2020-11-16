import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';

import {Link} from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <Icon iconName={props.iconName}/>  
            <Link to={props.to}>
                {props.children}
            </Link>
        </li>
    )
}

export default NavigationItem
