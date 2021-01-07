import React from 'react';
import Product from '../Product/Product';
import Services from './Services/Services';
import classes from './HomeContent.module.scss';

const HomeContent = (props) => {
  const products = [...props.products];

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
