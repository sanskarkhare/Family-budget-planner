import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {

        const { transactions } = useContext(GlobalContext)
        
        const amounts = transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    
    if(total > 0) {return (
        <>
            <h4>You Saved:</h4>
            <h1>Rs.{numberWithCommas(total)}</h1>
        </>
    )}
    if(total < 0) {return  (
        <>
            <h4>Your Extra expense:</h4>
            <h1>Rs.{numberWithCommas(total)}</h1>
        </>
    )}
    else return(
        <h2>Add items</h2>
    )
}
