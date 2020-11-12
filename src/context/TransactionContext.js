import transactionReducer from "./TransactionReducer";
import React, { createContext, useReducer } from 'react'


let initialTransactions = []
export const transactionContext = createContext(initialTransactions);



//initial transaction is an array of objects;
//it is the syntax of provider to pass in children elements to the provider
export const GlobalProvider = ({children}) => {
    //useReducer takes in the reducer and initial value(; dispatch is a function)
    //currently state is holding the array initialTransactions
    let [state, dispatch] = useReducer(transactionReducer, initialTransactions);

    const addTransaction = (transObj) => {
        dispatch({
            type : "ADD_TRANSACTION",
            payload : {
                id : transObj.id,
                amount : transObj.amount,
                description : transObj.description
            }
        })
    }
    const removeTransaction = (transObj) => {
        dispatch({
            type : "REMOVE_TRANSACTION",
            id : transObj.id
        })
    }

    return (
        // if the key and value have the same name, then you can just enter it once like below;
        // it is not required to add brackets or pass arguments when sending the function as an element of an object
        <transactionContext.Provider value={
            {transactions : state, 
            addTransaction,
            removeTransaction
            }
        }>
            {children}
        </transactionContext.Provider>
    )
}
