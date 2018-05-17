import moment from 'moment';

// Filter expenses according to start date, end date, and description
const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // filter() returns an array
  return expenses.filter((expense) => {

    // Searching for a match in the expense's description property
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    const createdAtMoment = moment(expense.createdAt); 

    // If startDate is undefined (default value), a falsy value, then the
    // ternary expression will return true. The expense won't get filtered out.
    // Matching all expenses created on or after the day of the filter startDate
    const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, "day") : true;

    // Matching all expenses created on or before the day of the filter endDate
    const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, "day") : true;

    // Will only return true if all 3 things matched, if it returns false, that
    // expense would not be included in the returned array
    return textMatch && startDateMatch && endDateMatch;

  }).sort((a, b) => {
    if (sortBy === 'date') {
      // Return most recent expenses first
      return a.createdAt > b.createdAt ? -1 : 1;
    } else if (sortBy === 'amount') {
      // Return highest expenses first
      return a.amount > b.amount ? -1 : 1;
    }
  });
}

export default filterExpenses;