// src/Cart.js
import wolf from './images/wolf.png';
import kafka from './images/kafka.png';
import mj from './images/mj.png';
import crawdads from './images/crawdads.png';

import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  // Fetch the items (mock data)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: 'Wolf So Grim and Mangy',
          price: 249.0,
          quantity: 1,
          image: wolf, // Replace with a valid image URL
        },
        {
            id: 2,
            title: 'Metamorphosis',
            price: 289.0,
            quantity: 1,
            image: kafka, // Replace with a valid image URL
        },
        {
            id: 3,
            title: 'Mary Jane',
            price: 200.0,
            quantity: 1,
            image: mj, // Replace with a valid image URL
        },
        {
            id: 4,
            title: 'Where the crawdads sing',
            price: 345.0,
            quantity: 1,
            image: crawdads, // Replace with a valid image URL
        },
      ];
      dispatch({ type: 'SET_ITEMS', payload: data });
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {state.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div style={{ marginTop: '20px' }}>
        <p>Subtotal: ${state.totalAmount}</p>
        <p>Total Quantity: {state.totalQuantity}</p>
        <p>Total Amount: ${state.totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
