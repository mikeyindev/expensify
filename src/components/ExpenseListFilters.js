import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filterActions';

// Presentational component that allows us to set the text filter from the UI. The new text filter is written to the store
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} 
    onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
      console.log(e.target.value)
    }} />
  </div>
);

const mapStateToProps = (state) => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);