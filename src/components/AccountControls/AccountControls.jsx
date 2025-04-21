// src/components/AccountControls/AccountControls.jsx
import React from 'react';
import { useBankContext } from '../../context/bankcontext';

const AccountControls = () => {
  const { dispatch } = useBankContext();
  
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  
  return (
    <div className="p-6 max-w-sm mx-auto mt-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-around">
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none"
        >
          + Deposit
        </button>
        <button 
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none"
        >
          - Withdraw
        </button>
      </div>
    </div>
  );
};

export default AccountControls;