import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import filterExpenses from '../selectors/filterExpenses';
import selectExpenseTotal from '../selectors/expenseTotal';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  return {
    expenseCount: filteredExpenses.length,
    expenseTotal: selectExpenseTotal(filteredExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);