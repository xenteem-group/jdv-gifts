import React from 'react'
import ProductViewButton from '../../UI/Button/ProductViewButton/ProductViewButton'
import classes from './ProductDetail.module.scss'

const ProductDetail = (props) => {
    const product = props.product;
    return(
        <div className={classes.productDetail}>
            <h2>{product.name}</h2>
            <div className={classes.price}>${product.price}</div>
            <div className={classes.quantity}>Quantity</div>
            <ProductViewButton text="Add to Cart"/>
            <ProductViewButton text="Buy Now"/>
            </div>

    )
}

export default ProductDetail;