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
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
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