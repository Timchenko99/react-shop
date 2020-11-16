import React from 'react';

import classes from './Spinner.module.css';

import logo from '../../../assets/img/Cat.svg'

const Spinner = () => (
    <div className={classes.Loader}>
        <img src={logo} alt="cat"/>
    </div>
    )

export default Spinner
//<div className={classes.Loader}><div></div><div></div><div></div><div></div></div>