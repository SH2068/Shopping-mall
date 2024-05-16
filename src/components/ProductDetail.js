// ProductDetail.js

import React from 'react';

const ProductDetail = () => {
  return (
    <div>
      <h2>Product Detail Page</h2>
      <div className="product-detail">
        <img src="product1.jpg" alt="Product 1" />
        <div>
          <h3>Product 1</h3>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: $10.00</p>
          <label>Select Size:</label>
          <select>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
