import React from 'react'
import classes from './NavBar.module.css'

import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'
import BottomNavigation from './BottomNavigation/BottomNavigation';

const NavBar = (props) => {
    return (
        <React.Fragment>
                    <header className={classes.Navbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <DrawerToggle onClick={props.drawerTogleClicked} />
        </header>
            <BottomNavigation />
        </React.Fragment>
    )
}

export default NavBar;