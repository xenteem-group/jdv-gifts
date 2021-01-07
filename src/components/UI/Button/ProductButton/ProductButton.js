import React from 'react';
import classes from './ProductButton.module.scss';

const ProductButton = (props) => {
  return (
    <div className={classes.wrap}>
      <button>
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default ProductButton;
