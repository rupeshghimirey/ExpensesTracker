import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTransactionCall } from '../features/TransactionSlice';

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const dispatch = useDispatch();

    const onSubmit = (e)=>{
        e.preventDefault()
        const newTransaction={
            id: Math.floor(Math.random()*1000000000), // use uuid
            text, amount:+amount
        }
        dispatch(addTransactionCall(newTransaction));
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value = {text} onChange = {(e)=>setText(e.target.value)}placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value = {amount} onChange = {(e)=>setAmount(e.target.value)}placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
