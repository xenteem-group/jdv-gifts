import React from 'react';
import  classes from './CartItems.module.scss';
import CartItem from './CartItem/CartItem';

const CartItems = (props) => (

    <div className={classes.wrap}>
        <div className={classes.wrap}>
        <h2>My Cart</h2>
        <div className={classes.tableContainer}>
            <div className={classes.headerRow}>
                    <div className={classes.imgCol}>
                        Product
                    </div>
                    <div className={classes.descCol}>
                        Name
                    </div>
                    <div className={classes.qtyCol}>
                        Quantity
                    </div>
                    <div className={classes.rateCol}>
                        Rate
                    </div>
                    <div className={classes.amtCol}>
                        Amount
                    </div>
                    <div className={classes.dltCol}>
                        delete
                    </div>
            </div>

            

            {props.items.map((item, i) => (
                <CartItem key={item.id} item={item} />
            ))}

            <div className={classes.shipRow}>
                        <div className={classes.nameCol}>
                        Shipping Charges:
                        </div>
                        <div className={classes.totalCol}>
                        £1.00
                        </div>
                        <div className={classes.blankCol}>

                        </div>
                    </div>
                    <div className={classes.totalRow}>
                        <div className={classes.nameCol}>
                        Total Amount:
                        </div>
                        <div className={classes.totalCol}>
                        £14.50
                        </div>
                        <div className={classes.blankCol}>

                        </div>
                    </div>

        </div>
        
    </div>

    <div className={classes.btnContainer}>
                    <div className={classes.contBtnCol}>
                        <button className={classes.contBtn} onClick={"http://ebay.com"}>
                            Continue Shopping
                        </button>
                    </div>
                    <div className={classes.COBtnCol}>
                    <button className={classes.COBtn} onClick={"http://ebay.com"}>
                             Check out
                        </button>
                    </div>
                </div>
    </div>
)

export default CartItems