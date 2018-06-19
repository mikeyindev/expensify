import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenseActions';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};

  // We're seeding Firebase test database with the expenses in the test fixture
  // before each test case.
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  // Wait for expenseData to finish saving to the database before running tests.
  database
    .ref('expenses')
    .set(expenseData)
    .then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from database and store', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });

    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'New note value' }
  });
});

test('should setup add expense action object with provided values', () => {
  // const expenseData = {
  //   description: 'Rent',
  //   amount: 100000,
  //   createdAt: 1000,
  //   note: "This is this month's rent"
  // };

  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
    // expense: {
    //   ...expenseData, id: expect.any(String) 
    // }
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Headphones',
    amount: 5000,
    note: '',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    // Returning the expense stored in Firebase by startAddExpense().
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    // We expect the retrieved value, assigned to "ref", matches the
    // expenseData
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    // done() is called so jest knows when the asynchronous test finished
    // running. Saving to Firebase is asynchronous.
    done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
    });
});

// // addExpense action object is no longer resposnible for setting default values.
// // It is now the responsibility of startAddExpense
// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//       expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });


test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from Firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});