import React from 'react';
import { contactData } from '../../config/Config';
import { Phone, Facebook, Instagram } from 'react-feather';
import Logo from '../../assets/logo/logo.png';
import classes from './Header.module.scss';

const Header = () => {

  const {link, contact} = contactData;
  const size = 28;
  const color = 'var(--gold-color)';

  return (
    <header>
      <div className={classes.col}>
        <a href={link.phone} className={classes.centerItems}>
          <Phone size={size} color={color}/>
          <div className={classes.mobNo}>{contact.phone}</div>
        </a>
      </div>
      <div className={classes.col}>
        <div className={classes.logoWrap}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={classes.col}>
        <a href={link.phone}>
          <Facebook size={size} color={color}/>
        </a>

        <a href={link.phone}>
          <Instagram size={size} color={color}/>
        </a>
      </div>
    </header>
  );
};
export default Header;
