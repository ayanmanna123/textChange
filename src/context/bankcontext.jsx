// src/context/BankContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Create Context
const BankContext = createContext();

// Initial state
const initialState = {
  balance: 1000
};

// Reducer
const bankReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        balance: state.balance + 100
      };
    case 'DECREMENT':
      return {
        ...state,
        balance: state.balance - 100
      };
    default:
      return state;
  }
};

// Context Provider
export const BankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);
  
  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
};

// Custom hook to use the bank context
export const useBankContext = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBankContext must be used within a BankProvider');
  }
  return context;
};