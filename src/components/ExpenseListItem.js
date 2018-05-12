import React from 'react';
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenseActions';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

// This gives us access to the dispatch prop but not the state which we don't
// need
export default connect()(ExpenseListItem);