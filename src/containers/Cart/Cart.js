import React from 'react';
import CartItems from '../../components/CartItems/CartItems'
import { productData } from '../../config/Config'

const Cart = () => {

    return (
        <CartItems items = {productData}/>
    )

}

export default Cart;