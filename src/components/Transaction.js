import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';



export const Transaction = ({ transaction }) => {

        const { deleteTransaction } = useContext(GlobalContext);

        const sign = transaction.amount < 0 ? '-' : '+' ;
    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
              <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
               {transaction.text}<span>{sign}Rs.{numberWithCommas(Math.abs(transaction.amount))}</span>
                
            </li>
        </div>
    )
}
