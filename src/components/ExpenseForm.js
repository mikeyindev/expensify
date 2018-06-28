import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { history } from '../routers/AppRouter';
import { SingleDatePicker } from 'react-dates';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

// SingleDatePicker props:
// numberOfMonths sets the number of months to show in the calendar at the same
// time.
// Setting isOutsideRange to 'false` makes every single date available.

// This component has local state, so we use a class component
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      // Convert back from number to string
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      // Convert back from milliseconds to a moment object
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
    console.log(history.location.pathname);
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    // Regex for limiting digits to optional 2 decimal places, with at least 1
    // digit before decimal.
    // `!amount` allows users to highlight the value and delete it, so it
    // matches and empty string
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    // Form validation
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));

      this.props.onSubmit({
        description: this.state.description,
        // this.state.amount is string and needs to be converted to float
        amount: parseFloat(this.state.amount, 10) * 100,
        // this.state.createdAt is a moment object and needs to be converted to
        // milliseconds for the time stamp
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });

      console.log('submitted');
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="input"
              type="text"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              placeholder="Description"
              autoFocus
            />
          </div>
          <div className="input-group__item">
            <input
              className="input"
              type="text"
              value={this.state.amount}
              onChange={this.onAmountChange}
              placeholder="Amount"
            />
          </div>
          <div className="input-group__item">
            <SingleDatePicker
              date={this.state.createdAt}
              focused={this.state.calendarFocused}
              isOutsideRange={() => {
                false;
              }}
              numberOfMonths={1}
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
            />
          </div>
          <div className="input-group__item">
            <textarea
              className="textarea"
              onChange={this.onNoteChange}
              placeholder="Add a note for your expense (optional)"
              value={this.state.note}
            />
          </div>
        </div>
        {
          
          history.location.pathname.includes('/edit/') ? (
            <div className="button-group">
              <button className="button">Save Changes</button>
              <button
                className="button--remove"
                onClick={this.props.startRemoveExpense}
              >
                Remove Expense
              </button>
            
            </div>
          ) : (
            <div className="button-group">
              <button className="button">Add Expense</button>
            </div>
          )
        } 
      </form>
    );
  }
}
