import React  from 'react';
import './App.css'; 
// import CounterContext from './countContext.js';
import Parent from './Parent.js';
;

function App() {
  return(
    // <CounterContext.provider value = {0}>
    <div>
      <Parent />
    </div>
      
    // </CounterContext.provider>
  );
}

export default App;
