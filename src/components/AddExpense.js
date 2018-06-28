import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // console.log(expense);
    // The expense object is passed in by ExpenseForm when it calls onSubmit(). The expense object is the updated state.
    this.props.startAddExpense(expense);
    // Redirect after submitting form without page refresh
    this.props.history.push("/");
    console.log(expense);
  };

  render() {
    return <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
          <ExpenseForm onSubmit={this.onSubmit} />
          <div className="button-group">
            <button className="button" form="expense-form" type="submit">
              Add Expense
            </button>
          </div>
        </div>
      </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);