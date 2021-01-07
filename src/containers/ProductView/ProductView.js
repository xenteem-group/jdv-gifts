import React from 'react'
import ProductContent from '../../components/ProductContent/ProductContent'
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions'
import { productData } from '../../config/Config'
import classes from './ProductView.module.scss'

const ProductView = () => {
    return(
        <React.Fragment>
            <ProductContent products={productData}/>
            <PaymentOptions/>

        </React.Fragment>
    )
}

export default ProductView;