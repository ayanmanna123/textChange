// src/App.jsx
import React from 'react';
import { BankProvider } from './context/bankcontext';
import BalanceDisplay from './components/BalanceDisplay/blancedisplay';
import AccountControls from './components/AccountControls/AccountControls';

const App = () => {
  return (
    <BankProvider>
      <div className="min-h-screen bg-gray-100 py-12">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Bank Account App</h1>
        <BalanceDisplay />
        <AccountControls />
      </div>
    </BankProvider>
  );
};

export default App;