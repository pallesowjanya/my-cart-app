// src/CartContext.js
import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  items: [], // Items will be fetched and stored here
  totalQuantity: 0,
  totalAmount: 0,
};

// Create context
export const CartContext = createContext(initialState);

// Reducer to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
        totalQuantity: action.payload.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: action.payload.reduce((acc, item) => acc + item.quantity * item.price, 0),
      };
    case 'INCREASE_QUANTITY':
      const increasedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: increasedItems,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + increasedItems.find(item => item.id === action.payload).price,
      };
    case 'DECREASE_QUANTITY':
      const decreasedItems = state.items.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        items: decreasedItems,
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - decreasedItems.find(item => item.id === action.payload).price,
      };
    default:
      return state;
  }
};

// Context Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
