import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProgressBar from "./components/ProgressBar";
import "./styles/styles.css";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (subtotal >= THRESHOLD) {
      const hasGift = cart.some((item) => item.id === FREE_GIFT.id);
      if (!hasGift) {
        setCart((prevCart) => [...prevCart, { ...FREE_GIFT, quantity: 1 }]);
      }
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [cart]);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <ProductList products={PRODUCTS} cart={cart} setCart={setCart} />
      <ProgressBar cart={cart} threshold={THRESHOLD} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
