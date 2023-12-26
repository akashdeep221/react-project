import React from "react";

import styles from './ProductCard.module.css';
import AddtoCart from '../AddToCart';

function ProductCard({product, qty, increaseQty, decreaseQty}) {
    return (
        <div className={styles.productCard}>
            <h3>{product.productTitle}</h3>
            <h5>{product.price}</h5>
            <AddtoCart product={product} qty={qty} increaseQty={increaseQty} decreaseQty={decreaseQty} />
        </div>
    );
}

export default ProductCard;