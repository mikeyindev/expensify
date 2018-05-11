import { createStore, combineReducers } from 'redux';

// Adds a listener for actions that are dispatched to the store
store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
  // console.log(store.getState());
});

// Dispatch an action to the store
const expense1 = store.dispatch(addExpense(
  { description: 'Rent', amount: 100, createdAt: 1000 }
));
// console.log(expense1);

const expense2 = store.dispatch(addExpense(
  { description: 'Coffee', amount: 300, createdAt: -1000 }
));
// console.log(expense2);

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('re'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(200));

// dummy data
const demoState = {
  expenses: [{
    id: 'gdafsdfa',
    description: 'January rent',
    note: 'Final payment for that address',
    amount: 54500, // in pennies
    createdAt: 0
  }],
  // Allows users to sort based on different filters
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount 
    startDate: undefined,
    endDate: undefined
  }
};

