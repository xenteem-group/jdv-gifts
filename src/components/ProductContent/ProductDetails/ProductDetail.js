import React from 'react'
import Button from '../../UI/Button/Button'
import classes from './ProductDetail.module.scss'

const ProductDetail = (props) => {
    const product = props.product;
    return(
        <div className={classes.productDetail}>
            <h2>{product.name}</h2>
            <div className={classes.price}>${product.price}.00 usd</div>
            <div className={classes.quantity}>Quantity</div>
            <Button text="Add to Cart"/>
            <Button text="Buy Now"/>
            </div>

    )
}

export default ProductDetail;