import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // console.log(expense);
    // The expense object is passed in by ExpenseForm when it calls onSubmit(). The expense object is the updated state.
    this.props.addExpense(expense);
    // Redirect after submitting form without page refresh
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// Abstract dispatcher functions away from the component
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);