import React from "react";

const Cart = ({ cart, setCart }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <h3 className="subtotal">Subtotal: ${subtotal}</h3>
      {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      
      <div className="cart-items-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price} x {item.quantity}</p>
            {item.id !== 99 && (
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
