import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const LoginPage = (props) => <div className="box__layout">
           <div className="login-box">
             <h1 className="login-box__title">Expensify</h1>
             <p className="login-box__subtitle">
               Your expenses on track.
             </p>
             <button className="button__login" onClick={props.startLogin}>
               <span className="google-logo">
                <img src="/images/google_logo.svg" height="20px" width="20px" />
              </span>
              <span>Login with Google</span>
             </button>
           </div>
         </div>;

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });

export default connect(undefined, mapDispatchToProps)(LoginPage);