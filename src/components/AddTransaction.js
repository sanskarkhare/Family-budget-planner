import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';



export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,//parsing into int
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new Item </h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Item</label>
            <input type="text" placeholder="Enter item..." value={text} onChange={(e) => setText(e.target.value)}  />
            </div>
            <div className="form-control">
            <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income) </label>
            <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />         
            </div>
            <button className="btn">Add Item</button>
            </form>
        </>
    )
}
