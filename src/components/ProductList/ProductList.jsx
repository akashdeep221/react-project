import {useState, useEffect} from "react";

import ProductCard from "../ProductCard";

import styles from './ProductList.module.css';

const _Products = [
    {productTitle: 'Google Pixel 7', price: '10000'},
    {productTitle: 'Apple iPhone 14', price: '10000'},
    {productTitle: 'Samsung Galaxy S7', price: '10000'},
    {productTitle: 'Huaweii G6', price: '10000'},
    {productTitle: 'OnePlus Nord 5G', price: '10000'},
    {productTitle: 'Motorola Razor7', price: '10000'},
    {productTitle: 'Lenovo Vibe K5 Note', price: '10000'}
]

function getProductsApi(callback) {
    setTimeout( () => { callback(_Products); }
        ,1000);
}

function ProductList({increaseQty, decreaseQty, cart}) {
    let [isLoading, setIsLoading] = useState(true); 

    let [products, setIsProduct] = useState([]); 

    let [error1, setError] = useState(null);

    let [show, setShow] = useState(false);

    useEffect( () => {

        async function loadProducts() {

            try {
                const Response = await fetch("http://localhost:3001/products");
                const result = await Response.json();
                setIsProduct(result);
                setIsLoading(false);
                console.log("result", result);
            } catch(error) {
                error1 = setError(error);
            }
        
        }

        loadProducts();

    }  , []);

    // if (error1) {
    //     return (
    //         <div>Something is wrong!</div>
    //     )
    // }
    if (isLoading){
        return (
            <div>Loading...</div>
        )
    }
    else{
        return (
            <div>
                {/* <ul id="ul" className="list">
                    <li id="item-1" className={styles.productList} ><a>Item 1</a></li>
                    <li className={styles.productList} >Item 2</li>
                    <li className={styles.productList} >Item 3</li>
                    {show && <li className={styles.productList} >Item 4</li>}
                </ul>
                <button onClick={() => setShow(!show)} className={styles.productList} >
                    Toggle
                </button> */}

                {
                    products.map(function(ele) {return <ProductCard 
                        key={ele.id} 
                        product={ele}
                        increaseQty={increaseQty}
                        decreaseQty={decreaseQty}
                        qty={cart[ele.id] ? cart[ele.id].quantity : 0}
                        ></ProductCard>})
                }
            </div>
        )
    }
}

export default ProductList;