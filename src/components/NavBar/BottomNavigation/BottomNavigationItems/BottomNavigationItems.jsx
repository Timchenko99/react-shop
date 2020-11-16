import React from 'react'

import classes from './BottomNavigationItems.module.css';

import BottomNavigationItem from './BottomNavigationItem/BottomNavigationItem';

const BottomNavigationItems = (props) => {
    return (
        <ul className={classes.BottomNavigationItems}>
            <BottomNavigationItem to={"/products/new"} >Новинки</BottomNavigationItem>
            <BottomNavigationItem to={"/products/men"}>Мужчины</BottomNavigationItem>
            <BottomNavigationItem to={"/products/women/"}>Женщины</BottomNavigationItem>
        </ul>
    )
}

export default BottomNavigationItems
