import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import MobileNavigation from '../../components/Navigation/MobileNavigation/MobileNavigation';
import MobHeader from '../../components/Header/MobHeader/MobHeader';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.scss';

const Layout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [showMenu, setShowMenu] = useState(false);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  const menuToggleHandler = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    }

    if (width > 768) {
      setShowMenu(false);
    }
    return () => {
      window.removeEventListener('resize', resizeHandler);
      document.body.style.overflow = 'unset';
    };
  }, [showMenu, width]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className={classes.layout}>
        {width < 768 ? <MobHeader /> : <Header />}
        {width < 768 ? (
          <MobileNavigation clicked={menuToggleHandler} />
        ) : (
          <NavBar />
        )}
        <SideDrawer showMenu={showMenu} clicked={menuToggleHandler} />
        {props.children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
