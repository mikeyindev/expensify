import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';
import HelpModal from './HelpModal';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <header className="Header">
        <div className="Header__wrapper">
          <Link to="/dashboard">
            <h2 className="Header__title">Expensify It</h2>
          </Link>
          <div className="Header__button-group">
            <button className="Header__button" onClick={this.openModal}>Help</button>
            <button className="Header__button" onClick={this.props.startLogout}>
              Logout
            </button>
          </div>
        </div>
        <HelpModal 
          closeModal={this.closeModal} 
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal} 
        />
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
