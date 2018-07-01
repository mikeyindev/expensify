import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/filterExpenses';
import { Link } from 'react-router-dom';

// Presentational component
// 2 different versions are being exported. This one unconnected, the one 
// connected to the store is exported below.
export const ExpenseList = (props) => (
  <div>
    <div
      className="page-header__action"
    >
      <Link
        className="button"
        id="page-header__action__button"
        role="button"
        to="/create">
        Add New Expense
          </Link>
    </div>
    <div className="ExpenseList__table">
      <div className="ExpenseList__table__header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="ExpenseList__body">
        {
          props.expenses.length === 0 ? (
            <div className="ExpenseListItem ExpenseListItem--message">
              No expenses
            </div>
          ) : (
            props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))
          )
        }
      </div>
    </div>
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