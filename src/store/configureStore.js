import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {

// Store creation
const store = createStore(
    combineReducers({
      // set up expenses state to be managed by the expensesReducer
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
}