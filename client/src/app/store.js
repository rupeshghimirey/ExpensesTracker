import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import transactionsReducer  from '..//features/TransactionSlice';

const reducer = combineReducers({
    posts : transactionsReducer
})

const store = configureStore({
    reducer
})

export default store;