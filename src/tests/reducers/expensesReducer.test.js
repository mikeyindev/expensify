import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses'; // Test fixtures

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '000',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const note = 'update';

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { note }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note);
});

test('should not edit expense if id is not found', () => {
  const note = 'update';
  const action = { 
    type: 'EDIT_EXPENSE', 
    id: -1, 
    updates: { note } 
  };
  const state = expensesReducer(expenses, action);
  
  // Nothing should change
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});