import React from 'react'
import ProductContent from '../../components/ProductContent/ProductContent'
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions'
import classes from './ProductView.module.scss'

const ProductView = () => {
    return(
        <React.Fragment>
            <ProductContent/>
            <PaymentOptions/>

        </React.Fragment>
    )
}

export default ProductView;