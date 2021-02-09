import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';


export const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions()
        //eslint-disable-next-line
    }, [])

    return (
        <>
        <h3>History</h3>
        <div id="item-price">
        <h4>Item</h4><h4>Price</h4>
        </div>
        <div className="scroll">
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
        </>
    )
}
