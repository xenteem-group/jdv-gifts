import React from 'react';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';
import classes from './NavItems.module.scss';
import { ShoppingCart, User } from 'react-feather';
import { relativePath } from '../../../config/Config'

const NavItems = (props) => {
  const size = 30;
  const color = 'var(--gold-color)';

  const navPages = [
    {
      name: 'Home',
      link: `${relativePath}`,
    },
    {
      name: 'About Us',
      link: `${relativePath}/about`,
    },
    {
      name: 'Contact Us',
      link: `${relativePath}/contact`,
    },
  ];

  const profileLink = `${relativePath}/signin`
  const cartLink = `${relativePath}/cart`

  return (
    <div className={classes.navItems}>
      <div className={classes.navPages}>
        {navPages.map((page, i) => {
          return <NavItem key={i} link={page.link} name={page.name} />;
        })}
      </div>
      <div className={classes.navAccount}>
        <Link to={cartLink}>
          <ShoppingCart size={size} color={color} />
        </Link>
        <Link to={profileLink}>
          <User size={size} color={color} />
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
