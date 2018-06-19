import uuid from "uuid";
import database from '../firebase/firebase';

// ADD_EXPENSE
// {} = {} Sets the default value to an empty object if the argument passed is undefined because calling a property on undefined will cause an error
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt};

    return database.ref('expenses')
      // push() actually returns a reference to the pushed expense AND Promise
      // object so we can chain then() statements for testing purposes and
      // retrieve the expense's id assigned by Firebase.
      .push(expense)
      .then((snapshot) => {
        dispatch(addExpense({
          id: snapshot.key,
          ...expense
        }));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
    });
  }
};