import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import { filters1, filters2 } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters1}
    />
  );
});

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});