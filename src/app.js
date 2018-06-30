import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Need to set up loaders in webpack to load CSS
import 'react-dates/lib/css/_datepicker.css';
// When importing from node_modules directory, no need to specify path. Normalize.css is used for CSS reset
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { login, logout } from './actions/authActions';
import { AppRouter, history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenseActions';
import { firebase } from './firebase/firebase';
import Loader from './components/Loader';
import { addExpenseHotkey } from './util';

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

let hasRendered = false;
const renderApp = () => {
  // If app hasn't been rendered yet, render app.
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

// Display a loading screen while app is loading.
// ReactDOM.render(<p>Loading</p>, document.getElementById('app'));
ReactDOM.render(<Loader />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  // If user logged in
  if (user) {
    console.log('log in');
    // The action is dispatched here instead of in the async actions is because
    // we want to check if user is logged in when user first visits the site,
    // not when startLogin or startLogout async actions are triggered.
    store.dispatch(login(user.uid));
    // Fetch data from Firebase
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // If user is on the LoginPage, redirect to DashboardPage.
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    // If there's no user or user log out, send them to LoginPage.
    history.push('/');
  }
});