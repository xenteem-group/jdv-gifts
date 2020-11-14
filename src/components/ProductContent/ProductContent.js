import React from 'react';
import Productdetails from './ProductDetails/ProductDetail';
import ProductImage from './ProductImage/ProductImage';
import {productData} from '../../config/Config'
import classes from './ProductContent.module.scss';

const ProductContent = () => {
    const products = [...productData]
  return (
    <div className={classes.productView}>
      <ProductImage img={products[0].img} alt={products[0].alt} />
      <Productdetails product={products[0]}  />
    </div>
  );
};

export default ProductContent;
