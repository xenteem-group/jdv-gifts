import React from 'react';
import Banner from '../../components/Carousel/Carousel';
import HomeContent from '../../components/HomeContent/HomeContent';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions'
import { productData } from '../../config/Config'
import classes from './Home.module.scss';

const Home = () => {

  return (
    <React.Fragment>
      <Banner />
      <HomeContent products={productData}/>
      <PaymentOptions/>
    </React.Fragment>
  );
};

export default Home;
