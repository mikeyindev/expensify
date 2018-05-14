import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from 'react-dates';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

// SingleDatePicker props: 
// numberOfMonths sets the number of months to show in the calendar at the same 
// time. 
// Setting isOutsideRange to 'false` makes every single date available.

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };

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
    // Regex for limiting digits to optional 2 decimal places
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" autoFocus/>
          <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount" />
          <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => {false}} />
          <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
        ExpenseForm
      </div>
    )
  }
}