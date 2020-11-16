import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Logo.module.css';

import logo from '../../assets/img/female_cat.svg'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <Link to='/products'>
            <img src={logo} alt="cat"/>
            </Link>
        </div>
    )
}

export default Logo
