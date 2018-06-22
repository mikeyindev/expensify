import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  // The expense object is passed in by ExpenseForm when it calls onSubmit().
  // The expense object contains the updated state but doesn't include id. That
  // why we still need to use props.expense.id instead of expense.id. 
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    // console.log('Updated', expense);
  };

  startRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    console.log(this.props.expense);
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense} 
          onSubmit={this.onSubmit} 
        />
        <button 
          onClick={this.startRemoveExpense}
        >Remove</button>
      </div>
    );
  }
}

// with connect(), we have access to both the state (in the Redux store) and the
// props passed to the component by the higher order component, Provider.
const mapStateToProps = (state, props) => {
  // Returning a new prop to the EditExpensePage component
  // console.log(props);
  return {
    expense: state.expenses.find((expense) => (
      expense.id === props.match.params.id
    ))
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);