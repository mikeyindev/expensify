import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
  isAuthenticated, 
  // Renaming 'component' to 'Component'. This is to conform to React naming
  // conventions as React expects component names to be capitalized.
  component: Component,  
  ...rest // The rest of props on <Route>
}) => (
  <Route {...rest} component={(props) => {
    return isAuthenticated ? (
      <div>
        <Header />
        {/* This is whatever component passed to PrivateRoute's 'component' prop, i.e. AddExpensePage, ExpenseDashboardPage */}
        <Component {...props} />
      </div>
    ) : (
      // If user is NOT authenticated, redirect to LoginPage
      <Redirect to="/" />
    )
  }} />
);

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PrivateRoute);