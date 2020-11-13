import React from 'react';
import classes from './FooterCopyright.module.scss';

const FooterCopyright = () => (
  <div className={classes.footerCopyright}>
    <div className={classes.flexCol}>
      <span>
        <a href="">Privacy Policy</a>
      </span>
      <span>
        <a href="">Terms and Conditions</a>
      </span>
    </div>
    <div className={classes.flexCol}>
      <span>
        <a href="">Copyright © 2020 JDV Gifts</a>
      </span>
    </div>
    <div className={classes.flexCol}>
      <span>
        <a href="www.xenteem.com">Powered by Xenteem Solutions (pvt) Ltd.</a>
      </span>
    </div>
  </div>
);

export default FooterCopyright;
