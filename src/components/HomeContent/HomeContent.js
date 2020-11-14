import React from 'react';
import Product from '../Product/Product';
import Services from './Services/Services';
import { productData } from '../../config/Config';
import { Link } from 'react-router-dom';
import classes from './HomeContent.module.scss';

const HomeContent = () => {
  const products = [...productData];

  return (
    <div className={classes.homeContent}>
      <div className={classes.prodWrap}>
        {products.map((product, i) => (
          // <Link to={'/product/' + product.id} key={product.id}>
            <Product key={product.code} product={product} />
          // </Link> 
        ))}
      </div>
      <div className={classes.servicesWrap}>
        <Services />
      </div>
    </div>
  );
};

export default HomeContent;
