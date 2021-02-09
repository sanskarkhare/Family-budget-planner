import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';



export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)
    
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
   
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Rs.{numberWithCommas(income)}</h4>
                <p className="money plus">+Rs.0.00</p>
            </div>
            <div>
                <h4>Rs.{numberWithCommas(expense)}</h4>
                <p className="money minus">-Rs.0.00</p>
            </div>
        </div>
    )
}
