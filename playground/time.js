const moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];

// console.log(date.getMonth());

//------------------------------------//

// var date = moment();
// date.add(100, 'year').subtract(9, 'month');
// console.log(date.format('MMM Do, YYYY'));

// new Date().getTime()

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createAt = 1234
var date = moment(createAt);
console.log(date.format('h:mm a'));
