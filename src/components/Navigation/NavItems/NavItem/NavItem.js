import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss';

const NavItem = (props) => {
  return (
    <div className={classes.navItem}>
      <NavLink
        to={props.link}
        exact
        activeClassName={classes.active}
        onClick={props.clicked}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default NavItem;
