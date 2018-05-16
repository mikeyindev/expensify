import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {

  // Store creation. The 2nd arguemnt to createStore is so Chrome Redux DevTools
  // extension would work. See
  // https://github.com/zalmoxisus/redux-devtools-extension
  const store = createStore(
      combineReducers({
        // set up expenses state to be managed by the expensesReducer
        expenses: expensesReducer,
        filters: filtersReducer
      }), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && 
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}