import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//slice
export const transactionSlice = createSlice({
    name:'transactions',
    initialState:{
        transactions:[],
        error:null,
        loading: true
    },
    reducers:{
        getTransaction: (state,action)=>{
            state.loading=false,
            state.transactions= action.payload
        },
        deleteTransaction: (state,action)=>{
            state.transactions = state.transactions.filter(transaction=>transaction._id!==action.payload)
        },
        addTransaction: (state,action) =>{
            state.transactions.push(action.payload)
        },
        transactionError: (state,action)=>{
            state.loading= true,
            state.error= action.payload
        }
    }
})

export default transactionSlice.reducer;

// actions

const {getTransaction,deleteTransaction,addTransaction,transactionError} = transactionSlice.actions;

export const getTransactionCall = ()=>async dispatch=>{
    try{
        console.log('entered get transaction');

        const res = await axios("/api/v1/transactions");

        const {data} = res.data;

        dispatch(getTransaction(data))
    }catch(err){
        dispatch(transactionError(err.response.data.error))
    }
}

export const deleteTransactionCall = (id)=>async dispatch=>{
    try{
        console.log('entered delete transaction',id);

        const res = await axios.delete(`/api/v1/transactions/${id}`);

        dispatch(deleteTransaction(id))
    }catch(err){
        dispatch(transactionError(err.response.data.error))
    }
}

export const addTransactionCall = (newTransaction)=>async dispatch=>{
    try{
        console.log('entered delete transaction',newTransaction);

        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        const res = await axios.post('/api/v1/transactions',newTransaction,config)
        const {data} = res.data;

        dispatch(addTransaction(data))
    }catch(err){
        dispatch(transactionError(err.response.data.error))
    }
}
