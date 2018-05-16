import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={
        // The expense object is passed in by ExpenseForm when it calls
        // onSubmit(). The expense object is the updated state.
        (expense) => {
          // console.log(expense);
          props.dispatch(addExpense(expense));
          // Redirect after submitting form without page refresh
          props.history.push("/");
        }
      }
    />
  </div>
);

export default connect()(AddExpensePage);