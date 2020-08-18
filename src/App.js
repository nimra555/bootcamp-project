import React from 'react';
import './App.css';
import { TransactionProvider } from './Transcontext.js';
import Parent from './Parent.js';



function App() {

  return (
    <TransactionProvider>
      <div>
        <Parent />
      </div>
    </TransactionProvider>
  );
}

export default App;
