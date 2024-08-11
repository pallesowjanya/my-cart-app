// src/App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <div style={{ padding: '20px' }}>
        <h1>Shopping Cart</h1>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
