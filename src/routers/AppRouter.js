import React from "react";
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import HelpPage from '../components/Help';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/Login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

// Switched to <Router> instead of <BrowserRouter> because we're passing in our
// own history using the history library.
export const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);