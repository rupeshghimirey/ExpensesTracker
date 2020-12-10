import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTransactionCall } from '../features/TransactionSlice';

const Transaction = ({transaction}) => {
    const dispatch = useDispatch();
    const sign = transaction.amount <0?'-':'+'
    return (
        <div>
            <li className = {sign === '-'?'minus':'plus'}>
                {transaction.text} 
                <span>{sign}${Math.abs(transaction.amount)}</span>
                <button className = "delete-btn" onClick={()=>dispatch(deleteTransactionCall(transaction._id))}>x</button>
            </li>
        </div>
    )
}

export default Transaction
