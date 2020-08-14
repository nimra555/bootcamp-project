import React, { useState }  from 'react';
import './App.css'; 
import CounterContext from './Countcontext.js';
import Parent from './Parent.js';


function App() {

  let countState = useState(0);

  return(
    <CounterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
