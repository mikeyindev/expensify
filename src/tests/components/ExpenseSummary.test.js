import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import selectExpenseTotal from '../../selectors/expenseTotal';
import expenses from '../fixtures/expenses';
import expenseTotal from '../../selectors/expenseTotal';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary 
    expenseCount={1} 
    expenseTotal={selectExpenseTotal([expenses[0]])} 
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary
    expenseCount={expenses.length}
    expenseTotal={selectExpenseTotal(expenses)}
  />);
  expect(wrapper).toMatchSnapshot();
});

