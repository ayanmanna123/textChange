// src/components/BalanceDisplay/BalanceDisplay.jsx
import React from 'react';
import { useBankContext } from '../../context/bankcontext';

const BalanceDisplay = () => {
  const { state } = useBankContext();
  
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Your Account</h2>
      <div className="text-3xl font-bold text-green-600">${state.balance}</div>
    </div>
  );
};

export default BalanceDisplay;