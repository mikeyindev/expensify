import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

// Test fixture
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  // Pass expense to ExpenseForm's prop 'onSubmit'
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  // Make sure the right argument is passed to history.push(), redirect user
  // back to the homepage
  expect(history.push).lastCalledWith('/');
  expect(startAddExpense).lastCalledWith(expenses[0]);
});