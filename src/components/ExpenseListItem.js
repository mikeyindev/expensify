import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="ExpenseListItem" to={`/edit/${id}`}>
    <div>
      <h3 className="ExpenseListItem__title">{description}</h3>
      <span className="ExpenseListItem__subtitle">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <div>
      <h3 className="ExpenseListItem__data">
        {numeral(amount / 100).format('$0,0.00')}
      </h3>
    </div>
  </Link>
);

// This gives us access to the dispatch prop but not the state which we don't
// need
export default ExpenseListItem;