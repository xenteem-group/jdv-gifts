import React from 'react'
import NavigationItems from '../NavItems/NavItems'
import classes from './NavBar.module.scss'

const NavBar = (props) => {
    return(
        <div className={classes.navBar}>
          <NavigationItems/>  
        </div>
    )
}

export default NavBar;