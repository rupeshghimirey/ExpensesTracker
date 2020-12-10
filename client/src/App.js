/* 
    # make it an app and deploy in app store
    # make it as we app
    # deployment in heroku or maybe aws 
    # get some advertisement
    # add feature like
        * receipt photo to expense
        * recurring payment
        * cancellation of subscription
        * tracking and charts
        * react redux hooks                             //done 
        * redux toolkit                                 //done  
        * express and mongo for backend and database    // done
        * understand useContext
*/
import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Provider } from 'react-redux';
import store from './app/store';
import './App.css';

const App = () => {
    return (
        <Provider store = {store}>
            <Header/>
            <div className = "container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </Provider>
    )
}

export default App
