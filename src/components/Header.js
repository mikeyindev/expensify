import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

export const Header = (props) => (
  <header className="header">
    <div className="header__wrapper">
      <Link to="/dashboard">
        <h2 className="header__title">Expensify It</h2>
        </Link>
      <button className="button__logout" onClick={props.startLogout}>
        Logout
      </button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
