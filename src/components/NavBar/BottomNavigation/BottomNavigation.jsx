import React from 'react'

import classes from './BottomNavigation.module.css';

import BottomNavigationItems from './BottomNavigationItems/BottomNavigationItems';

const BottomNavigation = () => {
    return (
        <div className={classes.BottomNavigation}>
            <BottomNavigationItems/>
        </div>
    )
}

export default BottomNavigation
