import React from "react";

function AddToCart({product, qty, increaseQty, decreaseQty}) {
    
    if (qty === 0) {
        return (
            <button onClick={increaseQty(product)}>Add to Cart</button>
        );
    } else {
        return (
            <div>
                <button onClick={decreaseQty(product)}>-</button>
                <span>{" "+qty+" "}</span>
                <button onClick={increaseQty(product)}>+</button>
            </div>
        )
    }
}

export default AddToCart;