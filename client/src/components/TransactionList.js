import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Transaction from './Transaction';
import { getTransactionCall } from '../features/TransactionSlice';

const TransactionList = () => {
    const dispatch = useDispatch();
    const {transactions} = useSelector(state=>state.posts)

    useEffect(()=>{
        dispatch(getTransactionCall());
    },[])

    return (
        <div>
            <h3>History</h3>
            <ul className = "list">
                {
                    transactions.map(transaction=>(
                        <Transaction key = {transaction._id} transaction = {transaction}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default TransactionList
