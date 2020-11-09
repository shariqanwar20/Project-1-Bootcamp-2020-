import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            <label>Enter Email</label>
            <input type="text" placeholder="Email Address"></input>
            <br />
            <label>Enter Value</label>
            <input type="number" placeholder="Enter Positive or Negative number"></input>
            <button className="btn">Add Transaction</button>
        </div>
    )
}
