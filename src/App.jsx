import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';

function App() {
  let [cart, setCart] = useState({});

  function increaseQty(product) {
    //console.log("product add", product);
    const newCart = { ...cart };

    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      }
    }

    newCart[product.id].quantity += 1;

    setCart(newCart);
  }

  function decreaseQty(product) {
    if (!cart[product.id]) return;

    const newCart = { ...cart };

    newCart[product.id].quantity -= 1;

    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }

    setCart(newCart);
  
  }

  //console.log("cart", cart);

  return (
    <div>
      <Cart cart={cart}/>
      <ProductList increaseQty={increaseQty} decreaseQty={decreaseQty} cart={cart}/>
      
    </div>
  );
  
}







// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Welcome Akashdeep!
//         {/* Edit <code>src/App.js</code> and save to reload. */}
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Click to proceed
//       </a>
//     </header>
//   </div>
// );



export default App;
