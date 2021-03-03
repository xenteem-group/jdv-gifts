import React from 'react';
import { contactData } from '../../config/Config';
import FooterCopyright from './FooterCopyrights/FooterCopyright'
import { Phone, Mail, Facebook, Instagram, MapPin } from 'react-feather';
import Logo from '../../assets/logo/icon-logo.png';
import classes from './Footer.module.scss';

const Footer = () => {
  const { link, contact } = contactData;
  const size = 24;
  return (
    <footer>
      <div className={classes.wrap}>
        <div className={classes.col}>
          <a href={link.phone}>
            <Phone size={size} />
            {contact.phone}
          </a>
          <a href={link.email}>
            <Mail size={size} />
            {contact.email}
          </a>
          <a href="">
            <MapPin size={size} />
            {contact.location}
          </a>
        </div>
        <div className={classes.col}>
          <div className={classes.logoWrap}>
            <img src={Logo} alt="company logo" />
          </div>
        </div>
        <div className={classes.col}>
            <a href={link.facebook} target="_blank"><Facebook size={size}/>/JDV Shop</a>
            <a href={link.instagram} target="_blank"><Instagram size={size}/>/@JDV_Shop</a>
        </div>

      </div>
      <FooterCopyright/>
    </footer>
  );
};

export default Footer;
