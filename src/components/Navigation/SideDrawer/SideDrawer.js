import React from 'react';
import NavItem from '../NavItems/NavItem/NavItem';
import { X, ShoppingCart ,User } from 'react-feather';
import classes from './SideDrawer.module.scss';

const navPages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];

const SideDrawer = (props) => {

  const size = 50;
  const color = 'var(--gold-color)'
  const cssClass = props.showMenu? [classes.sideDrawer, classes.open] : [classes.sideDrawer];

  return (
    <div className={cssClass.join(' ')}>
      <X size='30' color={color} onClick={props.clicked}/>
      <div className={classes.navPages}>
        {navPages.map((page, i) => {
          return <NavItem key={i} link={page.link} clicked={props.clicked} name={page.name} />;
        })}
      </div>
      <div className={classes.navAccount}>
        <User size={size} color={color} onClick={props.clicked}/>
        <ShoppingCart size={size} color={color} onClick={props.clicked}/>
      </div>
    </div>
  );
};

export default SideDrawer;
