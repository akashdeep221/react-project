import React from "react";

import styles from './Cart.module.css';

function Cart({cart}) {
    
    const cartList = Object.values(cart);
    if (cartList.length === 0){
        return (
            <div className={styles.cart}>No items</div>
        );
    } else {
        return (
            <ol>
                {cartList.map(cartItem => {
                    <li key={cartItem.id}>
                        <span>{cartItem.title}</span>
                        {' '}
                        <span>Quantity: {cartItem.quantity}</span>
                    </li>
                })}
            </ol>
        )
    }
}

export default Cart;