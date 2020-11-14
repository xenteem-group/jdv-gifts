import React from 'react';
import classes from './ProductImage.module.scss';

const ProductImage = (props) => {
  return (
    <div className={classes.productImage}>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default ProductImage;
