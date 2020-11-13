import React from 'react';
import Banner from '../../components/Carousel/Carousel';
import HomeContent from '../../components/HomeContent/HomeContent';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions'
import classes from './Home.module.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <HomeContent />
      <PaymentOptions/>
    </React.Fragment>
  );
};

export default Home;
