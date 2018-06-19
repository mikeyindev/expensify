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
      return state.filter(({ id }) => id !== action.id);
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
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;