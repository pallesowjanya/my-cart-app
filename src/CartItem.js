// src/CartItem.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item.id });
  };

  const decreaseQuantity = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item.id });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img src={item.image} alt={item.title} style={{ width: '100px', marginRight: '10px' }} />
      <div style={{ flex: 1 }}>
        <h3>{item.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={decreaseQuantity}>-</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <p>${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
