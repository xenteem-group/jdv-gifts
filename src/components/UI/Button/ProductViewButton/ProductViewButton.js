import React from 'react';
import classes from './ProductViewButton.module.scss';

const ProductViewButton = (props) => {
  return (
    <div className={classes.wrap}>
      <button>
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default ProductViewButton;
