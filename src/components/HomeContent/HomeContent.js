import React from 'react';
import Product from '../Product/Product';
import Services from './Services/Services';
import classes from './HomeContent.module.scss';

const HomeContent = () => {
  const products = [
    {
      name: 'Water Bottle',
      code: 'pd001',
      img:
        'https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'product image',
      price: '45.00 usd',
    },
    {
      name: 'Water Bottle',
      code: 'pd004',
      img:
        'https://images.pexels.com/photos/3195774/pexels-photo-3195774.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      alt: 'product image',
      price: '45.00 usd',
    },
    {
      name: 'Water Bottle',
      code: 'pd002',
      img:
        'https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'product image',
      price: '45.00 usd',
    },
    {
      name: 'Water Bottle',
      code: 'pd003',
      img:
        'https://images.pexels.com/photos/4000090/pexels-photo-4000090.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      alt: 'product image',
      price: '45.00 usd',
    },
  ];
  return (
    <div className={classes.homeContent}>
      <div className={classes.prodWrap}>
        {products.map((product, i) => (
          <Product key={product.code} product={product} />
        ))}
      </div>
      <div className={classes.servicesWrap}>
        <Services />
      </div>
    </div>
  );
};

export default HomeContent;
