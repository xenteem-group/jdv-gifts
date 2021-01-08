import React from 'react';
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.scss';
import { ShoppingCart, User } from 'react-feather'

const NavItems = (props) => {

    const size=30;
    const color = 'var(--gold-color)';


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

  return (
    <div className={classes.navItems}>
      <div className={classes.navPages}>
        {navPages.map((page, i) => {
          return <NavItem key={i} link={page.link} name={page.name} />;
        })}
      </div>
      <div className={classes.navAccount}>
        <ShoppingCart size={size} color={color}/>
        <User size={size} color={color}/>
      </div>
    </div>
  );
};

export default NavItems;
