import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products-container"> {/* products-container 클래스 추가 */}
        <div className="product">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$10.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="product2.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$15.00</p>
          <button>Add to Cart</button>
        </div>
        {/* Add more products here */}
      </div>
    </div>
  );
}

export default Products;
