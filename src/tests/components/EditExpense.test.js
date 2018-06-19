import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

// Test fixture
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history} 
    expense={expenses[0]} 
  />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).lastCalledWith('/');
  expect(startEditExpense).lastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).lastCalledWith('/');
  expect(startRemoveExpense).lastCalledWith({ id: expenses[0].id });
});