import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/filterExpenses';

// Presentational component
// 2 different versions are being exported. This one unconnected, the one 
// connected to the store is exported below.
export const ExpenseList = (props) => (
  <table className="ExpenseList__table">
    <tr className="ExpenseList__table__header">
      <th className="show-for-mobile">Expenses</th>
      <th className="show-for-desktop">Expense</th>
      <th className="show-for-desktop">Amount</th>
    </tr>
    <tr>
      {props.expenses.length === 0 ? (<p>No expenses</p>) :
      (props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />)))}
    </tr>
  </table>
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