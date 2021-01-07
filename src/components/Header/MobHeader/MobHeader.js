import React from 'react';
import { Phone, Facebook, Instagram } from 'react-feather';
import classes from './MobHeader.module.scss';
import { contactData } from '../../../config/Config';

const MobHeader = (props) => {
    const {link, contact} = contactData;
    const size = 28;
  return (
    <header>
      <div className={classes.col}>
        <a href={link.phone} className={classes.centerItems}>
          <Phone size={size} />
          <div>{contact.phone}</div>
        </a>
      </div>
    </header>
  );
};

export default MobHeader;
