import React, { useState, useContext } from 'react'
import { transactionContext } from '../context/TransactionContext'

export const AddTransaction = () => {
    //these will store the values entered in the form
    let [id, setId] = useState(0);
    let [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    let {addTransaction} = useContext(transactionContext);

    //This prevents the page from refreshing when submit button is pressed
    const handleAddition = (event) => {
        event.preventDefault();
        setId(id + 1);
        addTransaction({
            id : id,
            amount : Number(amount),
            description : description
        });
    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={handleAddition}>
                <div>
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" placeholder="Email Address" onChange={(event) => setDescription(event.target.value)}></input>
                    <br />
                    <label htmlFor="number">Enter Value</label>
                    <input type="number" placeholder="Enter Positive or Negative number" onChange={(event) => setAmount(event.target.value)}></input>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
