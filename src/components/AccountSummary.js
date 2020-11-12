import React, { useContext } from 'react'
import { transactionContext } from '../context/TransactionContext'
import { Balance } from './Balance'

export const AccountSummary = () => {
    let {transactions} = useContext(transactionContext)

    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++)
        {
            if (Number(transactions[i].amount) > 0)
                income += transactions[i].amount;
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++)
        {
            if (Number(transactions[i].amount) < 0)
                expense += transactions[i].amount;
        }
        return expense;
    }
    return (
        <div>
            <Balance income={getIncome()} expense={getExpense()}/>
            <div className="inc-exp-container">
                <div className="money plus">
                    INCOME
                    <br />
                    {getIncome()}
                </div>
                <div className="money minus">
                    EXPENSE
                    <br />
                    {getExpense()}
                </div>
            </div>
        </div>

    )
}
