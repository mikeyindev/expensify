import selectExpenseTotal from '../../selectors/expenseTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if there is no expense', () => {
  const total = selectExpenseTotal([]);
  expect(total).toBe(0);
});

test('should return a single expense', () => {
  const total = selectExpenseTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test('should return total of every expense', () => {
  const total = selectExpenseTotal(expenses);
  expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});