import React from 'react'

import { Link } from 'react-router-dom'

import classes from './BottomNavigationItem.module.css';

const BottomNavigationItem = (props) => (
    <li className={classes.BottomNavigationItem}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


export default BottomNavigationItem
