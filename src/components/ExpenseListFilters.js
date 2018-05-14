import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filterActions';

// Presentational component that allows us to set the text filter from the UI. The new text filter is written to the store
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} 
    onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
      console.log(e.target.value)
    }} />
    <select value={props.filters.sortBy} onChange={(e) => {
      if (e.target.value === 'date') { props.dispatch(sortByDate()); } 
      else if (e.target.value === 'amount') { props.dispatch(sortByAmount()); }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);