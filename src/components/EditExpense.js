import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={
        // The expense object is passed in by ExpenseForm when it calls
        // onSubmit(). The expense object contains the updated state but doesn't
        // include id. That why we still need to use props.expense.id instead of
        // expense.id 
        (expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          console.log('Updated', expense);
        }} 
      />
      <button onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

// with connect(), we have access to both the state (in the Redux store) and the
// props passed to the component by the higher order component, Provider.
const mapStateToProps = (state, props) => {
  // Returning a new prop to the EditExpensePage component
  return {
    expense: state.expenses.find((expense) => 
      expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);