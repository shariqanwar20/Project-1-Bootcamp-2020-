import React, { useContext } from 'react'
import { transactionContext } from '../context/TransactionContext'

export const TransactionHistory = () => {
    //useContext returns the initial transaction array as it is the value the provider is currently holding
    //we have passed that array as an object so in the following line we are destructuring and directly extracting the value of the relevant key  
    let {transactions, removeTransaction} = useContext(transactionContext)

    const handleRemove = (id) => {
        //we are receiving the id
        removeTransaction({
            id : id
        });
    }

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {/* this function takes in an object variable in which it will return the 
                object and since its a dynamic list we will need an index variable
                and assign each element a key otherwise warning will be received.
                It is similar to that of a for loop iterating an array of objects. This is the REACT way */}
                { transactions.map((transObj) => {
                    return (
                        <li className={transObj.amount < 0 ? "minus" : "plus"} key={transObj.id} >
                            {transObj.description}
                            <span>
                                {transObj.amount}
                            </span>
                            <button className="delete-btn" onClick={() => handleRemove(transObj.id)}>
                                X
                            </button>
                        </li>
                    )
                }) } 
            </ul>
        </div>
    )
}
