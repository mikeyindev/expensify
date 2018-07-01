import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import { handleHotkey } from '../util';

const ExpenseDashboardPage = () => {
  document.addEventListener('keydown', (e) => handleHotkey(e));
  return (
    <div>
      <ExpenseSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
