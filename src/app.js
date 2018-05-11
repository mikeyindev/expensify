import React from 'react';
import ReactDOM from 'react-dom';
// Need to set up loaders in webpack to load CSS
import './styles/styles.scss';
// When importing from node_modules directory, no need to specify path. Normalize.css is used for CSS reset
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import filterExpenses from './selectors/filterExpenses';
import { addExpense, removeExpense, editExpense } from './actions/expenseActions';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filterActions';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));
const state = store.getState();
const filteredExpenses = filterExpenses(state.expenses, state.filters);
console.log(filteredExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));