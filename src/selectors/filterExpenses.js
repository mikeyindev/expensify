import moment from 'moment';

// Filter expenses according to start date, end date, and description
const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // filter() returns an array
  return expenses.filter((expense) => {

    // Searching for a match in the expense's description property
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    const createdAtMoment = moment(expense.createdAt); 

    // if startDate is undefined (default value), it'll return true and not get
    // filtered out. Matching all expenses created on and after the day of the
    // startDate
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;

    // Matching all expenses created on and before the day of the endDate
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    // Will only return true if all 3 things matched, if it returns false, that
    // expense would not be included in the returned array
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  });
}

export default filterExpenses;