import React from 'react'
import {useSelector} from 'react-redux';

const Balance = () => {
    const {transactions} = useSelector(state=>state.posts);
    const amounts = transactions.map(transaction=>transaction.amount);
    const totalAmounts = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return (
        <div>
            <h4> Your Balance</h4>
            <h1> ${totalAmounts}</h1>
        </div>
    )
}

export default Balance
