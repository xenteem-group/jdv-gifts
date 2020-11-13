import React from 'react'
import classes from './Product.module.scss'

const Product = (props) => {
    const product = props.product;
    return(
        <div className={classes.product}>
            <div className={classes.imgWrap}>
                <img src={product.img} alt={product.alt}/>
            </div>
            
        </div>
    )
}

export default Product;
