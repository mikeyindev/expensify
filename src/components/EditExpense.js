import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import ConfirmationModal from './ConfirmationModal';

export class EditExpensePage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  
  // The expense object is passed in by ExpenseForm when it calls onSubmit().
  // The expense object contains the updated state but doesn't include id. That
  // why we still need to use props.expense.id instead of expense.id. 
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    // console.log('Updated', expense);
  };

  openModal = () => {
    this.setState({ modalIsOpen: true }, () => {
      console.log(this.state.modalIsOpen);
    });
  }

  startRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <div className="button-group">
            <button className="button" form="expense-form" type="submit">
              Save Changes
            </button>
            <button
              className="button--remove"
              onClick={this.openModal}
            >
              Remove Expense
              </button>
          </div>
        </div>
        <ConfirmationModal 
          // modalIsOpen={this.state.modalIsOpen}
          // closeModal={this.closeModal}
          startRemoveExpense={this.startRemoveExpense} 
        />
      </div>
    );
  }
}

// with connect(), we have access to both the state (in the Redux store) and the
// props passed to the component by the higher order component, Provider.
const mapStateToProps = (state, props) => {
  // Returning a new prop to the EditExpensePage component
  // console.log(props);
  return {
    expense: state.expenses.find((expense) => (
      expense.id === props.match.params.id
    ))
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);