import React from 'react';
import { Menu, X, ShoppingCart } from 'react-feather';
import Logo from '../../../assets/logo/logo.png';
import classes from './MobileNavigation.module.scss';

const MobileNavigation = (props) => {
  const size = 24;
  const color = 'var(--gold-color)';
  return (
    <div className={classes.mobileNav}>
      <div className={classes.col}>
          <Menu size={size} color={color} onClick={props.clicked}/>
      </div>
      <div className={classes.col}>
        <div className={classes.logoWrap}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className={classes.col}>
        <ShoppingCart size={size} color={color} />
      </div>
    </div>
  );
};

export default MobileNavigation;
