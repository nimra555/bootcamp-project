import React, { useContext } from 'react';
import CounterContext from './Countcontext';



const Child = () => {

    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
            <h1>This is Child</h1>
            <h2>Counter Value is: {counterValue[0]}</h2>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Add by Context</button>
            
        </div>
    )
} 

export default Child;