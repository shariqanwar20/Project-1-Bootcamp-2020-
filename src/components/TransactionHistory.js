import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Income
                    <span>
                        +$500
                    </span>
                    <button className="delete-btn">
                        X
                    </button>
                </li>
                <li className="plus">
                    Income
                    <span>
                        +$500
                    </span>
                    <button className="delete-btn">
                        X
                    </button>
                </li>      
            </ul>
        </div>
    )
}
