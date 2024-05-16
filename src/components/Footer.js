// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Contact us: example@example.com</p>
        <p>Follow us on social media:</p>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <span className="divider">|</span>
          <a href="https://twitter.com">Twitter</a>
          <span className="divider">|</span>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
