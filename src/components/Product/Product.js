import React from 'react';
import ProductButton from '../UI/Button/ProductButton/ProductButton';
import { Link } from 'react-router-dom';
import { ShoppingCart, DollarSign } from 'react-feather';
import classes from './Product.module.scss';

const Product = (props) => {
  const product = props.product;
  const size = 24;
  const color = 'var(--gold-color)';
  const cart = <ShoppingCart color={color} size={size} />;
  const buy = <DollarSign color={color} size={size} />;

  return (
    <div className={classes.product}>
      <div className={classes.imgWrap}>
        <img src={product.img} alt={product.alt} />
      </div>
      <div className={classes.detailWrap}>
        {product.name}
        <br />$ {product.price}
        <div className={classes.btnWrap}>
            <ProductButton text="Add to Cart" icon={cart} />
          <Link to={'/product'}>
            <ProductButton text="Buy Now" icon={buy} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
