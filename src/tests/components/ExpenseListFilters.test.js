import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters1, filters2 } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

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

test('should render ExpenseListFilters with filters1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with filters2 correctly', () => {
  wrapper.setProps({
    filters: filters2
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', { 
    target: { value: filters2.text }
  });
  expect(setTextFilter).lastCalledWith(filters2.text);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: filters2
  });
  const value = 'date';
  wrapper.find('select').simulate('change', { 
    target: { value }
  });
  // We just want to make sure the spy has been called.
  expect(sortByDate).toBeCalled();
});

test('should sort by amount', () => {
  wrapper.setProps({ filters: filters1 });
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  // We just want to make sure the spy has been called.
  expect(sortByAmount).toBeCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find('withStyles(DateRangePicker)')
    .prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).lastCalledWith(startDate);
  expect(setEndDate).lastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});