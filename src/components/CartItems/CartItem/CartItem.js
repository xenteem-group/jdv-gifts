import React from 'react';
import  classes from './CartItem.module.scss';

const CartItem = ({item}) => (
        <div className={classes.row}>
            <div className={classes.imgCol}>
                <img src={item.img} className={classes.bottleImg} alt={item.alt}/>
            </div>
            <div className={classes.descCol}>
                    {item.name}
            </div>
            <div className={classes.qtyCol}>
                 <div className={classes.mobileHeader}>Qty: </div>  
                 <div className={classes.items}>1</div> 
            </div>
            <div className={classes.rateCol}>
            <div className={classes.mobileHeader}>Price: </div>   
            <div className={classes.items}>${item.price}</div> 
            </div>
            <div className={classes.amtCol}>
            <div className={classes.mobileHeader}>Amount: </div>   
            <div className={classes.items}>$100</div> 
            </div>
            <hr />
            <div className={classes.dltCol}>
                delete
            </div>
            <hr />
         </div>
)

export default CartItem