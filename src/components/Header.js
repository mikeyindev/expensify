import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

export const Header = (props) => (
  <header className="Header">
    <div className="Header__wrapper">
      <Link to="/dashboard">
        <h2 className="Header__title">Expensify It</h2>
        </Link>
      <button className="Header__button--logout" onClick={props.startLogout}>
        Logout
      </button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
