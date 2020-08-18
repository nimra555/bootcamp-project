import React from 'react';
import Header from './Component/Header';
import Main from './main';
// import ExpenseContext from './Countcontext';



const Child = () => {

    // let counterValue = useContext(ExpenseContext);
    // console.log(counterValue);

    // let addTransaction =[
    //     {description:"Tution Fee"},
    //     {amount:2000}
    // ];

    return (
        <div>
            <Header /> 
            <Main />
            {/* <h1>This is Child</h1>
            <h2>Counter Value is: {counterValue[0]}</h2>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Add by Context</button>
             */}
        </div>
    )
} 

export default Child;