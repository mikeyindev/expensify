// This imports the actual module 'moment' instead of this mock we're
// exporting. 
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};