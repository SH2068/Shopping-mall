import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      <h2>Cart</h2>
      <div className="cart-item">
        <img src="product1.jpg" alt="Product 1" />
        <div>
          <h3>Product 1</h3>
          <p>Price: $10.00</p>
          <p>Quantity: 2</p>
          <p>Total: $20.00</p>
          <button>Remove</button>
        </div>
      </div>
      {/* Add more cart items here */}
    </div>
  );
}

export default Cart;
