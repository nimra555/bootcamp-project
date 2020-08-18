import React, { useContext, useState } from 'react';
import { ExpenseContext } from './Transcontext';



function Main() {

    let { transaction , deleteTransaction , addTransaction } = useContext(ExpenseContext)
    console.log(transaction);
     
    // create state for description and amount 
    let [des,setDes] = useState("");

    let [amount,setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if(Number(amount) === 0){
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount:Number(amount),
            description:des
        })
    }
     
    // income and expense amount 
    const getIncome = () => {
        let income = 0 ;
        for(let i = 0 ; i < transaction.length ; i++){
            if(transaction[i].amount > 0){
               income += transaction[i].amount;
            }
        }
        return income
    }

    const getExpense = () => {
        let  expense = 0 ;
        for(let e = 0 ; e < transaction.length; e++){
            if(transaction[e].amount < 0){
                expense += transaction[e].amount
            }
        }
        return expense
    }

    
    return (

        <div>
            {/* balance component */}
            <h3>Total <br /> {getIncome() + getExpense()}</h3>

            {/* account summary */}
            <h2>Income <br /> {getIncome()} </h2>
            <h2>Expense <br /> {getExpense()} </h2>

            {/* transaction history */}
            <div className='addItem'>
                <h4>HISTORY</h4>
                <ul>
                    {transaction.map((transObj, index) => {
                        return (
                            <li key={index}>
                                <span>{transObj.description}</span>
                                <span> {transObj.amount} </span>
                                <button onClick={()=>{deleteTransaction(transObj.id)}}>x</button>
                            </li>

                        )
                    })}

                </ul>
            </div>

            {/* addTransaction component  */}
            <div className="transaction">
                <h3>Add new transaction</h3>
                <hr />

                <form onSubmit={handleAddition}>
                <label>Enter Description
                <input type="text" placeholder="Enter Description" onChange={(event)=>{
                    setDes(event.target.value)
                }} />
                </label>
                <label>Enter Amount
                <input type="number" placeholder="Enter Amount" onChange={(event)=>{
                    setAmount(event.target.value)}}/>
                </label>
                <button type="submit">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default Main;