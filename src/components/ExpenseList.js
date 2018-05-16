import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/filterExpenses';

// Presentational component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))}
  </div>
);

// Convert state to props passed to ExpenseList
const mapStateToProps = (state) => {
  return {
    expenses: filterExpenses(state.expenses, state.filters)
  }
};

// connect() returns a function and we're passing the ExpenseList component to
// the returned function
export default connect(mapStateToProps)(ExpenseList);