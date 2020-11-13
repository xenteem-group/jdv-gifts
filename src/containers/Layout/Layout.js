import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar/NavBar'
import classes from './Layout.module.scss';

const Layout = (props) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className={classes.layout}>
        <Header />
        <NavBar/>
        {props.children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
