import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
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

  render() {
    return (
      <div>
        <form action="">
          <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" autoFocus/>
          <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount" />
          <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
        ExpenseForm
      </div>
    )
  }
}