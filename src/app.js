import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// When importing from node_modules directory, no need to specify path. Normalize.css is used for CSS reset
import 'normalize.css/normalize.css';
// Need to set up loaders in webpack to load CSS
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import './firebase/firebase';

const store = configureStore();
// store.dispatch(addExpense({ description: 'Water bill', createdAt: 0, amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000, amount: 5000 }));
// store.dispatch(setTextFilter('water'));
// const state = store.getState();
// const filteredExpenses = filterExpenses(state.expenses, state.filters);
// console.log(filteredExpenses);

const jsx = (
  // Provider provides the store to components that need access to it
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));