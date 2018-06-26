import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const LoginPage = (props) => <div className="Login">
           <div className="Login__box">
             <h1 className="Login__box__title">Expensify</h1>
             <p className="Login__box__subtitle">
               Your expenses on track.
             </p>
             <button className="Login__button" onClick={props.startLogin}>
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