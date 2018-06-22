import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => {
      return !isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        // If user IS authenticated, redirect to DashboardPage
          <Redirect to="/dashboard" />
        )
    }} />
  );

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PublicRoute);