import moment from 'moment';
import filterExpenses from '../../selectors/filterExpenses';
import expenses from '../fixtures/expenses'; // Test fixtures

test('should filter by text value', () => {
  // Should filter out 'Gum'
  const filters = {
    text: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = filterExpenses(expenses, filters);
  // The result is sorted by date, most recent expenses listed first
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by start date', () => {
  // Should filter out 'Rent'
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = filterExpenses(expenses, filters);
  // The result is sorted by date
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by end date', () => {
  // Should filter out 'Credit card'
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = filterExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = filterExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = filterExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});