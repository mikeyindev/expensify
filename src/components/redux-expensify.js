import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// {} = {} Sets the default value to an empty object if the argument passed is undefined because calling a property on undefined will cause an error 
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => (
  {
    type: 'REMOVE_EXPENSE',
    id
  }
);

// EDIT_EXPENSE
const editExpense = (id, updates) => (
  {
    type: "EDIT_EXPENSE",
    id,
    updates
  }
);

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [];

// Expenses Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // Use concat to return a new array since we don't want to mutate state
      // directly
      // return state.concat(action.expense);
      // Or we can use the spread operator
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id );
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            // Grab existing properties
            ...expense,
            // Override properties with updated values
            ...action.updates
          }
        } else {
          return expense; // No change to expense
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: 'undefined',
  endDate: 'undefined'
};

// Filters Reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    // set up expenses state to be managed by the expensesReducer
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// Adds a listener for actions that are dispatched to the store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch an action to the store
const expense1 = store.dispatch(addExpense(
  { description: 'Rent', amount: 100 }
));
// console.log(expense1);

const expense2 = store.dispatch(addExpense(
  { description: 'Coffee', amount: 300 }
));
// console.log(expense2);

store.dispatch(removeExpense({ id: expense1.expense.id }));

store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

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

