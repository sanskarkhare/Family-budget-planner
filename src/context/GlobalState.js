import React, { useReducer, createContext, useState } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
    transactions: [], 
    error: null,
    loading: true,

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

   async function getTransactions() {
        try {
            const res = await axios.get('https://fbp-backend.herokuapp.com/');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            })
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTransaction(transaction){
        
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        }
        try{
            const res = await axios.post('https://fbp-backend.herokuapp.com/', transaction, config);

                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: res.data.data,
                })
            }   
            catch(err) {
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err.response.data.error
                })
            }
    }

    async function deleteTransaction(id) {

        try {
                await axios.delete(`https://fbp-backend.herokuapp.com/${id}`);

                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id
                })
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }

    }

    return(<GlobalContext.Provider value={{
            transactions: state.transactions,
            getTransactions,
            deleteTransaction,
            addTransaction,
            error: state.error,
            loading: state.loading
            
    }}>
            {children}
        </GlobalContext.Provider>
    )
}

