
import React, { createContext, useReducer }  from 'react';
import TransactionReducer from "./Transreducer";

// create initial state
const initialTransaction = {
    transaction: [
        { amount: 2500, description: "Cash" , id: 1 },
        { amount: -200, description: "Book" ,id:2 },
        { amount: -800, description: "Watch" ,id :3 }  
    ]
}

// create the expense context 
export const ExpenseContext = createContext(initialTransaction);

// create the provider for the expense context 

export const TransactionProvider = ({children}) => {
    let [state,dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch({
            type:"ADD_Transaction",
            payload:{
                amount:transObj.amount,
                description:transObj.description
            },
        })
    }

    function deleteTransaction(id){
        dispatch({
            type:'Delete',
            payload: id
        })
    }
    
    return(
        <ExpenseContext.Provider value={{
            transaction:state.transaction,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </ExpenseContext.Provider>
    )
};